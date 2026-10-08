import { getSiteContent } from './cms.js';
import { byId, escapeHtml } from './site.js';
const siteContent = await getSiteContent();
byId('project-grid').innerHTML = siteContent.projects.map((project, index) => `<article class="research-item"><img src="${escapeHtml(project.image)}" alt="" loading="lazy" /><div><p class="project-tag">${escapeHtml(project.tag)} / 0${index + 1}</p><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(project.description)}</p><a class="text-link" href="/project.html?id=${encodeURIComponent(project.slug)}">View research details <span>&#8594;</span></a></div></article>`).join('');
