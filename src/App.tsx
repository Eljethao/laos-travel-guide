import { useCallback, useState } from 'react'
import { Explore } from './components/Explore'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PlaceDrawer } from './components/PlaceDrawer'
import { Essentials, Footer, Gallery, Itineraries, PhrasesAndFood, WhenToGo } from './components/Sections'
import { LangProvider } from './i18n'

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  const [query, setQuery] = useState('')
  const [province, setProvince] = useState<string | null>(null)
  const [focusId, setFocusId] = useState<string | null>(null) // place the map is zoomed to
  const [drawerId, setDrawerId] = useState<string | null>(null) // place shown in the detail drawer
  const [routeId, setRouteId] = useState<string | null>(null)

  const open = useCallback((id: string) => {
    setFocusId(id)
    setDrawerId(id)
  }, [])

  const closeDrawer = useCallback(() => setDrawerId(null), [])

  const showOnMap = useCallback((id: string) => {
    setDrawerId(null)
    setRouteId(null)
    setProvince(null)
    setFocusId(id)
    setTimeout(() => scrollTo('explore'), 250)
  }, [])

  const chooseProvince = useCallback((p: string | null) => {
    setProvince(p)
    setFocusId(null)
    setRouteId(null)
  }, [])

  const resetMap = useCallback(() => {
    setProvince(null)
    setFocusId(null)
    setRouteId(null)
  }, [])

  const showRoute = (id: string) => {
    setRouteId(id)
    setFocusId(null)
    setProvince(null)
    scrollTo('explore')
  }

  const search = (q: string) => {
    setQuery(q)
    scrollTo('explore')
  }

  return (
    <LangProvider>
      <Header />
      <main>
        <Hero onSearch={search} />
        <Explore
          query={query}
          onQuery={setQuery}
          province={province}
          onProvince={chooseProvince}
          focusId={focusId}
          routeId={routeId}
          onOpen={open}
          onClearRoute={() => setRouteId(null)}
          onReset={resetMap}
        />
        <Gallery onOpen={open} />
        <Itineraries activeId={routeId} onShow={showRoute} />
        <WhenToGo />
        <Essentials />
        <PhrasesAndFood />
      </main>
      <Footer />
      <PlaceDrawer id={drawerId} onClose={closeDrawer} onNavigate={open} onShowOnMap={showOnMap} />
    </LangProvider>
  )
}
