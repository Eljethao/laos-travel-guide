import { geoMercator, geoPath } from 'd3-geo'
import type { FeatureCollection, Geometry } from 'geojson'
import { animate } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import provincesJson from '../data/laos-provinces.json'
import { categoryColors, categoryNames, destinations, provinceNames } from '../data/destinations'
import type { Destination } from '../data/destinations'
import { thumb } from '../data/photos'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

type ProvinceProps = { name: string; iso: string }
const provinces = provincesJson as unknown as FeatureCollection<Geometry, ProvinceProps>

const W = 520
const H = 620
const IDENTITY = { k: 1, x: 0, y: 0 }

// Neighbouring countries, placed just outside the border (verified by `npm run check:map`).
const neighbours: { name: string; lo: string; at: [number, number] }[] = [
  { name: 'CHINA', lo: 'ຈີນ', at: [101.2, 22.3] },
  { name: 'MYANMAR', lo: 'ມຽນມາ', at: [100.3, 21.0] },
  { name: 'THAILAND', lo: 'ໄທ', at: [102.6, 16.0] },
  { name: 'VIETNAM', lo: 'ຫວຽດນາມ', at: [106.2, 19.0] },
  { name: 'CAMBODIA', lo: 'ກຳປູເຈຍ', at: [106.9, 14.05] },
]

interface Props {
  visible: Destination[]
  selectedId: string | null
  activeProvince: string | null
  route: string[] | null
  onSelect: (id: string) => void
  onProvince: (name: string | null) => void
  onReset: () => void
}

type View = typeof IDENTITY

/** Zoom so that the box [[x0,y0],[x1,y1]] fills most of the map. */
function fitBox([[x0, y0], [x1, y1]]: [[number, number], [number, number]], maxK = 4): View {
  const k = Math.max(1, Math.min(maxK, 0.8 / Math.max((x1 - x0) / W, (y1 - y0) / H)))
  const cx = (x0 + x1) / 2
  const cy = (y0 + y1) / 2
  return { k, x: W / 2 - k * cx, y: H / 2 - k * cy }
}

export function LaosMap({ visible, selectedId, activeProvince, route, onSelect, onProvince, onReset }: Props) {
  const { t, lang } = useLang()
  const [hoverProvince, setHoverProvince] = useState<string | null>(null)
  const [hoverPin, setHoverPin] = useState<string | null>(null)
  const [view, setView] = useState<View>(IDENTITY)
  const viewRef = useRef(view)

  const { projection, path } = useMemo(() => {
    const projection = geoMercator().fitExtent(
      [
        [40, 20],
        [W - 40, H - 30],
      ],
      provinces,
    )
    return { projection, path: geoPath(projection) }
  }, [])

  const project = useCallback((c: [number, number]) => (projection(c) ?? [0, 0]) as [number, number], [projection])

  // Work out where the camera should be, then tween to it.
  const target = useMemo<View>(() => {
    if (route && route.length > 1) {
      const pts = route.map((id) => project(destinations.find((d) => d.id === id)!.coords))
      const xs = pts.map((p) => p[0])
      const ys = pts.map((p) => p[1])
      return fitBox(
        [
          [Math.min(...xs) - 30, Math.min(...ys) - 30],
          [Math.max(...xs) + 30, Math.max(...ys) + 30],
        ],
        2.6,
      )
    }
    if (activeProvince) {
      const f = provinces.features.find((p) => p.properties.name === activeProvince)
      if (f) return fitBox(path.bounds(f) as [[number, number], [number, number]], 3.2)
    }
    if (selectedId) {
      const d = destinations.find((x) => x.id === selectedId)
      if (d) {
        const [x, y] = project(d.coords)
        return fitBox([
          [x - 70, y - 80],
          [x + 70, y + 80],
        ])
      }
    }
    return IDENTITY
  }, [route, activeProvince, selectedId, path, project])

  useEffect(() => {
    const from = viewRef.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const controls = animate(0, 1, {
      duration: reduced ? 0 : 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (p) => {
        const v = {
          k: from.k + (target.k - from.k) * p,
          x: from.x + (target.x - from.x) * p,
          y: from.y + (target.y - from.y) * p,
        }
        viewRef.current = v
        setView(v)
      },
    })
    return () => controls.stop()
  }, [target])

  const visibleIds = new Set(visible.map((d) => d.id))
  const routePoints = route?.map((id) => project(destinations.find((d) => d.id === id)!.coords))
  const hovered = destinations.find((d) => d.id === hoverPin)
  const capital = project([102.633, 17.976])
  const zoomed = view.k > 1.05
  const s = 1 / view.k // keeps pins and labels the same on-screen size while zoomed

  const toScreen = ([x, y]: [number, number]) => ({ left: `${((view.x + view.k * x) / W) * 100}%`, top: `${((view.y + view.k * y) / H) * 100}%` })

  const activeFeature = activeProvince ? provinces.features.find((p) => p.properties.name === activeProvince) : null

  return (
    <div className="map">
      <div className="map__stage">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Map of Laos showing provinces and destinations">
          <defs>
            <filter id="land-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1d3f8f" floodOpacity="0.12" />
            </filter>
          </defs>
          <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
            <g filter="url(#land-shadow)">
              {provinces.features.map((f) => {
                const name = f.properties.name
                const cls = ['province', name === activeProvince && 'is-active', name === hoverProvince && 'is-hover'].filter(Boolean).join(' ')
                return (
                  <path
                    key={f.properties.iso}
                    d={path(f) ?? undefined}
                    className={cls}
                    vectorEffect="non-scaling-stroke"
                    onMouseEnter={() => setHoverProvince(name)}
                    onMouseLeave={() => setHoverProvince(null)}
                    onClick={() => onProvince(name === activeProvince ? null : name)}
                  >
                    <title>{t(provinceNames[name] ?? { en: name, lo: name })}</title>
                  </path>
                )
              })}
            </g>

            {neighbours.map((n) => {
              const [x, y] = project(n.at)
              return (
                <text key={n.name} x={x} y={y} className="map__neighbour" textAnchor="middle" fontSize={10 * s}>
                  {lang === 'lo' ? n.lo : n.name}
                </text>
              )
            })}

            {activeFeature && (() => {
              const [cx, cy] = path.centroid(activeFeature)
              return (
                <text x={cx} y={cy} className="map__province-label" textAnchor="middle" fontSize={13 * s}>
                  {t(provinceNames[activeFeature.properties.name])}
                </text>
              )
            })()}

            <circle cx={capital[0]} cy={capital[1]} r={9 * s} className="map__capital" strokeWidth={1.5 * s} />

            {routePoints && routePoints.length > 1 && (
              <polyline key={route?.join()} className="map__route" points={routePoints.map((p) => p.join(',')).join(' ')} vectorEffect="non-scaling-stroke" />
            )}

            {destinations.map((d) => {
              const [x, y] = project(d.coords)
              const shown = visibleIds.has(d.id)
              const selected = d.id === selectedId
              const inRoute = route?.includes(d.id)
              const color = categoryColors[d.category]
              return (
                <g
                  key={d.id}
                  className={`pin ${shown || inRoute ? '' : 'is-dim'} ${selected ? 'is-selected' : ''}`}
                  transform={`translate(${x} ${y}) scale(${s})`}
                  onClick={() => onSelect(d.id)}
                  onMouseEnter={() => setHoverPin(d.id)}
                  onMouseLeave={() => setHoverPin(null)}
                  role="button"
                  tabIndex={shown ? 0 : -1}
                  aria-label={t(d.name)}
                  onFocus={() => setHoverPin(d.id)}
                  onBlur={() => setHoverPin(null)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onSelect(d.id))}
                >
                  <circle r={16} className="pin__hit" />
                  {(selected || inRoute) && <circle r={14} className="pin__pulse" style={{ fill: color }} />}
                  <circle r={selected ? 8 : 6.5} className="pin__dot" style={{ fill: color }} />
                  {inRoute && (
                    <text className="pin__num" y={-12} textAnchor="middle">
                      {route!.indexOf(d.id) + 1}
                    </text>
                  )}
                </g>
              )
            })}
          </g>
        </svg>

        {hovered && (
          <div className="map__tip" style={toScreen(project(hovered.coords))} aria-hidden="true">
            <img src={thumb(hovered.id)} alt="" />
            <div>
              <strong>{t(hovered.name)}</strong>
              <span style={{ color: categoryColors[hovered.category] }}>{t(categoryNames[hovered.category])}</span>
            </div>
          </div>
        )}

        {zoomed && (
          <button className="map__reset" onClick={onReset}>
            ← {t(ui.explore.zoomOut)}
          </button>
        )}
      </div>

      <div className="map__footer">
        <span>{hoverProvince ? t(provinceNames[hoverProvince] ?? { en: hoverProvince, lo: hoverProvince }) : t(ui.explore.hint)}</span>
        <span className="map__legend">
          <span className="legend-capital" /> {t(ui.explore.capital)}
        </span>
      </div>
    </div>
  )
}
