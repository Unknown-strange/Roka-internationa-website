import { Link } from 'react-router-dom'
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion'
import { CONTACT } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* ------------------------------------------------------------------
   Section 1 — TOP ACADEMIC NOTIFICATION RIBBON
------------------------------------------------------------------- */
function Ribbon() {
  return (
    <section className="w-full bg-surface-container-high px-6 py-2.5 text-on-surface lg:px-12">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-label-md sm:flex-row">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-secondary-container"
            aria-hidden="true"
          />
          <span className="font-bold text-primary">2025/2026 Academic Year:</span>
          <span className="text-on-surface-variant">
            General Applications Now Open for Crèche, Primary &amp; Junior High School
          </span>
        </div>
        <div className="flex items-center gap-4 font-semibold text-primary">
          <span className="flex items-center gap-1">
            <M className="text-[16px] text-secondary">event_available</M>
            <span>Placement Diagnostic: Every Saturday at 9:00 AM</span>
          </span>
          <a className="flex items-center gap-1 font-bold text-secondary hover:underline" href="#directory-grid">
            <span>Fee Schedules</span>
            <M className="text-[14px]">arrow_forward</M>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 2 — PAGE HEADER & ACADEMIC HERO OVERVIEW
   Breadcrumb, 7/5 split: headline + pills + quick actions vs. campus
   mosaic with the overlapping pupil-ratio card.
------------------------------------------------------------------- */
const HIGHLIGHTS = [
  { icon: 'verified', label: 'Admissions Open for 2025/2026' },
  { icon: 'workspace_premium', label: 'Merit-Based Placement' },
  { icon: 'psychology', label: 'Individualized Academic Assessment' },
  { icon: 'hotel', label: 'Day & Safe Boarding Options' },
]

function AdmissionHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest px-6 pb-16 pt-10 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-surface-container-low to-transparent"
      />

      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <li>
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-primary">
                <M className="text-[16px]">home</M>
                <span>Home</span>
              </Link>
            </li>
            <li className="text-outline-variant" aria-hidden="true">
              /
            </li>
            <li className="font-bold text-primary" aria-current="page">
              Admission
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-label-caps tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
              <span>GES ACCREDITED · CRÈCHE TO JHS 3 · AMASAMAN, ACCRA</span>
            </div>

            <h1 className="text-display-hero-mobile font-extrabold leading-tight tracking-tight text-primary md:text-[2.75rem] md:leading-tight lg:text-display-hero">
              Join the{' '}
              <span className="relative inline-block text-primary">
                Roka Family
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-10 h-2 w-full bg-secondary-container/40"
                />
              </span>
            </h1>

            <p className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              A clear, supportive pathway to enrolling your child in an academically rigorous and
              Christ-centered community in Greater Accra. We nurture academic distinction alongside
              grounded moral character.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {HIGHLIGHTS.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-1.5 text-label-md font-semibold text-primary"
                >
                  <M className="text-[18px] text-secondary">{h.icon}</M>
                  <span>{h.label}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#three-step-process"
                className="inline-flex items-center justify-center rounded-lg bg-secondary-container px-6 py-3 text-label-lg font-bold text-on-secondary shadow-sm transition-all hover:bg-secondary"
              >
                <span>View Enrollment Flow</span>
                <M className="ml-2 text-[18px]">arrow_downward</M>
              </a>
              <a
                href="#documents-checklist"
                className="inline-flex items-center justify-center rounded-lg bg-surface-container px-6 py-3 text-label-lg font-bold text-primary transition-all hover:bg-surface-container-high"
              >
                <span>Required Documents</span>
                <M className="ml-2 text-[18px]">checklist</M>
              </a>
            </div>
          </div>

          {/* Campus & classroom imagery mosaic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-xl bg-surface-container shadow-xl">
                <img
                  src="/images/campus.jpg"
                  alt="Modern Ghanaian private school campus courtyard in Amasaman, Accra, with pupils walking together"
                  width="640"
                  height="320"
                  className="h-80 w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 flex max-w-xs items-center gap-3.5 rounded-xl bg-surface-container-lowest p-4 shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <M className="text-[24px] text-on-primary">school</M>
                </div>
                <div className="min-w-0">
                  <span className="block text-title-md font-bold leading-tight text-primary">
                    18 : 1 Pupil Ratio
                  </span>
                  <span className="block text-body-sm text-on-surface-variant">
                    Classroom capacity strictly maintained
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 3 — HORIZONTAL 3-STEP PROCESS
------------------------------------------------------------------- */
const STEPS = [
  {
    step: 'Step 01',
    stepTone: 'bg-secondary-container text-on-secondary',
    icon: 'description',
    title: 'Complete Admission Form',
    body: 'Download our physical application or submit online. Attach previous terminal academic reports and certified birth certificate copy.',
    points: [
      'Online portal or admissions desk pickup',
      'Academic transcripts for Primary/JHS',
      'Passport photos & Ghana card copy',
    ],
    cta: 'Download Form (PDF)',
    ctaIcon: 'download',
    ctaTo: '/admission/apply',
  },
  {
    step: 'Step 02',
    stepTone: 'bg-surface-container-high text-primary',
    icon: 'edit_calendar',
    title: 'Sit the Entrance Assessment',
    body: 'Diagnostic placement assessment evaluating competency in English comprehension, Mathematics, and General Science.',
    points: [
      'Age-appropriate diagnostic format',
      'Identifies learning strengths & baseline',
      'Conducted on campus in Amasaman',
    ],
    cta: 'View Testing Schedules',
    ctaIcon: 'schedule',
    ctaTo: '#policy-section',
  },
  {
    step: 'Step 03',
    stepTone: 'bg-surface-container-high text-primary',
    icon: 'mark_email_read',
    title: 'Medical Clearance & Interview',
    body: 'Submission of medical form, informal parent-pupil orientation conversation, and issuance of official welcome admission packet.',
    points: [
      'Registered physician health sign-off',
      'Pastoral & behavioral alignment discussion',
      'Final fee schedule & enrollment confirmation',
    ],
    cta: 'Medical Form Guidelines',
    ctaIcon: 'clinical_notes',
    ctaTo: '#documents-checklist',
  },
]

function StepLink({ to, icon, children }) {
  const cls =
    'inline-flex items-center text-label-lg font-bold text-primary transition-colors hover:text-secondary'
  const inner = (
    <>
      <span>{children}</span>
      <M className="ml-1.5 text-[18px]">{icon}</M>
    </>
  )
  return to.startsWith('#') ? (
    <a href={to} className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

function ThreeStepProcess() {
  return (
    <section id="three-step-process" className="w-full bg-surface-container-low px-6 py-20 lg:px-12">
      <div className="container-page space-y-12">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="block text-label-caps uppercase tracking-widest text-secondary">
            Transparent Admission Flow
          </span>
          <h2 className="text-headline-lg-mobile font-bold text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Simple 3-Step Enrollment Journey
          </h2>
          <p className="text-body-md text-on-surface-variant">
            We have streamlined the intake procedure to ensure prospective families experience a
            clear, structured, and warm onboarding process from initial inquiry to your child&rsquo;s
            first school day.
          </p>
        </div>

        <StaggerGroup className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem
              key={s.step}
              className="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-3 py-1 text-label-md font-bold ${s.stepTone}`}>
                    {s.step}
                  </span>
                  <M className="text-[28px] text-primary">{s.icon}</M>
                </div>
                <h3 className="text-headline-sm font-semibold text-primary">{s.title}</h3>
                <p className="text-body-md leading-relaxed text-on-surface-variant">{s.body}</p>
                <div className="space-y-2.5 pt-4">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-start gap-2.5">
                      <span
                        className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary"
                        aria-hidden="true"
                      >
                        <M className="text-[11px] text-on-primary">check</M>
                      </span>
                      <span className="text-body-sm text-on-surface">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4">
                <StepLink to={s.ctaTo} icon={s.ctaIcon}>
                  {s.cta}
                </StepLink>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 4 — ADMISSION TIMING & INSTITUTIONAL POLICY
------------------------------------------------------------------- */
const TERMS_CAL = [
  { term: 'Advent Term (Term 1)', dates: 'Sep – Dec 2025' },
  { term: 'Lent Term (Term 2)', dates: 'Jan – Apr 2026' },
  { term: 'Trinity Term (Term 3)', dates: 'May – Jul 2026' },
]

function IntakePolicy() {
  return (
    <section id="policy-section" className="w-full bg-surface-container-lowest px-6 py-16 lg:px-12">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-8 shadow-sm lg:p-12">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-tertiary-fixed px-3 py-1 text-label-caps text-on-tertiary-fixed">
                <M className="text-[14px]">info</M>
                <span>Important Registration Notice</span>
              </span>

              <h2 className="text-headline-md font-bold text-primary">
                Intake Windows &amp; Enrollment Discretion
              </h2>

              <p className="text-body-lg leading-relaxed text-on-surface-variant">
                Main intake takes place annually between{' '}
                <strong className="font-semibold text-primary">August and September</strong> prior to
                the start of the Advent Term. Mid-year applications for the Lent or Trinity terms
                are considered strictly when an existing classroom vacancy opens. Please note that
                admission into Roka International School is subject to the school&rsquo;s sole
                discretion, merit review, and class capacity constraints.
              </p>

              <div className="flex items-center gap-3 pt-2 text-label-lg font-semibold text-primary">
                <M className="text-secondary">groups</M>
                <span>
                  We strictly preserve an 18:1 pupil-to-teacher ratio in early grades to guarantee
                  individualized mentoring.
                </span>
              </div>
            </div>

            <div className="space-y-4 rounded-xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-4">
              <div className="flex items-center justify-between">
                <span className="text-title-md text-primary">Academic Calendar</span>
                <M className="text-secondary">date_range</M>
              </div>

              <div className="space-y-3 text-body-sm">
                {TERMS_CAL.map((t) => (
                  <div key={t.term} className="flex items-center justify-between py-1">
                    <span className="text-on-surface-variant">{t.term}</span>
                    <span className="font-bold text-primary">{t.dates}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/academics#term-calendar"
                className="block w-full rounded-lg bg-surface-container py-2.5 text-center text-label-md font-bold text-primary transition-colors hover:bg-surface-container-high"
              >
                Download Full GES Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 5 — ADMISSIONS DIRECTORY (6 routing cards)
   Each card maps to one of the six /admission child routes.
------------------------------------------------------------------- */
const RESOURCES = [
  {
    icon: 'assignment',
    title: 'Admission Request Form',
    body: 'Download printable application PDF or initiate our streamlined online admission form for early review.',
    cta: 'Access Forms & Downloads',
    to: '/admission/apply',
  },
  {
    icon: 'explore',
    title: 'Open Day & Campus Tours',
    body: 'Experience our classrooms, science lab, and boarding facilities in Amasaman firsthand with guided staff tours.',
    cta: 'Book an Open Day Visit',
    to: '/admission/open-day',
  },
  {
    icon: 'payments',
    title: 'School Fees & Billing Schedule',
    body: 'View transparent termly tuition, lunch catering, boarding fees, uniforms, and payment installment policies.',
    cta: 'View Fee Structure',
    to: '/admission/fees',
  },
  {
    icon: 'auto_stories',
    title: 'School Prospectus',
    body: 'Download our comprehensive institutional guide covering academic culture, pastoral care, and code of conduct.',
    cta: 'Download Prospectus (PDF)',
    to: '/admission/prospectus',
  },
  {
    icon: 'schedule',
    title: 'School Sections & Daily Hours',
    body: 'Details on Crèche, Lower Primary, Upper Primary, and JHS daily schedules, drop-off, and pick-up hours.',
    cta: 'View School Hours',
    to: '/admission/hours',
  },
  {
    icon: 'swap_horiz',
    title: 'Withdrawal & Transfer Policy',
    body: 'Clear terms regarding mid-year transfers, transcript releases, notice periods, and clearance protocols.',
    cta: 'Read Withdrawal Terms',
    to: '/admission/withdrawal',
  },
]

function Directory() {
  return (
    <section id="directory-grid" className="w-full bg-surface-container px-6 py-20 lg:px-12">
      <div className="container-page space-y-12">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="block text-label-caps uppercase tracking-widest text-secondary">
            Admissions Directory &amp; Essential Information
          </span>
          <h2 className="text-headline-lg-mobile font-bold text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Explore Admission Resources &amp; Requirements
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Access everything you need to prepare your child&rsquo;s enrollment, from institutional
            fees to our full school prospectus and student daily routines.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <StaggerItem
              key={r.title}
              className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-surface-container-lowest">
                  <M className="text-[24px]">{r.icon}</M>
                </div>
                <h3 className="text-title-md text-primary">{r.title}</h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{r.body}</p>
              </div>
              <div className="pt-6">
                <Link
                  to={r.to}
                  className="inline-flex items-center text-label-lg font-bold text-primary transition-colors group-hover:text-secondary"
                >
                  <span>{r.cta}</span>
                  <M className="ml-1.5 text-[18px]">arrow_forward</M>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 6 — PRE-CTA REASSURANCE & REQUIRED DOCUMENTS CHECKLIST
------------------------------------------------------------------- */
const DOCUMENTS = [
  {
    n: '01',
    title: 'Certified Birth Certificate',
    body: 'Issued by the Births and Deaths Registry of Ghana (or international passport for foreign students) to verify age placement.',
  },
  {
    n: '02',
    title: 'Last 2 Academic Reports',
    body: 'Applies to pupils entering Class 1 through JHS 3. Official terminal transcripts showing conduct and scholastic baseline.',
  },
  {
    n: '03',
    title: 'Medical Fitness Certificate',
    body: 'Signed endorsement by a licensed medical practitioner including immunization records and food allergy disclosures.',
  },
  {
    n: '04',
    title: '4 Recent Passport Photos',
    body: 'Full-face color photographs on white background for the permanent student file, library pass, and identification badge.',
  },
]

function Documents() {
  return (
    <section
      id="documents-checklist"
      className="w-full bg-surface-container-lowest px-6 py-20 lg:px-12"
    >
      <div className="container-page space-y-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <span className="block text-label-caps uppercase tracking-widest text-secondary">
              Enrollment Readiness
            </span>
            <h2 className="text-headline-lg-mobile font-bold text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              What Every Parent Needs to Prepare
            </h2>
            <p className="text-body-md leading-relaxed text-on-surface-variant">
              To expedite the registration process on assessment day, please ensure certified
              photocopies of the following official documents are ready for submission to the
              admissions registrar.
            </p>
            <div className="overflow-hidden rounded-xl bg-surface-container shadow-lg">
              <img
                src="/images/mentorship.jpg"
                alt="Headteacher assisting a primary pupil working through an open textbook in the school office"
                width="640"
                height="256"
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {DOCUMENTS.map((d) => (
              <div key={d.n} className="space-y-3 rounded-xl bg-surface-container-low p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container font-bold text-on-secondary">
                  {d.n}
                </div>
                <h3 className="text-title-md text-primary">{d.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 7 — HIGH-IMPACT APPLICATION CTA BAND
------------------------------------------------------------------- */
function CtaBand() {
  return (
    <section className="relative w-full overflow-hidden bg-primary px-6 py-20 text-on-primary lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/30"
      />
      <div className="relative z-10 mx-auto max-w-5xl space-y-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3.5 py-1.5 text-label-caps uppercase tracking-widest text-secondary-fixed">
          <M className="text-[15px]">campaign</M>
          <span>Ready to take the next step?</span>
        </span>

        <h2 className="text-display-hero-mobile font-extrabold tracking-tight text-surface-container-lowest md:text-[2.75rem] md:leading-tight lg:text-display-hero">
          Start Your Child&rsquo;s Application Today
        </h2>

        <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-surface-container-high">
          Admissions officers are available at our Amasaman campus Monday through Friday, 8:00 AM to
          3:30 PM, to guide you through the process and answer every inquiry.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link to="/admission/apply" className="btn btn-primary w-full sm:w-auto">
            <span>Start Your Application</span>
            <M className="text-[20px]">arrow_forward</M>
          </Link>
          <Link to="/admission/open-day" className="btn btn-outline-light w-full sm:w-auto">
            <M className="text-[20px]">calendar_today</M>
            <span>Schedule a Campus Tour</span>
          </Link>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 border-t border-secondary-container/40 pt-8 text-body-sm text-surface-container-high sm:flex-row">
          <div className="flex items-center gap-2">
            <M className="text-[18px] text-secondary-fixed">support_agent</M>
            <span>
              Admissions Helpline:{' '}
              <strong className="text-surface-container-lowest">
                {CONTACT.phone} / {CONTACT.phoneAlt}
              </strong>
            </span>
          </div>
          <span className="hidden text-surface-container sm:inline" aria-hidden="true">
            |
          </span>
          <div className="flex items-center gap-2">
            <M className="text-[18px] text-secondary-fixed">alternate_email</M>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-surface-container-lowest"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Admission() {
  return (
    <main>
      <Ribbon />
      <AdmissionHero />
      <ThreeStepProcess />
      <IntakePolicy />
      <Directory />
      <Documents />
      <CtaBand />
    </main>
  )
}
