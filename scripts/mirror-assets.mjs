// Copies every Lovable CDN image into dist/ so static hosts (GitHub Pages) serve them locally.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
const HOST = process.env.ASSET_HOST || 'https://rachelieu-notebook.lovable.app';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.asset.json') ? [p] : []; });
let failed = 0;
for (const file of walk('src')) {
  const { url } = JSON.parse(readFileSync(file, 'utf8'));
  const res = await fetch(HOST + url);
  if (!res.ok) { console.error('FAILED', res.status, url); failed++; continue; }
  const out = join('dist', url);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, Buffer.from(await res.arrayBuffer()));
}
if (failed) process.exit(1);
console.log('Mirrored assets OK');
