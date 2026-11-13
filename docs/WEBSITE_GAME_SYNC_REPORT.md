# Website / game synchronization report

Verified November 10, 2026 (Asia/Manila). This full capture pass supersedes the
previous website update that retained older screenshots.

## Source and read-only boundary

- Original game: `/home/wakkadu/Tomorrow's you/`.
- Revision: `0c1d5619b3247fd7999eacae37132f691a4a2605` —
  “Polish mobile UI and enforce solver-verified WAIT budgets”.
- Original working tree was clean before and after capture. SHA-256 comparison of
  351 original source/document/asset files found no changes. The original game was
  never launched or written to; its scenes, configuration, saves and Git history
  were not modified. Imported caches/build output were excluded from this hash audit.
- Engine executed: `4.7.2.stable.official.ed1daf0bf`; project version `1.3.0`.
- Capture checkout: `/tmp/tomorrow-website-capture/game/`, copied with existing
  imported resources, excluding `.git`, builds and previous screenshots.
- Final capture profile: `/tmp/tomorrow-website-capture/profile-v3/`; XDG config
  and cache paths were also isolated. No normal user progress was unlocked or reset.

## Verified mechanics and narrative

| Subject | Evidence and website presentation |
| --- | --- |
| Echoes | `scripts/echoes/echo_recording.gd` and `scripts/gameplay/puzzle_simulation.gd`: accepted actions are recorded during play; Create Echo commits the current recording and resets the attempt. Multiple Echoes replay on the same turns. An Echo occupies its last recorded turn and expires on the next. |
| Completion and doors | Only the controlled player completes a level. Active Echoes can hold pressure plates. AND/OR logic is implemented; current campaign definitions use AND gates and linked dependencies. Door synchronization is a development fix, not a new mechanic. |
| WAIT | `scripts/level/level_registry.gd` and the simulation: each level defines a shared allowance across Echo recordings and the current attempt. Playback does not spend it again. No per-puzzle solution counts or walkthroughs are published in prose. |
| Balancing | `docs/WAIT_BALANCING_REPORT.md`: solver proofs are bounded intended-route minima, not unrestricted global minima. Remaining campaign design limitations are documented by the game. No universal optimality or pass-rate claim is made. |
| Daily hints | `scripts/autoload/save_manager.gd` and `scripts/hints/`: three new stages per local device calendar day, shared globally; Observation, Strategy, Solution; unlocked stages remain revisitable; later-date reset and rollback protection. |
| Progression | Ten levels, three sectors, five tiers confirmed in the runtime registry. SaveManager unlocks each tier after all previous-tier chambers are completed. Stars use total-action thresholds; requirements and routes are not exposed as walkthroughs. |
| Narrative | `scripts/narrative/narrative_registry.gd`, `docs/STORY_BIBLE.md`: Meridian Temporal Research Facility, Project PALIMPSEST, MORROW, Operator 07, The Fracture and Dr. Sera Venn. Opening synopsis, transmissions, recovered research and archive discovery are presented without later revelations. |
| Current UI | Executed scenes plus `scripts/ui/components/ui_design_system.gd`, `scripts/gameplay/gameplay_controller.gd`, archive/difficulty controllers and `docs/UI_REFINEMENT_REPORT.md`: custom icons, refined fonts/buttons, WAIT meter, Echo lifetime HUD, portrait controls and archive/transmission interfaces. |
| Offline/mobile | Gameplay, story, hints and saves are local; Android safe-area/back-navigation/haptics implementations exist. This pass does not establish behavior on a physical Android device. |

Inspected the current source, `README.md`, `CHANGELOG.md`,
`docs/DOOR_AND_WAIT_FIX_REPORT.md`, `docs/UI_REFINEMENT_REPORT.md`, the story bible,
WAIT report, runtime registry, simulation and save/narrative systems. Current runtime
level data overrides older names in the story bible and historical changelog entries.
Git commits `0c1d561`, `8eca200`, `ab634be`, `ab1fe20`, `ff9107a`, `95d0886` establish
the November 10 UI, WAIT, story and narrative milestones; no release version was
invented for the assembled development feed.

## Authentic screenshot capture

The game was launched graphically from the isolated copy. Final images use its
configured **Vulkan Forward Mobile** renderer on the available Intel GPU. A first
root-window attempt was rejected because the desktop clamped it to 720×699. A
Compatibility-renderer trial was also superseded. Only the final 720×1280 Mobile
renderer captures were converted and published.

The one-off runner instanced genuine scenes into a 720×1280 `SubViewport`, awaited
`RenderingServer.frame_post_draw`, then saved `get_texture().get_image()` to PNG.
This follows the [native Godot viewport capture API](https://docs.godotengine.org/en/stable/tutorials/rendering/viewports.html#capture).
No game UI was redrawn, composited, cropped or fabricated. Root window/desktop chrome
is excluded. Native scene layout and gameplay details are preserved exactly.

A fresh profile supplied the starting menus, difficulty screen, archive Records tab
and unopened hint panel. The opening transmission was revealed to its first line.
Normal simulation actions followed the existing first-chamber campaign fixture to
capture a recording, WAIT state, cooperating Echo and real completion. No forced
completion method was used. Only the first chamber was completed. The archive was
captured before progression, avoiding later chapter titles and secret records.

Full-size WebP conversion was lossless, with decoded RGBA pixel equality checked
against each final raw PNG. Thumbnails are 360×640 proportional WebP derivatives.
All full-size images are 720×1280; all twelve raw frames were visually inspected.
The temporary runner, raw frames and capture logs remain outside the game under
`/tmp/tomorrow-website-capture/`. There are no missing required capture categories.

### Current capture inventory

| Category | Full-size website asset | Raw PNG SHA-256 prefix |
| --- | --- | --- |
| main-menu | `assets/images/gameplay/main-menu-0c1d561-10566537.webp` | `1056653785ad31f2` |
| gameplay | `assets/images/gameplay/gameplay-0c1d561-f8f18499.webp` | `f8f1849978e5fcc6` |
| echo-mechanic | `assets/images/gameplay/echo-mechanic-0c1d561-2022d6b0.webp` | `2022d6b0bfb06414` |
| transmission | `assets/images/gameplay/transmission-0c1d561-30502147.webp` | `30502147213563ab` |
| archive | `assets/images/gameplay/archive-0c1d561-b489d47e.webp` | `b489d47ec726a894` |
| difficulty | `assets/images/gameplay/difficulty-0c1d561-9268ad2c.webp` | `9268ad2c45f3df9a` |
| wait-system | `assets/images/gameplay/wait-system-0c1d561-12be9ab2.webp` | `12be9ab242e0aa90` |
| hint | `assets/images/gameplay/hint-0c1d561-af56b284.webp` | `af56b284ab0662a9` |
| level-complete | `assets/images/gameplay/level-complete-0c1d561-b4c159dc.webp` | `b4c159dcb6d5758d` |
| level-selection | `assets/images/gameplay/level-selection-0c1d561-10093e25.webp` | `10093e25cf7b2e51` |
| pause | `assets/images/gameplay/pause-0c1d561-e818eeaf.webp` | `e818eeaf93ca8f76` |
| settings | `assets/images/gameplay/settings-0c1d561-737ad29a.webp` | `737ad29ae313e99b` |

### Before / after mapping

All live HTML/JS references to the retired screenshot directory were removed before
its eleven site images were deleted. Original Godot assets were not deleted.

| Retired website asset | Current asset / disposition |
| --- | --- |
| `assets/images/screenshots/01_main_menu.png` | `assets/images/gameplay/main-menu-0c1d561-10566537.webp` |
| `assets/images/screenshots/02_credits.png` | Retired redundant gallery card; legitimate attributions remain on `credits.html`. |
| `assets/images/screenshots/03_difficulty_select_easy.png` | `assets/images/gameplay/difficulty-0c1d561-9268ad2c.webp` |
| `assets/images/screenshots/04_difficulty_select_nightmare.png` | `assets/images/gameplay/difficulty-0c1d561-9268ad2c.webp` |
| `assets/images/screenshots/05_level_select.png` | `assets/images/gameplay/level-selection-0c1d561-10093e25.webp` |
| `assets/images/screenshots/06_settings.png` | `assets/images/gameplay/settings-0c1d561-737ad29a.webp` |
| `assets/images/screenshots/07_gameplay_playing.png` | `assets/images/gameplay/gameplay-0c1d561-f8f18499.webp` |
| `assets/images/screenshots/08_gameplay_paused.png` | `assets/images/gameplay/pause-0c1d561-e818eeaf.webp` |
| `assets/images/screenshots/09_gameplay_hint_panel.png` | `assets/images/gameplay/hint-0c1d561-af56b284.webp` |
| `assets/images/screenshots/10_gameplay_level_complete.png` | `assets/images/gameplay/level-complete-0c1d561-b4c159dc.webp` |
| `assets/images/screenshots/11_transmission_emergency.png` | `assets/images/gameplay/transmission-0c1d561-30502147.webp` |

Additional distinct current frames demonstrate Echo cooperation
(`assets/images/gameplay/echo-mechanic-0c1d561-2022d6b0.webp`), limited WAIT
(`assets/images/gameplay/wait-system-0c1d561-12be9ab2.webp`), and the in-game Incident Archive
(`assets/images/gameplay/archive-0c1d561-b489d47e.webp`). The hero selects the manifest’s `main-menu` image;
the overview selects `echo-mechanic`. Neither repeats screenshot filenames in HTML.

## Website and content changes

- Preserved the existing static stack, hero design, facility colors/typography,
  archive interactions, simulator, gallery grid and lightbox.
- Replaced every old public screenshot reference, including the hero and overview.
  Portrait captures retain their complete aspect ratio. Gallery captions sit below
  the images, so website labels do not obscure game controls.
- Kept the existing `js/site-config.js` as the reusable content manifest: game,
  developer, release, archive, milestones, FAQ, gallery, capture provenance, synopsis,
  feature list, difficulty tiers and progression. Gallery and homepage share it.
- Corrected an expiry FAQ that could imply WAIT allowed permanent plate occupancy;
  clarified recording/commit behavior, limited WAIT, tier unlocks and action-based stars.
  The schematic simulator now retains the Echo on its final turn and expires it on
  the next, matching the current game boundary.
- Removed unsupported exact Echo requirements from public tier cards and unverified
  price promises. Preserved source-supported narrative and gameplay descriptions.
- Added dated UI/WAIT and campaign-validation development milestones from Git evidence.
  Development milestones remain distinct from public release announcements.
- Retained @wakkaduu’s creator section, shared identity and secure GitHub links,
  game information, footer and Credits entry. Added the verified project contact
  destinations on Privacy instead of invented contact details.
- Audited Privacy: distinguishes the website’s external Google Fonts/host requests
  from local game state; avoids unsupported final APK permission and hosting-log-use
  claims. Credits now distinguishes website MIT licensing from game distribution,
  preserves engine/asset credits, and includes the bundled game font attribution.
- Fixed mobile Download-menu closure, keyboard focus containment, inactive modal/menu
  focusability, tablet menu breakpoint and full-portrait lightbox sizing. The Close control remains onscreen
  at 360×640; images fit within the available area rather than being clipped.
- Added dependency-free `scripts/check-content.mjs` and rewrote maintenance guidance.

## Distribution, links and cache verification

The local `export_presets.cfg` still targets `build/android/TomorrowsYou-debug.apk`.
No APK was copied, published or linked. The [official GitHub releases API](https://api.github.com/repos/wakkaduu/Tomorrow-s-You/releases)
returned HTTP 200 with an empty list. Both the [developer profile](https://github.com/wakkaduu)
and [game repository](https://github.com/wakkaduu/Tomorrow-s-You) returned HTTP 200.
Download state remains **IN DEVELOPMENT**, with no public APK or Google Play URL.
No store listing, minimum Android requirement, public price or launch date is invented.

Every new image URL contains the source revision and a source-content hash, so
Netlify’s retained immutable asset caching cannot serve an older capture at that URL.
Local CSS/JS references carry `v=20261110-0c1d561`. HTML document routes now revalidate;
asset caching was not disabled globally. Browser reloads resolved the new manifest
URLs, and no service worker registration was present. Live Netlify headers/routing
were not tested because this task did not deploy the site.

## Validation and review artifacts

- Native capture runner completed all twelve frames with no script/runtime errors
  in its final Mobile-renderer log. It reached an actual first-level completion.
- Original game source/assets hash audit: 351 files unchanged; Git working tree clean.
- `node --check` passed for all five website JavaScript files;
  `node scripts/check-content.mjs` and `git diff --check` passed.
- Firefox browser: homepage at 360×640, 390×844, 768×1024, 821×900, 900×768, 1024×768,
  1440×900 and 1920×1080; no horizontal overflow.
- Credits, Privacy and 404 checked at widths 360, 390, 768 and 1440; no overflow.
- All local links, fragment targets, images and asset requests passed. Each of the
  twelve lightbox images decoded at 720×1280 and matched its manifest URL.
- Archive opening/navigation/Escape/focus restoration, gallery opening/navigation/
  Tab containment/Escape/focus restoration, synthetic swipe handler, FAQ, simulator,
  developer links, disabled download and mobile Download-menu closure passed.
- All five tier cards and eight feature cards rendered from the manifest. Reload
  confirmed the hero/overview used the new image entries. No JavaScript page errors.
- Visually compared website images with native captures, and reviewed desktop/mobile
  homepage, gallery and lightbox screenshots. Other homepage sections were scrolled
  and checked during the browser pass.

Website review images:

- [Desktop homepage](verification/desktop-home.png)
- [Desktop gallery](verification/desktop-gallery.png)
- [Desktop lightbox](verification/desktop-lightbox.png)
- [Mobile homepage](verification/mobile-home.png)
- [Mobile gallery](verification/mobile-gallery.png)
- [Mobile lightbox](verification/mobile-lightbox.png)

## Remaining limitations

- These are genuine current desktop-rendered Godot Mobile-renderer captures, not
  screenshots from an installed Android device. Physical-device touch, performance,
  cutouts and final exported-package behavior remain unverified.
- The current game’s difficulty-screen text still mentions Nightmare “Sequence Lock”
  despite the current runtime campaign using AND gates. The website does not repeat
  that claim in prose; the authentic screenshot preserves the game’s text. Resolving
  that game-side copy discrepancy requires a separate authorized game change.
- Existing canonical/social/robots/sitemap example-domain values are preserved.
  A real production domain is still needed before public deployment.
- A Google Play listing was not independently established. No listing is configured.
- No full Godot regression suite, Netlify deployment/routing test or public Android
  release validation is claimed in this website capture pass.
- The pre-existing staged `css/archive.css` change was preserved without edits.
  No website commit, push or deployment was performed.

## Files changed

`index.html`, `credits.html`, `privacy.html`, `404.html`, `css/style.css`,
`js/site-config.js`, `js/main.js`, `js/gallery.js`, `js/navigation.js`,
`js/developer.js`, `css/responsive.css`, `netlify.toml`, `README.md`, `CONTENT_SYNC.md`,
`scripts/check-content.mjs`, this report, six website verification images and
24 current game image assets (twelve full-size / twelve thumbnails). Eleven retired
site screenshot assets were removed, including the previous untracked transmission.

Suggested commit: `feat: synchronize website with current game captures and content`
