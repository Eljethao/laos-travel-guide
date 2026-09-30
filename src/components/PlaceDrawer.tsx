import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { categoryColors, categoryNames, destinations, provinceNames, regionNames } from '../data/destinations'
import { photo, photoCredits, thumb } from '../data/photos'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

interface Props {
  id: string | null
  onClose: () => void
  onNavigate: (id: string) => void
  onShowOnMap: (id: string) => void
}

export function PlaceDrawer({ id, onClose, onNavigate, onShowOnMap }: Props) {
  const { t } = useLang()
  const closeRef = useRef<HTMLButtonElement>(null)
  const index = destinations.findIndex((d) => d.id === id)
  const d = index >= 0 ? destinations[index] : null

  useEffect(() => {
    if (!d) return
    const step = (dir: number) => onNavigate(destinations[(index + dir + destinations.length) % destinations.length].id)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus({ preventScroll: true })
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [d, index, onClose, onNavigate])

  const prev = destinations[(index - 1 + destinations.length) % destinations.length]
  const next = destinations[(index + 1) % destinations.length]
  const credit = d ? photoCredits[d.id] : null

  return (
    <AnimatePresence>
      {d && (
        <motion.div className="drawer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeRef} className="drawer__close" onClick={onClose} aria-label={t(ui.detail.close)}>
              ✕
            </button>

            <AnimatePresence mode="wait">
              <motion.div key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <figure className="drawer__media">
                  <img src={photo(d.id)} alt={t(d.name)} style={{ backgroundImage: `url(${thumb(d.id)})` }} />
                  <div className="drawer__media-shade" />
                  <div className="drawer__heading">
                    <div className="drawer__tags">
                      <span className="tag tag--solid" style={{ background: categoryColors[d.category] }}>
                        {t(categoryNames[d.category])}
                      </span>
                      <span className="tag tag--glass">{t(regionNames[d.region])}</span>
                      {d.unesco && <span className="tag tag--glass">★ {t(ui.detail.unesco)}</span>}
                    </div>
                    <h3 id="drawer-title">{t(d.name)}</h3>
                    <p>
                      {t(ui.detail.province)} {t(provinceNames[d.province])}
                    </p>
                  </div>
                  {credit && (
                    <figcaption>
                      <a href={credit.source} target="_blank" rel="noopener">
                        {t(ui.detail.photo)}: {credit.author} · {credit.license}
                      </a>
                    </figcaption>
                  )}
                </figure>

                <div className="drawer__body">
                  <p className="drawer__summary">{t(d.summary)}</p>

                  <dl className="drawer__facts">
                    <div>
                      <dt>{t(ui.detail.howLong)}</dt>
                      <dd>{t(d.stay)}</dd>
                    </div>
                    <div>
                      <dt>{t(ui.detail.gettingThere)}</dt>
                      <dd>{t(d.gettingThere)}</dd>
                    </div>
                  </dl>

                  <h4>{t(ui.detail.dontMiss)}</h4>
                  <ul className="checklist">
                    {d.highlights.map((h) => (
                      <li key={h.en}>{t(h)}</li>
                    ))}
                  </ul>

                  <p className="tip">
                    <strong>💡 {t(ui.detail.tip)}</strong>
                    {t(d.tip)}
                  </p>

                  <button className="btn btn--primary drawer__map-btn" onClick={() => onShowOnMap(d.id)}>
                    📍 {t(ui.detail.showOnMap)}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <nav className="drawer__nav" aria-label="Places">
              <button onClick={() => onNavigate(prev.id)} aria-label={t(ui.detail.prev)}>
                <img src={thumb(prev.id)} alt="" />
                <span>
                  <small>← {t(ui.detail.prev)}</small>
                  {t(prev.name)}
                </span>
              </button>
              <button onClick={() => onNavigate(next.id)} aria-label={t(ui.detail.next)} className="drawer__next">
                <span>
                  <small>{t(ui.detail.next)} →</small>
                  {t(next.name)}
                </span>
                <img src={thumb(next.id)} alt="" />
              </button>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
