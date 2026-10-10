import { siteContent as defaults } from './content.js';

export const apiBase = import.meta.env.VITE_API_BASE || '';
const clone = (value) => structuredClone(value);
const sortable = (items) => items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
const plainText = (html = '') => { const node = document.createElement('div'); node.innerHTML = html; return node.innerText.trim(); };
const styleAttribute = (style = {}) => {
  const fonts = { sans: 'Manrope, sans-serif', serif: 'Source Serif 4, Georgia, serif', mono: 'DM Mono, monospace' };
  const rules = [];
  if (fonts[style.font]) rules.push(`font-family:${fonts[style.font]}`);
  if (/^#[0-9a-f]{3,8}$/i.test(style.color || '')) rules.push(`color:${style.color}`);
  const size = Number(style.size); if (size >= 10 && size <= 96) rules.push(`font-size:${size}px`);
  if (style.bold) rules.push('font-weight:700');
  if (style.italic) rules.push('font-style:italic');
  return rules.length ? ` style="${rules.join(';')}"` : '';
};
const paragraphs = (text = '') => escapeHtml(text).split(/\n{2,}/).map((part) => `<p>${part.replace(/\n/g, '<br />')}</p>`).join('');
const blockHtml = (blocks = []) => blocks.map((block) => {
  if (block.type === 'section') return `<h2>${escapeHtml(block.title || '')}</h2>${block.content || ''}`;
  if (block.type === 'heading') { const level = ['h2', 'h3', 'h4'].includes(block.level) ? block.level : 'h2'; return `<${level}${styleAttribute(block.style)}>${escapeHtml(block.text)}</${level}>`; }
  if (block.type === 'text') return block.text !== undefined ? `<div class="cms-text"${styleAttribute(block.style)}>${paragraphs(block.text)}</div>` : (block.html || block.content || '');
  if (block.type === 'image') return `<figure><img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.alt)}" />${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''}</figure>`;
  if (block.type === 'table') { if (!block.headers) return block.html || ''; return `<div class="rich-content"><table><thead><tr>${block.headers.map((cell) => `<th>${escapeHtml(cell)}</th>`).join('')}</tr></thead><tbody>${(block.rows || []).map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
  if (block.type === 'quote') return `<blockquote${styleAttribute(block.style)}>${escapeHtml(block.text)}${block.annotation ? `<footer>${escapeHtml(block.annotation)}</footer>` : ''}</blockquote>`;
  if (block.type === 'columns') {
    const left = Array.isArray(block.left) ? blockHtml(block.left) : paragraphs(block.left || '');
    const right = Array.isArray(block.right) ? blockHtml(block.right) : paragraphs(block.right || '');
    return `<div class="cms-columns"><div${styleAttribute(block.style)}>${left}</div><div${styleAttribute(block.style)}>${right}</div></div>`;
  }
  if (block.type === 'divider') return '<hr class="report-divider" />';
  return '';
}).join('');
export { blockHtml };

export async function getSiteContent() {
  const content = clone(defaults);
  try {
    const response = await fetch(`${apiBase}/api/content`); if (!response.ok) return content;
    const { items } = await response.json(); const bySection = (section) => sortable(items.filter((item) => item.section === section));
    const mergeList = (name, section) => {
      const overrides = bySection(section); if (!overrides.length) return;
      const baseline = new Map(content[name].map((item) => [item.slug || item.email, item]));
      content[name] = overrides.map((item) => ({ ...(baseline.get(item.id) || {}), ...item.data, slug: item.data.slug || item.id, ...(item.data.blocks ? (name === 'news' ? { details: blockHtml(item.data.blocks) } : { report: item.data.blocks.map((block) => {
        if (block.type === 'section') return { type: 'section', title: block.title, content: block.content, lead: block.lead };
        if (block.type === 'heading') return { type: 'section', title: block.text, content: '' };
        if (block.type === 'quote') return { type: 'quote', text: block.text, attribution: block.annotation };
        if (block.type === 'divider') return { type: 'divider' };
        return { type: 'content', content: blockHtml([block]) };
      }) }) : {}) }));
    };
    const about = bySection('home').find((item) => item.id === 'about'); if (about) Object.assign(content.about, about.data);
    mergeList('news', 'news'); mergeList('projects', 'research'); mergeList('people', 'people');
  } catch { /* Public site remains available when CMS is offline. */ }
  return content;
}
const editableBlock = (block) => {
  if (block.type === 'section') return [{ type: 'heading', level: 'h2', text: block.title || '' }, { type: 'text', text: plainText(block.content) }];
  if (block.type === 'content') return [{ type: 'text', text: plainText(block.content) }];
  if (block.type === 'quote') return [{ type: 'quote', text: block.text || '', annotation: block.attribution || '' }];
  return [clone(block)];
};
export function defaultRecords() {
  return [
    { id: 'about', section: 'home', data: clone(defaults.about), visible: true, order: 0 },
    ...defaults.news.map((data, order) => ({ id: data.slug, section: 'news', data: { ...clone(data), blocks: [{ type: 'text', text: plainText(data.details) }] }, visible: true, order })),
    ...defaults.projects.map((data, order) => ({ id: data.slug, section: 'research', data: { ...clone(data), blocks: (data.report || [{ type: 'text', text: data.abstract || '' }]).flatMap(editableBlock) }, visible: true, order })),
    ...defaults.people.map((data, order) => ({ id: data.email, section: 'people', data: clone(data), visible: true, order }))
  ];
}
