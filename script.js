/* ───────── Content ───────── */
const GH = 'https://github.com/NayrHigh';
const LI = 'https://www.linkedin.com/in/ryan-rupea-bb768327b';
const EMAIL = 'ryanrp01@go.byuh.edu';

// Each post: tile (grid square), media (inside the pop-up), and caption.
// A media item is either {img} or {text} (a designed text card).
const POSTS = [
  {
    id: 'supply', cat: 'project', pinned: true, label: ['AI · RAG', 'Supply Sensei'], pos: '20% center',
    hover: 'Supply Sensei · AI study assistant',
    media: [{ img: 'supply-sensei.jpg', alt: 'Supply Sensei chat interface' }],
    title: 'Supply Sensei',
    place: 'Built for a client · AI / RAG',
    body: `
      <p>An AI study assistant for students learning global sourcing and logistics. It answers questions using <b>only</b> their course manual and cites the section and page for every answer.</p>
      <span class="label">How it works</span>
      <ol class="flow">
        <li>A student asks a question.</li>
        <li>Pinecone vector search returns the 5 closest passages from the manual.</li>
        <li>Claude writes an answer from those passages only.</li>
        <li>The answer appears with a citation card (section and page).</li>
      </ol>
      <p>If the manual doesn't cover a topic, the assistant says so instead of guessing. Built with suggested questions, a typing indicator and a mobile layout.</p>`,
    tags: '#javascript #claudeapi #pinecone #rag #htmlcss',
    links: [{ label: 'Code on GitHub', href: GH }]
  },
  {
    id: 'destriva', cat: 'project', pinned: true, label: ['Web app', 'Destriva'], pos: '35% center',
    hover: 'Destriva · Wedding planning web app',
    media: [
      { img: 'destriva-home.jpg', alt: 'Destriva dashboard' },
      { img: 'destriva-budget.jpg', alt: 'Destriva budget page with SVG donut charts' },
      { img: 'destriva-vendors.jpg', alt: 'Destriva vendor board' },
      { img: 'destriva-onboarding.jpg', alt: 'Destriva onboarding form' }
    ],
    title: 'Destriva',
    place: 'Solo personal project · Web app',
    body: `
      <p>A planning platform for island destination weddings in Polynesia. A couple fills in a 4-step form, then gets a dashboard with everything in one place. Swipe through the screens.</p>
      <ul>
        <li>8 sections: timeline with a live countdown, guests, vendors, budget, contracts, a wedding website with RSVP, moodboard and planning tools.</li>
        <li>Budget donut charts drawn from scratch in SVG, with no chart library.</li>
        <li>Every page is rendered from JavaScript data; the couple's answers are saved in <code>localStorage</code>.</li>
        <li>"Lani," a prototype planning assistant that answers by keyword. Next step: connect it to a real AI model.</li>
      </ul>`,
    tags: '#javascript #svg #htmlcss #responsive #solo',
    links: [{ label: 'Code on GitHub', href: GH }]
  },
  {
    id: 'wsl', cat: 'project', pinned: true,
    hover: 'WSL Greatest Surfers · CS 140 final',
    media: [{ text: { cls: 't-ocean', kicker: 'CS 140 final project', big: 'WSL Greatest Surfers', small: '5 legends · 20 world titles · 6 pages' } }],
    title: 'WSL Greatest Surfers',
    place: 'BYU–Hawaii · CS 140 final project',
    body: `
      <p>An educational website about the most accomplished surfers in World Surf League history.</p>
      <ul>
        <li>Ranked surfer cards and a career-stats comparison table.</li>
        <li>A short history of professional surfing.</li>
        <li>A page for each surfer: Kelly Slater, Andy Irons, Mick Fanning and Gabriel Medina.</li>
      </ul>`,
    tags: '#html #css #responsive',
    links: [
      { label: 'View live site', href: 'https://byuh-web.github.io/cs140-activities-NayrHigh/activities/Final/index.html' },
      { label: 'All CS 140 work', href: 'https://byuh-web.github.io/cs140-activities-NayrHigh/' }
    ]
  },
  {
    id: 'huki', cat: 'experience', label: ['Jan 2025 – Apr 2026', 'Huki & Night Show'], pos: '30% center',
    hover: 'Huki & Night Show · Section lead',
    media: [{ img: 'ryan-huki.jpg', alt: 'Ryan performing on a canoe during the Huki show' }],
    title: 'Huki & Night Show Performer',
    place: 'Jan 2025 – Apr 2026',
    body: `
      <p>Lead of the Hamata section in the Huki show. Danced in the Huki and Night Show, improved my Tahitian dancing and learned new styles of dance.</p>
      <p>I also learned to connect with guests through my dancing and eye contact. Leading a section that has to be in sync every show taught me a lot about teamwork, preparation and staying calm in front of a crowd.</p>`,
    tags: '#leadership #teamwork',
    links: []
  },
  {
    id: 'village', cat: 'experience',
    hover: 'Tahiti Village · Cultural guide', label: ['May 2024 – Jan 2025', 'Tahiti Village Performer'], pos: 'center 20%',
    media: [{ img: 'ryan-performing.jpg', alt: 'Ryan performing in a Tahitian feather and shell headdress' }],
    title: 'Tahiti Village Performer',
    place: 'May 2024 – Jan 2025',
    body: `
      <p>Explained Tahitian culture to guests: why we play patia fa, how we cook food in an underground oven, and why the village has a marae. Danced in every show.</p>
      <p>The job was about making a new subject easy and enjoyable for any audience, which is the same skill as explaining a technical idea to a non-technical teammate.</p>`,
    tags: '#communication #publicspeaking',
    links: []
  },
  {
    id: 'frontdesk', cat: 'experience',
    hover: 'Front Desk · Le Tahiti by Pearl Resort',
    media: [{ text: { cls: 't-sand', kicker: 'May – Dec 2023', big: 'Front Desk', small: 'Le Tahiti by Pearl Resort' } }],
    title: 'Front Desk',
    place: 'Le Tahiti by Pearl Resort · May – Dec 2023',
    body: `<p>Greeted guests, checked them in and out, and managed reservations. Solved problems on the spot and stayed calm under pressure.</p>`,
    tags: '#customerservice #problemsolving',
    links: []
  },
  {
    id: 'skills', cat: 'about',
    hover: 'Tech stack',
    media: [{ text: { cls: 't-ink', kicker: 'Tech stack', big: 'Python<br>Java<br>SQL<br>JavaScript', small: 'plus HTML, CSS, LLM APIs and vector search' } }],
    title: 'Skills',
    place: 'Tech stack',
    body: `
      <span class="label">Languages</span><p>Python, Java, SQL, JavaScript, HTML, CSS</p>
      <span class="label">AI &amp; data</span><p>LLM APIs (Claude), retrieval-augmented generation (RAG), vector search with Pinecone, prompt design</p>
      <span class="label">Web</span><p>Responsive design, vanilla JavaScript and the DOM, SVG graphics, REST APIs, GitHub Pages</p>
      <span class="label">People</span><p>Team leadership, training new members, customer service, bilingual French/English</p>`,
    tags: '#python #java #sql #javascript',
    links: []
  },
  {
    id: 'edu', cat: 'about',
    hover: 'BYU–Hawaii · B.S. Computer Science',
    media: [{ text: { cls: 't-lagoon', kicker: 'Education', big: 'B.S. Computer Science', small: 'BYU–Hawaii · Expected Winter 2028' } }],
    title: 'Education',
    place: 'Brigham Young University–Hawaii',
    body: `
      <p><b>B.S. Computer Science</b>, junior<br>Minors in Entrepreneurship and Sculpture<br>Expected graduation: Winter 2028</p>
      <p><b>Lycée Diadème</b>, Pirae, Tahiti<br>Scientific Baccalaureate, Engineering Science, 2019</p>`,
    tags: '#byuh #computerscience',
    links: []
  },
  {
    id: 'open', cat: 'about',
    hover: 'Open to work',
    media: [{ text: { cls: 't-lagoon', kicker: 'Now', big: 'Open to SWE internships', small: 'and junior software roles' } }],
    title: 'Open to software engineering internships',
    place: 'Contact',
    body: `<p>The fastest way to reach me is email:</p><p><b class="sel">${EMAIL}</b></p>`,
    tags: '#opentowork',
    links: [{ label: 'Copy email', copy: EMAIL }, { label: 'LinkedIn', href: LI }]
  }
];

const STORIES = {
  skills: { name: 'Skills', cls: '', slides: [
    `<span class="s-kicker">Languages</span><h3>What I code in</h3><div class="s-chips"><span>Python</span><span>Java</span><span>SQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span></div>`,
    `<span class="s-kicker">AI &amp; data</span><h3>Building with LLMs</h3><div class="s-chips"><span>Claude API</span><span>RAG</span><span>Pinecone</span><span>Prompt design</span></div><p>See it in action in Supply Sensei.</p>`,
    `<span class="s-kicker">Web</span><h3>Front-end from scratch</h3><div class="s-chips"><span>Responsive design</span><span>Vanilla JS</span><span>SVG charts</span><span>REST APIs</span></div>`
  ]},
  experience: { name: 'Experience', cls: 's-coral', slides: [
    `<span class="s-kicker">Jan 2025 – Apr 2026</span><h3>Huki &amp; Night Show Performer</h3><p>Lead of the Hamata section.</p>`,
    `<span class="s-kicker">May 2024 – Jan 2025</span><h3>Tahiti Village Performer</h3><p>Taught Tahitian culture to guests every day.</p>`,
    `<span class="s-kicker">May – Dec 2023</span><h3>Front Desk</h3><p>Le Tahiti by Pearl Resort.</p>`,
    `<span class="s-kicker">Volunteer service</span><h3>District Leader</h3><p>Tahiti, France, Switzerland. Trained 6 new missionaries.</p>`
  ]},
  education: { name: 'Education', cls: 's-ink', slides: [
    `<span class="s-kicker">BYU–Hawaii</span><h3>B.S. Computer Science</h3><p>Junior · Expected Winter 2028</p><div class="s-chips"><span>Minor: Entrepreneurship</span><span>Minor: Sculpture</span></div>`,
    `<span class="s-kicker">Lycée Diadème · Tahiti</span><h3>Scientific Baccalaureate</h3><p>Engineering Science · 2019</p>`
  ]},
  about: { name: 'About', cls: 's-sand', slides: [
    `<img src="ryan-headshot.jpg" alt="Ryan Rupea"><h3>Ia ora na!</h3><p>CS student at BYU–Hawaii, from Tahiti. French &amp; English.</p>`,
    `<img src="ryan-performing.jpg" alt="Ryan performing"><h3>Beyond the code</h3><p>Two years on stage taught me to read a room, explain things clearly and lead a team.</p>`
  ]},
  contact: { name: 'Contact', cls: '', slides: [
    `<span class="s-kicker">Let's talk</span><h3>Open to SWE internships</h3><p class="s-email">${EMAIL}</p><div class="s-btns"><button class="s-btn" type="button" data-copy="${EMAIL}">Copy email</button><a class="s-btn" href="${LI}" target="_blank" rel="noopener">LinkedIn</a><a class="s-btn" href="${GH}" target="_blank" rel="noopener">GitHub</a></div>`
  ]}
};

/* ───────── Helpers ───────── */
const $ = (s) => document.querySelector(s);
const ICON_PIN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3l5 5-3 1-4 4 1 5-2 2-4-4-5 5-1-1 5-5-4-4 2-2 5 1 4-4z"/></svg>';
const ICON_MULTI = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h12a2 2 0 0 1 2 2v12h-2V5H7z"/><rect x="3" y="7" width="14" height="14" rx="2"/></svg>';

function textCard(t) {
  return `<div class="tile-text ${t.cls}"><span class="kicker">${t.kicker}</span><span class="big">${t.big}</span><span class="small">${t.small}</span></div>`;
}

async function copyText(str, btn) {
  const old = btn.textContent;
  try { await navigator.clipboard.writeText(str); btn.textContent = 'Copied'; }
  catch (e) {
    const el = document.querySelector('.sel, .s-email');
    if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    btn.textContent = 'Selected, press Ctrl+C';
  }
  setTimeout(() => { btn.textContent = old; }, 1800);
}

/* ───────── Theme ───────── */
(function () {
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.setAttribute('data-theme', t); } catch (e) {}
  $('#themeBtn').addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

/* ───────── Grid ───────── */
let visible = POSTS;
function renderGrid(filter) {
  visible = filter === 'all' ? POSTS : POSTS.filter(p => p.cat === filter);
  $('#grid').innerHTML = visible.map((p, i) => {
    const m = p.media[0];
    let face = m.img ? `<img src="${m.img}" alt="${m.alt}" loading="lazy" style="object-position:${p.pos || 'center'}">` : textCard(m.text);
    if (p.label) face += `<span class="tile-label"><span class="kicker">${p.label[0]}</span><span class="big">${p.label[1]}</span></span>`;
    const badge = p.pinned && filter === 'all' ? ICON_PIN : (p.media.length > 1 ? ICON_MULTI : '');
    return `<button class="tile" type="button" data-i="${i}" aria-label="${p.title}">
      ${face}${badge ? `<span class="tile-badge">${badge}</span>` : ''}
      <span class="tile-hover">${p.hover}</span></button>`;
  }).join('');
}
$('#grid').addEventListener('click', e => {
  const t = e.target.closest('.tile'); if (t) openPost(+t.dataset.i);
});
document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.tabs button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
  renderGrid(b.dataset.filter);
}));
renderGrid('all');

/* ───────── Post pop-up ───────── */
let cur = 0, slide = 0, lastFocus = null;
function drawMedia() {
  const p = visible[cur], m = p.media[slide];
  let html = m.img ? `<img src="${m.img}" alt="${m.alt}">` : textCard(m.text);
  if (p.media.length > 1) {
    html += `<button class="car-btn car-prev" type="button" aria-label="Previous image" ${slide === 0 ? 'hidden' : ''}>‹</button>
             <button class="car-btn car-next" type="button" aria-label="Next image" ${slide === p.media.length - 1 ? 'hidden' : ''}>›</button>
             <div class="car-dots">${p.media.map((_, i) => `<span class="${i === slide ? 'on' : ''}"></span>`).join('')}</div>`;
  }
  $('#postMedia').innerHTML = html;
}
function openPost(i) {
  lastFocus = document.activeElement;
  cur = i; slide = 0;
  const p = visible[i];
  drawMedia();
  $('#postTitle').textContent = p.title;
  $('#postPlace').textContent = p.place;
  $('#postBody').innerHTML = p.body;
  $('#postTags').textContent = p.tags;
  $('#postLinks').innerHTML = p.links.map(l => l.copy
    ? `<button class="pbtn pbtn-blue" type="button" data-copy="${l.copy}">${l.label}</button>`
    : `<a class="pbtn" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('');
  $('#postLinks').hidden = p.links.length === 0;
  $('#postPrev').hidden = i === 0;
  $('#postNext').hidden = i === visible.length - 1;
  $('#postOverlay').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#postOverlay .close-x').focus();
}
function closePost() {
  $('#postOverlay').hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
$('#postOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget || e.target.closest('[data-close]')) return closePost();
  if (e.target.closest('.car-next')) { slide++; drawMedia(); }
  if (e.target.closest('.car-prev')) { slide--; drawMedia(); }
});
$('#postPrev').addEventListener('click', () => openPost(cur - 1));
$('#postNext').addEventListener('click', () => openPost(cur + 1));

/* ───────── Stories ───────── */
let story = null, sIdx = 0, sTimer = null;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function openStory(key) {
  lastFocus = document.activeElement;
  story = STORIES[key]; sIdx = 0;
  $('#storyOverlay .story').className = 'story ' + story.cls;
  $('#storyName').textContent = story.name;
  $('#storyOverlay').hidden = false;
  document.body.style.overflow = 'hidden';
  showSlide();
  $('#storyOverlay .story-close').focus();
}
function showSlide() {
  clearTimeout(sTimer);
  $('#storyBars').innerHTML = story.slides.map((_, i) =>
    `<span class="${i < sIdx ? 'done' : i === sIdx ? 'run' : ''}"><i></i></span>`).join('');
  $('#storySlide').innerHTML = story.slides[sIdx];
  if (!reduced) sTimer = setTimeout(nextSlide, 6000);
}
function nextSlide() { if (sIdx < story.slides.length - 1) { sIdx++; showSlide(); } else closeStory(); }
function prevSlide() { if (sIdx > 0) { sIdx--; showSlide(); } }
function closeStory() {
  clearTimeout(sTimer);
  $('#storyOverlay').hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
document.querySelectorAll('[data-story]').forEach(b => b.addEventListener('click', () => openStory(b.dataset.story)));
$('#storyFwd').addEventListener('click', nextSlide);
$('#storyBack').addEventListener('click', prevSlide);
$('#storyOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget || e.target.closest('[data-close-story]')) closeStory();
});

/* ───────── Shared: copy buttons + keyboard ───────── */
document.addEventListener('click', e => {
  const c = e.target.closest('[data-copy]');
  if (c) { clearTimeout(sTimer); copyText(c.dataset.copy, c); }
});
document.addEventListener('keydown', e => {
  if (!$('#storyOverlay').hidden) {
    if (e.key === 'Escape') closeStory();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  } else if (!$('#postOverlay').hidden) {
    if (e.key === 'Escape') closePost();
    if (e.key === 'ArrowRight' && cur < visible.length - 1) openPost(cur + 1);
    if (e.key === 'ArrowLeft' && cur > 0) openPost(cur - 1);
  }
});
