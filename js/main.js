/* ================================================
   Eugene Nam — Personal Site
   main.js
   ================================================ */

const MEDIUM_RSS_API =
  'https://api.rss2json.com/v1/api.json?rss_url=' +
  encodeURIComponent('https://medium.com/feed/@iamNamster');

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
   Terminal Easter Egg
   ------------------------------------------------ */

const termHistory = [];
let termHistoryIdx = -1;

const TERMINAL_COMMANDS = {
  help: () => [
    { text: 'Available commands:', cls: 'accent' },
    { text: '' },
    { text: '  whoami          About Eugene' },
    { text: '  ls              List sections' },
    { text: '  history         Career timeline' },
    { text: '  skills          Product skills' },
    { text: '  cat about.txt   Full background' },
    { text: '  contact         How to reach me' },
    { text: '  pwd             Current location' },
    { text: '  date            System date' },
    { text: '  uname -a        System info' },
    { text: '  theme           Toggle dark/light mode' },
    { text: '  sudo hire eugene' },
    { text: '  clear           Clear terminal' },
    { text: '  exit            Close terminal' },
  ],
  whoami: () => [
    { text: 'Eugene Nam', cls: 'accent' },
    { text: 'Director of Product Management' },
    { text: 'New York, NY' },
    { text: '' },
    { text: 'Builder. Curious. Always learning.', cls: 'muted' },
  ],
  ls: () => [
    { text: 'about/   experience/   projects/   writing/   contact/', cls: 'accent' },
  ],
  history: () => [
    { text: '[ career timeline ]', cls: 'accent' },
    { text: '' },
    { text: '  2018 – Present   Willow Wealth — Director of Product' },
    { text: '  2015 – 2017      VenueBook — Product Manager' },
    { text: '  2007 – 2015      RBC / RBS / ABN AMRO — Corporate Banking' },
  ],
  skills: () => [
    { text: '[ product skills ]', cls: 'accent' },
    { text: '' },
    { text: '  Product Strategy    ████████░░  85%' },
    { text: '  Roadmapping         ████████░░  90%' },
    { text: '  Cross-func Collab   █████████░  90%' },
    { text: '  Data / Analytics    ███████░░░  80%' },
    { text: '  AI / LLMs           █████░░░░░  10%  (and climbing)' },
    { text: '  Vanilla JS          ███░░░░░░░  25%  (Claude helps)', cls: 'muted' },
  ],
  'cat about.txt': () => [
    { text: 'I started my career in corporate banking — eight years' },
    { text: 'across RBC Capital Markets, RBS, and ABN AMRO.' },
    { text: '' },
    { text: 'In 2015, I made the deliberate jump into product management.' },
    { text: 'By 2018, I joined what is now Willow Wealth and grew from' },
    { text: 'PM → Senior PM → Director of Product.' },
    { text: '' },
    { text: "Lately, I've been drawn into AI — not just using the tools," },
    { text: 'but actually building with them. This site is my first project.', cls: 'muted' },
  ],
  contact: () => [
    { text: '[ how to reach me ]', cls: 'accent' },
    { text: '' },
    { text: '  LinkedIn  →  linkedin.com/in/eugenenam' },
    { text: '  Medium    →  medium.com/@iamNamster' },
    { text: '  GitHub    →  github.com/eugenenam' },
    { text: '  Twitter   →  twitter.com/iamnamster' },
  ],
  pwd: () => [
    { text: '/users/visitor/eugenenam.com', cls: 'accent' },
  ],
  date: () => [
    { text: new Date().toUTCString() },
  ],
  'uname -a': () => [
    { text: 'EugeneOS 2026.1.0 built-with-claude Darwin/Curiosity arm64', cls: 'muted' },
  ],
  'sudo hire eugene': () => [
    { text: '[sudo] password for visitor: ••••••••', cls: 'muted' },
    { text: '' },
    { text: 'Access granted.', cls: 'accent' },
    { text: 'Redirecting to linkedin.com/in/eugenenam ...' },
  ],
};

function initTerminal() {
  const overlay  = document.getElementById('terminal');
  const body     = document.getElementById('terminalBody');
  const output   = document.getElementById('terminalOutput');
  const input    = document.getElementById('terminalInput');
  const closeBtn = overlay.querySelector('.terminal-close');

  function openTerminal() {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    // Print welcome message only on first open
    if (output.children.length === 0) {
      printLines([
        { text: '╔════════════════════════════════════════╗', cls: 'accent' },
        { text: '║    welcome to eugenenam.com terminal   ║', cls: 'accent' },
        { text: '╚════════════════════════════════════════╝', cls: 'accent' },
        { text: '' },
        { text: "type 'help' to see available commands.", cls: 'muted' },
        { text: '' },
      ]);
    }
    setTimeout(() => input.focus(), 50);
  }

  function closeTerminal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function printLines(lines) {
    lines.forEach(({ text, cls }) => {
      const el = document.createElement('span');
      el.className = `tline${cls ? ' ' + cls : ''}`;
      el.textContent = text;
      output.appendChild(el);
    });
    body.scrollTop = body.scrollHeight;
  }

  function printCommand(raw) {
    const el = document.createElement('span');
    el.className = 'tline cmd';
    el.textContent = `visitor@eugenenam.com:~$ ${raw}`;
    output.appendChild(el);
  }

  function printError(cmd) {
    printLines([
      { text: `bash: ${cmd}: command not found`, cls: 'error' },
      { text: "type 'help' for available commands.", cls: 'muted' },
    ]);
  }

  function handleCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Store history, reset index
    termHistory.unshift(raw.trim());
    termHistoryIdx = -1;

    printCommand(raw);

    if (cmd === 'exit') {
      printLines([{ text: 'Goodbye.', cls: 'muted' }, { text: '' }]);
      setTimeout(closeTerminal, 700);
      return;
    }

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    if (cmd === 'theme') {
      toggleTheme();
      printLines([{ text: '' }, { text: 'Theme toggled.', cls: 'accent' }, { text: '' }]);
      return;
    }

    if (cmd === 'sudo hire eugene') {
      printLines([{ text: '' }]);
      printLines(TERMINAL_COMMANDS['sudo hire eugene']());
      printLines([{ text: '' }]);
      setTimeout(() => window.open('https://www.linkedin.com/in/eugenenam/', '_blank'), 2000);
      return;
    }

    const fn = TERMINAL_COMMANDS[cmd];
    if (fn) {
      printLines([{ text: '' }]);
      printLines(fn());
      printLines([{ text: '' }]);
    } else {
      printLines([{ text: '' }]);
      printError(cmd);
      printLines([{ text: '' }]);
    }

    body.scrollTop = body.scrollHeight;
  }

  // Backtick anywhere on page to open/close
  document.addEventListener('keydown', e => {
    // Skip if typing in a form field that isn't the terminal input
    const tag = e.target.tagName;
    if ((tag === 'INPUT' || tag === 'TEXTAREA') && e.target !== input) return;

    if (e.key === '`') {
      e.preventDefault();
      overlay.classList.contains('open') ? closeTerminal() : openTerminal();
      return;
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeTerminal();
    }
  });

  // Terminal input
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (termHistoryIdx < termHistory.length - 1) {
        termHistoryIdx++;
        input.value = termHistory[termHistoryIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (termHistoryIdx > 0) {
        termHistoryIdx--;
        input.value = termHistory[termHistoryIdx];
      } else {
        termHistoryIdx = -1;
        input.value = '';
      }
    }
  });

  // Click outside the window to close
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeTerminal();
  });

  closeBtn.addEventListener('click', closeTerminal);
}

/* ------------------------------------------------
   Init
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  loadMediumPosts();
  initTerminal();
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
