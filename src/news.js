import { getSiteContent } from './cms.js';
import { byId, escapeHtml } from './site.js';
const siteContent = await getSiteContent();

const news = siteContent.news.find((item) => item.slug === new URLSearchParams(window.location.search).get('id')) || siteContent.news[0];
document.title = `${news.title} | Civil Structures Research Lab`;
byId('news-detail').innerHTML = `<section class="news-detail-hero"><div class="page-width"><a class="back-link" href="/#news-grid">&#8592; Activity &amp; news</a><p class="eyebrow">${escapeHtml(news.type)} / ${escapeHtml(news.date)}</p><h1>${escapeHtml(news.title)}</h1></div></section><section class="news-story page-width"><img src="${escapeHtml(news.image)}" alt="" /><div class="story-copy">${news.details}</div></section>`;
