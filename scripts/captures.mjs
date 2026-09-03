/**
 * Régénère les captures du README depuis l'application réelle.
 *
 *   npm i --no-save playwright sharp && npx playwright install chromium
 *   npm run build && npx next start -p 3220    # terminal 1
 *   node scripts/captures.mjs                   # terminal 2
 *
 * playwright et sharp ne sont volontairement pas dans devDependencies : ils
 * pèsent plus de 100 Mo pour un usage ponctuel, et `npm ci` tourne à chaque
 * exécution de CI. On les installe le temps de régénérer les images.
 *
 * La page est une vitrine d'une seule page : on capture section par section
 * en faisant défiler jusqu'à chaque ancre, plutôt qu'une image pleine hauteur
 * illisible. Chaque section a ses propres animations au scroll, d'où l'attente
 * après le défilement.
 */
import { chromium } from 'playwright';

const EXE = process.env.CHROMIUM_PATH;
const BASE = process.env.BASE || 'http://localhost:3220';
const OUT = process.env.OUT || 'docs/captures';

// null = haut de page (le hero, qui n'a pas d'ancre).
const SECTIONS = [
  [null, 'hero'],
  ['#features', 'features'],
  ['#colors', 'colors'],
  ['#specs', 'specs'],
  ['#order', 'order'],
];

const browser = await chromium.launch(EXE ? { executablePath: EXE } : {});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);

for (const [anchor, name] of SECTIONS) {
  if (anchor) {
    await page.locator(anchor).scrollIntoViewIfNeeded();
    // Les révélations au scroll durent ~0,75 s ; on laisse de la marge.
    await page.waitForTimeout(2500);
  }
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log(`${name}.png  ←  ${anchor ?? 'haut de page'}`);
}

await browser.close();

// Les PNG bruts en x2 pèsent ~4,5 Mo ; ramenés à 1440 px de large et
// recompressés, ils tombent sous 0,5 Mo sans perte visible dans un README.
const sharp = (await import('sharp')).default;
const { readdir, rename } = await import('node:fs/promises');
const { join } = await import('node:path');
for (const file of (await readdir(OUT)).filter((f) => f.endsWith('.png'))) {
  const p = join(OUT, file);
  await sharp(p)
    .resize({ width: 1440, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(p + '.tmp');
  await rename(p + '.tmp', p);
}
console.log('captures optimisées');
