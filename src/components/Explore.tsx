import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useMemo, useState } from 'react'
import { categories, categoryColors, categoryNames, destinations, itineraries, provinceNames, regionNames, regions } from '../data/destinations'
import type { Category, Region } from '../data/destinations'
import { thumb } from '../data/photos'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { SectionHead } from './SectionHead'

// The map (boundary data + d3-geo) loads as its own chunk so the page appears sooner.
const LaosMap = lazy(() => import('./LaosMap').then((m) => ({ default: m.LaosMap })))

interface Props {
  query: string
  onQuery: (q: string) => void
  province: string | null
  onProvince: (p: string | null) => void
  focusId: string | null
  routeId: string | null
  onOpen: (id: string) => void
  onClearRoute: () => void
  onReset: () => void
}

export function Explore({ query, onQuery, province, onProvince, focusId, routeId, onOpen, onClearRoute, onReset }: Props) {
  const { t, lang } = useLang()
  const [region, setRegion] = useState<Region | 'All'>('All')
  const [category, setCategory] = useState<Category | 'All'>('All')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return destinations.filter(
      (d) =>
        (region === 'All' || d.region === region) &&
        (category === 'All' || d.category === category) &&
        (!province || d.province === province) &&
        (!q ||
          [d.name.en, d.name.lo, d.province, provinceNames[d.province]?.lo, d.summary.en, d.summary.lo]
            .join(' ')
            .toLowerCase()
            .includes(q)),
    )
  }, [region, category, province, query])

  const route = itineraries.find((i) => i.id === routeId) ?? null
  const hasFilters = region !== 'All' || category !== 'All' || province || query
  const provinceEmpty = province && !destinations.some((d) => d.province === province)

  const reset = () => {
    setRegion('All')
    setCategory('All')
    onQuery('')
    onReset()
  }

  return (
    <section id="explore" className="section">
      <div className="container">
        <SectionHead eyebrow={ui.explore.eyebrow} title={ui.explore.title} lead={ui.explore.lead} />

        <div className="explore">
          <div className="explore__map">
            <Suspense fallback={<div className="map map--loading" aria-busy="true" />}>
              <LaosMap
                visible={visible}
                selectedId={focusId}
                activeProvince={province}
                route={route ? route.stops.map((s) => s.id) : null}
                onSelect={onOpen}
                onProvince={onProvince}
                onReset={onReset}
              />
            </Suspense>
            <ul className="legend">
              {categories.map((c) => (
                <li key={c}>
                  <span className="dot" style={{ background: categoryColors[c] }} />
                  {t(categoryNames[c])}
                </li>
              ))}
            </ul>
          </div>

          <div className="explore__side">
            <AnimatePresence>
              {route && (
                <motion.div className="route-banner" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  <span>
                    {t(ui.explore.route)}: <strong>{t(route.title)}</strong>
                  </span>
                  <button className="link" onClick={onClearRoute}>
                    {t(ui.explore.clear)}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="filters">
              <div className="search">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input type="search" placeholder={t(ui.explore.search)} value={query} onChange={(e) => onQuery(e.target.value)} aria-label={t(ui.explore.search)} />
              </div>
              <div className="chips" role="group" aria-label="Region">
                {(['All', ...regions] as const).map((r) => (
                  <button key={r} className={`chip ${region === r ? 'is-active' : ''}`} onClick={() => setRegion(r)} aria-pressed={region === r}>
                    {r === 'All' ? t(ui.explore.allRegions) : t(regionNames[r])}
                  </button>
                ))}
              </div>
              <div className="chips" role="group" aria-label="Type">
                {(['All', ...categories] as const).map((c) => (
                  <button key={c} className={`chip ${category === c ? 'is-active' : ''}`} onClick={() => setCategory(c)} aria-pressed={category === c}>
                    {c !== 'All' && <span className="dot" style={{ background: categoryColors[c] }} />}
                    {c === 'All' ? t(ui.explore.allTypes) : t(categoryNames[c])}
                  </button>
                ))}
              </div>
              {province && (
                <p className="province-filter">
                  {t(ui.explore.province)}: <strong>{t(provinceNames[province] ?? { en: province, lo: province })}</strong>{' '}
                  <button className="link" onClick={() => onProvince(null)}>
                    {t(ui.explore.remove)}
                  </button>
                </p>
              )}
            </div>

            <p className="count">
              <span>
                {visible.length} {lang === 'en' && visible.length === 1 ? t(ui.explore.place) : t(ui.explore.places)}
              </span>
              {hasFilters && (
                <button className="link" onClick={reset}>
                  {t(ui.explore.reset)}
                </button>
              )}
            </p>

            <motion.ul className="places" layout>
              <AnimatePresence initial={false}>
                {visible.map((d) => (
                  <motion.li key={d.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <button className={`place ${focusId === d.id ? 'is-active' : ''}`} onClick={() => onOpen(d.id)}>
                      <img className="place__img" src={thumb(d.id)} alt="" loading="lazy" />
                      <span className="place__body">
                        <span className="place__name">{t(d.name)}</span>
                        <span className="place__meta">
                          <span className="dot" style={{ background: categoryColors[d.category] }} />
                          {t(categoryNames[d.category])} · {t(provinceNames[d.province])} · {t(d.stay)}
                        </span>
                      </span>
                      <span className="place__arrow" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
              {visible.length === 0 && <li className="empty">{provinceEmpty ? t(ui.explore.noneInProvince) : t(ui.explore.none)}</li>}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
