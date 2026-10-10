import 'dotenv/config';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { head, put } from '@vercel/blob';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = process.env.DATA_FILE || path.join(root, 'data', 'content.json');
const uploadDir = path.join(root, 'uploads');
const port = Number(process.env.PORT || 3001);
const secret = process.env.JWT_SECRET || 'local-development-secret-change-before-production';
const username = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;
const allowedOrigin = process.env.CORS_ORIGIN;
const blobEnabled = Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
const contentBlob = 'csrl/cms-content.json';

// Older versions of the studio could seed the same record again after a
// deletion. Keep one canonical record for each section/id while reading old
// stores, so a historic duplicate cannot be published twice.
function normaliseStore(value) {
  const source = Array.isArray(value?.items) ? value.items : [];
  const unique = new Map();
  for (const raw of source) {
    const item = safeItem(raw);
    if (!item.id || !item.section) continue;
    const key = `${item.section}\u0000${item.id}`;
    const current = unique.get(key);
    if (!current || String(item.updatedAt) >= String(current.updatedAt)) unique.set(key, item);
  }
  return { initialized: value?.initialized === true || unique.size > 0, items: [...unique.values()] };
}

async function readStore() {
  if (blobEnabled) {
    try {
      const record = await head(contentBlob);
      const response = await fetch(record.url, { cache: 'no-store' });
      if (response.ok) return normaliseStore(await response.json());
    } catch { /* First use has no content blob yet. */ }
    return { initialized: false, items: [] };
  }
  try { return normaliseStore(JSON.parse(fs.readFileSync(dataFile, 'utf8'))); } catch { return { initialized: false, items: [] }; }
}

async function writeStore(store) {
  if (blobEnabled) {
    await put(contentBlob, JSON.stringify(store, null, 2), { access: 'public', allowOverwrite: true, contentType: 'application/json', cacheControlMaxAge: 0 });
    return;
  }
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  fs.writeFileSync(dataFile, JSON.stringify(store, null, 2));
}

const safeItem = (item) => ({ id: String(item.id || ''), section: String(item.section || ''), data: item.data && typeof item.data === 'object' ? item.data : {}, visible: item.visible !== false, order: Number.isFinite(Number(item.order)) ? Number(item.order) : 0, updatedAt: new Date().toISOString() });
function auth(req, res, next) { try { req.user = jwt.verify(req.headers.authorization?.replace(/^Bearer\s+/i, ''), secret); next(); } catch { res.status(401).json({ error: 'Please sign in again.' }); } }

const app = express();
app.use((req, res, next) => { if (allowedOrigin) { res.setHeader('Access-Control-Allow-Origin', allowedOrigin); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); } if (req.method === 'OPTIONS') return res.sendStatus(204); next(); });
app.use(express.json({ limit: '4mb' }));
app.use('/uploads', express.static(uploadDir));
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 4 * 1024 * 1024 } });

app.get('/api/health', (_req, res) => res.json({ ok: true, storage: blobEnabled ? 'vercel-blob' : 'local-file' }));
app.get('/api/content', async (_req, res, next) => { try { const store = await readStore(); res.set('Cache-Control', 'no-store, max-age=0, must-revalidate'); res.json({ initialized: store.initialized, items: store.items.filter((item) => item.visible !== false).sort((a, b) => a.order - b.order) }); } catch (error) { next(error); } });
app.post('/api/auth/login', async (req, res) => {
  if (!username || !password) return res.status(503).json({ error: 'Admin credentials have not been configured.' });
  const valid = req.body?.username === username && await bcrypt.compare(req.body?.password || '', await bcrypt.hash(password, 10));
  if (!valid) return res.status(401).json({ error: 'Incorrect username or password.' });
  res.json({ token: jwt.sign({ role: 'admin' }, secret, { expiresIn: '8h' }) });
});
app.get('/api/admin/content', auth, async (_req, res, next) => { try { res.set('Cache-Control', 'no-store, max-age=0, must-revalidate'); res.json(await readStore()); } catch (error) { next(error); } });
app.put('/api/admin/content/:section/:id', auth, async (req, res, next) => { try {
  const item = safeItem({ ...req.body, section: req.params.section, id: req.params.id }); if (!item.id || !item.section) return res.status(400).json({ error: 'Section and id are required.' });
  const store = await readStore(); store.initialized = true; const i = store.items.findIndex((entry) => entry.section === item.section && entry.id === item.id); if (i >= 0) store.items[i] = { ...store.items[i], ...item }; else store.items.push(item); await writeStore(store); res.json({ item });
} catch (error) { next(error); } });
app.post('/api/admin/content/bootstrap', auth, async (req, res, next) => { try {
  if (!Array.isArray(req.body?.items)) return res.status(400).json({ error: 'items must be an array.' }); const store = await readStore();
  // Seed only a brand-new store. Re-seeding missing defaults makes deletion
  // impossible because the next administrator login resurrects them.
  if (!store.initialized) { store.items = req.body.items.map(safeItem).filter((item) => item.id && item.section); store.initialized = true; await writeStore(normaliseStore(store)); }
  res.set('Cache-Control', 'no-store, max-age=0, must-revalidate'); res.json(store);
} catch (error) { next(error); } });
app.delete('/api/admin/content/:section/:id', auth, async (req, res, next) => { try { const store = await readStore(); store.initialized = true; store.items = store.items.filter((item) => !(item.section === req.params.section && item.id === req.params.id)); await writeStore(store); res.status(204).end(); } catch (error) { next(error); } });
app.post('/api/admin/upload', auth, upload.single('file'), async (req, res, next) => { try {
  if (!req.file) return res.status(400).json({ error: 'Choose an image file.' }); const ext = path.extname(req.file.originalname).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) return res.status(400).json({ error: 'Only image files are allowed.' });
  if (blobEnabled) { const file = await put(`csrl/uploads/${crypto.randomUUID()}${ext}`, req.file.buffer, { access: 'public', contentType: req.file.mimetype, addRandomSuffix: false }); return res.json({ url: file.url }); }
  fs.mkdirSync(uploadDir, { recursive: true }); const name = `${crypto.randomUUID()}${ext}`; fs.writeFileSync(path.join(uploadDir, name), req.file.buffer); res.json({ url: `/uploads/${name}` });
} catch (error) { next(error); } });
app.use((err, _req, res, _next) => res.status(500).json({ error: err.message || 'Server error.' }));

export default app;
if (!process.env.VERCEL) app.listen(port, () => console.log(`CSRL API listening at http://localhost:${port}`));
