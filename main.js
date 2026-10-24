/* ===== EDIT YOUR CONTENT HERE ===== */
const PROJECTS = [
  { id: 'ss', title: 'SheherSaathi', sub: 'Municipal Road Intelligence Platform', tag: 'SIH TEAM PROJECT',
    desc: 'A Smart India Hackathon team project: a municipal road intelligence platform using AI-assisted analysis for urban road management.',
    tech: ['AI Integration'], link: '' /* add repo/demo URL */, shots: [] },
  { id: 'todo', title: 'Java To-Do List', sub: 'Desktop GUI application', tag: 'PERSONAL PROJECT',
    desc: 'A To-Do List desktop application with a graphical interface, built with Java and backed by a MySQL database.',
    tech: ['Java', 'MySQL'], link: '' /* add repo URL */, shots: [] },
  { id: 'pf', title: 'Portfolio Website', sub: 'This site', tag: 'LIVE',
    desc: 'My portfolio website, built with HTML, CSS and JavaScript and deployed on GitHub Pages.',
    tech: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/ritiks-05/Freelance_Portfolio', shots: [] }
];
const SKILLS = {
  PROGRAMMING: { Java: 'Used in my Java To-Do List GUI app.', 'C++': 'Part of my programming toolkit.', Python: 'Part of my programming toolkit.', MySQL: 'Database used in my To-Do List app.' },
  WEB: { HTML: 'Structure of my portfolio sites.', CSS: 'Styling and animation.', JavaScript: 'Interactivity on the web.' },
  AI: { 'AI Integration': 'Applied in the SheherSaathi project.' },
  TOOLS: { Git: 'Version control.', GitHub: 'Repositories and GitHub Pages hosting.', 'VS Code': 'Main editor.', Eclipse: 'Java IDE.' }
};
const LOG = [
  { when: 'CURRENT', t: 'Design & Content Lead', o: 'AWS Student Builder Group, RIT Roorkee', d: 'Leads design and content: event posters, recruitment creatives and team announcements.' },
  { when: 'INTERNSHIP', t: 'Java & Project Development Intern', o: 'RIT Roorkee', d: 'Internship focused on Java and project development.' },
  { when: 'HACKATHON', t: 'Smart India Hackathon team', o: 'SheherSaathi', d: 'Part of a team building an AI-assisted municipal road intelligence platform.' }
];
const BADGES = [
  ['AWS SBG LEAD', 'Design & Content Lead at AWS Student Builder Group, RIT Roorkee.'],
  ['SIH PARTICIPANT', 'Took part in Smart India Hackathon with the SheherSaathi team.'],
  ['RIT INTERN', 'Java and project development internship at RIT Roorkee.']
  /* add verified certificates here: ['NAME', 'details'] */
];
const A = 'assets/images/', VD = 'assets/videos/', PO = 'assets/posters/';
const LAB = [
  ['YouTube Thumbnails', 'Install CapCut on PC', 'capcut-pc-tutorial-thumbnail', 'YouTube thumbnail: Install CapCut on PC, free 2026'],
  ['Posters', 'LEGACY Editorial Cover', 'legacy-editorial-poster', 'LEGACY magazine-style editorial poster'],
  ['Social Media', '5 Instagram Reels Hacks', 'instagram-reels-hacks-infographic', 'Infographic of five Instagram Reels hacks'],
  ['AWS SBG', 'Meet Our Core', 'aws-sbg-core-team-creative', 'AWS SBG RIT Roorkee core team creative'],
  ['AWS SBG', 'We Need Volunteers', 'aws-sbg-volunteer-recruitment-poster', 'AWS SBG volunteer recruitment poster'],
  ['Other', '@BHATTAKBOY Channel Banner', 'bhattakboy-youtube-banner', 'YouTube banner for BHATTAKBOY']
];
const VIDS = [['Documenting My Life: Day 3', 'documenting-my-life-day-3'], ['Documenting', 'documenting'], ['My Thoughts', 'my-thoughts'], ['Trending Reel', 'trending-reel'], ['Trending Topic', 'trending-topic']];
const MAIL = 'ritikkumar.coder@gmail.com';
/* ===== END CONTENT ===== */

const $ = (s, r = document) => r.querySelector(s);
const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Overlay */
const ov = $('#ov'), ovb = $('#ovb');
function openOv(node) { ovb.replaceChildren(node); ov.hidden = false; document.body.style.overflow = 'hidden'; $('#ovx').focus(); }
function closeOv() { ov.hidden = true; ovb.replaceChildren(); document.body.style.overflow = ''; }
$('#ovx').onclick = closeOv; ov.onclick = (e) => e.target === ov && closeOv();

/* Boot */
const boot = $('#boot'), log = $('#bootlog');
const LINES = ['> INITIALIZING RK-OS v1.0', '> LOADING PLAYER PROFILE .......... OK', '> MOUNTING ASSETS ................. OK', '> CONNECTING PORTFOLIO ............ OK', '> WELCOME, VISITOR.'];
function endBoot() { boot.classList.add('off'); setTimeout(() => (boot.hidden = true), 500); try { sessionStorage.setItem('booted', '1'); } catch (e) { } startType(); }
let bootDone = false, bi = 0;
function bootStep() { if (bootDone) return; if (bi < LINES.length) { log.textContent += LINES[bi++] + '\n'; setTimeout(bootStep, reduce ? 0 : 380); } else { bootDone = true; setTimeout(endBoot, 400); } }
$('#skip').onclick = () => { if (!bootDone) { bootDone = true; endBoot(); } };
let seen = false; try { seen = sessionStorage.getItem('booted'); } catch (e) { }
if (seen) { bootDone = true; boot.hidden = true; } else bootStep();

/* Typing */
let typed = false;
function startType() {
  if (typed) return; typed = true;
  const words = ['Developer', 'Digital Designer', 'Content Creator'], t = $('#type');
  if (reduce) { t.textContent = words.join(' · '); return; }
  let w = 0, c = 0, del = false;
  (function tick() { const s = words[w]; t.textContent = s.slice(0, c); if (!del && c === s.length) { del = true; return setTimeout(tick, 1400); } if (del && c === 0) { del = false; w = (w + 1) % words.length; } c += del ? -1 : 1; setTimeout(tick, del ? 40 : 90); })();
}
if (seen) startType();

/* Nav */
const menu = $('#menu'), burger = $('#burger');
burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
menu.onclick = (e) => e.target.tagName === 'A' && (menu.classList.remove('open'), burger.setAttribute('aria-expanded', false));
const links = [...menu.querySelectorAll('a')];
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id))), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach((s) => io.observe(s));

/* Missions */
function showProject(p) {
  const n = el(`<div class="panel"><small class="dim">${esc(p.tag)}</small><h3>${esc(p.title)}: ${esc(p.sub)}</h3><p>${esc(p.desc)}</p><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    <p class="row">${p.link ? `<a class="btn pri" target="_blank" rel="noopener" href="${esc(p.link)}">VIEW PROJECT ↗</a>` : '<span class="dim">Public link not added yet.</span>'}</p></div>`);
  openOv(n);
}
$('#missionGrid').append(...PROJECTS.map((p, i) => {
  const b = el(`<button class="panel card" aria-label="Open mission ${esc(p.title)}"><small>MISSION 0${i + 1} · ${esc(p.tag)}</small><h3>${esc(p.title)}</h3><p>${esc(p.sub)}</p><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div></button>`);
  b.onclick = () => showProject(p); return b;
}));

/* Arsenal */
$('#inv').append(...Object.entries(SKILLS).map(([k, v]) => {
  const box = el(`<div class="panel"><h3>${k}</h3><div></div><p class="chipinfo">Hover or select a skill.</p></div>`);
  const info = $('.chipinfo', box);
  $('div', box).append(...Object.entries(v).map(([n, d]) => { const c = el(`<button class="chip">${esc(n)}</button>`); const s = () => { box.querySelectorAll('.chip').forEach((x) => x.classList.toggle('on', x === c)); info.textContent = d; }; c.onmouseenter = s; c.onfocus = s; c.onclick = s; return c; }));
  return box;
}));

/* Lab */
const cats = ['ALL', ...new Set(LAB.map((l) => l[0]))];
const fbox = $('#filters'), grid = $('#labGrid');
function drawLab(f) {
  fbox.querySelectorAll('.btn').forEach((b) => { const on = b.textContent === f; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
  grid.replaceChildren(...LAB.filter((l) => f === 'ALL' || l[0] === f).map((l) => {
    const b = el(`<button class="lt" aria-label="View ${esc(l[1])}"><img src="${A}${l[2]}.webp" alt="${esc(l[3])}" loading="lazy"><span>${esc(l[0])} · ${esc(l[1])} ↗</span></button>`);
    b.onclick = () => openOv(el(`<div><img class="big" src="${A}${l[2]}.webp" alt="${esc(l[3])}"><h3>${esc(l[1])}</h3><p class="dim">${esc(l[0])}</p></div>`)); return b;
  }));
}
fbox.append(...cats.map((c) => { const b = el(`<button class="btn sm" role="tab">${c}</button>`); b.onclick = () => drawLab(c); return b; }));
drawLab('ALL');
$('#vids').append(...VIDS.map(([t, f]) => {
  const fg = el(`<figure class="vc"><video controls preload="none" playsinline poster="${PO}${f}.jpg" src="${VD}${f}.mp4" aria-label="${esc(t)}"></video><figcaption><span>${esc(t)}</span><button class="btn sm">⤢</button></figcaption></figure>`);
  $('button', fg).onclick = () => { $('video', fg).pause(); openOv(el(`<div><video controls autoplay playsinline src="${VD}${f}.mp4" poster="${PO}${f}.jpg"></video><h3>${esc(t)}</h3></div>`)); }; return fg;
}));

/* Career */
$('#log').append(...LOG.map((l) => el(`<div class="panel"><small>${esc(l.when)}</small><h3>${esc(l.t)}</h3><p><b>${esc(l.o)}</b></p><p>${esc(l.d)}</p></div>`)));
$('#badges').append(...BADGES.map(([n, d]) => { const b = el(`<button class="btn">◆ ${esc(n)}</button>`); b.onclick = () => ($('#badgeInfo').textContent = d); return b; }));

/* Contact form (mailto, no backend) */
$('#form').onsubmit = (e) => { e.preventDefault(); const f = e.target; const body = `Name: ${f.n.value}\nEmail: ${f.e.value}\n\n${f.m.value}`; location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.n.value)}&body=${encodeURIComponent(body)}`; };

/* Hacker mode */
const modeBtn = $('#mode');
function setMode(on) { document.body.classList.toggle('hk', on); modeBtn.setAttribute('aria-pressed', on); try { localStorage.setItem('hk', on ? '1' : ''); } catch (e) { } }
modeBtn.onclick = () => setMode(!document.body.classList.contains('hk'));
try { if (localStorage.getItem('hk')) setMode(true); } catch (e) { }

/* Terminal */
const term = $('#term'), out = $('#out'), cmd = $('#cmd');
const print = (t) => { out.append(document.createTextNode(t + '\n')); out.scrollTop = out.scrollHeight; };
const CMDS = {
  help: () => 'Commands: help, about, projects, skills, lab, career, contact, hacker, clear, exit',
  about: () => 'Ritik Kumar: B.Tech CSE student, developer and digital designer. Design & Content Lead at AWS SBG, RIT Roorkee.',
  projects: () => PROJECTS.map((p, i) => `${i + 1}. ${p.title}: ${p.sub} [${p.tech.join(', ')}]`).join('\n'),
  skills: () => Object.entries(SKILLS).map(([k, v]) => `${k}: ${Object.keys(v).join(', ')}`).join('\n'),
  lab: () => 'Creative Lab: thumbnails, posters, social creatives, AWS SBG design and video edits. Scrolling there...',
  career: () => LOG.map((l) => `${l.t} - ${l.o}`).join('\n'),
  contact: () => `Email: ${MAIL}\nInstagram: https://www.instagram.com/ritik_lifedecoder/\nLinkedIn: https://www.linkedin.com/in/ritikkumargupta05/`,
  hacker: () => { setMode(!document.body.classList.contains('hk')); return 'Mode toggled.'; },
  clear: () => { out.textContent = ''; return ''; },
  exit: () => { closeTerm(); return ''; }
};
const GO = { lab: '#lab', projects: '#missions', skills: '#arsenal', career: '#career', contact: '#contact', about: '#about' };
function openTerm() { term.hidden = false; if (!out.textContent) print('RK-TERMINAL ready. Type "help".'); cmd.focus(); }
function closeTerm() { term.hidden = true; }
$('#termBtn').onclick = () => (term.hidden ? openTerm() : closeTerm()); $('#termX').onclick = closeTerm;
cmd.onkeydown = (e) => { if (e.key !== 'Enter') return; const v = cmd.value.trim().toLowerCase(); cmd.value = ''; if (!v) return; print('> ' + v); const f = CMDS[v]; if (f) { const r = f(); r && print(r); if (GO[v]) location.hash = GO[v]; } else print(`Unknown command: ${v}. Type "help".`); };
addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (!ov.hidden) closeOv(); else if (!term.hidden) closeTerm(); } });
