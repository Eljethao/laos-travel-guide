// Downloads one freely licensed photo per destination from Wikimedia Commons and
// records its author + licence for attribution. Re-run: npm run fetch:images
// Only CC0, public domain, CC BY and CC BY-SA images are accepted.
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'

const UA = 'VisitLaosTravelGuide/1.0 (personal portfolio project)'
const OUT_DIR = new URL('../public/images/places/', import.meta.url)
const CREDITS = new URL('../src/data/photos.json', import.meta.url)

// For each place: Wikipedia article titles to take the lead image from, or explicit Commons files.
const sources = {
  hero: ['File:Kuang Si Falls, Luang Prabang, Laos.jpg', 'Kuang Si Falls'],
  'luang-prabang': ['Wat Xieng Thong', 'Luang Prabang'],
  'kuang-si': ['File:Kuang Si Falls, Luang Prabang, Laos.jpg', 'Kuang Si Falls'],
  'pak-ou': ['Pak Ou Caves'],
  'nong-khiaw': ['Nong Khiaw', 'Nam Ou'],
  'luang-namtha': ['File:Luang Namtha-Lanten-Dorf Nham Dy-04-gje.jpg', 'File:Luang Namtha Province 2011.jpg'],
  phongsaly: ['Phongsaly', 'Phongsaly province'],
  'mekong-slow-boat': ['Pakbeng', 'Huay Xai'],
  'vieng-xai': ['Viengxay caves', 'Vieng Xai', 'search:Vieng Xai cave Houaphanh', 'search:Viengxay'],
  'vang-vieng': ['Vang Vieng'],
  vientiane: ['Pha That Luang'],
  'buddha-park': ['Buddha Park'],
  'plain-of-jars': ['Plain of Jars'],
  'kong-lor': ['Tham Kong Lo', 'Kong Lor Cave'],
  'thakhek-loop': ['search:Thakhek loop', 'search:Khammouane karst', 'search:Tha Falang Khammouane'],
  savannakhet: ['Savannakhet'],
  bolaven: ['Bolaven Plateau', 'Tad Fane'],
  'wat-phou': ['Vat Phou'],
  'si-phan-don': ['Si Phan Don', 'Khone Phapheng Falls'],
}

const ALLOWED = /^(cc0|public domain|pd|cc[ -]by(-sa)?[ -][\d.]+)/i

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Polite fetch: pause between requests and back off when rate-limited (HTTP 429).
async function get(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    await sleep(1200)
    const res = await fetch(url, { headers: { 'User-Agent': UA } })
    if (res.status !== 429) {
      if (!res.ok) throw new Error(`${res.status} ${url}`)
      return res
    }
    const wait = Number(res.headers.get('retry-after')) * 1000 || 5000 * 2 ** attempt
    console.log(`  rate limited, waiting ${Math.round(wait / 1000)}s`)
    await sleep(wait)
  }
  throw new Error(`gave up after retries: ${url}`)
}

const api = async (host, params) => {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', origin: '*', ...params })
  return (await get(url)).json()
}

const strip = (html = '') => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// "search:<terms>" candidates search Commons files directly and return the top matches.
async function searchFiles(terms) {
  const d = await api('commons.wikimedia.org', {
    action: 'query',
    list: 'search',
    srsearch: `${terms} filetype:bitmap`,
    srnamespace: '6',
    srlimit: '5',
  })
  return (d.query?.search ?? []).map((r) => r.title)
}

async function leadImage(title) {
  const d = await api('en.wikipedia.org', { action: 'query', prop: 'pageimages', piprop: 'name', titles: title, redirects: '1' })
  const name = d.query?.pages?.[0]?.pageimage
  return name ? `File:${name}` : null
}

async function fileInfo(file) {
  const d = await api('commons.wikimedia.org', {
    action: 'query',
    titles: file,
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size|mime',
    iiurlwidth: '1600',
  })
  const page = d.query?.pages?.[0]
  const info = page?.imageinfo?.[0]
  if (!info) return null
  const meta = info.extmetadata ?? {}
  return {
    file: page.title,
    mime: info.mime,
    width: info.width,
    thumb: info.thumburl,
    page: info.descriptionurl,
    license: meta.LicenseShortName?.value ?? '',
    licenseUrl: meta.LicenseUrl?.value ?? '',
    author: strip(meta.Artist?.value) || 'Unknown',
  }
}

// Small version for cards, lists and map tooltips.
function makeThumb(id) {
  const src = new URL(`${id}.jpg`, OUT_DIR).pathname
  const dst = new URL(`${id}-sm.jpg`, OUT_DIR).pathname
  execFileSync('sips', ['-s', 'formatOptions', '70', '-Z', '640', src, '--out', dst], { stdio: 'ignore' })
}

fs.mkdirSync(OUT_DIR, { recursive: true })
const credits = fs.existsSync(CREDITS) ? JSON.parse(fs.readFileSync(CREDITS, 'utf8')) : {}
const force = process.argv.includes('--force')

for (const [id, candidates] of Object.entries(sources)) {
  if (!force && credits[id] && fs.existsSync(new URL(`${id}.jpg`, OUT_DIR))) {
    if (!fs.existsSync(new URL(`${id}-sm.jpg`, OUT_DIR))) makeThumb(id)
    console.log(`have ${id}`)
    continue
  }
  let chosen = null
  const files = async function* () {
    for (const c of candidates) {
      if (c.startsWith('File:')) yield c
      else if (c.startsWith('search:')) yield* await searchFiles(c.slice(7))
      else {
        const lead = await leadImage(c)
        if (lead) yield lead
      }
    }
  }
  for await (const file of files()) {
    const info = await fileInfo(file)
    if (!info) continue
    if (!/jpe?g|png|webp/.test(info.mime) || info.width < 800) {
      console.log(`  skip ${id}: ${file} (${info.mime}, ${info.width}px)`)
      continue
    }
    if (!ALLOWED.test(info.license)) {
      console.log(`  skip ${id}: ${file} (licence "${info.license}")`)
      continue
    }
    chosen = info
    break
  }
  if (!chosen) {
    console.log(`MISS ${id}`)
    continue
  }
  const out = new URL(`${id}.jpg`, OUT_DIR)
  const res = await get(chosen.thumb)
  fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()))
  // Normalise to JPEG, max 1600px, reasonable quality (macOS sips).
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '62', '-Z', '1400', out.pathname, '--out', out.pathname], { stdio: 'ignore' })
  makeThumb(id)
  credits[id] = { file: chosen.file, author: chosen.author, license: chosen.license, licenseUrl: chosen.licenseUrl, source: chosen.page }
  // Save progress after each image so an interrupted run can resume.
  fs.writeFileSync(CREDITS, JSON.stringify(credits, null, 2) + '\n')
  console.log(`ok   ${id.padEnd(17)} ${chosen.license.padEnd(14)} ${chosen.file}`)
}

fs.writeFileSync(CREDITS, JSON.stringify(credits, null, 2) + '\n')
console.log(`\n${Object.keys(credits).length}/${Object.keys(sources).length} images saved`)
