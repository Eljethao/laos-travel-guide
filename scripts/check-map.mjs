// Sanity check: every destination pin lies inside its stated province,
// and the neighbour-country labels sit outside Laos. Run: npm run check:map
import { geoContains } from 'd3-geo'
import fs from 'node:fs'

const geo = JSON.parse(fs.readFileSync(new URL('../src/data/laos-provinces.json', import.meta.url), 'utf8'))
const src = fs.readFileSync(new URL('../src/data/destinations.ts', import.meta.url), 'utf8')
const mapSrc = fs.readFileSync(new URL('../src/components/LaosMap.tsx', import.meta.url), 'utf8')

let failures = 0
const re = /id: '([^']+)',\s*name: \{[^}]*\},\s*province: '([^']+)'[\s\S]*?coords: \[([\d.]+), ([\d.]+)\]/g
let pins = 0
for (const m of src.matchAll(re)) {
  pins++
  const hit = geo.features.find((f) => geoContains(f, [+m[3], +m[4]]))
  const ok = hit?.properties.name === m[2]
  if (!ok) failures++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${m[1].padEnd(18)} expected ${m[2].padEnd(18)} got ${hit?.properties.name ?? 'outside Laos'}`)
}
if (pins === 0) {
  console.log('FAIL no destinations parsed — update the regex in check-map.mjs')
  failures++
}
for (const m of mapSrc.matchAll(/name: '([A-Z]+)',(?: lo: '[^']+',)? at: \[([\d.]+), ([\d.]+)\]/g)) {
  const inside = geo.features.some((f) => geoContains(f, [+m[2], +m[3]]))
  if (inside) failures++
  console.log(`${inside ? 'FAIL' : 'ok  '} label ${m[1]} ${inside ? 'is inside Laos' : 'outside Laos'}`)
}
process.exit(failures ? 1 : 0)
