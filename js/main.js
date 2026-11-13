/**
 * TOMORROW'S YOU — Main Application Script
 * Features:
 * 1. Research Facility Ambient Canvas Particle Simulation
 * 2. Interactive Step-by-Step Echo Mechanic Chamber Simulator
 * 3. Dynamic Development Log (from site-config.js)
 * 4. Accessible FAQ Accordion (from site-config.js)
 * 5. Dynamic Download Status Engine (from site-config.js)
 * 6. The Incident Archive Dossier Viewer (from site-config.js)
 * 7. Scroll-Driven IntersectionObserver Reveal Effects
 */

document.addEventListener("DOMContentLoaded", () => {
  initGameContent();
  initParticleCanvas();
  initIncidentArchive();
  initMechanicVisualizer();
  initDevLog();
  initFAQ();
  initDownloadSection();
  initScrollReveals();
});

/** Populate existing components from the shared content manifest. */
function initGameContent() {
  const content = window.SITE_CONFIG;
  if (!content) return;
  document.querySelectorAll("[data-game-image]").forEach(image => {
    const item = content.gallery.find(entry => entry.id === image.dataset.gameImage);
    if (!item) return;
    image.src = item.src;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
  });
  const synopsis = document.getElementById("storySynopsis");
  if (synopsis) content.story.synopsis.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    synopsis.append(paragraph);
  });
  document.querySelectorAll("[data-feature-title]").forEach(element => {
    element.textContent = content.features[Number(element.dataset.featureTitle)].title;
  });
  document.querySelectorAll("[data-feature-description]").forEach(element => {
    element.textContent = content.features[Number(element.dataset.featureDescription)].description;
  });
  const difficulty = document.getElementById("difficultyGrid");
  if (difficulty) difficulty.innerHTML = content.difficulties.map(tier => `
    <article class="diff-card diff-card--${tier.tier} reveal delay-${tier.tier}">
      <span class="diff-card__tier">TIER ${String(tier.tier).padStart(2, "0")}</span>
      <h3 class="diff-card__title">${tier.name}</h3>
      <span class="diff-card__badge">${tier.label}</span>
      <p class="diff-card__desc">${tier.description}</p>
      <div class="diff-card__specs">
        <div class="diff-spec-item"><span>Echo Coordination</span><span>${tier.coordination}</span></div>
        <div class="diff-spec-item"><span>Door Logic</span><span>${tier.logic}</span></div>
        <div class="diff-spec-item"><span>Chamber Mood</span><span>${tier.mood}</span></div>
      </div>
    </article>`).join("");
  const progression = document.getElementById("progressionDescription");
  if (progression) progression.textContent = content.progression.description;
}

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
      desc: "Navigate through the chamber. Each accepted move and WAIT action is recorded into your current timeline.",
      rule: "Key Mechanic: Record WAIT actions to extend a timeline, within the puzzle’s shared WAIT allowance.",
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
        turnText: "Turn 03 / 04 [Door A UNLOCKED — Echo Holding Plate]",
        echoLifetime: 1
      }
    },
    {
      step: 4,
      badge: "PHASE 04 — CONTROL TIME & EXPIRATION",
      title: "The Final Recorded Turn",
      desc: "An Echo occupies its final recorded position for that turn. On the following turn it expires and stops activating its pressure plate.",
      rule: "Timing Rule: Cross while the plate is active. Recorded WAIT actions extend that window within the puzzle’s shared allowance.",
      boardState: {
        playerPos: { x: 3, y: 3 }, // Safely through Door A
        echoVisible: true,
        echoPos: { x: 3, y: 1 },
        plateActive: true,
        doorOpen: true,
        turnText: "Turn 04 / 04 [Final Recorded Turn — Player Clears Door]",
        echoLifetime: 0
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
        turnText: "Turn 05 / 04 [Echo Expired — Chamber Escaped]",
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
              ${entry.version ? `<span class="badge ${entry.badgeClass || 'badge-cyan'}">${entry.version}</span>` : ""}
              <span class="badge ${entry.badgeClass || 'badge-cyan'}">${entry.category}</span>
            </div>
            ${entry.date ? `<time class="update-date" datetime="${entry.date}">${entry.date}</time>` : ""}
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
   Hydrates release fields from site-config.js (single source of truth)
   ========================================================================== */
function initDownloadSection() {
  const release = window.SITE_CONFIG && window.SITE_CONFIG.release;
  if (!release) return;

  const badgeEl = document.getElementById("downloadStatusBadge");
  const messageEl = document.getElementById("downloadMessage");
  const isAvailable = release.status === "available" && Boolean(release.downloadUrl);

  // Fill every element bound to a release field, e.g. <strong data-release-text="sha256">.
  document.querySelectorAll("[data-release-text]").forEach((el) => {
    const value = release[el.dataset.releaseText];
    if (value !== undefined && value !== null && value !== "") el.textContent = value;
  });

  // Bind every link to its configured URL. A missing URL hides the link instead of guessing one.
  document.querySelectorAll("[data-release-link]").forEach((el) => {
    const url = release[el.dataset.releaseLink];
    if (url) {
      el.setAttribute("href", url);
    } else {
      el.setAttribute("hidden", "");
    }
  });

  if (!isAvailable) {
    // Not-yet-released state: keep the download control inert and say so plainly.
    if (badgeEl) {
      badgeEl.className = "download-status-badge download-status-badge--in-dev";
      badgeEl.innerHTML = `<span class="hero-badge__dot" style="background:#FFBE55;box-shadow:0 0 10px #FFBE55;"></span> IN DEVELOPMENT · PUBLIC RELEASE PENDING`;
    }
    if (messageEl) messageEl.textContent = release.inDevelopmentMessage;
    const btn = document.getElementById("downloadApkBtn");
    if (btn) {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
      btn.setAttribute("tabindex", "-1");
      btn.classList.add("btn--disabled");
      btn.querySelector("span").textContent = "ANDROID APK — COMING SOON";
    }
    return;
  }

  if (messageEl && release.availableNotice) messageEl.textContent = release.availableNotice;
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

/* ==========================================================================
   7. THE INCIDENT ARCHIVE — CLASSIFIED MERIDIAN DOSSIER VIEWER
   ========================================================================== */
function initIncidentArchive() {
  const container = document.getElementById("archiveGrid");
  const viewer = document.getElementById("archiveViewer");
  const viewerBackdrop = document.getElementById("archiveViewerBackdrop");
  const btnClose = document.getElementById("archiveViewerClose");
  const btnPrev = document.getElementById("archiveViewerPrev");
  const btnNext = document.getElementById("archiveViewerNext");

  if (!container || !window.SITE_CONFIG || !window.SITE_CONFIG.incidentArchive) return;

  const records = window.SITE_CONFIG.incidentArchive;
  let currentIndex = 0;
  let previousActiveElement = null;

  // Render 4 Classified Archive Cards
  container.innerHTML = records
    .map(
      (record, idx) => `
      <article class="archive-card reveal delay-${idx + 1}" data-index="${idx}" tabindex="0" role="button" aria-label="Open dossier: ${record.id} — ${record.title}">
        <div class="archive-card__scan-accent" aria-hidden="true"></div>
        <div class="archive-card__header">
          <span class="archive-card__id">${record.id}</span>
          <span class="badge ${record.classificationClass}">${record.classification}</span>
        </div>
        <div class="archive-card__meta">
          <span class="archive-card__status">${record.statusMark}</span>
          <span class="archive-card__ref">${record.refCode}</span>
        </div>
        <h3 class="archive-card__title">${record.title}</h3>
        <p class="archive-card__desc">${record.description}</p>
        <div class="archive-card__action">
          <span class="archive-card__btn-text">INSPECT RECORD</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </article>
    `
    )
    .join("");

  // Document Viewer Elements
  const tagEl = document.getElementById("viewerTag");
  const idEl = document.getElementById("viewerId");
  const desigEl = document.getElementById("viewerDesignation");
  const sectorEl = document.getElementById("viewerSector");
  const statusEl = document.getElementById("viewerStatus");
  const protocolEl = document.getElementById("viewerProtocol");
  const titleEl = document.getElementById("viewerTitle");
  const authorEl = document.getElementById("viewerAuthor");
  const descEl = document.getElementById("viewerDescription");
  const notesEl = document.getElementById("viewerNotes");
  const refEl = document.getElementById("viewerRef");
  const integrityEl = document.getElementById("viewerIntegrity");
  const counterEl = document.getElementById("archiveViewerCounter");

  function updateViewerContent(idx) {
    const rec = records[idx];
    if (!rec) return;

    if (tagEl) {
      tagEl.textContent = rec.classification;
      tagEl.className = `archive-doc__classification-tag ${rec.classificationClass}`;
    }
    if (idEl) idEl.textContent = rec.id;
    if (desigEl) desigEl.textContent = rec.title;
    if (sectorEl) sectorEl.textContent = rec.sector;
    if (statusEl) statusEl.textContent = rec.statusMark;
    if (protocolEl) protocolEl.textContent = rec.securityProtocol || "DECLASSIFIED FRAGMENT";
    if (titleEl) titleEl.textContent = `${rec.id} // ${rec.title}`;
    if (authorEl) authorEl.textContent = rec.author ? `Author: ${rec.author}` : "Author: [ MERIDIAN CLASSIFIED ]";
    if (descEl) descEl.textContent = `"${rec.description}"`;
    if (refEl) refEl.textContent = rec.refCode;
    if (integrityEl) integrityEl.textContent = rec.integrity;
    if (counterEl) counterEl.textContent = `${idx + 1} / ${records.length}`;

    if (notesEl && rec.dossierNotes) {
      notesEl.innerHTML = rec.dossierNotes
        .map(
          (note) => `
          <div class="archive-doc__note-block">
            <h4 class="archive-doc__note-label">${note.label}</h4>
            <p class="archive-doc__note-content">${note.content}</p>
          </div>
        `
        )
        .join("");
    }
  }

  function openViewer(idx) {
    previousActiveElement = document.activeElement;
    currentIndex = idx;
    updateViewerContent(currentIndex);
    if (viewer) {
      viewer.style.display = "flex";
      void viewer.offsetHeight; // force reflow for smooth opacity transition
      viewer.classList.add("active");
      viewer.setAttribute("aria-hidden", "false");
    }
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      btnClose?.focus();
    }, 50);
  }

  function closeViewer() {
    if (viewer) {
      viewer.classList.remove("active");
      viewer.setAttribute("aria-hidden", "true");
      setTimeout(() => {
        if (!viewer.classList.contains("active")) {
          viewer.style.display = "none";
        }
      }, 250);
    }
    document.body.style.overflow = "";
    if (previousActiveElement && typeof previousActiveElement.focus === "function") {
      previousActiveElement.focus();
    }
  }

  function nextRecord() {
    currentIndex = (currentIndex + 1) % records.length;
    updateViewerContent(currentIndex);
  }

  function prevRecord() {
    currentIndex = (currentIndex - 1 + records.length) % records.length;
    updateViewerContent(currentIndex);
  }

  // Open viewer upon card click or Enter/Space
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".archive-card");
    if (card) {
      const idx = parseInt(card.dataset.index, 10);
      openViewer(idx);
    }
  });

  container.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".archive-card");
      if (card) {
        e.preventDefault();
        const idx = parseInt(card.dataset.index, 10);
        openViewer(idx);
      }
    }
  });

  // Modal Control Handlers
  btnClose?.addEventListener("click", closeViewer);
  viewerBackdrop?.addEventListener("click", closeViewer);

  btnNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextRecord();
  });

  btnPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevRecord();
  });

  // Keyboard navigation when viewer is active
  document.addEventListener("keydown", (e) => {
    if (!viewer?.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeViewer();
    } else if (e.key === "ArrowRight") {
      nextRecord();
    } else if (e.key === "ArrowLeft") {
      prevRecord();
    } else if (e.key === "Tab") {
      // Focus trap within active viewer
      const focusable = viewer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });
}

