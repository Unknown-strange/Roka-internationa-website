import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Reveal } from './components/motion'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admission = lazy(() => import('./pages/Admission'))
const AdmissionFees = lazy(() => import('./pages/AdmissionFees'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Team = lazy(() => import('./pages/Team'))

/**
 * App shell — routing skeleton only.
 *
 * No pages are built yet. Each route below is a stub waiting for its
 * page spec; replace `Placeholder` with the real page component when
 * the specs are handed over.
 */

function Placeholder({ title, path }) {
  return (
    <main className="container-page py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-dark">Route ready</p>
        <h1 className="mt-3 text-balance text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-ink-soft">
          This route is wired up and waiting for its page spec. Nothing is linked from the
          navigation until the page exists — no dead or empty pages.
        </p>
        <p className="mt-6 rounded-xl border border-dashed border-hairline bg-surface-container-low px-4 py-3 font-mono text-sm text-outline">
          {path}
        </p>
        <Link
          to="/"
          className="ring-focus mt-8 inline-flex rounded-full btn btn-primary"
        >
          Back to Home
        </Link>
      </Reveal>
    </main>
  )
}

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <span className="size-10 animate-spin rounded-full border-[3px] border-hairline border-t-secondary-container" />
    </div>
  )
}

/**
 * Reset scroll on real page navigations, or land on the deep-link target
 * when the route carries a hash (`/academics#term-calendar`). Keyed on
 * pathname + hash so native in-page anchors keep their default behaviour.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    // Lazy routes mount after this effect, so retry briefly for the target.
    let attempts = 0
    let timer
    const land = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
      if (attempts++ < 40) timer = setTimeout(land, 50)
    }
    land()
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-secondary-container focus:px-5 focus:py-3 focus:font-bold focus:text-on-secondary"
      >
        Skip to content
      </a>

      <Header />
      <div id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/admission/fees" element={<AdmissionFees />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="*" element={<Placeholder title="Page not found" path="*" />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  )
}
