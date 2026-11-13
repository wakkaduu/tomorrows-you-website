/** Central game content manifest. See docs/WEBSITE_GAME_SYNC_REPORT.md for evidence. */
const DEVELOPER_CONFIG = {
  "handle": "@wakkaduu",
  "role": "Game Developer / Creator",
  "githubUrl": "https://github.com/wakkaduu",
  "gameRepositoryUrl": "https://github.com/wakkaduu/Tomorrow-s-You"
};

const SITE_CONFIG = {
  "game": {
    "title": "TOMORROW'S YOU",
    "tagline": "Every failed attempt becomes your teammate.",
    "genre": "Puzzle Adventure / Strategy",
    "mode": "Single-player",
    "platform": "Android (Mobile-First)",
    "engine": "Godot Engine 4.7.2",
    "orientation": "Portrait (720×1280 base)",
    "internetRequirement": "Offline-first (Zero cloud dependencies)",
    "saveFormat": "Local configuration (user://save.cfg)"
  },
  "release": {
    "status": "available",
    "channel": "PUBLIC ALPHA",
    "version": "0.1.0-alpha.2",
    "displayVersion": "v0.1.0-alpha.2",
    "platform": "Android",
    "distribution": "GitHub Releases (direct APK download, not Google Play)",
    "apkFileName": "TomorrowsYou-v0.1.0-alpha.2-android.apk",
    "apkFileSize": "102.2 MiB",
    "apkSizeBytes": 107211976,
    "sha256": "a39c2fd89c4c57b23c8d644f0c762cbbc5dbdb6194358aa472d7f40a8c4dafc9",
    "packageName": "com.tomorrowsyou.game",
    "minimumAndroidApi": 24,
    "sourceCommit": "10956640",
    "engineVersion": "Godot 4.7.2 Stable",
    "downloadUrl": "https://github.com/wakkaduu/Tomorrow-s-You/releases/download/v0.1.0-alpha.2/TomorrowsYou-v0.1.0-alpha.2-android.apk",
    "releaseUrl": "https://github.com/wakkaduu/Tomorrow-s-You/releases/tag/v0.1.0-alpha.2",
    "issuesUrl": "https://github.com/wakkaduu/Tomorrow-s-You/issues/new/choose",
    "googlePlayUrl": null,
    "alphaNotice": "TOMORROW’S YOU is currently in public alpha testing. Some bugs and compatibility issues may remain.",
    "testedOn": "Verified on one Android 15 x86_64 emulator. Physical devices and ARM runtime are not yet verified.",
    "inDevelopmentMessage": "TOMORROW’S YOU is in development for Android. No public release is currently available.",
    "availableNotice": "A public Android alpha is available as a direct APK download from GitHub Releases."
  },
  "metrics": {
    "campaignLevels": 10,
    "difficultyTiers": 5,
    "sectors": 3,
    "dailyFreeHints": 3
  },
  "incidentArchive": [
    {
      "id": "RECORD 001",
      "slug": "project-palimpsest",
      "title": "PROJECT PALIMPSEST",
      "author": "Public story overview",
      "classification": "RESEARCH ARCHIVE",
      "classificationClass": "badge-cyan",
      "accentColor": "#54E6EA",
      "statusMark": "[ RECORD INCOMPLETE ]",
      "refCode": "MRF-ARCH-001",
      "sector": "Meridian Temporal Research Facility",
      "securityProtocol": "SPOILER-FREE PUBLIC OVERVIEW",
      "integrity": "RECOVERED FRAGMENT",
      "description": "Project PALIMPSEST preserves and reproduces sequences of physical actions, allowing one operator to coordinate multiple tasks through recorded Echoes.",
      "dossierNotes": [
        {
          "label": "RESEARCH OVERVIEW",
          "content": "Developed by Dr. Sera Venn, the project turns recorded actions into temporary Echoes that can activate environmental pressure plates."
        },
        {
          "label": "TEMPORAL COHERENCE",
          "content": "Echoes replay their recorded actions together and expire after their final recorded turn. Their duration must be planned in advance."
        }
      ]
    },
    {
      "id": "RECORD 002",
      "slug": "the-fracture",
      "title": "THE FRACTURE",
      "author": "Public story overview",
      "classification": "RESTRICTED",
      "classificationClass": "badge-warning",
      "accentColor": "#FF647C",
      "statusMark": "[ ACCESS RESTRICTED ]",
      "refCode": "MRF-INC-0842",
      "sector": "Meridian Temporal Research Facility",
      "securityProtocol": "SPOILER-FREE PUBLIC OVERVIEW",
      "integrity": "RECOVERED FRAGMENT",
      "description": "A catastrophic temporal failure triggered emergency lockdown at Meridian Temporal Research Facility. The incident records are incomplete.",
      "dossierNotes": [
        {
          "label": "INCIDENT OVERVIEW",
          "content": "The facility is sealed, its records are corrupted, and its personnel are missing. Discover more through recovered research logs."
        },
        {
          "label": "PUBLIC RECORD",
          "content": "The full circumstances of the incident remain for Operator 07 to uncover in the game."
        }
      ]
    },
    {
      "id": "RECORD 003",
      "slug": "morrow",
      "title": "MORROW",
      "author": "Public story overview",
      "classification": "FACILITY INTELLIGENCE",
      "classificationClass": "badge-amber",
      "accentColor": "#FFBE55",
      "statusMark": "[ DATA CORRUPTED ]",
      "refCode": "MRF-SYS-1049",
      "sector": "Meridian Temporal Research Facility",
      "securityProtocol": "SPOILER-FREE PUBLIC OVERVIEW",
      "integrity": "RECOVERED FRAGMENT",
      "description": "The facility AI guides Operator 07 through Meridian with transmissions as the campaign progresses.",
      "dossierNotes": [
        {
          "label": "FACILITY INTELLIGENCE",
          "content": "MORROW continues to operate under emergency containment conditions."
        },
        {
          "label": "TRANSMISSION ARCHIVE",
          "content": "Recovered transmissions can be revisited in the in-game Incident Archive. Listen, observe, and piece together the story."
        }
      ]
    },
    {
      "id": "RECORD 004",
      "slug": "operator-07",
      "title": "OPERATOR 07",
      "author": "Public story overview",
      "classification": "IDENTITY RESTRICTED",
      "classificationClass": "badge-violet",
      "accentColor": "#A78BFA",
      "statusMark": "[ ACCESS RESTRICTED ]",
      "refCode": "MRF-OPR-0007",
      "sector": "Meridian Temporal Research Facility",
      "securityProtocol": "SPOILER-FREE PUBLIC OVERVIEW",
      "integrity": "RECOVERED FRAGMENT",
      "description": "You awaken as Operator 07 inside the locked-down facility, guided by MORROW and accompanied by Echoes of your previous attempts.",
      "dossierNotes": [
        {
          "label": "OPERATOR BRIEF",
          "content": "Record actions, coordinate previous versions of yourself, and navigate the temporal chambers."
        },
        {
          "label": "PERSONNEL RECORD",
          "content": "Further details are discovered through the campaign. Play to uncover the complete story."
        }
      ]
    }
  ],
  "updates": [
    {
      "category": "RELEASE",
      "badgeClass": "badge-amber",
      "version": "v0.1.0-alpha.2",
      "title": "Public Android alpha published",
      "summary": "The first public Android alpha APK is available as a direct download from GitHub Releases. It is an early alpha, not a Google Play release; see the Android download section for installation steps and known limitations."
    },
    {
      "category": "STORY",
      "badgeClass": "badge-violet",
      "title": "MORROW transmissions & progressive discovery",
      "summary": "Narrative transmissions, recovered research logs, and the in-game Incident Archive connect the temporal campaign to the mystery of Project PALIMPSEST."
    },
    {
      "category": "VISUALS",
      "badgeClass": "badge-cyan",
      "title": "Shared UI and custom icon refinement",
      "summary": "Refined typography, semantic buttons, original vector icons, clearer gameplay controls, and more readable archive records build on the atmospheric facility backgrounds.",
      "date": "2026-11-10"
    },
    {
      "category": "GAMEPLAY",
      "badgeClass": "badge-cyan",
      "title": "Level-specific WAIT allowances",
      "summary": "Reduced excessive WAIT allowances to sharpen temporal planning. Each level limits WAIT actions across recorded Echoes and the current attempt.",
      "date": "2026-11-10"
    },
    {
      "category": "GAMEPLAY",
      "badgeClass": "badge-cyan",
      "date": "2026-11-10",
      "title": "Campaign route validation",
      "summary": "Current campaign fixtures replay intended routes under the shared WAIT limits. Validation reports document the bounded search scope and remaining design limitations."
    },
    {
      "category": "BUG FIXES",
      "badgeClass": "badge-cyan",
      "title": "Synchronized door states",
      "summary": "Turn-aware door evaluation keeps collision logic and visual door states aligned, with regression coverage for door timing and level completion."
    },
    {
      "category": "QUALITY OF LIFE",
      "badgeClass": "badge-cyan",
      "title": "Progressive daily hint assistance",
      "summary": "Three new hint stages can be unlocked per device calendar day across all levels. Observation, Strategy, and Solution stages remain available to revisit after unlocking."
    },
    {
      "category": "MOBILE",
      "badgeClass": "badge-cyan",
      "title": "Android controls and safe areas",
      "summary": "Portrait controls, safe-area handling, hardware back navigation, and haptic feedback support mobile play. Shared UI readability has received further refinement."
    }
  ],
  "faq": [
    {
      "question": "What is TOMORROW'S YOU?",
      "answer": "TOMORROW'S YOU is a single-player 2D puzzle adventure for Android built with Godot Engine 4.7.2. Trapped inside an anomalous temporal research facility, you manipulate time by turning your previous attempts into simultaneous teammates called Echoes to activate mechanisms and escape."
    },
    {
      "question": "What exactly is an Echo and how does recording work?",
      "answer": "Your accepted movements and WAIT actions are recorded as you play. Tap CREATE ECHO to save the current attempt and return to spawn. On the next attempt, that Echo replays its recording alongside you, synchronized to each turn."
    },
    {
      "question": "Do Echoes remain indefinitely at their final locations?",
      "answer": "No. An Echo occupies its final recorded position for that turn, then expires on the following turn. Recording WAIT actions extends its duration within the puzzle’s shared allowance; an Echo never holds a plate forever."
    },
    {
      "question": "What does the WAIT action do?",
      "answer": "WAIT advances one turn without moving, extending a recorded timeline. Each puzzle has a limited allowance shared by recorded Echoes and the current attempt. Plan recordings wisely; unused time is a resource."
    },
    {
      "question": "Can an Echo step through the exit door to complete the level?",
      "answer": "Only the real player can reach the exit to complete a level. Echoes replay recorded actions and can activate pressure plates, but cannot complete the chamber for you."
    },
    {
      "question": "Are there ads or in-app purchases?",
      "answer": "The current game source has no advertising or in-app purchase system."
    },
    {
      "question": "How do I install the Android alpha?",
      "answer": "Download the official APK from the GitHub Release, open it on your Android device, allow installation from that trusted source if Android asks, confirm the installation, and launch TOMORROW’S YOU. Installation steps are listed in the Android download section."
    },
    {
      "question": "Is TOMORROW’S YOU on Google Play?",
      "answer": "No. The public alpha is distributed directly through <a href=\"https://github.com/wakkaduu/Tomorrow-s-You/releases/tag/v0.1.0-alpha.2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub Releases</a>. There is no Google Play listing at this time."
    },
    {
      "question": "Which Android devices has the alpha been tested on?",
      "answer": "So far, the alpha has been verified on one Android 15 x86_64 emulator. Physical devices and ARM runtime have not yet been verified, and some graphics configurations may fail. The APK declares a minimum of Android API 24 as a technical requirement, but that is not evidence of testing on Android 7.0."
    },
    {
      "question": "How do I report a bug?",
      "answer": "Open a <a href=\"https://github.com/wakkaduu/Tomorrow-s-You/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">new GitHub issue</a> with your phone model, Android version, the level or screen where the problem happened, a description, steps to reproduce, and a screenshot if you have one."
    },
    {
      "question": "How does the Daily Hint System work?",
      "answer": "Unlock three new hint stages per device calendar day, shared across all levels: Observation, Strategy, then Solution. Previously unlocked stages can be revisited without spending credits. The allowance refreshes when the game detects a later local calendar date, with clock rollback protection."
    },
    {
      "question": "Does the game require an active internet connection?",
      "answer": "No. TOMORROW'S YOU is fully offline-first. All game logic, hint registries, levels, and progress saves reside on your device."
    },
    {
      "question": "What are the five difficulty tiers?",
      "answer": "Easy — Initiation; Normal — Synchronization; Hard — Convergence; Expert — Paradox; Nightmare — The Last Tomorrow. Higher tiers call for more sophisticated Echo coordination, timing, and temporal planning."
    },
    {
      "question": "Where can I download the Android APK?",
      "answer": "The public alpha APK (v0.1.0-alpha.2, 102.2 MiB) is hosted on <a href=\"https://github.com/wakkaduu/Tomorrow-s-You/releases/tag/v0.1.0-alpha.2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub Releases</a>. This website does not host the file. Debug builds are not offered as public downloads."
    },
    {
      "question": "How do progression and stars work?",
      "answer": "Complete all chambers in a difficulty tier to unlock the next. Star ratings reward efficient total actions across your recordings and winning attempt. Only the real player can complete a chamber."
    }
  ],
  "gallery": [
    {
      "id": "main-menu",
      "src": "assets/images/gameplay/main-menu-0c1d561-10566537.webp",
      "thumb": "assets/images/gameplay/main-menu-0c1d561-10566537-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Enter the Temporal Facility",
      "tag": "MAIN MENU",
      "caption": "The current title screen with Start Journey, level selection, Incident Archive, and settings.",
      "alt": "Main menu with cyan Start Journey button, custom menu icons, and temporal facility rings."
    },
    {
      "id": "gameplay",
      "src": "assets/images/gameplay/gameplay-0c1d561-f8f18499.webp",
      "thumb": "assets/images/gameplay/gameplay-0c1d561-f8f18499-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Coordinate Across Time",
      "tag": "GAMEPLAY",
      "caption": "The opening chamber, reorganized HUD, pressure plate, AND door, and portrait touch controls.",
      "alt": "First Contact gameplay with turn and Echo counters, pressure plate, door, and directional controls."
    },
    {
      "id": "echo-mechanic",
      "src": "assets/images/gameplay/echo-mechanic-0c1d561-2022d6b0.webp",
      "thumb": "assets/images/gameplay/echo-mechanic-0c1d561-2022d6b0-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Your Past Becomes Your Teammate",
      "tag": "ECHO SYSTEM",
      "caption": "A recorded Echo holds a pressure plate while the real player advances on a separate route.",
      "alt": "Violet Echo occupying a pressure plate while the cyan player moves through the chamber."
    },
    {
      "id": "transmission",
      "src": "assets/images/gameplay/transmission-0c1d561-30502147.webp",
      "thumb": "assets/images/gameplay/transmission-0c1d561-30502147-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Incoming Transmission — MORROW",
      "tag": "TRANSMISSIONS",
      "caption": "MORROW’s opening emergency transmission introduces Operator 07 without revealing the story’s later discoveries.",
      "alt": "MORROW facility AI transmission with its animated signal interface and the opening greeting to Operator 07."
    },
    {
      "id": "archive",
      "src": "assets/images/gameplay/archive-0c1d561-b489d47e.webp",
      "thumb": "assets/images/gameplay/archive-0c1d561-b489d47e-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Recover the Truth",
      "tag": "INCIDENT ARCHIVE",
      "caption": "The in-game Records tab at the start of the campaign. Later research remains locked.",
      "alt": "Incident Archive showing the public facility blueprint record and locked schematic entries."
    },
    {
      "id": "difficulty",
      "src": "assets/images/gameplay/difficulty-0c1d561-9268ad2c.webp",
      "thumb": "assets/images/gameplay/difficulty-0c1d561-9268ad2c-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Five Tiers of Challenge",
      "tag": "DIFFICULTY",
      "caption": "Initiation begins the five-tier progression. Complete each tier to unlock the next.",
      "alt": "Current difficulty selection showing Initiation available and the four later tiers locked."
    },
    {
      "id": "wait-system",
      "src": "assets/images/gameplay/wait-system-0c1d561-12be9ab2.webp",
      "thumb": "assets/images/gameplay/wait-system-0c1d561-12be9ab2-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Every Turn Matters",
      "tag": "TEMPORAL PLANNING",
      "caption": "The WAIT control and remaining allowance meter make limited temporal resources visible during recording.",
      "alt": "Current gameplay during a recording with the WAIT remaining counter and allowance meter visible."
    },
    {
      "id": "hint",
      "src": "assets/images/gameplay/hint-0c1d561-af56b284.webp",
      "thumb": "assets/images/gameplay/hint-0c1d561-af56b284-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Strategic Assistance",
      "tag": "HINT SYSTEM",
      "caption": "The daily hint panel shows the remaining allowance and the next Observation stage, without displaying a solution.",
      "alt": "Daily hint assistance modal showing no hints revealed yet and Observation as the next available stage."
    },
    {
      "id": "level-complete",
      "src": "assets/images/gameplay/level-complete-0c1d561-b4c159dc.webp",
      "thumb": "assets/images/gameplay/level-complete-0c1d561-b4c159dc-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Temporal Sequence Complete",
      "tag": "LEVEL COMPLETION",
      "caption": "A genuine first-chamber completion displays the star rating, action summary, and an unlocked opening research log.",
      "alt": "First-chamber completion modal with three stars, recorded action summary, and navigation buttons."
    },
    {
      "id": "level-selection",
      "src": "assets/images/gameplay/level-selection-0c1d561-10093e25.webp",
      "thumb": "assets/images/gameplay/level-selection-0c1d561-10093e25-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Choose Your Next Chamber",
      "tag": "LEVEL SELECTION",
      "caption": "The starting profile shows the first difficulty tier and its campaign chamber progression.",
      "alt": "Current level selection showing the Initiation campaign chambers and their locked or available state."
    },
    {
      "id": "pause",
      "src": "assets/images/gameplay/pause-0c1d561-e818eeaf.webp",
      "thumb": "assets/images/gameplay/pause-0c1d561-e818eeaf-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Pause the Experiment",
      "tag": "PAUSE MENU",
      "caption": "The facility terminal pauses play and offers resume, communication logs, restart, and navigation.",
      "alt": "Current pause terminal with resume and communication log controls over the gameplay screen."
    },
    {
      "id": "settings",
      "src": "assets/images/gameplay/settings-0c1d561-737ad29a.webp",
      "thumb": "assets/images/gameplay/settings-0c1d561-737ad29a-thumb.webp",
      "width": 720,
      "height": 1280,
      "title": "Tune Your Experience",
      "tag": "SETTINGS",
      "caption": "Current audio, haptic feedback, and reduced-animation settings in the game’s shared UI system.",
      "alt": "Current game settings with audio controls, haptic feedback, and reduced animations options."
    }
  ],
  "capture": {
    "sourceRevision": "0c1d561",
    "date": "2026-11-10",
    "renderer": "Vulkan Mobile",
    "engine": "4.7.2.stable.official.ed1daf0bf",
    "width": 720,
    "height": 1280
  },
  "story": {
    "facility": "Meridian Temporal Research Facility",
    "experiment": "Project PALIMPSEST",
    "ai": "MORROW",
    "operator": "Operator 07",
    "researcher": "Dr. Sera Venn",
    "incident": "The Fracture",
    "synopsis": [
      "Deep inside Meridian Temporal Research Facility, an experiment designed to preserve human actions has gone catastrophically wrong.",
      "The facility is locked down. Its research records are corrupted. Its personnel are missing.",
      "You awaken as Operator 07, guided by an artificial intelligence known as MORROW. Every attempt creates another Echo of your past.",
      "But the deeper you venture into the facility, the more you begin to question what happened — and why the system keeps asking you to try again."
    ]
  },
  "features": [
    {
      "id": 0,
      "title": "Echo Recording",
      "description": "Record accepted movements and WAIT actions turn by turn. Create an Echo from your current attempt, return to spawn, and coordinate with its playback on your next run."
    },
    {
      "id": 1,
      "title": "Synchronized Timelines",
      "description": "Echoes replay turn by turn simultaneously with the player. Precise turn-by-turn synchronization turns individual moves into cooperative teamwork."
    },
    {
      "id": 2,
      "title": "Dynamic Pressure Plates",
      "description": "Trigger facility mechanisms when depressed by either the real player or active Echoes. Keep plates weighted to maintain door power."
    },
    {
      "id": 3,
      "title": "Logic-Based Doors",
      "description": "Pressure plates power interconnected doors. The simulation supports AND and OR conditions; the current campaign builds advanced dependencies around AND gates and multi-Echo cooperation."
    },
    {
      "id": 4,
      "title": "Temporal Planning & WAIT",
      "description": "Time is limited. Every WAIT action extends a recorded timeline, but each puzzle has its own allowance, shared across recorded Echoes and your current attempt. Plan your recordings wisely."
    },
    {
      "id": 5,
      "title": "Handcrafted Campaign",
      "description": "10 handcrafted chambers across 3 sectors and five difficulty tiers. Increasingly complex dependencies reward careful temporal planning and coordinated Echo recordings."
    },
    {
      "id": 6,
      "title": "Daily-Limited Hint System",
      "description": "Unlock three new hints per day: Observation, Strategy, and Solution. Previously unlocked hints can be revisited without spending your daily allowance."
    },
    {
      "id": 7,
      "title": "Offline-First Architecture",
      "description": "Game logic, narrative, hints, and progress saves live on your device. Play offline with local saving; no account is required."
    }
  ],
  "difficulties": [
    {
      "tier": 1,
      "name": "INITIATION",
      "label": "EASY",
      "description": "Learn grid movement, Echo recording, and pressure-plate cooperation.",
      "coordination": "Single Echo",
      "logic": "Direct AND",
      "mood": "Calm Cyan"
    },
    {
      "tier": 2,
      "name": "SYNCHRONIZATION",
      "label": "NORMAL",
      "description": "Coordinate multiple recordings, relay doors, and shared WAIT resources.",
      "coordination": "Multiple Echoes",
      "logic": "Chained AND Gates",
      "mood": "Emerald Resonance"
    },
    {
      "tier": 3,
      "name": "CONVERGENCE",
      "label": "HARD",
      "description": "Plan overlapping Echo lifetimes and routes through interconnected pressure-plate dependencies.",
      "coordination": "Multiple Echoes",
      "logic": "Linked AND Gates",
      "mood": "Energy Amber"
    },
    {
      "tier": 4,
      "name": "PARADOX",
      "label": "EXPERT",
      "description": "Manage multi-stage recordings and increasingly complex temporal dependencies.",
      "coordination": "Advanced Cooperation",
      "logic": "Multi-Gate Relays",
      "mood": "Echo Violet"
    },
    {
      "tier": 5,
      "name": "THE LAST TOMORROW",
      "label": "NIGHTMARE",
      "description": "Face the most demanding campaign puzzles with careful Echo coordination and temporal planning.",
      "coordination": "Advanced Planning",
      "logic": "Linked AND Gates",
      "mood": "Volatile Crimson"
    }
  ],
  "progression": {
    "description": "Complete all chambers in a difficulty tier to unlock the next. Star ratings reward efficient total actions across your recordings and winning attempt. Only the real player can complete a chamber.",
    "campaignLevels": 10,
    "difficultyTiers": 5
  },
  "developer": DEVELOPER_CONFIG
};

if (typeof window !== "undefined") {
  window.DEVELOPER_CONFIG = DEVELOPER_CONFIG;
  window.SITE_CONFIG = SITE_CONFIG;
}
