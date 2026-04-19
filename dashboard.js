// ── DATA ──────────────────────────────────────────────────────────────────
const DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

const CITIES = {
  chicago: {
    name:'Chicago', state:'Illinois', abbr:'IL',
    levelLabel:'Extreme Risk', levelClass:'sev-4',
    sub:'Extreme flood risk · 3 alerts active',
    exposure:'$42,000',
    risks:[
      { name:'Flooding',     pct:94, fill:'fill-4', color:'var(--sev-4)' },
      { name:'Extreme Wind', pct:67, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Severe Storm', pct:58, fill:'fill-2', color:'var(--sev-2)' },
    ],
    tlRisks:[
      { icon:'🌊', name:'Flooding',      lvl:'Extreme', cls:'sev-4' },
      { icon:'💨', name:'High Wind',      lvl:'Warning',  cls:'sev-2' },
      { icon:'⛈️', name:'Severe Storm',  lvl:'Warning',  cls:'sev-2' },
    ],
    outlook:[
      { day:'SUN', icon:'☀️', ct:'ct-ok' },
      { day:'MON', icon:'🌩️', ct:'ct-4'  },
      { day:'TUE', icon:'🌊', ct:'ct-4'  },
      { day:'WED', icon:'🌧️', ct:'ct-2'  },
      { day:'THU', icon:'🌦️', ct:'ct-1'  },
      { day:'FRI', icon:'⛅', ct:'ct-0'  },
      { day:'SAT', icon:'☀️', ct:'ct-ok' },
    ],
  },
  dallas: {
    name:'Dallas', state:'Texas', abbr:'TX',
    levelLabel:'Warning', levelClass:'sev-2',
    sub:'Heat warning · 1 alert active',
    exposure:'$18,500',
    risks:[
      { name:'Extreme Heat',   pct:78, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Flash Flooding', pct:52, fill:'fill-1', color:'var(--sev-1)' },
      { name:'High Wind',      pct:40, fill:'fill-1', color:'var(--sev-1)' },
    ],
    tlRisks:[
      { icon:'🌡️', name:'Extreme Heat',   lvl:'Warning', cls:'sev-2' },
      { icon:'🌊', name:'Flash Flooding', lvl:'Watch',   cls:'sev-1' },
      { icon:'💨', name:'High Wind',       lvl:'Watch',   cls:'sev-1' },
    ],
    outlook:[
      { day:'SUN', icon:'☀️', ct:'ct-ok' },
      { day:'MON', icon:'☀️', ct:'ct-ok' },
      { day:'TUE', icon:'🌡️', ct:'ct-2'  },
      { day:'WED', icon:'🌡️', ct:'ct-2'  },
      { day:'THU', icon:'⛈️', ct:'ct-4'  },
      { day:'FRI', icon:'🌧️', ct:'ct-1'  },
      { day:'SAT', icon:'⛅', ct:'ct-0'  },
    ],
  },
  miami: {
    name:'Miami', state:'Florida', abbr:'FL',
    levelLabel:'Warning', levelClass:'sev-2',
    sub:'Heat & humidity warning · 1 alert active',
    exposure:'$27,200',
    risks:[
      { name:'Extreme Heat',   pct:82, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Humidity Index', pct:76, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Tropical Storm', pct:44, fill:'fill-1', color:'var(--sev-1)' },
    ],
    tlRisks:[
      { icon:'🌡️', name:'Extreme Heat',   lvl:'Warning', cls:'sev-2' },
      { icon:'💧', name:'Humidity Index', lvl:'Warning', cls:'sev-2' },
      { icon:'🌀', name:'Tropical Storm', lvl:'Watch',   cls:'sev-1' },
    ],
    outlook:[
      { day:'SUN', icon:'⛅', ct:'ct-0'  },
      { day:'MON', icon:'🌡️', ct:'ct-1'  },
      { day:'TUE', icon:'🌡️', ct:'ct-2'  },
      { day:'WED', icon:'🌡️', ct:'ct-2'  },
      { day:'THU', icon:'🌊', ct:'ct-2'  },
      { day:'FRI', icon:'⛈️', ct:'ct-2'  },
      { day:'SAT', icon:'🌧️', ct:'ct-1'  },
    ],
  },
  seattle: {
    name:'Seattle', state:'Washington', abbr:'WA',
    levelLabel:'Watch', levelClass:'sev-1',
    sub:'Rain & low visibility watch',
    exposure:'$9,800',
    risks:[
      { name:'Heavy Rain',     pct:55, fill:'fill-1', color:'var(--sev-1)' },
      { name:'Low Visibility', pct:48, fill:'fill-1', color:'var(--sev-1)' },
      { name:'Wind Gusts',     pct:32, fill:'fill-0', color:'var(--sev-0)' },
    ],
    tlRisks:[
      { icon:'🌧️', name:'Heavy Rain',     lvl:'Watch',    cls:'sev-1' },
      { icon:'🌫️', name:'Low Visibility', lvl:'Watch',    cls:'sev-1' },
      { icon:'💨', name:'Wind Gusts',      lvl:'Advisory', cls:'sev-0' },
    ],
    outlook:[
      { day:'SUN', icon:'⛅', ct:'ct-0'  },
      { day:'MON', icon:'🌧️', ct:'ct-1'  },
      { day:'TUE', icon:'🌧️', ct:'ct-1'  },
      { day:'WED', icon:'🌫️', ct:'ct-1'  },
      { day:'THU', icon:'⛅', ct:'ct-0'  },
      { day:'FRI', icon:'⛅', ct:'ct-0'  },
      { day:'SAT', icon:'☀️', ct:'ct-ok' },
    ],
  },
  newyork: {
    name:'New York', state:'New York', abbr:'NY',
    levelLabel:'Advisory', levelClass:'sev-0',
    sub:'Minor advisories only · No alerts',
    exposure:'$4,200',
    risks:[
      { name:'Wind Gusts', pct:35, fill:'fill-0',  color:'var(--sev-0)' },
      { name:'Light Rain', pct:28, fill:'fill-ok', color:'var(--bg-success)' },
      { name:'Fog',        pct:20, fill:'fill-ok', color:'var(--bg-success)' },
    ],
    tlRisks:[
      { icon:'💨', name:'Wind Gusts', lvl:'Advisory', cls:'sev-0' },
      { icon:'🌧️', name:'Light Rain', lvl:'Clear',    cls:'sev-ok' },
      { icon:'🌫️', name:'Fog',        lvl:'Clear',    cls:'sev-ok' },
    ],
    outlook:[
      { day:'SUN', icon:'☀️', ct:'ct-ok' },
      { day:'MON', icon:'⛅', ct:'ct-0'  },
      { day:'TUE', icon:'☀️', ct:'ct-ok' },
      { day:'WED', icon:'🌦️', ct:'ct-0'  },
      { day:'THU', icon:'⛅', ct:'ct-0'  },
      { day:'FRI', icon:'☀️', ct:'ct-ok' },
      { day:'SAT', icon:'☀️', ct:'ct-ok' },
    ],
  },
};

const RESPONSES = {
  "What's my highest risk location?": `<strong>Chicago, IL</strong> is your highest-risk location this week — Extreme flood risk score of <strong>94/100</strong>. Three shipments are routed through the I-90/94 corridor on Tuesday and Wednesday, with a 78% disruption probability.<br><br>Dallas is second at <strong>Warning</strong> (78/100). 104°F heat is forecast Thursday, triggering mandatory safety protocols at your distribution center.`,

  "Draft an alert for my ops team": `Ready-to-send operations alert:<br><div class="alert-block">OPS ALERT — Apr 19, 2026 | PRIORITY: HIGH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBJECT: Weather Disruption — Chicago & Miami Hubs

CHICAGO (Extreme):
• Flood risk: 94/100 — escalating
• I-90/94 corridor: avoid Tue Apr 21 – Wed Apr 22
• Action: Reroute 3 shipments via I-80 S
• ETA impact: +4–6 hrs per affected route

MIAMI (Warning):
• Heat index 94°F Thu–Fri (threshold: 91°F)
• Action: Activate Heat Protocol — early shifts 5AM
• Outdoor ops pause 12PM–4PM Thu & Fri

Unmitigated exposure: $69,200
With recommended actions: ~$14,500
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by Tomorrow.io AI Risk Advisor</div><button class="copy-btn" onclick="copyAlert(this)">Copy Alert</button>`,

  "Compare this week vs last week": `Week-over-week for Meridian Logistics:<br><br>
<strong>Flooding:</strong> ↑ +34% — Chicago escalated Warning → Extreme<br>
<strong>Extreme Heat:</strong> ↑ +18% — Dallas &amp; Miami trending higher<br>
<strong>High Wind:</strong> ↓ −8% — improving network-wide<br>
<strong>Fog/Visibility:</strong> ↓ −22% — Seattle clearing<br><br>
<strong>Total exposure this week: $101,700</strong><br>
Last week: $89,500 · Delta: <span style="color:var(--sev-3)">↑ +$12,200 (+13.6%)</span><br><br>
Chicago is the primary driver. If the flood clears by Wednesday (as modeled), next week projects to ~$74,000.`,

  "Show me contingency options": `Three options ranked by cost-effectiveness:<br><ul>
<li><strong>Reroute Chicago via I-80 S</strong> — +4–6 hrs/route, avoids Extreme zone. Cost: ~$2,100. Saves est. $18,000.</li>
<li><strong>Delay Dallas Tue deliveries 48 hrs</strong> — Heat clears Thursday. Zero rerouting cost. Requires 4 client notifications.</li>
<li><strong>Activate Miami backup hub (Fort Lauderdale)</strong> — Redistributes 30% of load. Setup: 6 hrs. Cost: $3,800/day. Recommended only if heat index exceeds 96°F.</li>
</ul>Want me to draft client notifications for any option?`
};

const FALLBACK = `I've analyzed conditions across your 5 Meridian Logistics locations. Elevated risk in the Midwest and Southeast corridors. Priority actions: reroute Chicago I-90/94 shipments (Tue–Wed) and activate Miami heat protocol (Thu–Fri). Want specific route recommendations or operational alerts?`;

// ── AI DRAWER ─────────────────────────────────────────────────────────────
function toggleAiDrawer() {
  const drawer = document.getElementById('ai-drawer');
  const btn    = document.getElementById('ai-toggle-btn');
  drawer.classList.add('animated');
  const isOpen = drawer.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  if (isOpen) setTimeout(() => document.getElementById('ai-input').focus(), 240);
}

// ── CLOCK ─────────────────────────────────────────────────────────────────
function updateClock() {
  const n = new Date();
  document.getElementById('live-clock').textContent =
    n.toLocaleString('en-US', { month:'short', day:'numeric', year:'numeric',
      hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false }) + ' UTC';
}
updateClock(); setInterval(updateClock, 1000);

function updateScrubber() {
  const n = new Date();
  document.getElementById('tl-scrubber-label').textContent =
    n.toLocaleString('en-US', { day:'numeric', month:'short',
      hour:'numeric', minute:'2-digit', hour12:true });
}
updateScrubber(); setInterval(updateScrubber, 30000);

// ── CITY SELECT ────────────────────────────────────────────────────────────
let current = 'chicago';
const leafletMarkers = {};

function buildTimeline(c) {
  const today = new Date().getDay();

  document.getElementById('tl-day-headers').innerHTML = c.outlook.map((d, i) => {
    const isToday = i === today;
    return `<div class="tl-day-hdr${isToday ? ' today' : ''}">
      ${d.day}${isToday ? '<div class="tl-today-line"></div>' : ''}
    </div>`;
  }).join('');

  const ROWS = [
    c.outlook,
    c.outlook.map((d,i) => ({ ...d, icon: ['☀️','☀️','🌡️','🌡️','⛈️','🌧️','⛅'][i], ct: ['ct-ok','ct-ok','ct-2','ct-2','ct-4','ct-1','ct-0'][i] })),
    c.outlook.map((d,i) => ({ ...d, icon: ['⛅','💨','💨','⛅','⛅','☀️','☀️'][i], ct: ['ct-0','ct-1','ct-1','ct-0','ct-0','ct-ok','ct-ok'][i] })),
    c.outlook.map((d,i) => ({ ...d, icon: ['☀️','☀️','☀️','☀️','☀️','☀️','☀️'][i], ct: ['ct-ok','ct-ok','ct-ok','ct-ok','ct-ok','ct-ok','ct-ok'][i] })),
    c.outlook.map((d,i) => ({ ...d, icon: ['🌫️','⛅','☀️','☀️','⛅','☀️','☀️'][i], ct: ['ct-0','ct-0','ct-ok','ct-ok','ct-0','ct-ok','ct-ok'][i] })),
  ];

  document.getElementById('tl-grid-rows').innerHTML =
    ROWS.flatMap(row => row.map((d, i) => {
      const isToday = i === today;
      return `<div class="tl-cell ${d.ct}${isToday ? ' today-col' : ''}">${d.icon}</div>`;
    })).join('');
}

function buildRiskBars(c) {
  document.getElementById('city-risk-bars').innerHTML = c.risks.map(r => `
    <div class="rbar">
      <div class="rbar-head">
        <span class="rbar-name" style="color:${r.color}">${r.name}</span>
        <span class="rbar-score" style="color:${r.color}">${r.pct}/100</span>
      </div>
      <div class="rbar-track">
        <div class="rbar-fill ${r.fill}" style="width:0" data-w="${r.pct}%"></div>
      </div>
    </div>
  `).join('');
  requestAnimationFrame(() => {
    document.querySelectorAll('.rbar-fill').forEach(el => { el.style.width = el.dataset.w; });
  });
}

function buildTlRisks(c) {
  document.getElementById('tl-risk-rows').innerHTML = c.tlRisks.map(r => `
    <div class="tl-risk-row">
      <div class="tl-risk-icon">${r.icon}</div>
      <div class="tl-risk-info">
        <div class="tl-risk-name">${r.name}</div>
        <div class="tl-risk-lvl ${r.cls}">${r.lvl}</div>
      </div>
    </div>
  `).join('');
}

function selectCity(key) {
  current = key;
  const c = CITIES[key];

  document.getElementById('location-pill-text').textContent = `${c.name}, ${c.abbr}`;

  document.getElementById('city-name').textContent = c.name;
  document.getElementById('city-state').textContent = c.state;
  const lvl = document.getElementById('city-level');
  lvl.textContent = '● ' + c.levelLabel;
  lvl.className = c.levelClass;

  buildRiskBars(c);

  document.getElementById('tl-city-name').textContent = `${c.name}, ${c.abbr}`;
  document.getElementById('tl-city-sub').textContent = c.sub;
  buildTlRisks(c);
  buildTimeline(c);

  Object.entries(leafletMarkers).forEach(([k, m]) => {
    const isSelected = k === key;
    m.dot.setStyle({ radius: isSelected ? 11 : 8, weight: isSelected ? 2 : 1.5, opacity: isSelected ? 1 : 0.55, fillOpacity: isSelected ? 1 : 0.65 });
    m.ring.setStyle({ opacity: isSelected ? 0.35 : 0.18, fillOpacity: isSelected ? 0.12 : 0.06 });
  });
}

// ── LEAFLET MAP ────────────────────────────────────────────────────────────
const CITY_COORDS = {
  chicago:  { latlng: [41.878, -87.630],  color: '#ce0025', radius: 48000 },
  dallas:   { latlng: [32.779, -96.808],  color: '#fe782c', radius: 40000 },
  miami:    { latlng: [25.774, -80.194],  color: '#fe782c', radius: 40000 },
  seattle:  { latlng: [47.606, -122.332], color: '#ffb345', radius: 36000 },
  newyork:  { latlng: [40.713, -74.006],  color: '#8fa8ff', radius: 32000 },
};

const leafletMap = L.map('leaflet-map', {
  center: [38, -96],
  zoom: 4,
  zoomControl: true,
  attributionControl: true,
}).setView([38, -96], 4);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(leafletMap);

leafletMap.zoomControl.setPosition('bottomright');

Object.entries(CITY_COORDS).forEach(([key, cfg]) => {
  const ring = L.circle(cfg.latlng, {
    radius: cfg.radius,
    color: cfg.color,
    weight: 1,
    fillColor: cfg.color,
    fillOpacity: 0.08,
    opacity: 0.25,
    interactive: false,
  }).addTo(leafletMap);

  const dot = L.circleMarker(cfg.latlng, {
    radius: 9,
    color: '#fff',
    weight: 1.5,
    fillColor: cfg.color,
    fillOpacity: 1,
  }).addTo(leafletMap);

  dot.bindTooltip(CITIES[key].name + ', ' + CITIES[key].abbr, {
    direction: 'top', offset: [0, -10],
    className: 'leaflet-city-tip',
  });

  dot.on('click', () => selectCity(key));

  leafletMarkers[key] = { dot, ring };
});

const tipStyle = document.createElement('style');
tipStyle.textContent = `.leaflet-city-tip {
  background: #2b2949 !important; border: 1px solid #56546e !important;
  border-radius: 4px !important; color: #f4f4f4 !important;
  font-family: "Muli", sans-serif !important; font-size: 12px !important;
  font-weight: 700 !important; padding: 3px 9px !important;
  box-shadow: 0 3px 10px rgba(0,0,0,0.4) !important;
}
.leaflet-city-tip::before { display: none !important; }`;
document.head.appendChild(tipStyle);

// ── CHAT ──────────────────────────────────────────────────────────────────
let busy = false;

function appendMsg(html, role) {
  const box = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = `msg ${role}`;
  d.innerHTML = `<div class="msg-av">${role === 'ai' ? 'AI' : 'ML'}</div><div class="msg-bub">${html}</div>`;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

function showTyping() {
  const box = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = 'msg ai'; d.id = 'typing-msg';
  d.innerHTML = `<div class="msg-av">AI</div><div class="typing-ind"><div class="t-dot"></div><div class="t-dot"></div><div class="t-dot"></div></div>`;
  box.appendChild(d); box.scrollTop = box.scrollHeight;
}

function hideTyping() { const e = document.getElementById('typing-msg'); if(e) e.remove(); }

function sendMessage() {
  if(busy) return;
  const inp = document.getElementById('ai-input');
  const t = inp.value.trim(); if(!t) return;
  inp.value = ''; deliver(t);
}

function sendChip(t) { if(!busy) deliver(t); }

function deliver(t) {
  busy = true;
  appendMsg(t, 'user'); showTyping();
  const r = RESPONSES[t] || FALLBACK;
  setTimeout(() => { hideTyping(); appendMsg(r, 'ai'); busy = false; }, 820);
}

function copyAlert(btn) {
  const blk = btn.previousElementSibling;
  navigator.clipboard.writeText(blk.textContent).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy Alert'; }, 2000);
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────
selectCity('chicago');

setTimeout(() => appendMsg(`Good morning! I've analyzed weather conditions across your <strong>5 active Meridian Logistics locations</strong>. There are <strong>3 alerts</strong> requiring attention today.`, 'ai'), 220);
setTimeout(() => appendMsg(`<strong>Chicago (Extreme):</strong> Flood risk escalated to 94/100 overnight — highest in your network. I recommend rerouting the <strong>3 shipments</strong> on the I-90/94 corridor Tuesday–Wednesday. Estimated disruption savings: <strong>$18,000</strong>.`, 'ai'), 640);
setTimeout(() => appendMsg(`<strong>Miami (Warning):</strong> 94°F heat index forecast Thursday–Friday. Policy triggers safety protocols at 91°F — recommend <strong>early shift scheduling</strong> and pausing outdoor ops 12PM–4PM both days.`, 'ai'), 1060);
