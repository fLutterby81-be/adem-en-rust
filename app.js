/* Adem & Rust – app-logica
 *
 * Opbouw:
 *   1. Configuratie (opslag, thema's, technieken)
 *   2. Hulpfuncties (opslag, datums, vertaling)
 *   3. Geluid (Web Audio)
 *   4. Scherm aanhouden (Wake Lock)
 *   5. Ademsessie
 *   6. Statistieken
 *   7. Herinnering
 *   8. Taal, thema, navigatie
 *   9. Start
 */
(() => {
'use strict';

/* ================= 1. Configuratie ================= */

// Bewaarsleutels; ongewijzigd t.o.v. de vorige versie zodat bestaande statistieken blijven bestaan.
const STORAGE = {
    stats: 'ar_stats_v3',
    reminder: 'ar_reminder_v3',
    lang: 'ar_lang_v3',
    theme: 'ar_theme_v3',
    technique: 'ar_technique_v3'
};

// fg = tekstkleur (RGB-drietal), surface = paneelachtergrond. Kleuren zijn gekozen op voldoende contrast.
const THEMES = {
    ocean:    { bg: ['#0f2027', '#203a43', '#2c5364'], accent: '#64d8cb', face: '🌊', sound: 'waves' },
    sunset:   { bg: ['#e8452b', '#c81f6a', '#9e2a5e'], accent: '#ffd76a', face: '🌅', sound: 'warm',
                surface: 'rgb(0 0 0 / 0.2)', btnText: '#9e2a5e' },
    forest:   { bg: ['#134e5e', '#2c6e60', '#3f8466'], accent: '#b4ecd6', face: '🌲', sound: 'forest',
                surface: 'rgb(0 0 0 / 0.2)' },
    night:    { bg: ['#0f0c29', '#302b63', '#24243e'], accent: '#b19cd9', face: '🌙', sound: 'night' },
    candy:    { bg: ['#ff9a9e', '#fecfef', '#ffecd2'], accent: '#b0174f', face: '🍬', sound: 'bells',
                fg: '74 24 56', surface: 'rgb(255 255 255 / 0.4)', btnText: '#ffecd2', onAccent: '#ffffff', scheme: 'light' },
    lavender: { bg: ['#5f6fd6', '#764ba2', '#8a6cc0'], accent: '#ecdcff', face: '💜', sound: 'drone',
                surface: 'rgb(0 0 0 / 0.2)', btnText: '#5a3a85' }
};

// scale = grootte van de cirkel aan het einde van de fase.
const TECHNIQUES = {
    '4-7-8':  { cycles: 6,  phases: [
        { type: 'inhale', duration: 4, scale: 1.8 },
        { type: 'hold',   duration: 7, scale: 1.8 },
        { type: 'exhale', duration: 8, scale: 1 } ] },
    box:      { cycles: 8,  phases: [
        { type: 'inhale', duration: 4, scale: 1.8 },
        { type: 'hold',   duration: 4, scale: 1.8 },
        { type: 'exhale', duration: 4, scale: 1 },
        { type: 'pause',  duration: 4, scale: 1 } ] },
    equal:    { cycles: 10, phases: [
        { type: 'inhale', duration: 4, scale: 1.6 },
        { type: 'exhale', duration: 4, scale: 1 } ] },
    coherent: { cycles: 10, phases: [
        { type: 'inhale', duration: 5, scale: 1.7 },
        { type: 'exhale', duration: 5, scale: 1 } ] }
};

const DEFAULT_REMINDER = { enabled: false, time: '20:00', lastShown: null };
const REMINDER_WINDOW_MS = 60 * 60 * 1000; // een gemiste herinnering wordt tot een uur later nog getoond

/* ================= 2. Hulpfuncties ================= */

const $ = id => document.getElementById(id);

function readText(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}
function writeText(key, value) {
    try { localStorage.setItem(key, value); } catch { /* opslag niet beschikbaar (bv. privévenster) */ }
}
function readJSON(key) {
    try { return JSON.parse(readText(key)); } catch { return null; }
}
function writeJSON(key, value) {
    writeText(key, JSON.stringify(value));
}

/** Lokale datum als 'JJJJ-MM-DD' (zelfde formaat als de vorige versie). */
function dateKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function daysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d;
}

const easeInOutSine = x => -(Math.cos(Math.PI * x) - 1) / 2;

let lang = detectLanguage();

function detectLanguage() {
    const saved = readText(STORAGE.lang);
    if (saved && I18N[saved]) return saved;
    for (const l of navigator.languages || [navigator.language || '']) {
        const code = (l || '').slice(0, 2).toLowerCase();
        if (I18N[code]) return code;
    }
    return 'en';
}

/** Vertaling opzoeken, bv. t('techniques.box.name'). */
function t(key) {
    const value = key.split('.').reduce((obj, k) => (obj == null ? obj : obj[k]), I18N[lang]);
    return value == null ? key : value;
}

/* ================= 3. Geluid ================= */

const sound = (() => {
    let ctx = null;
    let master = null;
    let ambient = null;        // { bus, sources }
    let generation = 0;        // verhoogt bij elke stop, zodat oude herhaal-lussen vanzelf stoppen
    const timeouts = new Set();
    const buffers = {};

    function context() {
        if (!ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return null;
            ctx = new AudioCtx();
            master = ctx.createGain();
            master.connect(ctx.destination);
        }
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        return ctx;
    }

    /** Ruis wordt één keer berekend en daarna in een lus afgespeeld (geen ScriptProcessor meer nodig). */
    function noiseBuffer(kind) {
        if (buffers[kind]) return buffers[kind];
        const rate = ctx.sampleRate;
        const length = rate * 6;
        const fade = Math.floor(rate * 0.5);
        const raw = new Float32Array(length + fade);
        if (kind === 'pink') {
            let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
            for (let i = 0; i < raw.length; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99886 * b0 + white * 0.0555179;
                b1 = 0.99332 * b1 + white * 0.0750759;
                b2 = 0.96900 * b2 + white * 0.1538520;
                b3 = 0.86650 * b3 + white * 0.3104856;
                b4 = 0.55000 * b4 + white * 0.5329522;
                b5 = -0.7616 * b5 - white * 0.0168980;
                raw[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
                b6 = white * 0.115926;
            }
        } else { // brown
            let last = 0;
            for (let i = 0; i < raw.length; i++) {
                last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
                raw[i] = last * 3.5;
            }
        }
        // Begin en einde in elkaar laten overvloeien, zodat de lus geen tik geeft.
        const buffer = ctx.createBuffer(1, length, rate);
        const out = buffer.getChannelData(0);
        out.set(raw.subarray(0, length));
        for (let i = 0; i < fade; i++) {
            const w = i / fade;
            out[i] = raw[i] * w + raw[length + i] * (1 - w);
        }
        buffers[kind] = buffer;
        return buffer;
    }

    function gain(value) {
        const g = ctx.createGain();
        g.gain.value = value;
        return g;
    }
    function filter(type, frequency, q) {
        const f = ctx.createBiquadFilter();
        f.type = type;
        f.frequency.value = frequency;
        if (q !== undefined) f.Q.value = q;
        return f;
    }
    function chain(...nodes) {
        for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]);
    }

    function bell(freq, when, duration, volume, destination) {
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, when);
        env.gain.linearRampToValueAtTime(volume, when + 0.01);
        env.gain.exponentialRampToValueAtTime(0.0001, when + duration);
        chain(osc, env, destination);
        osc.start(when);
        osc.stop(when + duration + 0.05);
    }

    function repeatRandomly(fn, minMs, maxMs) {
        const gen = generation;
        const schedule = () => {
            const id = setTimeout(() => {
                timeouts.delete(id);
                if (gen !== generation) return;
                fn();
                schedule();
            }, minMs + Math.random() * (maxMs - minMs));
            timeouts.add(id);
        };
        schedule();
    }

    function startAmbient(kind) {
        if (!context()) return;
        stopAmbient();
        const now = ctx.currentTime;
        const bus = ctx.createGain();
        bus.gain.setValueAtTime(0, now);
        bus.gain.linearRampToValueAtTime(1, now + 1.5); // zacht laten opkomen
        bus.connect(master);

        const sources = [];
        const play = node => { node.start(); sources.push(node); return node; };
        const noise = type => { const src = ctx.createBufferSource(); src.buffer = noiseBuffer(type); src.loop = true; return play(src); };
        const sine = freq => { const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq; return play(osc); };

        switch (kind) {
            case 'waves': { // golven: ruis met een filter dat traag open en dicht gaat
                const lp = filter('lowpass', 500);
                chain(noise('pink'), lp, gain(0.04), bus);
                chain(sine(0.12), gain(350), lp.frequency);
                break;
            }
            case 'warm':
                chain(noise('pink'), filter('lowpass', 300, 0.5), gain(0.03), bus);
                break;
            case 'forest':
                chain(noise('brown'), filter('bandpass', 200, 0.6), gain(0.03), bus);
                repeatRandomly(() => { // vogeltjes
                    const t0 = ctx.currentTime;
                    const f = 2000 + Math.random() * 1500;
                    bell(f, t0, 0.15, 0.02, bus);
                    bell(f + 300, t0 + 0.1, 0.12, 0.015, bus);
                    if (Math.random() > 0.5) bell(f + 600, t0 + 0.2, 0.1, 0.01, bus);
                }, 4000, 10000);
                break;
            case 'night':
                chain(noise('pink'), gain(0.015), bus);
                chain(sine(110), gain(0.02), bus);
                break;
            case 'bells': {
                const notes = [523, 659, 784, 880, 1047];
                const pick = () => notes[Math.floor(Math.random() * notes.length)];
                repeatRandomly(() => {
                    const t0 = ctx.currentTime;
                    bell(pick(), t0, 1.5, 0.02, bus);
                    if (Math.random() > 0.6) bell(pick(), t0 + 0.5, 1.2, 0.015, bus);
                }, 3000, 8000);
                break;
            }
            case 'drone':
                chain(sine(136.1), gain(0.02), bus);
                chain(sine(172.06), gain(0.015), bus);
                break;
        }
        ambient = { bus, sources };
    }

    function stopAmbient() {
        generation++;
        timeouts.forEach(clearTimeout);
        timeouts.clear();
        if (!ambient || !ctx) { ambient = null; return; }
        const { bus, sources } = ambient;
        ambient = null;
        const now = ctx.currentTime;
        bus.gain.cancelScheduledValues(now);
        bus.gain.setValueAtTime(bus.gain.value, now);
        bus.gain.linearRampToValueAtTime(0, now + 0.4); // zacht laten uitsterven
        sources.forEach(s => { try { s.stop(now + 0.45); } catch { /* al gestopt */ } });
        setTimeout(() => bus.disconnect(), 600);
    }

    function tone(freq, duration) {
        if (!ctx) return;
        bell(freq, ctx.currentTime, duration, 0.04, master);
    }

    return { context, startAmbient, stopAmbient, tone };
})();

let soundEnabled = false;

function setSound(on) {
    soundEnabled = on;
    if (on && sound.context()) sound.startAmbient(THEMES[currentTheme].sound);
    else sound.stopAmbient();
    renderSoundToggle();
}

function renderSoundToggle() {
    $('soundToggle').setAttribute('aria-pressed', String(soundEnabled));
    $('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
    $('soundLabel').textContent = t(soundEnabled ? 'soundOn' : 'soundOff');
}

/** Korte toon bij een faseovergang; alleen als het geluid aanstaat. */
function cue(freq, duration) {
    if (soundEnabled) sound.tone(freq, duration);
}

/* ================= 4. Scherm aanhouden ================= */

const wakeLock = {
    sentinel: null,
    async acquire() {
        if (!('wakeLock' in navigator) || this.sentinel) return;
        try {
            const sentinel = await navigator.wakeLock.request('screen');
            sentinel.addEventListener('release', () => { if (this.sentinel === sentinel) this.sentinel = null; });
            this.sentinel = sentinel;
            if (!session.running) this.release(); // sessie werd intussen gestopt
        } catch { /* niet toegestaan of niet ondersteund */ }
    },
    release() {
        const sentinel = this.sentinel;
        this.sentinel = null;
        if (sentinel) sentinel.release().catch(() => {});
    }
};

/* ================= 5. Ademsessie ================= */

let currentTheme = 'ocean';
let currentTechnique = '4-7-8';
let displayState = 'idle';     // 'idle' | 'running' | 'done'
let doneTimer = null;

const session = { running: false, start: 0, step: -1, second: -1, cycle: 0, phaseIndex: 0, frame: 0 };

const orb = $('orb');
const orbFace = $('orbFace');
const stage = orb.parentElement;
const ring = $('ringProgress');
const RING_LENGTH = 2 * Math.PI * ring.r.baseVal.value;
ring.style.strokeDasharray = `${RING_LENGTH} ${RING_LENGTH}`;

function setRing(progress) {
    ring.style.strokeDashoffset = String(RING_LENGTH * (1 - progress));
}

function technique() {
    return TECHNIQUES[currentTechnique];
}

function renderInfo() {
    $('infoTitle').textContent = t(`techniques.${currentTechnique}.name`);
    $('infoDesc').textContent = t(`techniques.${currentTechnique}.desc`);
}

/** Instructie, fasenaam en cyclusteller, afhankelijk van de toestand. */
function renderStatusText() {
    const tech = technique();
    if (displayState === 'running') {
        const phase = tech.phases[session.phaseIndex];
        $('instruction').textContent = t(`techniques.${currentTechnique}.steps.${phase.type}`);
        $('phaseLabel').textContent = t(`phases.${phase.type}`);
        $('cycleCounter').textContent = t('cycleText')(session.cycle + 1, tech.cycles);
    } else if (displayState === 'done') {
        $('instruction').textContent = t('done');
        $('phaseLabel').textContent = t('doneLabel');
        $('cycleCounter').textContent = t('cycleText')(tech.cycles, tech.cycles);
    } else {
        $('instruction').textContent = t('readyInstruction');
        $('phaseLabel').textContent = t('ready');
        $('cycleCounter').textContent = t('cycleText')(0, tech.cycles);
    }
}

function resetDisplay() {
    displayState = 'idle';
    orb.style.transform = 'scale(1)';
    stage.classList.remove('running');
    setRing(0);
    $('timer').textContent = '0';
    renderStatusText();
}

function startSession() {
    if (session.running) return;
    clearTimeout(doneTimer);
    orbFace.textContent = THEMES[currentTheme].face;

    Object.assign(session, { running: true, start: performance.now(), step: -1, second: -1, cycle: 0, phaseIndex: 0 });
    displayState = 'running';
    $('startBtn').hidden = true;
    $('stopBtn').hidden = false;
    stage.classList.add('running');

    if (soundEnabled) sound.context();
    cue(440, 0.3);
    wakeLock.acquire();
    session.frame = requestAnimationFrame(tick);
}

/** Stopt de animatie; geeft het aantal volledig afgewerkte cycli terug. */
function endSession() {
    session.running = false;
    cancelAnimationFrame(session.frame);
    wakeLock.release();
    $('startBtn').hidden = false;
    $('stopBtn').hidden = true;
    return session.cycle;
}

/** Stoppen door de gebruiker: voltooide cycli tellen wel mee in de statistieken. */
function stopSession() {
    if (!session.running) return;
    const completed = endSession();
    if (completed > 0) recordSession(completed);
    resetDisplay();
}

function finishSession() {
    const tech = technique();
    endSession();
    recordSession(tech.cycles);
    displayState = 'done';
    stage.classList.remove('running');
    orb.style.transform = 'scale(1)';
    setRing(0);
    $('timer').textContent = '0';
    renderStatusText();
    orbFace.textContent = '✨';
    cue(659, 0.4);
    doneTimer = setTimeout(() => { orbFace.textContent = THEMES[currentTheme].face; }, 2000);
}

/**
 * Eén animatieframe. De positie in de oefening wordt telkens berekend uit de
 * verstreken tijd sinds de start, zodat de timing klopt, ook als de browser
 * frames overslaat of de app even op de achtergrond stond.
 */
function tick(now) {
    if (!session.running) return;
    const tech = technique();
    const phases = tech.phases;
    const cycleLength = phases.reduce((sum, p) => sum + p.duration, 0);
    const elapsed = Math.max(0, (now - session.start) / 1000);
    const cycle = Math.floor(elapsed / cycleLength);

    if (cycle >= tech.cycles) {
        session.cycle = tech.cycles;
        finishSession();
        return;
    }

    let offset = elapsed - cycle * cycleLength;
    let index = 0;
    while (index < phases.length - 1 && offset >= phases[index].duration) {
        offset -= phases[index].duration;
        index++;
    }
    const phase = phases[index];
    const progress = Math.min(offset / phase.duration, 1);

    const step = cycle * phases.length + index;
    if (step !== session.step) {
        if (session.step >= 0) cue(index === 0 ? 523 : 440, index === 0 ? 0.25 : 0.12);
        Object.assign(session, { step, cycle, phaseIndex: index });
        renderStatusText();
    }

    const remaining = Math.ceil(phase.duration - offset);
    if (remaining !== session.second) {
        session.second = remaining;
        $('timer').textContent = String(remaining);
    }

    // De cirkel groeit/krimpt van de grootte van de vorige fase naar die van deze fase.
    const previous = phases[(index + phases.length - 1) % phases.length];
    const scale = previous.scale + (phase.scale - previous.scale) * easeInOutSine(progress);
    orb.style.transform = `scale(${scale.toFixed(4)})`;
    setRing(progress);

    session.frame = requestAnimationFrame(tick);
}

function selectTechnique(name) {
    if (!TECHNIQUES[name]) return;
    if (session.running) stopSession();
    clearTimeout(doneTimer);
    orbFace.textContent = THEMES[currentTheme].face;
    currentTechnique = name;
    writeText(STORAGE.technique, name);
    document.querySelectorAll('.technique-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.technique === name));
    });
    renderInfo();
    resetDisplay();
}

/* ================= 6. Statistieken ================= */

function loadStats() {
    const s = readJSON(STORAGE.stats) || {};
    return {
        sessions: Number(s.sessions) || 0,
        totalCycles: Number(s.totalCycles) || 0,
        daily: s.daily && typeof s.daily === 'object' ? s.daily : {}
    };
}

function recordSession(cycles) {
    const stats = loadStats();
    const today = dateKey(new Date());
    stats.sessions += 1;
    stats.totalCycles += cycles;
    stats.daily[today] = (stats.daily[today] || 0) + cycles;
    writeJSON(STORAGE.stats, stats);
    renderStats();
}

/** Aantal dagen op rij met minstens één cyclus, tot vandaag (of gisteren als je vandaag nog niet oefende). */
function getStreak(stats) {
    const d = new Date();
    if (!stats.daily[dateKey(d)]) d.setDate(d.getDate() - 1);
    let streak = 0;
    while (stats.daily[dateKey(d)]) {
        streak++;
        d.setDate(d.getDate() - 1);
    }
    return streak;
}

function renderStats() {
    const stats = loadStats();
    const today = dateKey(new Date());
    const week = [6, 5, 4, 3, 2, 1, 0].map(n => {
        const date = daysAgo(n);
        return { date, value: stats.daily[dateKey(date)] || 0 };
    });
    const streak = getStreak(stats);
    const lastDay = Object.keys(stats.daily).filter(k => stats.daily[k] > 0).sort().pop();

    $('statTotalCycles').textContent = stats.totalCycles;
    $('statTotalSessions').textContent = stats.sessions;
    $('statStreak').textContent = streak;
    $('statToday').textContent = stats.daily[today] || 0;
    $('statWeek').textContent = week.reduce((sum, d) => sum + d.value, 0);
    $('statLast').textContent = lastDay
        ? new Date(`${lastDay}T12:00:00`).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' })
        : '–';

    // Streak boven de oefening
    if (streak === 0) $('streakText').textContent = t('streak0');
    else $('streakText').textContent = t(stats.daily[today] ? 'streakActive' : 'streakPaused')(streak);

    // Weekgrafiek
    const weekday = new Intl.DateTimeFormat(lang, { weekday: 'short' });
    const max = Math.max(1, ...week.map(d => d.value));
    $('chartBars').replaceChildren(...week.map((d, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'bar-wrap' + (i === week.length - 1 ? ' today' : '');
        const val = document.createElement('div');
        val.className = 'bar-val';
        val.textContent = d.value;
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${Math.max(4, (d.value / max) * 100)}px`;
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = weekday.format(d.date);
        wrap.append(val, bar, label);
        return wrap;
    }));
}

/* ================= 7. Herinnering ================= */

function loadReminder() {
    return { ...DEFAULT_REMINDER, ...(readJSON(STORAGE.reminder) || {}) };
}

function saveReminder(changes) {
    // Na een wijziging mag de herinnering vandaag opnieuw verschijnen.
    writeJSON(STORAGE.reminder, { ...loadReminder(), ...changes, lastShown: null });
}

function renderReminderSwitch(on) {
    $('reminderToggle').setAttribute('aria-checked', String(on));
}

function checkReminder() {
    const r = loadReminder();
    if (!r.enabled || !/^\d{2}:\d{2}$/.test(r.time)) return;
    const now = new Date();
    const today = dateKey(now);
    if (r.lastShown === today) return;
    const [h, m] = r.time.split(':').map(Number);
    const due = new Date(now);
    due.setHours(h, m, 0, 0);
    const late = now - due;
    if (late < 0 || late > REMINDER_WINDOW_MS) return;
    writeJSON(STORAGE.reminder, { ...r, lastShown: today });
    showReminder();
}

let bannerTimer = null;

function showReminder() {
    const message = t('reminderMsg');
    $('reminderBannerText').textContent = message;
    $('reminderBanner').hidden = false;
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => { $('reminderBanner').hidden = true; }, 60000);

    // Staat de app op de achtergrond, dan ook een systeemmelding (als die toegestaan is).
    if (document.visibilityState === 'visible' || !('Notification' in window) || Notification.permission !== 'granted') return;
    const options = { body: message, icon: 'icons/icon-192.png', tag: 'adem-rust-reminder' };
    if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistration()
            .then(reg => (reg ? reg.showNotification('Adem & Rust', options) : new Notification('Adem & Rust', options)))
            .catch(() => {});
    } else {
        try { new Notification('Adem & Rust', options); } catch { /* niet ondersteund */ }
    }
}

function initReminder() {
    const r = loadReminder();
    const timeInput = $('reminderTime');
    timeInput.value = r.time;
    renderReminderSwitch(r.enabled);

    $('reminderToggle').addEventListener('click', () => {
        const on = $('reminderToggle').getAttribute('aria-checked') !== 'true';
        renderReminderSwitch(on);
        saveReminder({ enabled: on, time: timeInput.value || DEFAULT_REMINDER.time });
        if (on && 'Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().catch(() => {});
        }
    });
    timeInput.addEventListener('change', () => {
        if (timeInput.value) saveReminder({ time: timeInput.value });
    });
    $('reminderBannerClose').addEventListener('click', () => { $('reminderBanner').hidden = true; });

    setInterval(checkReminder, 15000);
    checkReminder();
}

/* ================= 8. Taal, thema, navigatie ================= */

function setLanguage(code) {
    if (!I18N[code]) code = 'en';
    lang = code;
    writeText(STORAGE.lang, code);
    document.documentElement.lang = code;

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === code));
    });
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.setAttribute('aria-label', t(`themes.${dot.dataset.theme}`));
        dot.title = t(`themes.${dot.dataset.theme}`);
    });

    renderSoundToggle();
    renderInfo();
    renderStatusText();
    renderStats();
}

function buildThemeDots() {
    const container = $('themeSelector');
    Object.entries(THEMES).forEach(([name, theme]) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'theme-dot';
        dot.dataset.theme = name;
        dot.style.background = `linear-gradient(135deg, ${theme.bg.join(', ')})`;
        dot.addEventListener('click', () => applyTheme(name));
        container.append(dot);
    });
}

function applyTheme(name) {
    if (!THEMES[name]) name = 'ocean';
    currentTheme = name;
    writeText(STORAGE.theme, name);
    const th = THEMES[name];
    const root = document.documentElement.style;
    root.setProperty('--bg-1', th.bg[0]);
    root.setProperty('--bg-2', th.bg[1]);
    root.setProperty('--bg-3', th.bg[2]);
    root.setProperty('--accent', th.accent);
    root.setProperty('--fg', th.fg || '255 255 255');
    root.setProperty('--surface', th.surface || 'rgb(255 255 255 / 0.08)');
    root.setProperty('--btn-text', th.btnText || th.bg[0]);
    root.setProperty('--on-accent', th.onAccent || th.bg[0]);
    root.setProperty('--scheme', th.scheme || 'dark');
    root.setProperty('--text-shadow', th.fg ? 'none' : '0 1px 2px rgb(0 0 0 / 0.15)');
    document.querySelector('meta[name="theme-color"]').content = th.bg[0];

    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.setAttribute('aria-pressed', String(dot.dataset.theme === name));
    });
    if (displayState !== 'done') orbFace.textContent = th.face;
    if (soundEnabled) sound.startAmbient(th.sound);
}

function createBackdrop() {
    const container = $('backdrop');
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.className = Math.random() > 0.5 ? 'star' : 'particle';
        const size = Math.random() * 4 + 2;
        Object.assign(el.style, {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`
        });
        container.append(el);
    }
}

function showView(name) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        const active = tab.dataset.view === name;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
    });
    document.querySelectorAll('.view').forEach(view => { view.hidden = view.id !== `view-${name}`; });
    if (name === 'stats') renderStats();
}

function bindEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    document.querySelectorAll('.technique-btn').forEach(btn => {
        btn.addEventListener('click', () => selectTechnique(btn.dataset.technique));
    });
    $('soundToggle').addEventListener('click', () => setSound(!soundEnabled));
    $('startBtn').addEventListener('click', startSession);
    $('stopBtn').addEventListener('click', stopSession);

    const tabs = [...document.querySelectorAll('.nav-tab')];
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => showView(tab.dataset.view));
        tab.addEventListener('keydown', e => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
            next.focus();
            showView(next.dataset.view);
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') return;
        if (session.running) wakeLock.acquire();
        renderStats();      // datum kan intussen veranderd zijn
        checkReminder();
    });
}

/* ================= 9. Start ================= */

buildThemeDots();
createBackdrop();
bindEvents();
applyTheme(readText(STORAGE.theme) || 'ocean');
selectTechnique(TECHNIQUES[readText(STORAGE.technique)] ? readText(STORAGE.technique) : '4-7-8');
setLanguage(lang);
initReminder();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { /* offline-modus niet beschikbaar */ });
    });
}
})();
