import { getSiteContent } from './cms.js';
import { byId, escapeHtml } from './site.js';
const siteContent = await getSiteContent();
byId('people-grid').innerHTML = siteContent.people.map((person) => `<article class="person team-profile"><img src="${escapeHtml(person.photo)}" alt="Portrait of ${escapeHtml(person.name)}" loading="lazy" /><div><p class="project-tag">${escapeHtml(person.initials)}</p><h3>${escapeHtml(person.name)}</h3><p class="team-role">${escapeHtml(person.role)}</p><p class="team-bio">${escapeHtml(person.profile)}</p><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></div></article>`).join('');
