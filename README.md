# Visit Laos — Travel Guide

A modern, bilingual (Lao / English) travel guide for anyone visiting Laos. Built with
**React + TypeScript + Vite**, **Framer Motion**, and an interactive map of all 18 provinces drawn with **d3-geo**.

## Run

```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # standalone build -> dist/
npm run build:portfolio  # build into ../lj-portfolio/public/laos-travel (served at /laos-travel/)
npm run check:map        # verify every pin sits inside its stated province
npm run fetch:images     # (re)download destination photos from Wikimedia Commons
```

## Features

- **Lao / English toggle** — every piece of text in both languages; choice is remembered (or use `?lang=lo`)
- **Interactive map** — smooth zoom to a province, a place, or a whole itinerary route; photo tooltips on hover
- **Photo gallery & detail drawer** — 18 destinations with large photos, highlights, travel info, local tips, and prev/next browsing (← → keys)
- **Itineraries** — three ready-made routes, drawn and numbered on the map
- **When to go** — month-by-month season chart with major festivals
- Travel essentials, useful Lao phrases, must-try food
- Responsive, keyboard accessible, respects `prefers-reduced-motion`

## Edit content

- Places, itineraries, essentials, seasons, phrases: [`src/data/destinations.ts`](src/data/destinations.ts)
- Interface text: [`src/data/ui.ts`](src/data/ui.ts)

Every text value is `{ en: '…', lo: '…' }`. After adding a place, run `npm run check:map`, then add a
photo source for it in `scripts/fetch-images.mjs` and run `npm run fetch:images`.

## Photos

All photos come from [Wikimedia Commons](https://commons.wikimedia.org/). The fetch script only accepts
CC0, public-domain, CC BY and CC BY-SA images, and records the author and licence of each in
`src/data/photos.json`. Credits are shown on each photo and listed in the site footer, as the licences require.

## Data & credits

Province boundaries: © OpenStreetMap contributors, via [geoBoundaries](https://www.geoboundaries.org/) (ODbL 1.0).
Travel information is general guidance — visa rules, prices and schedules change.
