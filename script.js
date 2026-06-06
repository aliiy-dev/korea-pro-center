'use strict';
/* ═══════════════════════════════════════════════
   KOREA PRO CENTER — script.js
   EN / UZ / RU multilingual + all features
   ═══════════════════════════════════════════════ */

/* ── UNIVERSITY DATA (multilingual-aware) ── */
const UNI_DATA = {
  snu:{name:'Seoul National University',img:'https://images.unsplash.com/photo-1578574577315-3fbeb0ad4173?w=700&q=80',location:'Gwanak-gu, Seoul',ranking:'QS #31 World · Korea #1',founded:'1946',type:'National Research University',tuition:'₩4,000,000–₩6,000,000 / yr (~$3,000–$4,500)',lang:'Korean & English',about:'Seoul National University is Korea\'s most prestigious public university, consistently ranked among Asia\'s best. Home to Nobel laureates and world-class researchers.',programs:['Engineering & Computer Science','Business Administration','Natural Sciences & Mathematics','Humanities & Social Sciences','Medicine & Life Sciences','Law & Political Science'],scholarships:['SNU Global Scholarship (full tuition)','GKS Government Scholarship','ASEAN Scholarship Program','SNU International Student Award'],reqs:['Bachelor\'s degree or equivalent','TOPIK Level 3+ or IELTS 6.5+','Official transcripts','Motivation letter & CV','Two recommendation letters']},
  yonsei:{name:'Yonsei University',img:'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',location:'Seodaemun-gu, Seoul',ranking:'QS #56 World · Korea #2',founded:'1885',type:'Private Research University',tuition:'₩5,500,000–₩8,000,000 / yr (~$4,000–$6,000)',lang:'Korean & English',about:'One of Korea\'s "SKY" universities, Yonsei was founded in 1885. Renowned for international programs, beautiful campus, and strong alumni networks spanning government, business and academia.',programs:['International Studies','Business & Economics','Engineering & Applied Science','Medicine & Public Health','Liberal Arts','Underwood International College'],scholarships:['Yonsei Global Scholarship','GKS Government Scholarship','Underwood International Scholarship','Need-based Financial Aid'],reqs:["Bachelor's degree","TOPIK Level 4+ or IELTS 6.5+",'GPA 3.0+ transcripts','Statement of purpose','2 letters of recommendation']},
  korea:{name:'Korea University',img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80',location:'Seongbuk-gu, Seoul',ranking:'QS #69 World · Korea #3',founded:'1905',type:'Private Research University',tuition:'₩5,000,000–₩7,500,000 / yr (~$3,700–$5,600)',lang:'Korean & English',about:"Korea University is the third SKY pillar — celebrated for Gothic architecture, spirited campus culture, and exceptional business, law, and political science programs. Korea's first modern university (1905).",programs:['Korea University Business School','Engineering & ICT','Political Science & International Studies','Law School','Sciences & Biotechnology','Cultural Heritage Studies'],scholarships:['KU Global Scholarship','GKS Scholarship','KUBS Merit Scholarship','Research Assistant Stipend'],reqs:["Strong bachelor's degree",'TOPIK Level 3+ or TOEFL 88+','Certified transcripts','Research proposal (graduate)','Statement of purpose + CV']},
  kaist:{name:'KAIST',img:'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80',location:'Yuseong-gu, Daejeon',ranking:"QS #42 World · Asia's Top STEM",founded:'1971',type:"National Science & Technology University",tuition:'₩3,800,000–₩5,500,000 / yr | Scholarships widely available',lang:'English (primary language of instruction)',about:"KAIST is Asia's MIT. Most instruction is in English — ideal for international STEM students. It has the highest R&D spending per student in Korea and produces world-class engineers and scientists.",programs:['Electrical Engineering & CS','Mechanical & Aerospace Engineering','AI & Data Science','Biotechnology & Life Sciences','Physics & Mathematics','Industrial & Systems Engineering'],scholarships:['KAIST Full Scholarship (most MS/PhD)','GKS Government Scholarship','Research Assistantship + Stipend','International Excellence Award'],reqs:["Bachelor's in STEM",'TOEFL 83+ or IELTS 6.5+','Strong math/science background','Research statement required','GRE recommended']},
  hanyang:{name:'Hanyang University',img:'https://images.unsplash.com/photo-1487537708183-c6bdd24ae43a?w=700&q=80',location:'Seongdong-gu, Seoul',ranking:'QS #157 World · Top 5 Korea Engineering',founded:'1939',type:'Private Research University',tuition:'₩4,200,000–₩7,000,000 / yr (~$3,100–$5,200)',lang:'Korean (English programs available)',about:'Hanyang is renowned across Asia for engineering and technology. Industry partnerships with Samsung, LG, and Hyundai provide exceptional internship and employment pipelines for graduates.',programs:['Mechanical & Industrial Engineering','Electronics & Communications','Computer Science & AI','Architecture & Urban Design','Business Administration','Materials Science'],scholarships:['Hanyang International Scholarship (50–100%)','GKS Scholarship',"President's Scholarship",'HY-ERICA Global Scholarship'],reqs:["Bachelor's or 2+ years of study",'TOPIK Level 3+ (Korean programs)','TOEFL 80+ or IELTS 6.0+ (English)','Transcripts + diploma','Self-introduction letter']},
  kyunghee:{name:'Kyung Hee University',img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80',location:'Seoul & Suwon, Gyeonggi-do',ranking:'QS #201–250 World · Top 10 Korea',founded:'1949',type:'Private Research University',tuition:'₩4,500,000–₩7,000,000 / yr (~$3,300–$5,200)',lang:'Korean & English (international programs)',about:'Kyung Hee University is celebrated for gothic-style campuses and a globally-oriented curriculum. Strong in international relations, tourism, traditional Korean medicine, and the arts. Students from 100+ countries.',programs:['International Studies & Diplomacy','Traditional Korean Medicine','Tourism & Hospitality Management','Engineering & Computer Science','Art & Design','Pharmacy & Health Sciences'],scholarships:['KHU International Scholarship (30–100%)','GKS Government Scholarship','Global Community Scholarship','Excellence Award for Overseas Students'],reqs:["Bachelor's diploma",'TOPIK Level 3+ or IELTS 6.0+','GPA 2.5+ transcripts','Personal statement','Health certificate']},
  chungang:{name:'Chung-Ang University',img:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&q=80',location:'Dongjak-gu, Seoul',ranking:'Top 10 Korea · Strong arts & engineering',founded:'1918',type:'Private Research University',tuition:'₩4,800,000–₩7,500,000 / yr (~$3,600–$5,600)',lang:'Korean (English in some departments)',about:"Chung-Ang University, founded 1918, is one of Korea's oldest institutions — particularly renowned for film and performing arts (many K-drama stars) and strong law and engineering faculties.",programs:['Film, Theater & Performing Arts','Business & Accounting','Law & Political Science','Engineering & Mechanical Systems','Psychology & Education','Pharmacy & Medical Sciences'],scholarships:['CAU International Student Scholarship','GKS Government Scholarship','Departmental Merit Scholarship','Global Excellence Award'],reqs:["Accredited bachelor's",'TOPIK Level 3+ recommended','Academic transcripts','Statement of purpose','Financial guarantee documentation']},
  wonkwang:{name:'Wonkwang University',img:'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=700&q=80',location:'Iksan, Jeollabuk-do, South Korea',ranking:"Korea Pro Center's #1 Partner University",founded:'1946',type:'Private Comprehensive University',tuition:'₩3,000,000–₩5,000,000 / yr (~$2,200–$3,700) — Very Affordable',lang:'Korean (intensive support for international students)',about:"Wonkwang University is Korea Pro Center's primary partner where 150+ of our students enrolled. Affordable tuition, strong scholarship program, and a welcoming international department make it the #1 choice for Uzbek students. Located in Iksan — safe, peaceful, 3 hrs from Seoul.",programs:['Business Administration','Engineering & Computer Science','Oriental Medicine (globally renowned)','Pharmacy & Health Sciences','Arts & Design','Education & Social Sciences'],scholarships:['Wonkwang International Scholarship (50% tuition)','GKS Scholarship','Korea Pro Center Partner Scholarship','Academic Excellence Award'],reqs:["Bachelor's diploma OR high school diploma",'No TOPIK required for many programs','Academic transcripts','Passport & health certificate','Bank statement ($5,000–$10,000 balance)']},
  inha:{name:'Inha University',img:'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=700&q=80',location:'Nam-gu, Incheon, South Korea',ranking:'QS #521–530 World · Top 20 Korea',founded:'1954',type:'Private Research University',tuition:'₩4,000,000–₩6,500,000 / yr (~$3,000–$4,900)',lang:'Korean & English (many English-medium programs)',about:'Inha University, founded with Korean-American ties in 1954, is distinguished for engineering, logistics, and business. Near Incheon Airport with excellent industry partnerships with Korean Air and logistics giants.',programs:['Aerospace & Mechanical Engineering','Naval Architecture & Ocean Engineering','Business Administration & Logistics','Computer Science & Information Systems','Chemistry & Materials Engineering','International Trade & Economics'],scholarships:['Inha International Scholarship (30–100%)','GKS Government Scholarship','Engineering Excellence Award','Global Leader Scholarship'],reqs:["Bachelor's in related field",'TOPIK Level 3+ or IELTS 6.0+','Academic transcripts','Research proposal (graduate)','Two recommendation letters']},
  dongguk:{name:'Dongguk University',img:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80',location:'Jung-gu, Seoul, South Korea',ranking:"Top 20 Korea · Asia's Leading Film University",founded:'1906',type:'Private Buddhist University',tuition:'₩4,500,000–₩7,000,000 / yr (~$3,300–$5,200)',lang:'Korean (English programs available)',about:"Dongguk University (1906) is Korea's premier institution for film, arts, and cultural studies. Many leading Korean film directors and K-drama producers are alumni. Located in central Seoul with a stunning campus.",programs:['Film & Digital Media Production','Theater & Performing Arts','Buddhist Studies & Philosophy','Business Administration','Computer Science & AI','Korean Studies & Literature'],scholarships:['Dongguk International Excellence Scholarship','GKS Government Scholarship','Arts & Film Merit Award','Buddhist Studies Scholarship'],reqs:["Bachelor's or high school diploma",'TOPIK Level 3+ preferred','Portfolio (arts/film programs)','Academic transcripts','Personal statement']},

  /* ── EUROPE ── */
  tuberlin:{name:'TU Berlin',img:'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',location:'Berlin, Germany',ranking:'QS #154 World · Germany Top 5 Engineering',founded:'1879',type:'Public Technical University',tuition:'€0–€350 / semester (nearly free) + ~€350 semester fee',lang:'German & English (many Master programs in English)',about:"TU Berlin is one of Europe's leading technical universities with nearly free tuition. Renowned for engineering, computer science, and innovation. Located in the heart of Berlin — Europe's startup capital. Graduates are highly sought by BMW, Siemens, and global tech firms.",programs:['Computer Science & Artificial Intelligence','Electrical Engineering','Mechanical Engineering','Industrial Engineering & Management','Architecture & Urban Planning','Mathematics & Natural Sciences'],scholarships:['DAAD Scholarship (full funding)','Deutschland Stipendium','Erasmus+ for exchange students','TU Berlin Excellence Grant'],reqs:['Bachelor in related field (min. 3.0 GPA)','German B2/C1 or IELTS 6.5+ (English programs)','TestDaF or DSH (German programs)','Motivation letter & CV','APS certificate for Uzbek applicants']},

  warsaw:{name:'University of Warsaw',img:'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=700&q=80',location:'Warsaw, Poland',ranking:'QS #321 World · Poland #1',founded:'1816',type:'Public Research University',tuition:'€0–€2,000 / yr (EU-comparable fees, very affordable)',lang:'Polish & English (100+ English programs)',about:"University of Warsaw is Central Europe's largest and most prestigious university. Poland's EU membership means affordable living costs, Schengen zone travel, and strong graduate employment across Europe. Over 100 programs taught fully in English.",programs:['Economics & Finance','Law & International Relations','Computer Science & Data Science','Psychology & Social Sciences','Humanities & Cultural Studies','Natural Sciences & Environmental Studies'],scholarships:['Polish Government Scholarship','NAWA (Polish National Agency) Scholarship','University Excellence Grant','Erasmus+ Mobility Program'],reqs:["Bachelor's degree (any field)",'IELTS 6.0+ or TOEFL 72+ (English programs)','Polish B1+ (Polish programs)','Certified diploma translation','Financial guarantee (~€5,000/yr)']},

  charles:{name:'Charles University Prague',img:'https://images.unsplash.com/photo-1541849546-216549ae216d?w=700&q=80',location:'Prague, Czech Republic',ranking:'QS #279 World · Central Europe Top 3',founded:'1348',type:'Public Research University (Founded 1348!)',tuition:'€0 (Czech language) · €8,000–€18,000/yr (English Medicine)',lang:'Czech & English',about:"Charles University is one of the oldest universities in the world (founded 1348) and Central Europe's most prestigious. Its Medical Faculty is globally recognized — graduates practice medicine across Europe and North America. Prague is one of Europe's most beautiful and affordable capitals.",programs:['General Medicine (MD) — 6 years','Dentistry','Pharmacy','Law & Political Science','Humanities & Philosophy','Natural Sciences'],scholarships:['Czech Government Scholarship (MZV)','Charles University Merit Grant','Erasmus+ Scholarships','WHO-affiliated research grants'],reqs:["High school diploma (for Medicine)",'Biology & Chemistry background (Medicine)','English B2+ or Czech B1+','Entrance exam (Biology/Chemistry for Medicine)','Health certificate']},

  vilnius:{name:'Vilnius University',img:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80',location:'Vilnius, Lithuania (EU)',ranking:'QS #501–510 World · Baltic States #1',founded:'1579',type:'Public Research University',tuition:'€1,500–€4,000 / yr (EU member state, very affordable)',lang:'Lithuanian & English (strong English programs)',about:"Vilnius University (1579) is the oldest university in Northern Europe. Lithuania's EU membership gives graduates full European work and residence rights. Vilnius is a safe, charming city with low living costs — ideal for students seeking an EU-pathway degree at accessible prices.",programs:['Business & Economics','Computer Science & IT','Law & International Relations','Communication & Media','Natural Sciences','Medicine & Life Sciences'],scholarships:['Lithuanian Government Scholarship','VU International Student Grant','Erasmus+ Program','Baltic-American Foundation Awards'],reqs:["Bachelor's degree",'IELTS 6.0+ or equivalent','Certified academic transcripts','Motivation letter','Valid passport & health insurance']},

  /* ── JAPAN ── */
  utokyo:{name:'University of Tokyo',img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=80',location:'Bunkyo, Tokyo, Japan',ranking:"QS #28 World · Asia's #1 University",founded:'1877',type:'National Research University',tuition:'¥535,800 / yr (~$3,600) — very affordable for world rank',lang:'Japanese & English (PEAK, GSGC programs in English)',about:"The University of Tokyo (Todai) is consistently Asia's #1 university and a global top-30 institution. MEXT scholarship recipients pay zero tuition and receive a monthly stipend. English-medium programs like PEAK (undergraduate) and GSGC (graduate) are available. Research facilities are world-class.",programs:['Engineering & Information Technology','Natural Sciences & Mathematics','Humanities & Social Sciences','Law & Politics (Todai Law School)','Medicine & Life Sciences','Economics & Business'],scholarships:['MEXT Government Scholarship (full + stipend ¥117,000/mo)','JASSO Scholarship','UTokyo Fellowship','Todai Future Society Initiative'],reqs:["Bachelor's (for graduate)",'TOEFL 100+ or IELTS 7.0+ (English programs)','Japanese N2+ (Japanese programs)','Research proposal & CV','Two academic recommendation letters']},

  waseda:{name:'Waseda University',img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80',location:'Shinjuku, Tokyo, Japan',ranking:'QS #208 World · Japan Top 3 Private',founded:'1882',type:'Private Research University',tuition:'¥1,200,000–¥2,000,000 / yr (~$8,000–$13,500)',lang:'Japanese & English (SILS, GEC fully in English)',about:"Waseda is Japan's most internationally-minded top university with over 7,000 international students. SILS (School of International Liberal Studies) and GEC (Global Education Center) are fully English-taught. Famous alumni include Japanese prime ministers, Nobel laureates, and global business leaders.",programs:['School of International Liberal Studies (SILS) — English','Political Science & Economics','Engineering & Applied Sciences','Commerce & Business','Law School','Culture, Media & Society'],scholarships:['Waseda University Scholarship (up to 100% tuition)','MEXT Government Scholarship','JASSO Scholarship','Okuma Scholarship (exceptional students)'],reqs:["High school diploma (undergraduate)",'IELTS 6.5+ or TOEFL 79+ (English programs)','Japanese JLPT N2+ (Japanese programs)','Strong academic record','Extracurricular activities valued']},

  osaka:{name:'Osaka University',img:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=80',location:'Suita, Osaka, Japan',ranking:'QS #68 World · Japan #3',founded:'1931',type:'National Research University',tuition:'¥535,800 / yr (~$3,600) — national university rate',lang:'Japanese & English (graduate English programs)',about:"Osaka University is Japan's third-ranked national university, particularly distinguished in Medicine, Dentistry, Engineering, and Laser Science. Osaka is Japan's kitchen — vibrant food culture, lower living costs than Tokyo, and excellent industry connections with Panasonic, Sharp, and Daikin.",programs:['Medicine & Dentistry (world-class)','Engineering & Computer Science','Science & Mathematics','Economics & Law','Humanities & Human Sciences','Pharmaceutical Sciences'],scholarships:['MEXT Scholarship (full + ¥117,000/mo stipend)','Osaka University Global Scholarship','JASSO Student Loan-Scholarship','Research Assistantship (graduate)'],reqs:["Bachelor's in related field (graduate)",'TOEFL 79+ or IELTS 6.5+ (English)','Japanese N1/N2 (Japanese programs)','Research proposal (detailed)','Two academic referees']},
};

/* ── STATE ── */
let currentLang = localStorage.getItem('kpc_lang') || 'uz';
const LANG_META = {
  uz:{flag:'🇺🇿',code:'UZ'}, ru:{flag:'🇷🇺',code:'RU'},
  en:{flag:'🇬🇧',code:'EN'}, ko:{flag:'🇰🇷',code:'KO'},
};

/* ══════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLogo();
  applyLang(currentLang, false);
  initLangSwitcher();
  initNavbar();
  initSidebar();
  initSmoothScroll();
  initReveal();
  initCounters();
  initParticles();
  initUniSearch();
  initUniFilters();
  initUniModals();
  initGallery();
  initSidebarGallery();
  initHeroVisaSlider();
  initAboutLogo();
  initTestimonials();
  initFAQ();
  initContactForm();
  initScrollTop();
  initImageFallback();
  initNews();
  initFab();
});

/* ══════════════════════════════════════════
   FLOATING SOCIAL SPEED-DIAL
   ══════════════════════════════════════════ */
function initFab() {
  const fab  = document.getElementById('fab');
  const main = document.getElementById('fabMain');
  if (!fab || !main) return;
  main.addEventListener('click', e => { e.stopPropagation(); fab.classList.toggle('open'); });
  document.addEventListener('click', () => fab.classList.remove('open'));
  fab.querySelectorAll('.sdial-item').forEach(a => a.addEventListener('click', () => fab.classList.remove('open')));
}

/* ══════════════════════════════════════════
   i18n ENGINE
   ══════════════════════════════════════════ */
function applyLang(lang, animate = true) {
  currentLang = lang;
  localStorage.setItem('kpc_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : null;
  if (!T) return;

  if (animate) {
    document.body.classList.add('lang-transitioning');
    setTimeout(() => document.body.classList.remove('lang-transitioning'), 200);
  }

  /* Text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key] !== undefined) {
      // Preserve leading icon if present
      const icon = el.querySelector('i');
      el.textContent = T[key];
      if (icon) el.prepend(icon);
    }
  });

  /* innerHTML nodes (allow <strong> etc) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[key] !== undefined) el.innerHTML = T[key];
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[key] !== undefined) el.setAttribute('placeholder', T[key]);
  });

  /* Select <option> elements */
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.dataset.i18n;
    if (T[key] !== undefined) opt.textContent = T[key];
  });

  /* Update active states (dropdown options + sidebar buttons) */
  document.querySelectorAll('.lang-opt, .slang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Update dropdown toggle label (flag + code) */
  const meta = LANG_META[lang] || LANG_META.uz;
  const flagEl = document.getElementById('langCurFlag');
  const codeEl = document.getElementById('langCurCode');
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

  /* Re-render dynamic news labels in the new language */
  if (typeof window.renderNewsCards === 'function') window.renderNewsCards();
}

function initLangSwitcher() {
  const switcher = document.getElementById('langSwitcher');
  const toggle   = document.getElementById('langToggle');

  /* Open/close dropdown */
  if (toggle && switcher) {
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = switcher.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    /* Close on outside click / Escape */
    document.addEventListener('click', () => {
      switcher.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { switcher.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* Dropdown options */
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      switcher?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
  /* Sidebar buttons */
  document.querySelectorAll('.slang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ══════════════════════════════════════════
   LOGO
   ══════════════════════════════════════════ */
function initLogo() {
  if (typeof LOGO_B64 === 'undefined') return;
  ['navLogo','sidebarLogo','footerLogo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.src = LOGO_B64;
  });
}

/* ══════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════ */
function initNavbar() {
  const nb = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nb.classList.toggle('scrolled', window.scrollY > 60);
    highlightNav();
  }, { passive: true });
}

function highlightNav() {
  const secs = document.querySelectorAll('section[id]');
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 110) cur = s.id; });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
  });
}

/* ══════════════════════════════════════════
   SIDEBAR
   ══════════════════════════════════════════ */
function initSidebar() {
  const hbg     = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn= document.getElementById('sidebarClose');

  const open = () => {
    // Reset animations so they replay on every open
    sidebar.querySelectorAll('.sidebar-link, .sidebar-cta > *, .sidebar-lang').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // reflow
      el.style.animation = '';
    });
    hbg.classList.add('open');
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    hbg.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hbg.addEventListener('click',     () => sidebar.classList.contains('open') ? close() : open());
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click',  close);
  document.querySelectorAll('.sidebar-link, .sidebar-apply').forEach(l => l.addEventListener('click', close));
}

/* ══════════════════════════════════════════
   SMOOTH SCROLL
   ══════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const delay = parseInt(en.target.dataset.delay || 0);
      setTimeout(() => en.target.classList.add('revealed'), delay);
      obs.unobserve(en.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   COUNTER ANIMATION
   ══════════════════════════════════════════ */
function runCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.target);
  let val = 0;
  const step = target / 80;
  const t = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = Math.floor(val);
    if (val >= target) clearInterval(t);
  }, 20);
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.querySelectorAll('[data-target]').forEach(runCounter);
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.stats-grid, .results-stats, .hero-stats').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   HERO PARTICLES
   ══════════════════════════════════════════ */
function initParticles() {
  const c = document.getElementById('heroParticles');
  if (!c) return;
  // Lighter motion: skip particles entirely if user prefers reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = [
      `left:${Math.random()*100}%`,
      `top:${Math.random()*100}%`,
      `--dur:${6 + Math.random()*8}s`,
      `--dl:${Math.random()*5}s`,
      `--dx:${(Math.random()-.5)*40}px`,
      `--dy:${-15 - Math.random()*35}px`,
      `width:${2 + Math.random()*3}px`,
      `height:${2 + Math.random()*3}px`,
    ].join(';');
    c.appendChild(p);
  }
}

/* ══════════════════════════════════════════
   UNIVERSITY SEARCH
   ══════════════════════════════════════════ */
function initUniSearch() {
  const inp = document.getElementById('uniSearch');
  const noResult = document.getElementById('uniNoResult');
  if (!inp) return;

  inp.addEventListener('input', () => {
    const q = inp.value.toLowerCase().trim();
    let visible = 0;
    document.querySelectorAll('.uni-card').forEach(card => {
      const match = !q || card.dataset.name.includes(q);
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    if (noResult) noResult.style.display = visible === 0 ? 'block' : 'none';
  });
}

/* ══════════════════════════════════════════
   UNIVERSITY FILTERS
   ══════════════════════════════════════════ */
function initUniFilters() {
  document.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      let visible = 0;
      document.querySelectorAll('.uni-card').forEach(card => {
        const match = f === 'all' || card.dataset.region === f;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
      });
      const inp = document.getElementById('uniSearch');
      if (inp) inp.value = '';
      const nr = document.getElementById('uniNoResult');
      if (nr) nr.style.display = visible === 0 ? 'block' : 'none';
    });
  });
}

/* ══════════════════════════════════════════
   UNIVERSITY MODAL
   ══════════════════════════════════════════ */
function initUniModals() {
  document.querySelectorAll('.uni-btn[data-uni]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.uni));
  });
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('uniModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(id) {
  const u = UNI_DATA[id];
  if (!u) return;
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[currentLang] : {};
  const applyLabel  = T.apply_modal      || 'Apply to';
  const applyBtn    = T.modal_apply_btn  || 'Apply & Connect — Contact Us';
  const applySub    = T.modal_apply_sub  || 'We respond within 2 hours';

  document.getElementById('modalContent').innerHTML = `
    <div class="m-hero">
      <img src="${u.img}" alt="${u.name}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80'" />
      <div class="m-hero-text"><h2>${u.name}</h2></div>
    </div>
    <div class="m-body">
      <div class="m-grid">
        <div class="m-info"><label>📍 Location</label><span>${u.location}</span></div>
        <div class="m-info"><label>🏆 Ranking</label><span>${u.ranking}</span></div>
        <div class="m-info"><label>📅 Founded</label><span>${u.founded}</span></div>
        <div class="m-info"><label>🏛️ Type</label><span>${u.type}</span></div>
        <div class="m-info"><label>💰 Tuition</label><span>${u.tuition}</span></div>
        <div class="m-info"><label>🌐 Language</label><span>${u.lang}</span></div>
      </div>
      <div class="m-sec"><h4>ℹ️ About</h4><p>${u.about}</p></div>
      <div class="m-sec"><h4>🎓 Programs</h4><ul>${u.programs.map(p => `<li>${p}</li>`).join('')}</ul></div>
      <div class="m-sec"><h4>🏅 Scholarships</h4><ul>${u.scholarships.map(s => `<li>${s}</li>`).join('')}</ul></div>
      <div class="m-sec"><h4>📋 Requirements</h4><ul>${u.reqs.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div class="m-apply-wrap">
        <button class="m-apply" onclick="applyAndContact('${u.name}')">
          <i class="fas fa-paper-plane"></i> ${applyBtn}
        </button>
        <span class="m-apply-sub"><i class="fas fa-clock"></i> ${applySub}</span>
      </div>
    </div>`;

  document.getElementById('uniModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.closeModal = function () {
  document.getElementById('uniModal').classList.remove('open');
  document.body.style.overflow = '';
};

window.applyAndContact = function (uniName) {
  closeModal();
  // Pre-fill the message field with the university name
  const msgField = document.getElementById('fmessage');
  if (msgField && !msgField.value) {
    const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[currentLang] : {};
    const prefill = T.apply_modal ? T.apply_modal + ' ' + uniName : 'Apply to ' + uniName;
    msgField.value = prefill + ' — ';
  }
  // Smooth scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Focus the name field after scroll
    setTimeout(() => {
      const nameField = document.getElementById('fname');
      if (nameField) nameField.focus();
    }, 600);
  }
};

/* ══════════════════════════════════════════
   VISA GALLERY (real embedded images)
   ══════════════════════════════════════════ */
function initGallery() {
  const track  = document.getElementById('galleryTrack');
  const dotsEl = document.getElementById('galleryDots');
  if (!track) return;

  const items = (typeof VISA_IMAGES !== 'undefined') ? VISA_IMAGES : [];
  if (!items.length) { track.parentElement.parentElement.style.display = 'none'; return; }

  /* Build slides */
  items.forEach(v => {
    const slide = document.createElement('div');
    slide.className = 'visa-slide';
    slide.innerHTML = `
      <img src="${v.img}" alt="${v.name}" loading="lazy" />
      <div class="visa-caption">
        <div class="vc-name">${v.name}</div>
        <div class="vc-uni"><i class="fas fa-university"></i> ${v.uni} · ${v.type}</div>
      </div>`;
    track.appendChild(slide);
  });

  const slides = track.querySelectorAll('.visa-slide');
  let cur = 0;

  const pv = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : window.innerWidth < 1200 ? 3 : 4;
  const total = () => Math.ceil(slides.length / pv());

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < total(); i++) {
      const d = document.createElement('div');
      d.className = 'g-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }
  }
  buildDots();

  function goTo(idx) {
    cur = ((idx % total()) + total()) % total();
    const w = slides[0].offsetWidth + 16;
    track.style.transform = `translateX(-${cur * pv() * w}px)`;
    dotsEl.querySelectorAll('.g-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  document.getElementById('galleryNext')?.addEventListener('click', () => goTo(cur + 1));
  document.getElementById('galleryPrev')?.addEventListener('click', () => goTo(cur - 1));

  let auto = setInterval(() => goTo(cur + 1), 4500);
  const vp = track.closest('.gallery-viewport');
  vp?.addEventListener('mouseenter', () => clearInterval(auto));
  vp?.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(cur + 1), 4500); });

  /* Touch swipe */
  let ts = 0;
  track.addEventListener('touchstart', e => { ts = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const d = ts - e.changedTouches[0].clientX;
    if (Math.abs(d) > 48) goTo(d > 0 ? cur + 1 : cur - 1);
  });

  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}

/* ══════════════════════════════════════════
   TESTIMONIALS SLIDER
   ══════════════════════════════════════════ */
function initTestimonials() {
  const track  = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.testi-card'));
  let cur = 0;

  const pv    = () => window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const total = () => Math.ceil(cards.length / pv());

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < total(); i++) {
      const d = document.createElement('div');
      d.className = 't-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }
  }
  buildDots();

  function goTo(idx) {
    cur = ((idx % total()) + total()) % total();
    const w = cards[0].offsetWidth + 22;
    track.style.transform = `translateX(-${cur * pv() * w}px)`;
    dotsEl.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  document.getElementById('testiNext')?.addEventListener('click', () => goTo(cur + 1));
  document.getElementById('testiPrev')?.addEventListener('click', () => goTo(cur - 1));

  let auto = setInterval(() => goTo(cur + 1), 5000);
  track.addEventListener('mouseenter', () => clearInterval(auto));
  track.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(cur + 1), 5000); });

  let ts = 0;
  track.addEventListener('touchstart', e => { ts = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const d = ts - e.changedTouches[0].clientX;
    if (Math.abs(d) > 48) goTo(d > 0 ? cur + 1 : cur - 1);
  });

  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}

/* ══════════════════════════════════════════
   FAQ ACCORDION
   ══════════════════════════════════════════ */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ══════════════════════════════════════════
   CONTACT FORM → Telegram bot + WhatsApp fallback
   ══════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const msgEl = document.getElementById('formMsg');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const T   = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[currentLang] : {};
    const btn = form.querySelector('.form-btn');

    const name    = document.getElementById('fname').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const edu     = document.getElementById('fedu').value;
    const program = document.getElementById('fprogram').value;
    const message = document.getElementById('fmessage').value.trim();

    if (!name || !phone) {
      showMsg('error', '⚠️ ' + (T.f_name || 'Full Name') + ' & ' + (T.f_phone || 'Phone') + ' required.');
      return;
    }

    const origHtml = btn.innerHTML;
    btn.innerHTML  = '<i class="fas fa-spinner fa-spin"></i>';
    btn.disabled   = true;

    const text = `🎓 *New Application — Korea Pro Website*\n\n` +
      `👤 Name: ${name}\n📞 Phone: ${phone}\n` +
      `📚 Education: ${edu || '—'}\n🎯 Program: ${program || '—'}\n` +
      `💬 Message: ${message || '—'}\n🌐 Lang: ${currentLang.toUpperCase()}`;

    try {
      /* ── EmailJS — leadlar to'g'ridan-to'g'ri email pochtaga tushadi ── */
      const EMAILJS_SERVICE  = 'service_33zlit2';
      const EMAILJS_TEMPLATE = 'template_o11ns9e';
      const EMAILJS_PUBLIC   = 'yZUTRAdY8_l0DH3ch';

      const params = {
        title:   'Korea Pro Website — New Application',
        name:    name,
        phone:   phone,
        Country: 'Uzbekistan',
        message:
          `📚 Education: ${edu || '—'}\n` +
          `🎯 Program: ${program || '—'}\n` +
          `💬 Message: ${message || '—'}\n` +
          `🌐 Language: ${currentLang.toUpperCase()}`,
      };

      if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, params, { publicKey: EMAILJS_PUBLIC });

      showMsg('success', '✅ ' + (currentLang === 'uz' ? 'Xabar yuborildi! 2 soat ichida javob beramiz.' : currentLang === 'ru' ? 'Сообщение отправлено! Ответим в течение 2 часов.' : 'Message sent! We will respond within 2 hours.'));
      form.reset();
    } catch {
      const wa = `https://wa.me/998941311317?text=${encodeURIComponent(text)}`;
      showMsg('success', `✅ <a href="${wa}" target="_blank" style="color:inherit;text-decoration:underline">Click to open WhatsApp →</a>`);
      setTimeout(() => window.open(wa, '_blank'), 700);
    }

    btn.innerHTML = origHtml;
    btn.disabled  = false;
  });

  function showMsg(type, html) {
    msgEl.className = 'form-msg ' + type;
    msgEl.innerHTML = html;
    setTimeout(() => { msgEl.className = 'form-msg'; msgEl.innerHTML = ''; }, 10000);
  }
}

/* ══════════════════════════════════════════
   SCROLL TO TOP
   ══════════════════════════════════════════ */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 450), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════
   ABOVE-FOLD REVEALS ON LOAD
   ══════════════════════════════════════════ */
window.addEventListener('load', () => {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight)
      setTimeout(() => el.classList.add('revealed'), parseInt(el.dataset.delay || 0));
  });
});

/* ══════════════════════════════════════════
   SIDEBAR VISA RESULTS GALLERY
   ══════════════════════════════════════════ */
function initSidebarGallery() {
  const track = document.getElementById('sbGalleryTrack');
  const dotsEl = document.getElementById('sbGalleryDots');
  if (!track || !dotsEl) return;

  const items = (typeof VISA_IMAGES !== 'undefined') ? VISA_IMAGES : [];
  if (!items.length) return;

  items.forEach(v => {
    const img = document.createElement('img');
    img.src = v.img;
    img.alt = v.name || 'Visa Result';
    img.loading = 'lazy';
    track.appendChild(img);
  });

  let cur = 0;
  const total = items.length;

  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'sb-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }

  function goTo(idx) {
    cur = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dotsEl.querySelectorAll('.sb-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  let auto = setInterval(() => goTo(cur + 1), 3500);
  track.parentElement.addEventListener('mouseenter', () => clearInterval(auto));
  track.parentElement.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(cur + 1), 3500); });
}

/* ══════════════════════════════════════════
   ABOUT SECTION LOGO
   ══════════════════════════════════════════ */
function initAboutLogo() {
  if (typeof LOGO_B64 === 'undefined') return;
  const el = document.getElementById('aboutLogo');
  if (el) el.src = LOGO_B64;
}

/* ══════════════════════════════════════════
   HERO VISA RESULTS SLIDER
   ══════════════════════════════════════════ */
function initHeroVisaSlider() {
  const track = document.getElementById('heroVisaTrack');
  if (!track) return;

  const items = (typeof VISA_IMAGES !== 'undefined') ? VISA_IMAGES : [];
  if (!items.length) return;

  items.forEach(v => {
    const img = document.createElement('img');
    img.src = v.img;
    img.alt = v.name || 'Visa Result';
    img.loading = 'lazy';
    track.appendChild(img);
  });

  let cur = 0;
  const total = items.length;

  function goTo(idx) {
    cur = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${cur * 100}%)`;
  }

  let auto = setInterval(() => goTo(cur + 1), 2800);
  track.parentElement.addEventListener('mouseenter', () => clearInterval(auto));
  track.parentElement.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(cur + 1), 2800); });
}

/* ══════════════════════════════════════════
   GLOBAL IMAGE FALLBACK (no broken images)
   ══════════════════════════════════════════ */
function initImageFallback() {
  const FALLBACK = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=70';
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function onErr() {
      if (this.dataset.fbk) return;        // already swapped once
      this.dataset.fbk = '1';
      this.src = FALLBACK;
    });
  });
}

/* ══════════════════════════════════════════
   NEWS — Google News (auto) + curated fallback
   ══════════════════════════════════════════ */
const NEWS_THUMBS = {
  scholarship:'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=70',
  visa:'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=600&q=70',
  university:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=70',
  general:'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&q=70',
};
const NEWS_CAT_LABEL = {
  scholarship:{uz:'Grant',ru:'Грант',en:'Scholarship',ko:'장학금'},
  visa:{uz:'Viza',ru:'Виза',en:'Visa',ko:'비자'},
  university:{uz:'Universitet',ru:'Вуз',en:'University',ko:'대학'},
  general:{uz:'Yangilik',ru:'Новость',en:'News',ko:'뉴스'},
};
/* Evergreen, always-relevant fallback items (4 languages) */
const CURATED_NEWS = [
  {cat:'scholarship',url:'https://www.studyinkorea.go.kr/',date:'2025',
    t:{uz:'GKS 2025 — Koreya Hukumati Stipendiyasi ochiq',ru:'GKS 2025 — открыта стипендия Правительства Кореи',en:'GKS 2025 — Korean Government Scholarship now open',ko:'GKS 2025 — 한국정부장학금 모집 시작'},
    d:{uz:"To'liq o'qish haqi + oylik ~₩900,000 nafaqa + til kursi. Bakalavr va magistratura uchun.",ru:'Полная оплата обучения + стипендия ~₩900,000/мес + языковой курс. Бакалавриат и магистратура.',en:'Full tuition + ~₩900,000/mo stipend + language course. Bachelor & master tracks.',ko:'전액 학비 + 월 약 ₩900,000 생활비 + 어학연수. 학사·석사 과정.'}},
  {cat:'visa',url:'https://www.visa.go.kr/',date:'2025',
    t:{uz:'D-2 talaba vizasi: yangilangan talablar',ru:'Студенческая виза D-2: обновлённые требования',en:'D-2 student visa: updated requirements',ko:'D-2 유학 비자: 변경된 요건'},
    d:{uz:"Bank balansi va hujjatlar bo'yicha yangi qoidalar. Korea Pro Center to'liq yo'riqnoma beradi.",ru:'Новые правила по банковскому балансу и документам. Korea Pro Center даёт полный гайд.',en:'New rules on bank balance & documents. Korea Pro Center provides full guidance.',ko:'은행 잔고 및 서류 관련 새 규정. Korea Pro Center가 안내합니다.'}},
  {cat:'university',url:'https://www.topuniversities.com/universities/region/asia/south-korea',date:'2025',
    t:{uz:'2025 kuzgi qabul: Koreya universitetlari ariza muddatlari',ru:'Осенний приём 2025: дедлайны корейских вузов',en:'Fall 2025 intake: Korean university deadlines',ko:'2025 가을학기: 한국 대학 지원 마감일'},
    d:{uz:'SNU, Yonsei, Korea, Wonkwang va boshqalar ariza qabulini boshladi. Erta ariza — yuqori imkoniyat.',ru:'SNU, Yonsei, Korea, Wonkwang и др. открыли приём. Ранняя подача — выше шанс.',en:'SNU, Yonsei, Korea, Wonkwang and more are accepting applications. Apply early for better odds.',ko:'서울대, 연세대, 고려대, 원광대 등 지원 접수 중. 조기 지원이 유리합니다.'}},
  {cat:'scholarship',url:'https://www.studyinkorea.go.kr/',date:'2025',
    t:{uz:'Universitet stipendiyalari: o\'qish haqi 30–100% chegirma',ru:'Стипендии вузов: скидка на обучение 30–100%',en:'University scholarships: 30–100% tuition cuts',ko:'대학 장학금: 학비 30–100% 감면'},
    d:{uz:'Ko\'p hamkor universitetlar xalqaro talabalarga avtomatik stipendiya beradi.',ru:'Многие вузы-партнёры дают автоматические стипендии иностранным студентам.',en:'Many partner universities grant automatic scholarships to international students.',ko:'많은 제휴 대학이 유학생에게 자동 장학금을 제공합니다.'}},
  {cat:'university',url:'https://www.wku.ac.kr/',date:'2025',
    t:{uz:'Wonkwang universiteti — o\'zbek talabalar uchun #1 tanlov',ru:'Университет Вонкванг — выбор №1 для узбекских студентов',en:'Wonkwang University — #1 pick for Uzbek students',ko:'원광대학교 — 우즈베키스탄 학생 1순위'},
    d:{uz:'Arzon o\'qish haqi, kuchli stipendiya va 150+ bizning talabamiz. TOPIK ko\'pincha shart emas.',ru:'Доступная цена, сильные стипендии и 150+ наших студентов. TOPIK часто не требуется.',en:'Affordable tuition, strong scholarships and 150+ of our students. TOPIK often not required.',ko:'저렴한 학비, 강력한 장학금, 우리 학생 150명 이상. TOPIK 면제 가능.'}},
  {cat:'visa',url:'https://www.hikorea.go.kr/',date:'2025',
    t:{uz:'D-2 viza bilan ishlash: haftasiga 20 soatgacha ruxsat',ru:'Работа по визе D-2: до 20 часов в неделю',en:'Working on D-2 visa: up to 20 hours/week allowed',ko:'D-2 비자 아르바이트: 주 20시간까지 허용'},
    d:{uz:'Talabalar semestr davomida qonuniy ishlashi mumkin — turmush xarajatlarini qoplaydi.',ru:'Студенты могут легально работать в семестр — это покрывает расходы на жизнь.',en:'Students can legally work during the semester — covering living costs.',ko:'학기 중 합법적으로 일할 수 있어 생활비를 충당할 수 있습니다.'}},
];

function newsCategorize(text) {
  const t = (text || '').toLowerCase();
  if (/scholar|grant|\bgks\b|stipend|장학|стипенд|grant/.test(t)) return 'scholarship';
  if (/visa|d-?2|виза|비자/.test(t)) return 'visa';
  if (/universit|admission|campus|intake|대학|универси|вуз/.test(t)) return 'university';
  return 'general';
}

function newsCard(item) {
  const L = currentLang;
  const readmore = (TRANSLATIONS[L] && TRANSLATIONS[L].news_readmore) || 'Read more';
  const catLabel = (NEWS_CAT_LABEL[item.cat] || NEWS_CAT_LABEL.general)[L] || item.cat;
  const title = item.title || (item.t && (item.t[L] || item.t.en));
  const desc  = item.desc  || (item.d && (item.d[L] || item.d.en)) || '';
  const thumb = item.img || NEWS_THUMBS[item.cat] || NEWS_THUMBS.general;
  const date  = item.date || '';
  const host  = item.source || '';
  return `
    <a class="news-card" href="${item.url}" target="_blank" rel="noopener">
      <div class="news-thumb">
        <span class="news-cat ${item.cat}">${catLabel}</span>
        <img src="${thumb}" alt="${(title||'').replace(/"/g,'')}" loading="lazy"/>
      </div>
      <div class="news-body">
        <div class="news-date"><i class="fas fa-calendar-day"></i> ${date}${host ? ' · ' + host : ''}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="news-src"><span class="news-readmore">${readmore} <i class="fas fa-arrow-right"></i></span></div>
      </div>
    </a>`;
}

let NEWS_CACHE = null;
function renderNews(items) {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;
  NEWS_CACHE = items;
  grid.innerHTML = items.slice(0, 6).map(newsCard).join('');
}
window.renderNewsCards = () => { if (NEWS_CACHE) renderNews(NEWS_CACHE); };

async function initNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  // Korean visitors get Korean-language headlines; others get English (widest coverage)
  const ko = currentLang === 'ko';
  const query = ko ? '한국 대학 장학금 유학 비자' : 'Korea university scholarship OR study visa international students';
  const hl = ko ? 'ko' : 'en-US';
  const gl = ko ? 'KR' : 'US';
  const ceid = ko ? 'KR:ko' : 'US:en';
  const rss = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rss)}`;

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 9000);
    const res = await fetch(proxy, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error('news fetch failed');
    const xml = new DOMParser().parseFromString(await res.text(), 'text/xml');
    const nodes = Array.from(xml.querySelectorAll('item')).slice(0, 9);
    if (!nodes.length) throw new Error('no items');

    const items = nodes.map(n => {
      const title = (n.querySelector('title')?.textContent || '').trim();
      const link  = (n.querySelector('link')?.textContent || '').trim();
      const src   = (n.querySelector('source')?.textContent || '').trim();
      const pub   = n.querySelector('pubDate')?.textContent || '';
      let date = '';
      try { date = new Date(pub).toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : currentLang === 'ru' ? 'ru-RU' : currentLang === 'uz' ? 'uz-UZ' : 'en-US', { day:'numeric', month:'short', year:'numeric' }); } catch { date = ''; }
      const clean = title.replace(/\s+-\s+[^-]+$/, ''); // strip trailing " - Source"
      return { cat:newsCategorize(title), title:clean, desc:'', url:link, date, source:src };
    }).filter(i => i.title && i.url);

    if (!items.length) throw new Error('empty');
    renderNews(items);
  } catch {
    // Fallback: curated, always-relevant items (never shows an error)
    renderNews(CURATED_NEWS);
  }
}
