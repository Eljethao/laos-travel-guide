import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  categoryColors,
  categoryNames,
  destinations,
  essentials,
  festivals,
  foods,
  itineraries,
  months,
  monthSeasons,
  phrases,
  provinceNames,
  seasons,
} from '../data/destinations'
import { photoCredits, thumb } from '../data/photos'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { Reveal, SectionHead } from './SectionHead'

const byId = (id: string) => destinations.find((d) => d.id === id)!

export function Gallery({ onOpen }: { onOpen: (id: string) => void }) {
  const { t } = useLang()
  const featured = destinations.filter((d) => d.featured)

  return (
    <section id="places" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow={ui.gallery.eyebrow} title={ui.gallery.title} lead={ui.gallery.lead} />
        <div className="gallery">
          {featured.map((d, i) => (
            <Reveal key={d.id} delay={(i % 4) * 0.06} className={`gallery__item gallery__item--${i}`}>
              <button className="card" onClick={() => onOpen(d.id)}>
                <img src={thumb(d.id)} alt="" loading="lazy" />
                <span className="card__shade" />
                <span className="card__top">
                  <span className="tag tag--solid" style={{ background: categoryColors[d.category] }}>
                    {t(categoryNames[d.category])}
                  </span>
                  {d.unesco && <span className="tag tag--glass">★ UNESCO</span>}
                </span>
                <span className="card__bottom">
                  <span className="card__title">{t(d.name)}</span>
                  <span className="card__meta">
                    {t(provinceNames[d.province])} · {t(d.stay)}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="center">
          <a href="#explore" className="btn">
            {t(ui.gallery.all)} →
          </a>
        </div>
      </div>
    </section>
  )
}

export function Itineraries({ activeId, onShow }: { activeId: string | null; onShow: (id: string) => void }) {
  const { t } = useLang()
  return (
    <section id="itineraries" className="section">
      <div className="container">
        <SectionHead eyebrow={ui.itineraries.eyebrow} title={ui.itineraries.title} lead={ui.itineraries.lead} />
        <div className="itineraries">
          {itineraries.map((it, i) => (
            <Reveal key={it.id} delay={i * 0.08}>
              <article className={`itinerary ${activeId === it.id ? 'is-active' : ''}`}>
                <div className="itinerary__cover">
                  <img src={thumb(it.stops[0].id)} alt="" loading="lazy" />
                  <span className="itinerary__days">
                    {it.days} {t(ui.itineraries.days)}
                  </span>
                </div>
                <div className="itinerary__body">
                  <h3>{t(it.title)}</h3>
                  <p className="muted">{t(it.description)}</p>
                  <ol className="stops">
                    {it.stops.map((s) => (
                      <li key={s.id}>
                        <img src={thumb(s.id)} alt="" loading="lazy" />
                        <span>
                          <small>{t(s.days)}</small>
                          {t(byId(s.id).name)}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <button className="btn btn--small" onClick={() => onShow(it.id)}>
                    📍 {t(ui.itineraries.show)}
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhenToGo() {
  const { t } = useLang()
  const [current] = useState(() => new Date().getMonth())
  const [month, setMonth] = useState(current)
  const season = seasons[monthSeasons[month]]
  const monthFestivals = festivals.filter((f) => f.month === month)

  return (
    <section id="when" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow={ui.when.eyebrow} title={ui.when.title} lead={ui.when.lead} />
        <Reveal className="when">
          <div className="months" role="tablist" aria-label={t(ui.when.title)}>
            {months.map((m, i) => {
              const s = seasons[monthSeasons[i]]
              return (
                <button
                  key={m.en}
                  role="tab"
                  aria-selected={i === month}
                  className={`month ${i === month ? 'is-active' : ''}`}
                  onClick={() => setMonth(i)}
                  style={{ ['--season' as string]: s.color }}
                >
                  <span className="month__bar" />
                  <span className="month__name">{t(m)}</span>
                  {festivals.some((f) => f.month === i) && <span className="month__fest" aria-hidden="true">✦</span>}
                  {i === current && <span className="month__now">{t(ui.when.now)}</span>}
                </button>
              )
            })}
          </div>

          <div className="season-legend">
            {Object.values(seasons).map((s) => (
              <span key={s.name.en}>
                <span className="dot" style={{ background: s.color }} /> {t(s.name)}
              </span>
            ))}
            <span>
              <span className="accent">✦</span> {t(ui.when.festivals)}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={month} className="season-card" style={{ ['--season' as string]: season.color }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div>
                <p className="season-card__month">{t(months[month])}</p>
                <h3>{t(season.name)}</h3>
                <p className="muted">{t(season.text)}</p>
              </div>
              <div>
                <p className="season-card__label">{t(ui.when.festivals)}</p>
                {monthFestivals.length ? (
                  <ul className="festivals">
                    {monthFestivals.map((f) => (
                      <li key={f.name.en}>
                        <strong>{t(f.name)}</strong>
                        <span>{t(f.text)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">{t(ui.when.noFestival)}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}

export function Essentials() {
  const { t } = useLang()
  return (
    <section id="essentials" className="section">
      <div className="container">
        <SectionHead eyebrow={ui.essentials.eyebrow} title={ui.essentials.title} lead={ui.essentials.lead} />
        <div className="essentials">
          {essentials.map((e, i) => (
            <Reveal key={e.title.en} delay={(i % 4) * 0.06}>
              <article className="essential">
                <span className="essential__icon" aria-hidden="true">
                  {e.icon}
                </span>
                <h3>{t(e.title)}</h3>
                <p>{t(e.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhrasesAndFood() {
  const { t } = useLang()
  return (
    <section id="phrases" className="section section--dark">
      <div className="container split">
        <div>
          <SectionHead eyebrow={ui.phrases.eyebrow} title={ui.phrases.title} lead={ui.phrases.lead} />
          <Reveal>
            <ul className="phrases">
              {phrases.map((p) => (
                <li key={p.roman}>
                  <span className="phrases__lao" lang="lo">
                    {p.lao}
                  </span>
                  <span className="phrases__roman">{p.roman}</span>
                  <span className="phrases__meaning">{p.meaning}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div>
          <SectionHead eyebrow={ui.food.eyebrow} title={ui.food.title} lead={ui.food.lead} />
          <Reveal>
            <ul className="foods">
              {foods.map((f, i) => (
                <li key={f.name.en}>
                  <span className="foods__num">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <strong>{t(f.name)}</strong>
                    <span>{t(f.text)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  const credits = Object.entries(photoCredits)
  const nameOf = (id: string) => (id === 'hero' ? 'Kuang Si (hero)' : t(byId(id).name))

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand">
              <span className="brand__mark" aria-hidden="true">
                <span />
              </span>
              {t(ui.brand)} — {t(ui.brandSub)}
            </p>
            <p className="muted">
              {t(ui.footer.builtBy)}{' '}
              <a href="/" rel="author">
                Chouayeethao Cherching
              </a>{' '}
              {t(ui.footer.with)}
            </p>
          </div>
          <p className="muted small footer__note">
            {t(ui.footer.disclaimer)}
            <br />
            {t(ui.footer.mapCredit)}
          </p>
        </div>

        <details className="credits">
          <summary>
            {t(ui.footer.photoCredits)} ({credits.length})
          </summary>
          <p className="muted small">{t(ui.footer.photoNote)}</p>
          <ul>
            {credits.map(([id, c]) => (
              <li key={id}>
                <strong>{nameOf(id)}</strong> —{' '}
                <a href={c.source} target="_blank" rel="noopener">
                  {c.author}
                </a>
                ,{' '}
                {c.licenseUrl ? (
                  <a href={c.licenseUrl} target="_blank" rel="noopener license">
                    {c.license}
                  </a>
                ) : (
                  c.license
                )}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  )
}
