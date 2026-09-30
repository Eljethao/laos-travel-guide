import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'lo'

/** A piece of text in both languages. */
export type L = { en: string; lo: string }

interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Pick the current-language version of a localized value. */
  t: (text: L) => string
}

const LangContext = createContext<LangState | null>(null)
const KEY = 'visit-laos-lang'

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'lo') return fromUrl
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'en' || saved === 'lo') return saved
  } catch {
    /* storage unavailable */
  }
  return 'lo' // default for first-time visitors
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'lo' ? 'ທ່ຽວລາວ — ຄູ່ມືການທ່ອງທ່ຽວ' : 'Visit Laos — Travel Guide'
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const t = useCallback((text: L) => text[lang], [lang])
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
