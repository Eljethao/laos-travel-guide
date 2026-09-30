import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { L } from '../i18n'
import { useLang } from '../i18n'

const ease = [0.22, 1, 0.36, 1] as const

export function SectionHead({ eyebrow, title, lead }: { eyebrow: L; title: L; lead?: L }) {
  const { t } = useLang()
  return (
    <Reveal className="section__head">
      <p className="eyebrow">{t(eyebrow)}</p>
      <h2>{t(title)}</h2>
      {lead && <p className="lead">{t(lead)}</p>}
    </Reveal>
  )
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
