import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { NAV, PORTAL_URL, whatsappLink, CONTACT } from '../data/site'
import { NEWS } from '../data/content'
import { Logo } from './Logo'

const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* ---------------- Search index (real, client-side) ---------------- */
const SEARCH_INDEX = [
  ...NAV.flatMap((item) =>
    item.children
      ? [{ label: item.label, to: item.to }, ...item.children]
      : [{ label: item.label, to: item.to }],
  ),
  ...NEWS.map((n) => ({ label: n.title, to: `/news/${n.slug}`, group: 'News' })),
]

function SearchBox() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (term.length < 2) return []
    return SEARCH_INDEX.filter((r) => r.label.toLowerCase().includes(term)).slice(0, 6)
  }, [q])

  useEffect(() => {
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  return (
    <div ref={wrap} className="relative hidden 2xl:block">
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <div className="relative">
        <M className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-muted-slate">
          search
        </M>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search…"
          autoComplete="off"
          className="w-44 rounded-full border border-white/15 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/55 transition-all duration-200 focus:w-60 focus:border-secondary-container/60 focus:bg-white/15 focus:outline-none 2xl:w-52"
        />
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="roka-overlay absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-xl bg-surface-container-lowest p-2"
          >
            {results.map((r) => (
              <li key={r.to + r.label}>
                <Link
                  to={r.to}
                  onClick={() => {
                    setOpen(false)
                    setQ('')
                  }}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
                >
                  <span className="truncate">{r.label}</span>
                  <M className="text-[16px] text-outline">arrow_forward</M>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && q.trim().length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="roka-overlay absolute right-0 top-full z-50 mt-3 w-80 rounded-xl bg-surface-container-lowest p-4 text-sm text-on-surface-variant"
          >
            No pages match “{q.trim()}”.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------- Desktop dropdown ---------------- */
function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `relative flex items-center gap-1 rounded-md px-3 py-2 text-label-md font-semibold transition-colors duration-200 ${
            isActive ? 'text-secondary-fixed' : 'text-white/80 hover:text-white'
          }`
        }
      >
        {item.label}
        <M className={`text-[16px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </M>
      </NavLink>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-40 w-64 pt-3"
          >
            <ul className="roka-overlay overflow-hidden rounded-xl bg-surface-container-lowest p-2">
              {item.children.map((child) => (
                <li key={child.to}>
                  <Link
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                  >
                    {child.label}
                    <M className="text-[16px] text-outline">arrow_forward</M>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ==================================================================
   HEADER — sticky deep-navy bar (matches the design export)
   ================================================================== */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-primary transition-shadow duration-200 ${
        scrolled ? 'shadow-overlay' : 'border-b border-primary-container'
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <Link to="/" aria-label="Roka International School — home" className="shrink-0 rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-md px-3 py-2 text-label-md font-semibold transition-colors duration-200 ${
                    isActive ? 'text-secondary-fixed' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-secondary-container transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <SearchBox />

          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-white/25 px-3.5 py-2.5 text-label-md font-semibold text-white transition-colors hover:bg-white/10 md:inline-flex"
          >
            Portal
            <M className="text-[15px]">open_in_new</M>
          </a>

          <Link to="/admission/open-day" className="hidden rounded-lg bg-secondary-container px-5 py-2.5 text-label-md font-bold text-on-secondary transition-all hover:bg-secondary md:inline-flex">
            Schedule a Campus Tour
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            <M className="text-[24px]">{menuOpen ? 'close' : 'menu'}</M>
          </button>
        </div>
      </div>

      {/* Mobile drawer — slides in from the right (spec #2) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-amber-deep/70 backdrop-blur-sm xl:hidden"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={reduce ? { opacity: 0 } : { x: '100%' }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-primary xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-primary-container px-5 py-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white"
                >
                  <M className="text-[22px]">close</M>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 px-3 py-4">
                <ul className="grid gap-1">
                  {NAV.map((item) => (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                            aria-expanded={openGroup === item.label}
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-label-lg font-semibold text-white transition-colors hover:bg-white/10"
                          >
                            {item.label}
                            <M
                              className={`text-[20px] text-white/60 transition-transform duration-200 ${
                                openGroup === item.label ? 'rotate-180' : ''
                              }`}
                            >
                              expand_more
                            </M>
                          </button>
                          <AnimatePresence initial={false}>
                            {openGroup === item.label && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <li key={child.to}>
                                    <Link
                                      to={child.to}
                                      className="block rounded-lg py-2.5 pl-8 pr-4 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.to}
                          className="block rounded-lg px-4 py-3 text-label-lg font-semibold text-white transition-colors hover:bg-white/10"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="sticky bottom-0 grid gap-2.5 border-t border-primary-container bg-primary p-4">
                <Link to="/admission/open-day" className="btn btn-primary w-full py-3.5 text-center">
                  Schedule a Campus Tour
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full border border-white/25 py-3.5 text-center font-semibold text-white hover:bg-white/10"
                >
                  <M className="text-[18px]">forum</M>
                  Chat on WhatsApp
                </a>
                <p className="pt-1 text-center text-xs text-white/55">{CONTACT.shortAddress}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
