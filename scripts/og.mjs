import { chromium } from 'playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const font = pathToFileURL(
  path.join(root, 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'),
).href;

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  @font-face { font-family: 'Inter'; src: url('${font}') format('woff2-variations'); font-weight: 100 900; }
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; font-family: 'Inter', sans-serif; background: #fff; color: #09090b;
    padding: 64px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;
  }
  .dots {
    position: absolute; inset: 0 0 auto 0; height: 320px;
    background-image: radial-gradient(#e4e4e7 1px, transparent 1px); background-size: 20px 20px;
    mask-image: radial-gradient(110% 80% at 30% 0%, #000 30%, transparent 78%);
    -webkit-mask-image: radial-gradient(110% 80% at 30% 0%, #000 30%, transparent 78%);
  }
  .brand { display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; position: relative; }
  .mark { width: 34px; height: 34px; border-radius: 9px; background: #09090b; color: #fafafa; display: grid; place-items: center; font-size: 17px; font-weight: 700; }
  h1 { font-size: 52px; line-height: 1.06; letter-spacing: -0.035em; font-weight: 600; max-width: 1010px; position: relative; }
  h1 span { color: #71717a; }
  .bottom { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; position: relative; }
  .projects { font-size: 17px; color: #71717a; }
  .projects b { color: #09090b; font-weight: 500; display: block; font-size: 13px; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 8px; }
  .meta { font-size: 16px; color: #71717a; text-align: right; }
</style></head>
<body>
  <div class="dots"></div>
  <div class="brand"><span class="mark">G</span> Gauthier Combes</div>
  <h1>Je design et je vibe code des sites.<br><span>Du premier croquis à la mise en ligne.</span></h1>
  <div class="bottom">
    <div class="projects"><b>Sélection</b>Kosmos · Culture Club · Incxnnue Lab · Ghys &amp; Martine</div>
    <div class="meta">Product manager · Paris<br>gauthiernoepm-max.github.io/portfolio</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(root, 'public/og.png') });
await browser.close();
console.log('✓ public/og.png');
