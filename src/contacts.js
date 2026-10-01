import { siteContent } from './content.js';
import { byId, escapeHtml } from './site.js';
byId('people-grid').innerHTML = siteContent.people.map((person) => `<article class="person"><div class="initials">${escapeHtml(person.initials)}</div><div><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.role)}</p><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></div></article>`).join('');
