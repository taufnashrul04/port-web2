// Asset prep: chroma-key the red passport background out of foto.png.
// Produces public/foto-processed.png (transparent bg) and a duotone variant.
// Run once: `node scripts/process-photo.mjs`
import sharp from "sharp";
import path from "path";

const root = path.resolve(process.cwd());
const src = path.join(root, "foto.png");
const outCut = path.join(root, "public", "foto-processed.png");
const outDuo = path.join(root, "public", "foto-duotone.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const px = Buffer.from(data);

// Chroma-key the saturated red bg -> transparent, feathered edge + despill.
// Calibrated: bg ≈ (212,14,15) with very low G/B; skin has G/B > 120.
for (let i = 0; i < px.length; i += channels) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  const gb = Math.max(g, b);
  let cut = 0;
  if (r > 120 && r - gb > 60) {
    // fully cut when G/B are very low; soft edge in the 90..135 band
    cut = Math.min(1, Math.max(0, (135 - gb) / 45));
  }
  if (cut > 0) {
    px[i + 3] = Math.round(px[i + 3] * (1 - cut));
    if (r > gb) px[i] = Math.round(r - (r - gb) * cut); // despill red fringe
  }
}

await sharp(px, { raw: { width, height, channels } }).png().toFile(outCut);

// Cyan/charcoal duotone variant.
const shadow = { r: 8, g: 12, b: 18 };
const light = { r: 158, g: 226, b: 255 };
const duo = Buffer.from(px);
for (let i = 0; i < duo.length; i += channels) {
  if (duo[i + 3] === 0) continue;
  const lum = (0.299 * duo[i] + 0.587 * duo[i + 1] + 0.114 * duo[i + 2]) / 255;
  duo[i] = Math.round(shadow.r + (light.r - shadow.r) * lum);
  duo[i + 1] = Math.round(shadow.g + (light.g - shadow.g) * lum);
  duo[i + 2] = Math.round(shadow.b + (light.b - shadow.b) * lum);
}
await sharp(duo, { raw: { width, height, channels } }).png().toFile(outDuo);

console.log(JSON.stringify({ width, height, channels }));
