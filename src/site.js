export const byId = (id) => document.getElementById(id);
export const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);

document.querySelectorAll('.year').forEach((element) => { element.textContent = new Date().getFullYear(); });
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
button?.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); });
nav?.addEventListener('click', () => { nav.classList.remove('open'); button?.setAttribute('aria-expanded', 'false'); });
