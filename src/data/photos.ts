import credits from './photos.json'

export interface PhotoCredit {
  file: string
  author: string
  license: string
  licenseUrl: string
  source: string
}

export const photoCredits = credits as Record<string, PhotoCredit>

// Relative to the page, so it works both standalone and under /laos-travel/.
const base = import.meta.env.BASE_URL

export const photo = (id: string) => `${base}images/places/${id}.jpg`
export const thumb = (id: string) => `${base}images/places/${id}-sm.jpg`
