import 'dotenv/config';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = process.env.DATA_FILE || path.join(root, 'data', 'content.json');
const uploadDir = path.join(root, 'uploads');
const port = Number(process.env.PORT || 3001);
const secret = process.env.JWT_SECRET || 'local-development-secret-change-before-production';
const username = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;
const allowedOrigin = process.env.CORS_ORIGIN;
const readStore = () => { try { return JSON.parse(fs.readFileSync(dataFile, 'utf8')); } catch { return { items: [] }; } };
const writeStore = (store) => { fs.mkdirSync(path.dirname(dataFile), { recursive: true }); fs.writeFileSync(dataFile, JSON.stringify(store, null, 2)); };
const safeItem = (item) => ({ id: String(item.id || ''), section: String(item.section || ''), data: item.data && typeof item.data === 'object' ? item.data : {}, visible: item.visible !== false, order: Number.isFinite(Number(item.order)) ? Number(item.order) : 0, updatedAt: new Date().toISOString() });
function auth(req, res, next) { try { req.user = jwt.verify(req.headers.authorization?.replace(/^Bearer\s+/i, ''), secret); next(); } catch { res.status(401).json({ error: 'Please sign in again.' }); } }

const app = express();
app.use((req, res, next) => { if (allowedOrigin) { res.setHeader('Access-Control-Allow-Origin', allowedOrigin); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); } if (req.method === 'OPTIONS') return res.sendStatus(204); next(); });
app.use(express.json({ limit: '5mb' })); app.use('/uploads', express.static(uploadDir));
const upload = multer({ dest: uploadDir, limits: { fileSize: 10 * 1024 * 1024 } });
app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/content', (_req, res) => res.json({ items: readStore().items.filter((item) => item.visible !== false).sort((a, b) => a.order - b.order) }));
app.post('/api/auth/login', async (req, res) => {
  if (!username || !password) return res.status(503).json({ error: 'Admin credentials have not been configured.' });
  const valid = req.body?.username === username && await bcrypt.compare(req.body?.password || '', await bcrypt.hash(password, 10));
  if (!valid) return res.status(401).json({ error: 'Incorrect username or password.' });
  res.json({ token: jwt.sign({ role: 'admin' }, secret, { expiresIn: '8h' }) });
});
app.get('/api/admin/content', auth, (_req, res) => res.json(readStore()));
app.put('/api/admin/content/:section/:id', auth, (req, res) => {
  const item = safeItem({ ...req.body, section: req.params.section, id: req.params.id }); if (!item.id || !item.section) return res.status(400).json({ error: 'Section and id are required.' });
  const store = readStore(); const i = store.items.findIndex((entry) => entry.section === item.section && entry.id === item.id); if (i >= 0) store.items[i] = { ...store.items[i], ...item }; else store.items.push(item); writeStore(store); res.json({ item });
});
app.post('/api/admin/content/bootstrap', auth, (req, res) => {
  if (!Array.isArray(req.body?.items)) return res.status(400).json({ error: 'items must be an array.' }); const store = readStore();
  for (const raw of req.body.items) { const item = safeItem(raw); if (item.id && item.section && !store.items.some((x) => x.section === item.section && x.id === item.id)) store.items.push(item); } writeStore(store); res.json(store);
});
app.delete('/api/admin/content/:section/:id', auth, (req, res) => { const store = readStore(); store.items = store.items.filter((item) => !(item.section === req.params.section && item.id === req.params.id)); writeStore(store); res.status(204).end(); });
app.post('/api/admin/upload', auth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Choose an image file.' }); const ext = path.extname(req.file.originalname).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) { fs.unlinkSync(req.file.path); return res.status(400).json({ error: 'Only image files are allowed.' }); }
  const destination = `${req.file.path}${ext}`; fs.renameSync(req.file.path, destination); res.json({ url: `/uploads/${path.basename(destination)}` });
});
app.use((err, _req, res, _next) => res.status(500).json({ error: err.message || 'Server error.' }));
app.listen(port, () => console.log(`CSRL API listening at http://localhost:${port}`));
