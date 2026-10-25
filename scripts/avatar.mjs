/**
 * Regenerates the cropped portrait used by the site from `assets/avatar.png`:
 * finds the ink bounding box, crops a square with breathing room, renders 512px,
 * and writes `public/avatar.webp` (small enough for the 24–52px slots at 2x).
 */
import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const b64 = (await readFile(path.join(root, 'assets/avatar.png'))).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage();
const dataUrl = await page.evaluate(async (src) => {
  const img = new Image();
  img.src = src;
  await img.decode();
  const W = img.naturalWidth;
  const H = img.naturalHeight;

  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, W, H);

  let minX = W, minY = H, maxX = 0, maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      if (data[i + 3] > 16 && data[i] < 245) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const side = Math.max(maxX - minX, maxY - minY) * 1.28;

  const out = document.createElement('canvas');
  out.width = 512;
  out.height = 512;
  const octx = out.getContext('2d');
  octx.fillStyle = '#ffffff';
  octx.fillRect(0, 0, 512, 512);
  octx.imageSmoothingQuality = 'high';
  octx.drawImage(img, cx - side / 2, cy - side / 2, side, side, 0, 0, 512, 512);
  return out.toDataURL('image/png');
}, `data:image/png;base64,${b64}`);

await writeFile('/tmp/avatar-512.png', Buffer.from(dataUrl.split(',')[1], 'base64'));
await browser.close();
console.log('✓ /tmp/avatar-512.png — run: cwebp -q 90 /tmp/avatar-512.png -o public/avatar.webp');
