import { siteContent } from './content.js';
import { byId, escapeHtml } from './site.js';
const project = siteContent.projects.find((item) => item.slug === new URLSearchParams(window.location.search).get('id')) || siteContent.projects[0];
document.title = `${project.title} | Civil Structures Research Lab`;
const richContent = (content) => content || '<p>Content will be added shortly.</p>';

const legacyReport = (item) => [
  { type: 'section', title: 'Abstract', content: `<p>${escapeHtml(item.abstract || '')}</p>`, lead: true },
  { type: 'section', title: 'Research objectives', content: item.objectivesContent },
  { type: 'section', title: 'Methodology', content: item.methodologyContent },
  { type: 'section', title: 'Expected contributions', content: item.contributionContent }
];

const renderBlock = (block) => {
  switch (block.type) {
    case 'section':
      return `<section class="report-section${block.lead ? ' report-section-lead' : ''}">${block.kicker ? `<p class="eyebrow dark">${escapeHtml(block.kicker)}</p>` : ''}<h2>${escapeHtml(block.title || 'Untitled section')}</h2><div class="rich-content">${richContent(block.content)}</div></section>`;
    case 'content':
      return `<div class="report-content rich-content">${richContent(block.content)}</div>`;
    case 'quote':
      return `<figure class="report-quote"><blockquote>${escapeHtml(block.text || '')}</blockquote>${block.attribution ? `<figcaption>${escapeHtml(block.attribution)}</figcaption>` : ''}</figure>`;
    case 'divider':
      return '<hr class="report-divider" />';
    default:
      return '';
  }
};

const report = Array.isArray(project.report) ? project.report : legacyReport(project);

byId('project-detail').innerHTML = `<section class="project-hero project-hero-compact"><div class="page-width"><a class="back-link" href="/research.html">&#8592; All research</a><p class="eyebrow">${escapeHtml(project.tag)}</p><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.description)}</p></div></section><section class="project-image page-width"><img src="${escapeHtml(project.image)}" alt="" /></section><article class="project-writing page-width project-report">${report.map(renderBlock).join('')}<a class="button dark-button" href="mailto:bridge4er@gmail.com?subject=${encodeURIComponent(`Research enquiry: ${project.title}`)}">Discuss this project <span>&#8599;</span></a></article>`;
