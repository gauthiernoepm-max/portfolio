import { chromium } from 'playwright';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const run = promisify(execFile);
const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public/shots');
const tmpDir = path.join(root, '.shots-tmp');

const targets = [
  { slug: 'kosmos', url: 'https://www.kosmos-lab.com/fr' },
  // Culture Club has no public page (every route redirects to /login): its shot
  // comes from the signed-in UI and is kept as a manual asset.
  { slug: 'culture-club', url: null },
  { slug: 'incxnnue-lab', url: 'https://incxnnue-lab.com/fr' },
  { slug: 'ghys-et-martine', url: process.env.GHYS_URL ?? 'http://localhost:4310' },
];

await mkdir(outDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

const browser = await chromium.launch();

for (const target of targets) {
  if (process.env.SLUG && target.slug !== process.env.SLUG) continue;

  if (!target.url) {
    console.log(`– ${target.slug} : capture manuelle conservée`);
    continue;
  }

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: 'fr-FR',
  });

  try {
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 45_000 });
  } catch {
    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 45_000 }).catch(() => {});
  }

  await page.waitForTimeout(1500);
  await page.evaluate(() => document.fonts?.ready?.catch?.(() => {}));
  // Hide framework dev overlays (Next.js dev indicator) so local shots stay clean.
  await page
    .addStyleTag({ content: 'nextjs-portal{display:none!important}' })
    .catch(() => {});

  // Dismiss typical consent banners so the shot is not covered.
  for (const label of ['Accepter', 'Tout accepter', 'Accept', 'J’accepte', 'OK']) {
    const button = page.getByRole('button', { name: label, exact: false }).first();
    if (await button.isVisible().catch(() => false)) {
      await button.click().catch(() => {});
      await page.waitForTimeout(400);
      break;
    }
  }

  const png = path.join(tmpDir, `${target.slug}.png`);
  await page.screenshot({ path: png, animations: 'disabled' });
  await page.close();

  const webp = path.join(outDir, `${target.slug}.webp`);
  await run('cwebp', ['-quiet', '-q', '82', '-resize', '1280', '0', png, '-o', webp]);
  console.log(`✓ ${target.slug} → ${path.relative(root, webp)}`);
}

await browser.close();
await rm(tmpDir, { recursive: true, force: true });
