import { siteContent } from './content.js';
import { byId, escapeHtml } from './site.js';
byId('hero-intro').textContent = 'Civil Structures Research Lab brings together experimental testing, simulation, and material innovation for resilient infrastructure.';
byId('about-title').textContent = siteContent.about.title;
byId('about-copy').textContent = siteContent.about.copy;
byId('news-grid').innerHTML = siteContent.news.map((item, index) => `<article class="news-card ${index === 0 ? 'news-lead' : ''}"><img src="${escapeHtml(item.image)}" alt="" loading="lazy" /><div class="news-copy"><p><span>${escapeHtml(item.type)}</span>${escapeHtml(item.date)}</p><h3>${escapeHtml(item.title)}</h3><a href="/news.html?id=${encodeURIComponent(item.slug)}" aria-label="Read: ${escapeHtml(item.title)}">Read update <span>&#8594;</span></a></div></article>`).join('');
