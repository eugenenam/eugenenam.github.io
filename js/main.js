/* ================================================
   Eugene Nam — Personal Site
   main.js
   ================================================ */

const MEDIUM_RSS_API =
  'https://api.rss2json.com/v1/api.json?rss_url=' +
  encodeURIComponent('https://medium.com/feed/@iamNamster') +
  '&count=3';

/* ------------------------------------------------
   Theme
   ------------------------------------------------ */
function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Apply theme immediately (before DOMContentLoaded) to avoid flash
applyTheme(getPreferredTheme());

/* ------------------------------------------------
   Navbar scroll shadow
   ------------------------------------------------ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------
   Mobile menu
   ------------------------------------------------ */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function close() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.add('open');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    } else {
      close();
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}

/* ------------------------------------------------
   Scroll spy — highlight active nav link
   ------------------------------------------------ */
function initScrollSpy() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link =>
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        );
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ------------------------------------------------
   Medium RSS feed
   ------------------------------------------------ */
function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

function renderPosts(items) {
  const grid = document.getElementById('postsGrid');
  grid.innerHTML = items.map(post => {
    const excerpt = stripHtml(post.description).replace(/\s+/g, ' ').trim().slice(0, 160) + '…';
    return `
      <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="post-card">
        <span class="post-date">${formatDate(post.pubDate)}</span>
        <span class="post-title">${post.title}</span>
        <span class="post-excerpt">${excerpt}</span>
        <span class="post-read-more">Read on Medium ↗</span>
      </a>`;
  }).join('');
}

function renderFallback() {
  document.getElementById('postsGrid').innerHTML = `
    <div class="posts-fallback">
      <p>Read my writing on
        <a href="https://medium.com/@iamNamster" target="_blank" rel="noopener noreferrer">
          Medium ↗
        </a>
      </p>
    </div>`;
}

async function loadMediumPosts() {
  try {
    const res  = await fetch(MEDIUM_RSS_API);
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    if (data.status !== 'ok' || !data.items?.length) throw new Error('no items');
    renderPosts(data.items.slice(0, 3));
  } catch {
    renderFallback();
  }
}

/* ------------------------------------------------
   Init
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  loadMediumPosts();
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
