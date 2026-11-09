/**
 * TOMORROW'S YOU — Main Application Script
 * Features:
 * 1. Research Facility Ambient Canvas Particle Simulation
 * 2. Interactive Step-by-Step Echo Mechanic Chamber Simulator
 * 3. Dynamic Development Log (from site-config.js)
 * 4. Accessible FAQ Accordion (from site-config.js)
 * 5. Dynamic Download Status Engine (from site-config.js)
 * 6. Scroll-Driven IntersectionObserver Reveal Effects
 */

document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initMechanicVisualizer();
  initDevLog();
  initFAQ();
  initDownloadSection();
  initScrollReveals();
});

/* ==========================================================================
   1. AMBIENT RESEARCH FACILITY PARTICLE CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("facilityCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 35), 45);

  const colors = [
    "rgba(84, 230, 234, ",  // Player cyan
    "rgba(167, 139, 250, ", // Echo violet
    "rgba(255, 190, 85, "   // Energy amber
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 0.45 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.45 + 0.15;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulse = Math.random() * Math.PI;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.pulse += this.pulseSpeed;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      const currentAlpha = Math.max(0, this.alpha * (Math.sin(this.pulse) * 0.3 + 0.7));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorPrefix + currentAlpha + ")";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  let resizeTimeout;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 200);
    },
    { passive: true }
  );
}

/* ==========================================================================
   2. INTERACTIVE ECHO MECHANIC CHAMBER SIMULATOR
   Accurately illustrates:
   Step 1: Record attempt (Player moves to Plate 1 and records WAIT)
   Step 2: Create Echo (Attempt saved as teammate; Player returns to Spawn)
   Step 3: Synchronize (Simultaneous playback; Echo steps on plate, Door opens)
   Step 4: Control Time & Expiration (Echo fixed-duration expires; Player passes door)
   Step 5: Escape (Only real player can complete level at Exit)
   ========================================================================== */
function initMechanicVisualizer() {
  const steps = [
    {
      step: 1,
      badge: "PHASE 01 — RECORD",
      title: "Record Your Path",
      desc: "Navigate through the chamber. Every step, direction change, and turn is recorded into a temporal action buffer.",
      rule: "Key Mechanic: You can intentionally record WAIT actions to keep your character in place and extend the timeline.",
      boardState: {
        playerPos: { x: 3, y: 1 }, // Standing on Plate
        echoVisible: false,
        plateActive: true,
        doorOpen: true,
        turnText: "Turn 04 / 04 [Recorded 3 Moves + 1 WAIT]",
        echoLifetime: 0
      }
    },
    {
      step: 2,
      badge: "PHASE 02 — CREATE ECHO",
      title: "Deploy a Temporal Teammate",
      desc: "Press 'CREATE ECHO'. Your previous attempt is saved into a holographic Echo, and you are sent back to the chamber spawn point.",
      rule: "Key Mechanic: Your Echo becomes a teammate on your next attempt. It preserves the exact moves and WAITs recorded.",
      boardState: {
        playerPos: { x: 1, y: 1 }, // Back at spawn
        echoVisible: true,
        echoPos: { x: 1, y: 1 },
        plateActive: false,
        doorOpen: false,
        turnText: "Turn 00 / 04 [Echo Teammate Ready]",
        echoLifetime: 4
      }
    },
    {
      step: 3,
      badge: "PHASE 03 — SYNCHRONIZE",
      title: "Simultaneous Timeline Playback",
      desc: "As you move, existing Echoes replay their recorded timeline simultaneously. The Echo steps onto Plate 1, triggering the circuit to unlock Door A.",
      rule: "Key Mechanic: Both you and active Echoes can occupy pressure plates to activate interconnected mechanisms.",
      boardState: {
        playerPos: { x: 1, y: 3 }, // Moving down corridor
        echoVisible: true,
        echoPos: { x: 3, y: 1 }, // Holding plate
        plateActive: true,
        doorOpen: true,
        turnText: "Turn 02 / 04 [Door A UNLOCKED — Echo Holding Plate]",
        echoLifetime: 2
      }
    },
    {
      step: 4,
      badge: "PHASE 04 — CONTROL TIME & EXPIRATION",
      title: "Fixed Lifecycle & Expiration",
      desc: "Echoes do NOT stay indefinitely. Once their recorded sequence finishes, the Echo dissolves into particles and the plate releases.",
      rule: "CRITICAL: Echoes expire when finished. You must sprint through the door before the Echo's WAIT buffer runs out!",
      boardState: {
        playerPos: { x: 3, y: 3 }, // Safely through Door A
        echoVisible: true,
        echoPos: { x: 3, y: 1 },
        plateActive: true,
        doorOpen: true,
        turnText: "Turn 03 / 04 [Echo Expiring in 1 Turn! Player Clears Door]",
        echoLifetime: 1
      }
    },
    {
      step: 5,
      badge: "PHASE 05 — ESCAPE",
      title: "Real Player Reaches Exit",
      desc: "The Echo has dissolved, and Door A seals shut behind you. But you are already through the chokepoint and step into the Exit Portal.",
      rule: "Victory Rule: Only the real player can complete a chamber by reaching the exit. Echoes cannot complete levels.",
      boardState: {
        playerPos: { x: 5, y: 3 }, // Reached Exit portal
        echoVisible: false,
        plateActive: false,
        doorOpen: false,
        turnText: "Turn 04 / 04 [CHAMBER ESCAPED — COMPLETE!]",
        echoLifetime: 0
      }
    }
  ];

  let currentStepIdx = 0;
  const navButtons = document.querySelectorAll(".mechanic-step-btn");
  const badgeEl = document.getElementById("mechanicBadge");
  const titleEl = document.getElementById("mechanicTitle");
  const descEl = document.getElementById("mechanicDesc");
  const ruleEl = document.getElementById("mechanicRule");
  const btnNext = document.getElementById("mechanicNextBtn");
  const svgBoard = document.getElementById("mechanicBoardSvg");

  function renderBoard(state) {
    if (!svgBoard) return;

    // Grid coordinates: 6 columns x 5 rows.
    // Cell size: 60px x 60px.
    const cellSize = 60;
    const originX = 50;
    const originY = 30;

    const toX = (gridX) => originX + gridX * cellSize + cellSize / 2;
    const toY = (gridY) => originY + gridY * cellSize + cellSize / 2;

    const playerX = toX(state.playerPos.x);
    const playerY = toY(state.playerPos.y);

    const plateColor = state.plateActive ? "#FFBE55" : "rgba(84, 230, 234, 0.4)";
    const plateGlow = state.plateActive ? "0 0 16px #FFBE55" : "none";
    const doorStroke = state.doorOpen ? "rgba(84, 230, 234, 0.25)" : "#FF647C";
    const doorDash = state.doorOpen ? "6 6" : "none";
    const doorStatusText = state.doorOpen ? "DOOR A: OPEN" : "DOOR A: LOCKED";
    const doorStatusColor = state.doorOpen ? "#54E6EA" : "#FF647C";

    let echoMarkup = "";
    if (state.echoVisible && state.echoPos) {
      const echoX = toX(state.echoPos.x);
      const echoY = toY(state.echoPos.y);
      echoMarkup = `
        <!-- Echo Hologram Avatar -->
        <g transform="translate(${echoX}, ${echoY})" class="pulse-echo">
          <circle r="22" fill="none" stroke="#A78BFA" stroke-width="2" stroke-dasharray="6 4" opacity="0.8"/>
          <circle r="16" fill="rgba(167, 139, 250, 0.45)" stroke="#C4B5FD" stroke-width="2"/>
          <text y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" font-weight="bold" fill="#F5F7FF">ECHO</text>
          <text y="34" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="9" fill="#A78BFA">LIFETIME: ${state.echoLifetime}</text>
        </g>
      `;
    }

    svgBoard.innerHTML = `
      <defs>
        <pattern id="facilityGridPat" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(84, 230, 234, 0.08)" stroke-width="1"/>
        </pattern>
        <filter id="simGlow">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Background Floor Grid -->
      <rect x="${originX}" y="${originY}" width="360" height="240" fill="#0C1324" stroke="rgba(84, 230, 234, 0.25)" stroke-width="2" rx="8"/>
      <rect x="${originX}" y="${originY}" width="360" height="240" fill="url(#facilityGridPat)" rx="8"/>

      <!-- Interior Barrier Wall -->
      <rect x="${toX(2) - 8}" y="${originY + 60}" width="16" height="120" fill="#1A243B" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" rx="3"/>

      <!-- Pressure Plate 1 at (3, 1) -->
      <g transform="translate(${toX(3)}, ${toY(1)})">
        <rect x="-24" y="-24" width="48" height="48" rx="6" fill="${state.plateActive ? 'rgba(255, 190, 85, 0.25)' : 'rgba(20, 28, 46, 0.7)'}" stroke="${plateColor}" stroke-width="2" style="filter: ${plateGlow};"/>
        <text y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="11" font-weight="bold" fill="${plateColor}">PLATE 1</text>
      </g>

      <!-- Logic Connection Line between Plate 1 and Door A -->
      <path d="M ${toX(3)} ${toY(1) + 24} L ${toX(3)} ${toY(2)} L ${toX(2)} ${toY(2)}" fill="none" stroke="${plateColor}" stroke-width="2" stroke-dasharray="4 4" opacity="0.7"/>

      <!-- Door A at (2, 2) -->
      <g transform="translate(${toX(2)}, ${toY(2)})">
        <rect x="-26" y="-12" width="52" height="24" rx="4" fill="${state.doorOpen ? 'rgba(84, 230, 234, 0.08)' : 'rgba(255, 100, 124, 0.35)'}" stroke="${doorStroke}" stroke-width="2.5" stroke-dasharray="${doorDash}"/>
        <text y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="9" font-weight="bold" fill="${doorStatusColor}">
          ${state.doorOpen ? 'OPEN' : 'LOCKED'}
        </text>
      </g>

      <!-- Exit Portal at (5, 3) -->
      <g transform="translate(${toX(5)}, ${toY(3)})">
        <circle r="22" fill="rgba(84, 230, 234, 0.18)" stroke="#54E6EA" stroke-width="2"/>
        <circle r="14" fill="none" stroke="#7EF2F5" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" font-weight="bold" fill="#54E6EA">EXIT</text>
      </g>

      <!-- Echo Representation -->
      ${echoMarkup}

      <!-- Real Player Avatar -->
      <g transform="translate(${playerX}, ${playerY})">
        <circle r="20" fill="#54E6EA" filter="url(#simGlow)"/>
        <circle r="14" fill="#0B1020"/>
        <circle r="7" fill="#7EF2F5"/>
        <text y="32" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="9" font-weight="bold" fill="#7EF2F5">YOU</text>
      </g>

      <!-- Chamber Telemetry Status Bar -->
      <g transform="translate(${originX + 10}, ${originY + 225})">
        <rect x="0" y="0" width="340" height="22" rx="4" fill="rgba(4, 7, 16, 0.85)" stroke="rgba(84, 230, 234, 0.25)"/>
        <text x="10" y="15" font-family="'IBM Plex Mono', monospace" font-size="9.5" fill="#54E6EA">${state.turnText}</text>
      </g>
    `;
  }

  function setStep(idx) {
    currentStepIdx = idx;
    const item = steps[currentStepIdx];
    if (!item) return;

    navButtons.forEach((btn, i) => {
      if (i === currentStepIdx) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    });

    if (badgeEl) badgeEl.textContent = item.badge;
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (ruleEl) ruleEl.textContent = item.rule;

    renderBoard(item.boardState);

    if (btnNext) {
      btnNext.innerHTML =
        currentStepIdx === steps.length - 1
          ? `RESTART WALKTHROUGH <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`
          : `NEXT STEP (${currentStepIdx + 2}/${steps.length}) <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
    }
  }

  navButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => setStep(idx));
  });

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const nextIdx = (currentStepIdx + 1) % steps.length;
      setStep(nextIdx);
    });
  }

  // Initial render
  setStep(0);
}

/* ==========================================================================
   3. DYNAMIC DEVELOPMENT LOG FEED (from site-config.js)
   ========================================================================== */
function initDevLog() {
  const container = document.getElementById("updatesTimeline");
  if (!container || !window.SITE_CONFIG || !window.SITE_CONFIG.updates) return;

  container.innerHTML = window.SITE_CONFIG.updates
    .map(
      (entry) => `
      <article class="update-entry reveal">
        <div class="update-entry__marker" aria-hidden="true"></div>
        <div class="update-entry-card">
          <div class="update-header">
            <div class="update-badge-group">
              <span class="badge ${entry.badgeClass || 'badge-cyan'}">${entry.version}</span>
              <span class="badge ${entry.badgeClass || 'badge-cyan'}">${entry.category}</span>
            </div>
            <time class="update-date" datetime="${entry.date}">${entry.date}</time>
          </div>
          <h3 class="update-title">${entry.title}</h3>
          <p class="update-desc">${entry.summary}</p>
        </div>
      </article>
    `
    )
    .join("");
}

/* ==========================================================================
   4. ACCESSIBLE FAQ ACCORDION
   ========================================================================== */
function initFAQ() {
  const container = document.getElementById("faqList");
  if (!container || !window.SITE_CONFIG || !window.SITE_CONFIG.faq) return;

  container.innerHTML = window.SITE_CONFIG.faq
    .map(
      (item, idx) => `
      <div class="faq-item reveal" data-faq-index="${idx}">
        <button class="faq-question-btn" type="button" aria-expanded="false" aria-controls="faq-ans-${idx}" id="faq-q-${idx}">
          <span>${item.question}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-answer" id="faq-ans-${idx}" role="region" aria-labelledby="faq-q-${idx}">
          <div class="faq-answer__inner">
            <p>${item.answer}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  const items = container.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    const ans = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Close all other items for a clean accordion experience
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          const otherBtn = other.querySelector(".faq-question-btn");
          const otherAns = other.querySelector(".faq-answer");
          otherBtn?.setAttribute("aria-expanded", "false");
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        ans.style.maxHeight = null;
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   5. DOWNLOAD SECTION DYNAMIC ENGINE (from site-config.js)
   Accurately handles "in-development" vs "available"
   ========================================================================== */
function initDownloadSection() {
  const badgeEl = document.getElementById("downloadStatusBadge");
  const messageEl = document.getElementById("downloadMessage");
  const btnDownload = document.getElementById("downloadApkBtn");
  const btnGooglePlay = document.getElementById("downloadGooglePlayBtn");
  const versionEl = document.getElementById("downloadVersionText");

  if (!window.SITE_CONFIG || !window.SITE_CONFIG.release) return;

  const release = window.SITE_CONFIG.release;

  if (versionEl) {
    versionEl.textContent = release.version ? `v${release.version}` : "v1.3.0 (Godot 4.7.2)";
  }

  if (release.status === "in-development") {
    // In-development state: disabled download button, coming soon notice
    if (badgeEl) {
      badgeEl.className = "download-status-badge download-status-badge--in-dev";
      badgeEl.innerHTML = `<span class="hero-badge__dot" style="background:#FFBE55;box-shadow:0 0 10px #FFBE55;"></span> IN DEVELOPMENT · PUBLIC RELEASE PENDING`;
    }

    if (messageEl) {
      messageEl.textContent = release.inDevelopmentMessage;
    }

    if (btnDownload) {
      btnDownload.classList.add("btn--disabled");
      btnDownload.setAttribute("disabled", "true");
      btnDownload.setAttribute("aria-disabled", "true");
      btnDownload.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>ANDROID APK — COMING SOON</span>
      `;
    }

    if (btnGooglePlay) {
      btnGooglePlay.style.display = "none";
    }
  } else if (release.status === "available" && release.downloadUrl) {
    // Available state: enabled download link
    if (badgeEl) {
      badgeEl.className = "download-status-badge download-status-badge--available";
      badgeEl.innerHTML = `<span class="hero-badge__dot"></span> OFFICIAL ANDROID RELEASE AVAILABLE`;
    }

    if (messageEl) {
      messageEl.textContent = release.availableNotice;
    }

    if (btnDownload) {
      btnDownload.classList.remove("btn--disabled");
      btnDownload.removeAttribute("disabled");
      btnDownload.removeAttribute("aria-disabled");
      btnDownload.setAttribute("href", release.downloadUrl);
      btnDownload.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>DOWNLOAD ANDROID APK (${release.apkFileSize})</span>
      `;
    }

    if (btnGooglePlay && release.googlePlayUrl) {
      btnGooglePlay.style.display = "inline-flex";
      btnGooglePlay.setAttribute("href", release.googlePlayUrl);
    }
  }
}

/* ==========================================================================
   6. SCROLL-DRIVEN REVEAL EFFECTS
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  reveals.forEach((el) => observer.observe(el));
}
