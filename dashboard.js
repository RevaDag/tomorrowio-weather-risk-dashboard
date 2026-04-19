// ── DATA ──────────────────────────────────────────────────────────────────
const CITIES = {
  chicago: {
    name:'Chicago', state:'Illinois', abbr:'IL',
    levelLabel:'Extreme Risk', levelClass:'sev-4',
    sub:'Extreme flood risk · 3 alerts active',
    weather:{ icon:'⛅', temp:'52 °F', condition:'Cloudy', wind:'12 mph winds' },
    impactSub:'Extreme flood risk active',
    insight:'Consider rerouting I-90/94 shipments Tuesday–Wednesday due to critical flood conditions in the Chicago metro area.',
    risks:[
      { name:'Flooding',     pct:94, fill:'fill-4', color:'var(--sev-4)' },
      { name:'Extreme Wind', pct:67, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Severe Storm', pct:58, fill:'fill-2', color:'var(--sev-2)' },
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
    weather:{ icon:'☀️', temp:'89 °F', condition:'Sunny', wind:'8 mph winds' },
    impactSub:'Heat warning in effect',
    insight:'Activate heat protocol for outdoor workers Thursday–Friday. Peak heat index reaches 104°F — mandatory water breaks every 30 min.',
    risks:[
      { name:'Extreme Heat',   pct:78, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Flash Flooding', pct:52, fill:'fill-1', color:'var(--sev-1)' },
      { name:'High Wind',      pct:40, fill:'fill-1', color:'var(--sev-1)' },
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
    weather:{ icon:'🌤️', temp:'86 °F', condition:'Partly Cloudy', wind:'14 mph winds' },
    impactSub:'Heat & humidity warning active',
    insight:'94°F heat index Thursday–Friday exceeds 91°F safety threshold. Recommend early shift scheduling and pausing outdoor ops 12PM–4PM.',
    risks:[
      { name:'Extreme Heat',   pct:82, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Humidity Index', pct:76, fill:'fill-2', color:'var(--sev-2)' },
      { name:'Tropical Storm', pct:44, fill:'fill-1', color:'var(--sev-1)' },
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
    weather:{ icon:'🌧️', temp:'54 °F', condition:'Rainy', wind:'10 mph winds' },
    impactSub:'Low visibility watch in effect',
    insight:'Persistent rain and fog through Wednesday. Issue visibility advisory to all field crews — delay non-critical outdoor operations.',
    risks:[
      { name:'Heavy Rain',     pct:55, fill:'fill-1', color:'var(--sev-1)' },
      { name:'Low Visibility', pct:48, fill:'fill-1', color:'var(--sev-1)' },
      { name:'Wind Gusts',     pct:32, fill:'fill-0', color:'var(--sev-0)' },
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
    weather:{ icon:'🌤️', temp:'61 °F', condition:'Mostly Clear', wind:'7 mph winds' },
    impactSub:'No active insights',
    insight:'Conditions are favorable across all New York operations. Continue monitoring wind gusts — brief advisory may persist through Monday.',
    risks:[
      { name:'Wind Gusts', pct:35, fill:'fill-0',  color:'var(--sev-0)' },
      { name:'Light Rain', pct:28, fill:'fill-ok', color:'var(--bg-success)' },
      { name:'Fog',        pct:20, fill:'fill-ok', color:'var(--bg-success)' },
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
Generated by Tomorrow.io / Gale AI</div><button class="copy-btn" onclick="copyAlert(this)">Copy Alert</button>`,

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

// ── GANTT DATE GENERATION ─────────────────────────────────────────────────
const GANTT_START = new Date('2026-04-19'); // Sun Apr 19
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MON_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function buildGanttDates() {
  const grid = document.getElementById('gantt-dates-grid');
  const today = new Date();
  grid.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const d = new Date(GANTT_START);
    d.setDate(d.getDate() + i);
    const isToday = d.toDateString() === today.toDateString();
    const cell = document.createElement('div');
    cell.className = 'gantt-date-cell' + (isToday ? ' today-date' : '');
    cell.textContent = DAY_NAMES[d.getDay()] + ' ' + MON_NAMES[d.getMonth()] + ' ' + d.getDate();
    grid.appendChild(cell);
  }
}

function positionScrubber() {
  const scrubber = document.getElementById('gantt-scrubber');
  const area = document.getElementById('gantt-blocks-area');
  const pill = document.getElementById('gantt-time-pill');
  if (!scrubber || !area) return;

  const now = new Date();

  // Update pill label
  pill.textContent = now.toLocaleString('en-US', { day:'numeric', month:'short',
    hour:'numeric', minute:'2-digit', hour12:true });

  // Calculate position: which day (0-5) + fraction of that day
  const msFromStart = now - GANTT_START;
  const dayIndex = Math.max(0, Math.min(5, Math.floor(msFromStart / 86400000)));
  const dayFrac = (now.getHours() + now.getMinutes() / 60) / 24;

  const areaRect = area.getBoundingClientRect();
  const colW = areaRect.width / 6;
  const leftInArea = (dayIndex + dayFrac) * colW;

  // area starts at 130px (gantt-loc-col width) from the bp-gantt left
  scrubber.style.left = (130 + leftInArea) + 'px';
}

function updateScrubber() {
  positionScrubber();
}

// ── CITY SELECT ────────────────────────────────────────────────────────────
let current = 'chicago';
const leafletMarkers = {};
let cityPin = null;

function selectCity(key) {
  current = key;
  const c = CITIES[key];

  // Topbar breadcrumb tab
  document.getElementById('topbar-tab-text').textContent = `${c.name}, ${c.state}`;

  // Right panel — location
  document.getElementById('rp-loc-name').textContent = `${c.name}, ${c.state}`;

  // Right panel — weather
  document.getElementById('rp-weather-icon').textContent = c.weather.icon;
  document.getElementById('rp-temp').textContent = c.weather.temp;
  document.getElementById('rp-condition').textContent = c.weather.condition;
  document.getElementById('rp-wind').textContent = c.weather.wind;

  // Right panel — impact & insights
  document.getElementById('rp-impact-sub').textContent = c.impactSub;
  document.getElementById('rp-insights-body').textContent = c.insight;

  // Gantt label
  document.getElementById('gantt-loc-label').textContent = `${c.name}, ${c.abbr}`;

  // Move/update blue pin marker on map
  const coords = CITY_COORDS[key].latlng;
  if (cityPin) cityPin.remove();
  cityPin = L.marker(coords, { icon: pinIcon })
    .addTo(leafletMap)
    .bindTooltip(`${c.name}, ${c.abbr}`, {
      permanent: true, direction: 'bottom', offset: [0, 6],
      className: 'city-pin-label',
    });

  // Pan map to selected city
  leafletMap.panTo(coords, { animate: true, duration: 0.5 });

  // Update risk circle styles
  Object.entries(leafletMarkers).forEach(([k, m]) => {
    const isSelected = k === key;
    m.dot.setStyle({
      radius: isSelected ? 11 : 8,
      weight: isSelected ? 2 : 1.5,
      opacity: isSelected ? 1 : 0.55,
      fillOpacity: isSelected ? 1 : 0.65,
    });
    m.ring.setStyle({
      opacity: isSelected ? 0.35 : 0.18,
      fillOpacity: isSelected ? 0.12 : 0.06,
    });
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
});

// CartoDB Positron — light tiles, no API key
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(leafletMap);

leafletMap.zoomControl.setPosition('bottomright');

// Custom blue pin icon for selected city
const pinIcon = L.divIcon({
  html: `<svg width="22" height="30" viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 0C4.93 0 0 4.93 0 11 0 19.25 11 30 11 30s11-10.75 11-19C22 4.93 17.07 0 11 0z" fill="#0072f5"/>
    <circle cx="11" cy="11" r="4.5" fill="white"/>
  </svg>`,
  className: '',
  iconSize: [22, 30],
  iconAnchor: [11, 30],
  tooltipAnchor: [0, 4],
});

// Inject pin label tooltip style
const tipStyle = document.createElement('style');
tipStyle.textContent = `
.city-pin-label {
  background: rgba(19,18,36,0.9) !important;
  border: 1px solid #56546e !important;
  border-radius: 4px !important; color: #f4f4f4 !important;
  font-family: "Muli", sans-serif !important; font-size: 11px !important;
  font-weight: 700 !important; padding: 3px 9px !important;
  box-shadow: 0 3px 10px rgba(0,0,0,0.4) !important;
}
.city-pin-label::before { display: none !important; }
.leaflet-tooltip-bottom.city-pin-label::before { display: none !important; }
.leaflet-city-tip {
  background: rgba(19,18,36,0.9) !important; border: 1px solid #56546e !important;
  border-radius: 4px !important; color: #f4f4f4 !important;
  font-family: "Muli", sans-serif !important; font-size: 11px !important;
  font-weight: 700 !important; padding: 2px 8px !important;
  box-shadow: 0 3px 8px rgba(0,0,0,0.35) !important;
}
.leaflet-city-tip::before { display: none !important; }`;
document.head.appendChild(tipStyle);

// Place risk overlay circles for all 5 cities
Object.entries(CITY_COORDS).forEach(([key, cfg]) => {
  const ring = L.circle(cfg.latlng, {
    radius: cfg.radius,
    color: cfg.color, weight: 1,
    fillColor: cfg.color, fillOpacity: 0.08, opacity: 0.25,
    interactive: false,
  }).addTo(leafletMap);

  const dot = L.circleMarker(cfg.latlng, {
    radius: 9, color: '#fff', weight: 1.5,
    fillColor: cfg.color, fillOpacity: 1,
  }).addTo(leafletMap);

  dot.bindTooltip(CITIES[key].name + ', ' + CITIES[key].abbr, {
    direction: 'top', offset: [0, -10], className: 'leaflet-city-tip',
  });

  dot.on('click', () => selectCity(key));
  leafletMarkers[key] = { dot, ring };
});

// Hide "Loading map layers" once tiles finish
leafletMap.on('load', () => {
  const el = document.getElementById('map-loading-text');
  if (el) el.style.display = 'none';
});

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
buildGanttDates();
selectCity('chicago');
requestAnimationFrame(() => {
  leafletMap.invalidateSize();
  positionScrubber();
});
setInterval(updateScrubber, 30000);

// Pre-loaded chat messages
setTimeout(() => appendMsg(`Good morning! I've analyzed weather conditions across your <strong>5 active Meridian Logistics locations</strong>. There are <strong>3 alerts</strong> requiring attention today.`, 'ai'), 220);
setTimeout(() => appendMsg(`<strong>Chicago (Extreme):</strong> Flood risk escalated to 94/100 overnight — highest in your network. I recommend rerouting the <strong>3 shipments</strong> on the I-90/94 corridor Tuesday–Wednesday. Estimated disruption savings: <strong>$18,000</strong>.`, 'ai'), 640);
setTimeout(() => appendMsg(`<strong>Miami (Warning):</strong> 94°F heat index forecast Thursday–Friday. Policy triggers safety protocols at 91°F — recommend <strong>early shift scheduling</strong> and pausing outdoor ops 12PM–4PM both days.`, 'ai'), 1060);
