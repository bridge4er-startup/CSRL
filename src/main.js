import { siteContent } from './content.js';

const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);

byId('hero-intro').textContent = 'Civil Structures Research Lab brings together experimental testing, simulation, and material innovation for resilient infrastructure.';
byId('about-title').textContent = siteContent.about.title;
byId('about-copy').textContent = siteContent.about.copy;
byId('featured-number').textContent = siteContent.featuredProject.number;
byId('featured-title').textContent = siteContent.featuredProject.title;
byId('featured-description').textContent = siteContent.featuredProject.description;
byId('year').textContent = new Date().getFullYear();

byId('news-grid').innerHTML = siteContent.news.map((item, index) => `
  <article class="news-card ${index === 0 ? 'news-lead' : ''}">
    <img src="${escapeHtml(item.image)}" alt="" loading="lazy" />
    <div class="news-copy"><p><span>${escapeHtml(item.type)}</span>${escapeHtml(item.date)}</p><h3>${escapeHtml(item.title)}</h3><a href="#contact" aria-label="Read more: ${escapeHtml(item.title)}">Read update <span>→</span></a></div>
  </article>`).join('');

byId('project-grid').innerHTML = siteContent.projects.map((project) => `
  <article class="project-card">
    <img src="${escapeHtml(project.image)}" alt="" loading="lazy" />
    <div class="project-copy"><p class="project-tag">${escapeHtml(project.tag)}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><details><summary>Project details <span>+</span></summary><div><p><strong>Abstract</strong>${escapeHtml(project.abstract)}</p><p><strong>Methodology</strong>${escapeHtml(project.method)}</p></div></details></div>
  </article>`).join('');

byId('method-grid').innerHTML = siteContent.methods.map((method) => `
  <article class="method-item"><span>${escapeHtml(method.number)}</span><h3>${escapeHtml(method.title)}</h3><p>${escapeHtml(method.copy)}</p></article>`).join('');

byId('people-grid').innerHTML = siteContent.people.map((person) => `
  <article class="person"><div class="initials">${escapeHtml(person.initials)}</div><div><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.role)}</p><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></div></article>`).join('');

byId('contact-email').href = `mailto:${siteContent.contact.email}`;

const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); });
