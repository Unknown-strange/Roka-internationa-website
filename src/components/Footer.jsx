import { Link } from 'react-router-dom'
import { NAV, PORTAL_URL, CONTACT, whatsappLink } from '../data/site'
import { Logo } from './Logo'

const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

const COL_DIVISIONS = [
  { label: 'Crèche & Nursery', to: '/academics' },
  { label: 'Kindergarten Stage', to: '/academics' },
  { label: 'Primary School (Basic 1 - 6)', to: '/academics' },
  { label: 'Junior High School (JHS 1 - 3)', to: '/academics' },
  { label: 'GES Curriculum Standards', to: '/academics' },
]

const COL_ADMISSIONS = [
  { label: 'Online Application', to: '/admission/apply' },
  { label: 'Entrance Assessments', to: '/admission' },
  { label: 'Tuition & Requirements', to: '/admission/fees' },
  { label: 'Academic Calendar', to: '/admission/hours' },
  { label: 'Student & Parent Portal', to: PORTAL_URL, external: true },
]

function ColumnHeading({ children }) {
  return (
    <h2 className="mb-4 border-b border-primary-container pb-2 text-title-md text-surface-container-lowest">
      {children}
    </h2>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-primary-container bg-primary pt-16 pb-12 text-on-primary">
      <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Logo />

          <p className="text-body-sm leading-relaxed text-surface-container-high">
            Nurturing scholarly excellence, moral fortitude, and future leaders in Amasaman,
            Greater Accra under Christian foundation principles.
          </p>

          <div className="flex items-center gap-3 pt-2 text-secondary-fixed">
            <M className="text-[20px]">verified</M>
            <span className="overline text-surface-container-high">GES Registered Institution</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-3 text-label-md"
            >
              <M className="text-[18px]">forum</M>
              Chat on WhatsApp
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/25 px-4 py-3 text-label-md font-semibold text-white transition-colors hover:bg-white/10"
            >
              Student Portal
            </a>
          </div>
        </div>

        {/* Academic divisions */}
        <nav aria-label="Academic divisions">
          <ColumnHeading>Academic Divisions</ColumnHeading>
          <ul className="space-y-2.5 text-body-sm text-surface-container-high">
            {COL_DIVISIONS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-secondary-fixed">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admissions */}
        <nav aria-label="Admissions and portals">
          <ColumnHeading>Admissions &amp; Portals</ColumnHeading>
          <ul className="space-y-2.5 text-body-sm text-surface-container-high">
            {COL_ADMISSIONS.map((l) =>
              l.external ? (
                <li key={l.label}>
                  <a
                    href={l.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-secondary-fixed"
                  >
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-secondary-fixed">
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <ColumnHeading>Campus Location</ColumnHeading>
          <ul className="space-y-3 text-body-sm text-surface-container-high">
            <li className="flex items-start gap-2">
              <M className="mt-0.5 shrink-0 text-[18px] text-secondary-fixed">pin_drop</M>
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <M className="shrink-0 text-[18px] text-secondary-fixed">call</M>
              <span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-secondary-fixed">
                  {CONTACT.phone}
                </a>
                {' / '}
                <a
                  href={`tel:${CONTACT.phoneAlt.replace(/\s/g, '')}`}
                  className="hover:text-secondary-fixed"
                >
                  {CONTACT.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <M className="shrink-0 text-[18px] text-secondary-fixed">mail</M>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-secondary-fixed">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <M className="shrink-0 text-[18px] text-secondary-fixed">schedule</M>
              <span>{CONTACT.hours}</span>
            </li>
          </ul>

          <ul className="mt-5 space-y-2">
            {NAV.filter((n) => !n.children)
              .slice(0, 5)
              .map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-body-sm text-surface-container-high transition-colors hover:text-secondary-fixed"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-container pt-6 text-body-sm text-surface-container-high sm:flex-row">
        <p>© {year} Roka International School. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          <Link to="/contact" className="transition-colors hover:text-secondary-fixed">
            Privacy Policy
          </Link>
          <Link to="/admission" className="transition-colors hover:text-secondary-fixed">
            Terms of Admissions
          </Link>
          <Link to="/contact" className="transition-colors hover:text-secondary-fixed">
            Locate Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
