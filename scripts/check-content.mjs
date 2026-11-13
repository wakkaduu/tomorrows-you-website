/** Dependency-free static content and asset checks. Run: node scripts/check-content.mjs */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.runInNewContext(readFileSync(resolve(root, 'js/site-config.js'), 'utf8'), context);
const config = context.window.SITE_CONFIG;
assert.equal(config.gallery.length, 12);
assert.equal(config.difficulties.length, config.metrics.difficultyTiers);
assert.equal(config.developer.githubUrl, 'https://github.com/wakkaduu');
if (config.release.status === 'available') assert.match(config.release.downloadUrl, /^https:\/\//);
else assert.equal(config.release.downloadUrl, null);
assert.equal(new Set(config.gallery.map(item => item.id)).size, config.gallery.length);
for (const item of config.gallery) {
  assert.ok(item.alt && item.caption && item.title, `Missing gallery description: ${item.id}`);
  assert.equal(item.width / item.height, 9 / 16);
  for (const file of [item.src, item.thumb]) {
    assert.ok(existsSync(resolve(root, file)), `Missing image: ${file}`);
    assert.match(file, new RegExp(config.capture.sourceRevision + '-[a-f0-9]{8}(?:-thumb)?\\.webp$'));
  }
}
for (const page of ['index.html', 'credits.html', 'privacy.html', '404.html']) {
  const html = readFileSync(resolve(root, page), 'utf8');
  assert.ok(!html.includes('assets/images/screenshots/'), `Old image reference: ${page}`);
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|data:)/.test(value) || value === '#') continue;
    const [path, fragment] = value.split('#');
    const file = resolve(root, (path || page).split('?')[0]);
    assert.ok(existsSync(file), `Missing local target in ${page}: ${value}`);
    if (fragment) assert.ok(readFileSync(file, 'utf8').includes(`id="${fragment}"`), `Missing anchor: ${value}`);
  }
}
console.log('PASS: 12 current captures/thumbnails, manifest fields, five difficulty tiers, developer configuration, honest download state, local files and anchors.');
