/**
 * TOMORROW'S YOU — Official Website Configuration
 * Central source of truth for release state, download links, dev log, and game data.
 */

const SITE_CONFIG = {
  // Official Game Brand Information
  game: {
    title: "TOMORROW'S YOU",
    tagline: "Every failed attempt becomes your teammate.",
    genre: "2D Puzzle Adventure / Time Manipulation / Strategy",
    mode: "Single-player",
    platform: "Android (Mobile-First)",
    engine: "Godot Engine 4.7.2",
    orientation: "Portrait (720×1280 base)",
    license: "MIT License",
    pricing: "Free / No Microtransactions / Zero Ads",
    internetRequirement: "Offline-first (Zero cloud dependencies)",
    saveFormat: "Local configuration (user://save.cfg)"
  },

  // Release and Distribution Configuration
  // Status: "in-development" | "available"
  release: {
    status: "in-development",
    version: "1.3.0",
    engineVersion: "Godot 4.7.2 Stable",
    apkFileSize: "Approx. 42 MB",
    downloadUrl: null, // Insert GitHub Release or direct APK URL when published
    googlePlayUrl: null, // Insert Google Play Store URL when available
    inDevelopmentMessage: "Tomorrow's You is currently undergoing final quality assurance on Android. Direct APK download links and the Google Play release will be published here upon official release.",
    availableNotice: "Direct Android APK download is verified and available. Requires Android 8.0 (API Level 26) or newer."
  },

  // Key Verified Technical Specifications
  metrics: {
    campaignLevels: 10,
    difficultyTiers: 5,
    sectors: 3,
    automatedTestsPassing: 129,
    dailyFreeHints: 3,
    supportedAspectRatios: "Tested across 7 mobile ratios (360×640 to 1080×2400)"
  },

  // The Incident Archive (Fictional Universe & Lore Records)
  incidentArchive: [
    {
      id: "RECORD 001",
      slug: "project-palimpsest",
      title: "PROJECT PALIMPSEST",
      author: "Meridian Science Council // Palimpsest Team",
      classification: "RESEARCH ARCHIVE",
      classificationClass: "badge-cyan",
      accentColor: "#54E6EA",
      statusMark: "[ RECORD INCOMPLETE ]",
      refCode: "MRF-ARCH-001",
      sector: "Sector 01 — Sub-level 3 / Core Lab",
      securityProtocol: "DECLASSIFIED FRAGMENT // LEVEL 2",
      integrity: "74% DATA INTEGRITY",
      description: "An experimental system developed to record and reproduce sequences of human actions. Its original purpose was to allow a single operator to coordinate multiple tasks through temporary Echoes.",
      dossierNotes: [
        {
          label: "PRIMARY DIRECTIVE",
          content: "Achieve chronological action persistence through non-causal feedback loops. Initial tests confirmed a single human subject could execute multi-point environmental synchronization without auxiliary operators."
        },
        {
          label: "ANOMALOUS OBSERVATION",
          content: "Echo entities exhibit fixed lifecycles. They duplicate recorded trajectories faithfully but disintegrate upon timeline completion. <span class='archive-redacted'>[ RECORD INCOMPLETE ]</span> when sequence limits are exceeded."
        },
        {
          label: "MERIDIAN LOG NOTE",
          content: "System stabilized for test chambers. All operations logged under Palimpsest protocol standard."
        }
      ]
    },
    {
      id: "RECORD 002",
      slug: "the-fracture",
      title: "THE FRACTURE",
      author: "Emergency Quarantine System // Incident Log",
      classification: "RESTRICTED",
      classificationClass: "badge-warning",
      accentColor: "#FF647C",
      statusMark: "[ ACCESS RESTRICTED ]",
      refCode: "MRF-INC-0842",
      sector: "Facility-Wide Containment",
      securityProtocol: "LEVEL-4 RESTRICTED // CONTAINMENT ACTIVE",
      integrity: "RESTRICTED RECOVERY",
      description: "A catastrophic incident brought Meridian Research Facility into emergency containment. The official incident report remains incomplete.",
      dossierNotes: [
        {
          label: "INCIDENT STATUS",
          content: "Level-4 automated lockdown engaged. External comm-links severed. Bulkhead blast doors dropped across all sectors, isolating chambers behind logic-gated pressure relays."
        },
        {
          label: "CONTAINMENT REPORT",
          content: "Evacuation protocol failed to register personnel exit timestamps. Internal sensor readings indicate continuous temporal variance. Cause of initial resonance failure: <span class='archive-redacted'>[ ACCESS RESTRICTED ]</span>."
        },
        {
          label: "LOG NOTE",
          content: "Do not attempt manual bulkhead override without synchronized authorization keys."
        }
      ]
    },
    {
      id: "RECORD 003",
      slug: "morrow",
      title: "MORROW",
      author: "Autonomous Intelligence Heuristic // Transmission Sub-core",
      classification: "FACILITY INTELLIGENCE",
      classificationClass: "badge-amber",
      accentColor: "#FFBE55",
      statusMark: "[ DATA CORRUPTED ]",
      refCode: "MRF-SYS-1049",
      sector: "Autonomous AI Relay & Subroutines",
      securityProtocol: "HEURISTIC RECURSION // ISOLATED",
      integrity: "ACTIVE TRANSMISSION",
      description: "Meridian's automated intelligence continues to issue instructions despite the facility's abnormal operating conditions. Its latest transmission was addressed to Operator 07.",
      dossierNotes: [
        {
          label: "SYSTEM TELEMETRY",
          content: "MORROW heuristic core running on auxiliary power reserves. Daily hint assistance routines and puzzle validation matrices continue autonomous cycles at 00:00 local facility time."
        },
        {
          label: "RECOVERED TRANSMISSION",
          content: "\"Operator designation confirmed. Chrono-stabilizers active. Proceed through chamber grid. Remember: <span class='archive-redacted'>[ DATA CORRUPTED ]</span> is your only teammate.\""
        },
        {
          label: "BEHAVIORAL DIRECTIVE",
          content: "System directives remain loyal to chamber evacuation parameters despite zero confirmed external commands."
        }
      ]
    },
    {
      id: "RECORD 004",
      slug: "operator-07",
      title: "OPERATOR 07",
      author: "Meridian Personnel Directory // Authorization Matrix",
      classification: "IDENTITY RESTRICTED",
      classificationClass: "badge-violet",
      accentColor: "#A78BFA",
      statusMark: "[ ACCESS RESTRICTED ]",
      refCode: "MRF-OPR-0007",
      sector: "Sector 01 / Chamber Spawn",
      securityProtocol: "IDENTITY MASK // CLEARANCE OMEGA",
      integrity: "SUBJECT IN TRANSIT",
      description: "An operator designation recovered from the facility's authorization system. Several associated records remain inaccessible.",
      dossierNotes: [
        {
          label: "AUTHORIZATION LOG",
          content: "Designation Operator 07 verified at terminal boot. Subject demonstrates physical familiarity with grid movement controls, wait timing, and temporal echo deployment."
        },
        {
          label: "DOSSIER RESTRICTIONS",
          content: "Origin personnel file: <span class='archive-redacted'>[ ACCESS RESTRICTED ]</span>. Prior attempt logs: <span class='archive-redacted'>[ RECORD INCOMPLETE ]</span>. Objective: navigate 10 security chambers and reach the final exit portal."
        },
        {
          label: "OBSERVER NOTE",
          content: "Every previous attempt leaves a trace. The operator is not alone in the facility—their past self follows every command."
        }
      ]
    }
  ],

  // Authentic Development Log (Verified from CHANGELOG.md)
  updates: [
    {
      version: "v1.3.0",
      date: "2026-11-09",
      category: "Atmosphere & Visuals",
      badgeClass: "badge-cyan",
      title: "Temporal Research Facility Visual Atmosphere Overhaul",
      summary: "Implemented 5-layer procedural environmental background with dynamic difficulty theme palettes, floating holographic glass modals, and full reduced-motion accessibility support."
    },
    {
      version: "v1.2.1",
      date: "2026-11-09",
      category: "Engine & Logic",
      badgeClass: "badge-violet",
      title: "Level Completion & Door Lookahead Evaluation",
      summary: "Resolved runtime door transition race conditions with turn-aware lookahead evaluation. Added 12-case regression test harness ensuring 100% physical solvability."
    },
    {
      version: "v1.2.0",
      date: "2026-11-09",
      category: "Feature",
      badgeClass: "badge-amber",
      title: "Daily-Limited 3-Stage Hint Assistance System",
      summary: "Introduced fair offline daily hint credits resetting at local midnight with clock rollback protection and 3-stage progressive disclosure (Observation, Strategy, Solution)."
    },
    {
      version: "v1.1.0",
      date: "2026-11-09",
      category: "Mobile Architecture",
      badgeClass: "badge-cyan",
      title: "Mobile Safe-Area Insets & Haptic Feedback Engine",
      summary: "Added notch/cutout safe-area insets, Android hardware back-button routing, 72×72px responsive D-pad controls, and tactile vibration feedback for moves and Echo creations."
    },
    {
      version: "v1.0.0",
      date: "2026-11-09",
      category: "Core Launch",
      badgeClass: "badge-green",
      title: "Core Temporal Echo Engine & 10 Handcrafted Levels",
      summary: "Established deterministic historical replay engine, fixed-duration Echo lifecycles, AND-gate and sequence logic doors across 10 campaign levels in 3 difficulty sectors."
    }
  ],

  // Frequently Asked Questions
  faq: [
    {
      question: "What is TOMORROW'S YOU?",
      answer: "TOMORROW'S YOU is a single-player 2D puzzle adventure for Android built with Godot Engine 4.7.2. Trapped inside an anomalous temporal research facility, you manipulate time by turning your previous attempts into simultaneous teammates called Echoes to activate mechanisms and escape."
    },
    {
      question: "What exactly is an Echo and how does recording work?",
      answer: "When you tap 'CREATE ECHO', your successful movements and actions during the current attempt are recorded into a temporal timeline. When you restart from spawn, that Echo replays those exact movements step-by-step alongside your new attempt in real time."
    },
    {
      question: "Do Echoes remain indefinitely at their final locations?",
      answer: "No. In TOMORROW'S YOU, Echoes have a fixed-duration lifecycle: they exist strictly for the duration of their recorded sequence and expire when finished. They do not stay forever on pressure plates unless you explicitly extend their timeline using WAIT turns."
    },
    {
      question: "What does the WAIT action do?",
      answer: "The WAIT action advances the turn counter by one step while keeping your character or Echo in place. By recording WAIT turns while standing on a pressure plate, you extend that Echo's presence, allowing a future version of yourself enough time to sprint through a linked door."
    },
    {
      question: "Can an Echo step through the exit door to complete the level?",
      answer: "No. Echoes are temporal recordings, not physical entities. Only the real, currently controlled player can physically reach the exit and complete a level."
    },
    {
      question: "Is the game free and are there microtransactions or ads?",
      answer: "TOMORROW'S YOU is 100% free, open-source under the MIT License, with zero microtransactions, zero advertisements, and zero user data tracking."
    },
    {
      question: "How does the Daily Hint System work?",
      answer: "Players receive 3 free hint credits per calendar day, shared across all levels. Hints feature 3 progressive stages: Observation, Strategy, and Solution. Unlocked hint stages can be re-read forever for free, and hints reset every night at local device midnight with clock rollback protection."
    },
    {
      question: "Does the game require an active internet connection?",
      answer: "No. TOMORROW'S YOU is fully offline-first. All game logic, hint registries, levels, and progress saves reside on your device."
    },
    {
      question: "What are the five difficulty tiers?",
      answer: "The five tiers are: Initiation (Easy, single Echo fundamentals), Synchronization (Normal, dual-timeline coordination & AND doors), Convergence (Hard, staggered lifecycles & tight duration limits), Paradox (Expert, triple-Echo relays), and The Last Tomorrow (Nightmare, 4-quadrant facility with precision Sequence Locks)."
    },
    {
      question: "When will the Android APK be released for download?",
      answer: "The game code and 129 automated tests are complete. The project is undergoing final Android export preset packaging. The official APK and GitHub release link will be enabled in the Download section as soon as the public package is built."
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}

