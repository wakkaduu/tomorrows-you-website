# TOMORROW'S YOU — Official Game Website

> Every failed attempt becomes your teammate.

The static website for TOMORROW’S YOU, a narrative puzzle adventure for Android by
[@wakkaduu](https://github.com/wakkaduu). HTML5, CSS3 and vanilla JavaScript;
no framework, backend, paid API or build step. Netlify-compatible.

## Run and check

```sh
python3 -m http.server 8080
node scripts/check-content.mjs
```

Open `http://localhost:8080`. JavaScript syntax can also be checked with
`node --check js/main.js` (repeat for the other files in `js/`). The content check
verifies manifest entries, local assets, section anchors, credits and release state.
Browser interaction and visual checks remain necessary after changes.

## Source layout

- `index.html`: cinematic hero, overview, story/Incident Archive, Echo simulator,
  difficulty tiers, current gallery/lightbox, gameplay features, game information,
  development milestones, FAQ, developer profile and Android download status.
- `credits.html`, `privacy.html`, `404.html`: supporting pages.
- `js/site-config.js`: shared content manifest and `DEVELOPER_CONFIG`.
- `js/main.js`: content bindings, archive viewer, simulator, FAQ and downloads.
- `js/gallery.js`: lightbox, keyboard controls and swipe handling; reads the manifest.
- `js/navigation.js`, `js/developer.js`: navigation and shared developer link bindings.
- `css/`: existing design system, animation, archive and responsive styles.
- `assets/images/gameplay/`: twelve current 720×1280 lossless WebP captures and
  360×640 optimized thumbnails. Branding stays in `assets/images/branding/`.
- `docs/WEBSITE_GAME_SYNC_REPORT.md`: source evidence, capture provenance, old/new
  asset mapping, validation results and known limitations.
- `docs/verification/`: website screenshots captured during browser verification.
- `scripts/check-content.mjs`: dependency-free asset/content checks.
- `netlify.toml`: static hosting, security headers, document revalidation and caching.

## Update the shared manifest

`SITE_CONFIG` in `js/site-config.js` contains `game`, `release`, `metrics`,
`incidentArchive`, `updates`, `faq`, `gallery`, `capture`, `story`, `features`,
`difficulties` and `progression`. `developer` references `DEVELOPER_CONFIG`.
The gallery has one authoritative image list; homepage screenshots select entries
with `data-game-image` semantic IDs instead of repeating image filenames in HTML.
Features, difficulty cards and synopsis also render from this manifest.

`DEVELOPER_CONFIG` holds the supplied handle, role, GitHub profile and game repository.
`js/developer.js` binds marked profile/repository links consistently. Keep HTML
fallback links in supporting pages correct when updating the identity. Do not invent
a personal name, biography, email address or extra accounts.

For development milestones, edit `updates` with an accurate title, summary, category
and optional ISO `date` or `version`. Use GAMEPLAY, VISUALS, STORY, QUALITY OF LIFE,
BUG FIXES or MOBILE. Add dates only from game history/reports. These entries describe
development, not a public release. Never invent test totals or universal solver claims.

## Capture and replace game screenshots

1. Verify the latest functioning local game and record its revision and working-tree
   status. Prefer current local sources over older remote code or existing captures.
2. Copy the game into a temporary directory, excluding `.git`, builds and old captures.
   Keep all capture automation outside the original game. Set isolated
   `XDG_DATA_HOME`, `XDG_CONFIG_HOME` and `XDG_CACHE_HOME` before launching the copy.
   Never change the developer’s normal save or original project files.
3. Run genuine game scenes using the game’s configured renderer. The latest capture
   used Godot 4.7.2 Vulkan Mobile and a 720×1280 `SubViewport` to avoid desktop window
   size clamping. After `RenderingServer.frame_post_draw`, capture with
   `viewport.get_texture().get_image()`. See the native API reference linked in the
   synchronization report. Screens must contain actual game output, no redrawn UI.
4. Use ordinary gameplay or existing game fixtures to reach states. Capture the
   starting archive’s Records tab, the opening MORROW greeting, and the hint panel
   before revealing hints. Do not expose late story content or walkthroughs.
5. Inspect every frame for spoilers, developer overlays and incomplete rendering.
   Convert full-size PNGs to lossless WebP and verify decoded pixel equality. Optional
   thumbnails may be resized proportionally for faster gallery loading.
6. Name assets with a revision and source-content hash. Update `SITE_CONFIG.gallery`
   with `id`, `src`, `thumb`, `width`, `height`, `title`, `tag`, `caption` and useful
   `alt` text. Update `capture` provenance. All current images are 9:16 portrait.
7. Replace the semantic homepage image IDs if needed. Remove retired site images
   only after confirming there are no live references. Never remove game assets.
8. Run content checks and browser regression tests, compare the lightbox images to
   the rendered game, then update the synchronization report and website screenshots.

Image conversion during the latest sync used locally available Pillow; it is not a
website runtime dependency. Raw captures and the one-off capture runner were kept
under `/tmp/tomorrow-website-capture/`, outside the original game.

## Verify gameplay and story before publishing changes

Read the current game’s runtime level registry, simulation, Echo recording,
SaveManager, narrative registry, story bible, WAIT report and changelog. Runtime code
supersedes stale chamber names or old changelog mechanics. Verify level/tier counts,
Echo expiry, shared WAIT limits, hint reset behavior, progression, offline support,
version and Android distribution. Do not publish exact per-puzzle WAIT solutions.
WAIT solver reports have bounded domains; they do not prove unrestricted optimality.

Keep story copy within the public synopsis: Meridian Temporal Research Facility,
Project PALIMPSEST, MORROW, Operator 07, The Fracture and Dr. Sera Venn. Exclude later
identity revelations, secret research, final transmissions and the ending. Review
screenshot text as carefully as prose. Preserve legitimate contributor and font
license attributions.

## Configure an Android release

The current game version is 1.3.0; the configured local Android export is a debug APK.
No public GitHub releases were listed when checked on November 10, 2026. Downloads
stay `in-development`, with null `downloadUrl` and `googlePlayUrl`.

After verifying an intentionally public package, set `release.status` to `available`,
set its official HTTPS `downloadUrl`, and update version, optional size and notice
from that release. Only set `googlePlayUrl` for a verified listing. Never link an
internal/debug APK or invent minimum Android requirements, pricing or a release date.

## Hosting and caching

Netlify publishes the repository’s static files. No deployment was performed during
this synchronization. Verify routing on the actual deployment before claiming it
works. The canonical/social URLs, robots and sitemap retain existing example-domain
configuration; replace those only when the real production domain is known.

Screenshot filenames include revision/content hashes, so replacing captures gives
browsers new URLs even under the existing immutable asset cache. HTML documents
revalidate; local CSS/JS URLs use an explicit content-sync revision. Bump that revision
when those files change. No service worker is installed. Do not disable caching
across the entire site.

## License

Website source uses the repository’s [MIT License](LICENSE). Engine and font credits
are on `credits.html`. Check the official game repository for game licensing and
public distribution terms; the website’s license does not establish them.
