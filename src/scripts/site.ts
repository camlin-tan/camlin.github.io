const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');

function syncThemeButton() {
  const isDark = root.dataset.theme !== 'light';
  themeButton?.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeButton?.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#101212' : '#f7f8f5');
}
syncThemeButton();
themeButton?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Theme still works without storage. */ }
  syncThemeButton();
});

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#main-nav');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  nav?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav?.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (event.target instanceof Node && !document.querySelector('.site-header')?.contains(event.target)) closeMenu();
});
nav?.addEventListener('focusout', () => {
  requestAnimationFrame(() => {
    if (!nav.contains(document.activeElement) && document.activeElement !== menuButton) closeMenu();
  });
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.main-nav a')];
let scrollScheduled = false;
function updateActiveLink() {
  const position = window.scrollY + 160;
  let activeId = '';
  for (const section of sections) {
    if (section.offsetTop <= position) activeId = section.id;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) activeId = 'contact';
  for (const link of navLinks) {
    if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateActiveLink); }
}, { passive: true });
updateActiveLink();

const copyButton = document.querySelector<HTMLButtonElement>('.copy-email');
const feedback = document.querySelector<HTMLElement>('.copy-feedback');
let feedbackTimeout: ReturnType<typeof setTimeout>;
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email || '');
    copyButton.classList.add('copied');
    copyButton.setAttribute('aria-label', 'Email address copied');
    if (feedback) { feedback.textContent = 'Email copied!'; feedback.classList.remove('sr-only'); }
  } catch {
    if (feedback) { feedback.textContent = 'Please select the email address to copy it.'; feedback.classList.remove('sr-only'); }
  }
  clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(() => {
    copyButton.classList.remove('copied');
    copyButton.setAttribute('aria-label', 'Copy email address');
    if (feedback) { feedback.textContent = ''; feedback.classList.add('sr-only'); }
  }, 3000);
});
