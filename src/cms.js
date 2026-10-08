import { siteContent as defaults } from './content.js';

export const apiBase = import.meta.env.VITE_API_BASE || '';

const clone = (value) => structuredClone(value);
const sortable = (items) => items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
const blocksToHtml = (blocks = []) => blocks.map((block) => {
  if (block.type === 'section') return `<h2>${block.title || ''}</h2>${block.content || ''}`;
  if (block.type === 'heading') return `<${block.level || 'h2'}>${block.text || ''}</${block.level || 'h2'}>`;
  if (block.type === 'text' || block.type === 'table') return block.html || '';
  if (block.type === 'image') return `<figure><img src="${block.url || ''}" alt="${block.alt || ''}" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;
  if (block.type === 'quote') return `<blockquote>${block.text || ''}${block.annotation ? `<footer>${block.annotation}</footer>` : ''}</blockquote>`;
  if (block.type === 'columns') return `<div class="cms-columns"><div>${block.left || ''}</div><div>${block.right || ''}</div></div>`;
  return '';
}).join('');
export const blockHtml = blocksToHtml;
export async function getSiteContent() {
  const content = clone(defaults);
  try {
    const response = await fetch(`${apiBase}/api/content`); if (!response.ok) return content;
    const { items } = await response.json();
    const bySection = (section) => sortable(items.filter((item) => item.section === section));
    const mergeList = (name, section) => {
      const overrides = bySection(section); if (!overrides.length) return;
      const baseline = new Map(content[name].map((item) => [item.slug || item.email, item]));
      content[name] = overrides.map((item) => ({ ...(baseline.get(item.id) || {}), ...item.data, slug: item.data.slug || item.id, ...(item.data.blocks ? (name === 'news' ? { details: blocksToHtml(item.data.blocks) } : { report: item.data.blocks.map((b) => {
        if (b.type === 'section') return { type: 'section', title: b.title, content: b.content, lead: b.lead };
        if (b.type === 'quote') return { type: 'quote', text: b.text, attribution: b.annotation || b.attribution };
        if (b.type === 'divider') return { type: 'divider' };
        if (b.type === 'heading') return { type: 'section', title: b.text, content: '' };
        return { type: 'content', content: blocksToHtml([b]) };
      }) }) : {}) }));
    };
    const about = bySection('home').find((item) => item.id === 'about'); if (about) Object.assign(content.about, about.data);
    mergeList('news', 'news'); mergeList('projects', 'research'); mergeList('people', 'people');
  } catch { /* The public site keeps working when the CMS is offline. */ }
  return content;
}
export function defaultRecords() {
  return [
    { id: 'about', section: 'home', data: clone(defaults.about), visible: true, order: 0 },
    ...defaults.news.map((data, order) => ({ id: data.slug, section: 'news', data: { ...clone(data), blocks: [{ type: 'text', html: data.details }] }, visible: true, order })),
    ...defaults.projects.map((data, order) => ({ id: data.slug, section: 'research', data: { ...clone(data), blocks: data.report || [{ type: 'text', html: data.abstract || '' }] }, visible: true, order })),
    ...defaults.people.map((data, order) => ({ id: data.email, section: 'people', data: clone(data), visible: true, order }))
  ];
}
