import { motion, useScroll, useTransform } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { destinations } from '../data/destinations'
import { photo, photoCredits } from '../data/photos'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

const ease = [0.22, 1, 0.36, 1] as const
const unescoCount = destinations.filter((d) => d.unesco).length

export function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  const { t, lang } = useLang()
  const [q, setQ] = useState('')
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 800], [0, 160])
  const fade = useTransform(scrollY, [0, 500], [1, 0.2])
  const credit = photoCredits.hero

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(q)
  }

  const stats = [
    { value: String(destinations.length), label: ui.hero.places },
    { value: '18', label: ui.hero.provinces },
    { value: String(unescoCount), label: ui.hero.unesco },
    { value: t(ui.hero.seasonValue), label: ui.hero.season },
  ]

  return (
    <section id="top" className="hero">
      <motion.div className="hero__bg" style={{ y: imgY }}>
        <img src={photo('hero')} alt="" fetchPriority="high" />
      </motion.div>
      <div className="hero__shade" />

      <motion.div className="container hero__inner" style={{ opacity: fade }}>
        <motion.p className="hero__eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <span className="hero__dot" /> {t(ui.hero.eyebrow)}
        </motion.p>

        <h1 key={lang}>
          <motion.span className="hero__line" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
            {t(ui.hero.title1)}
          </motion.span>
          <motion.span className="hero__line hero__accent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22, ease }}>
            {t(ui.hero.title2)}
          </motion.span>
        </h1>

        <motion.p className="hero__lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}>
          {t(ui.hero.lead)}
        </motion.p>

        <motion.form className="hero__search" onSubmit={submit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.hero.search)} aria-label={t(ui.hero.search)} />
          <button type="submit">{t(ui.hero.searchBtn)}</button>
        </motion.form>

        <motion.dl className="hero__stats" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}>
          {stats.map((s) => (
            <motion.div key={s.label.en} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
              <dt>{s.value}</dt>
              <dd>{t(s.label)}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      {credit && (
        <a className="hero__credit" href={credit.source} target="_blank" rel="noopener">
          {t(ui.detail.photo)}: {credit.author} · {credit.license}
        </a>
      )}

      <a href="#explore" className="hero__scroll" aria-label={t(ui.hero.scroll)}>
        <span />
      </a>
    </section>
  )
}
