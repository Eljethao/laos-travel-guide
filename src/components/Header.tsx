import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import type { Lang } from '../i18n'

const links = [
  { href: '#explore', label: ui.nav.map },
  { href: '#places', label: ui.nav.places },
  { href: '#itineraries', label: ui.nav.itineraries },
  { href: '#when', label: ui.nav.when },
  { href: '#essentials', label: ui.nav.essentials },
]

export function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark" aria-hidden="true">
            <span />
          </span>
          {t(ui.brand)} <span className="brand__sub">{t(ui.brandSub)}</span>
        </a>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {t(l.label)}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <LangToggle />
          <button className={`menu-btn ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <span />
            <span />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {t(l.label)}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function LangToggle() {
  const { lang, setLang } = useLang()
  const options: { value: Lang; label: string; aria: string }[] = [
    { value: 'en', label: 'EN', aria: 'English' },
    { value: 'lo', label: 'ລາວ', aria: 'ພາສາລາວ' },
  ]
  return (
    <div className="lang-toggle" role="group" aria-label="Language / ພາສາ">
      {options.map((o) => (
        <button key={o.value} onClick={() => setLang(o.value)} aria-pressed={lang === o.value} aria-label={o.aria} className={lang === o.value ? 'is-active' : ''}>
          {lang === o.value && <motion.span layoutId="lang-pill" className="lang-toggle__pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  )
}
