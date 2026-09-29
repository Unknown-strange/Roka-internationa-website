import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StaggerGroup, StaggerItem } from '../components/motion'
import { CONTACT, PORTAL_URL } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* ------------------------------------------------------------------
   Section 1 — BREADCRUMB & PAGE HEADER
------------------------------------------------------------------- */
function PageHeader() {
  return (
    <section className="w-full border-b border-surface-container-high bg-surface-container-lowest py-8 md:py-12">
      <div className="container-page flex flex-col gap-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <M className="text-[14px] text-outline">chevron_right</M>
            </li>
            <li>
              <Link to="/admission" className="transition-colors hover:text-primary">
                Admission
              </Link>
            </li>
            <li aria-hidden="true">
              <M className="text-[14px] text-outline">chevron_right</M>
            </li>
            <li className="font-semibold text-primary" aria-current="page">
              School Fees &amp; Billing
            </li>
          </ol>
        </nav>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-label-caps uppercase tracking-wider text-primary">
              <M className="text-[16px] text-secondary">verified_user</M>
              <span>Transparent Tuition &amp; Billing · 2024/2025 Academic Year</span>
            </div>
            <h1 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2.25rem] md:leading-tight lg:text-headline-lg">
              Tuition, Levies &amp; Payment Schedule
            </h1>
            <p className="text-body-lg leading-relaxed text-on-surface-variant">
              Clear, predictable termly schedules for Crèche through Junior High School. Structured
              to ensure educational excellence, strict classroom pupil caps (18:1), and modern campus
              infrastructure in Amasaman.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-surface-container-high px-5 py-3 text-label-lg font-semibold text-primary shadow-sm transition-colors hover:bg-surface-container-highest"
            >
              <M className="text-[20px]">download</M>
              <span>Fee Schedule (PDF)</span>
            </Link>
            <a
              href="#payment-channels"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary-container px-5 py-3 text-label-lg font-bold text-on-secondary shadow-sm transition-colors hover:bg-secondary"
            >
              <M className="text-[20px]">account_balance_wallet</M>
              <span>Payment Methods</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 2 — HIGHLIGHT SUMMARY METRICS
------------------------------------------------------------------- */
const METRICS = [
  {
    icon: 'calendar_month',
    box: 'bg-surface-container text-primary',
    chip: '3 Terms',
    chipTone: 'text-secondary bg-secondary-fixed/30',
    title: 'Standard Academic Cycle',
    body: 'Advent Term (Term 1), Lent Term (Term 2), and Trinity Term (Term 3). Invoices are generated termly with clear breakdowns.',
  },
  {
    icon: 'event_available',
    box: 'bg-tertiary-fixed/40 text-tertiary-container',
    chip: 'Due Policy',
    chipTone: 'text-tertiary-container bg-tertiary-fixed',
    title: 'Strict Due Date Policy',
    body: 'Settled strictly on or prior to reopening day. Guarantees textbook reservations, registered desk seating, and lab licenses.',
  },
  {
    icon: 'inventory_2',
    box: 'bg-surface-container text-primary',
    chip: 'All-Inclusive',
    chipTone: 'text-primary bg-surface-container-high',
    title: 'Instructional Coverage',
    body: 'Includes core GES & British curriculum instruction, ICT lab workstations, science practicals, and certified nursing triage.',
  },
]

function SummaryMetrics() {
  return (
    <section className="w-full bg-surface py-8">
      <div className="container-page">
        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {METRICS.map((m) => (
            <StaggerItem
              key={m.title}
              className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${m.box}`}>
                  <M className="text-[26px]">{m.icon}</M>
                </div>
                <span
                  className={`rounded px-2.5 py-1 text-label-caps font-bold uppercase tracking-wider ${m.chipTone}`}
                >
                  {m.chip}
                </span>
              </div>
              <div>
                <h2 className="mb-1 text-title-md font-bold text-primary">{m.title}</h2>
                <p className="text-body-sm text-on-surface-variant">{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 3 — PRIMARY FEE SCHEDULE TABLE (client-side stage filter)
------------------------------------------------------------------- */
const STAGES = [
  { id: 'all', label: 'All Stages' },
  { id: 'preschool', label: 'Early Years' },
  { id: 'primary', label: 'Primary' },
  { id: 'jhs', label: 'Junior High' },
]

const FEE_ROWS = [
  {
    stage: 'preschool',
    icon: 'child_care',
    level: 'Crèche & Daycare',
    sub: 'Infant Care & Early Stimulation',
    group: 'Early Years (Infants & Toddlers)',
    includes:
      'Sensory motor development, supervised play, hygienic rest care & foundational speech',
    cycle: 'Termly Billing',
    status: 'Invoiced Upon Enrollment',
    statusIcon: 'verified',
  },
  {
    stage: 'preschool',
    icon: 'toys',
    level: 'Nursery 1–2 & KG',
    sub: 'Foundational Phonics & Numeracy',
    group: 'Early Years (Kindergarten)',
    includes:
      'Jolly phonics, pre-math, creative arts, French primer & social skills development',
    cycle: 'Termly Billing',
    status: 'Invoiced Upon Enrollment',
    statusIcon: 'verified',
  },
  {
    stage: 'primary',
    icon: 'menu_book',
    level: 'Lower Primary (Basic 1 – 3)',
    sub: 'Core Curriculum & French Literacy',
    group: 'Primary Division',
    includes:
      'Core GES syllabus, introductory ICT lab lessons, Ghanaian language & reading clinic',
    cycle: 'Advent · Lent · Trinity',
    status: 'Schedule via Bursary',
    statusIcon: 'description',
  },
  {
    stage: 'primary',
    icon: 'science',
    level: 'Upper Primary (Basic 4 – 6)',
    sub: 'Computing, Integrated Science & Arts',
    group: 'Primary Division',
    includes:
      'Practical science laboratory modules, coding fundamentals, French oral & creative arts',
    cycle: 'Advent · Lent · Trinity',
    status: 'Schedule via Bursary',
    statusIcon: 'description',
  },
  {
    stage: 'jhs',
    icon: 'school',
    level: 'Junior High School (JHS 1 – 2)',
    sub: 'BECE Preparation, STEM Lab, Pre-Tech',
    group: 'Junior High Division',
    includes:
      'Advanced STEM laboratories, Pre-Technical skills, computing workstations & French proficiency',
    cycle: 'Advent · Lent · Trinity',
    status: 'Invoiced Termly',
    statusIcon: 'assignment',
  },
  {
    stage: 'jhs',
    icon: 'psychology',
    level: 'JHS 3 Candidate Class',
    sub: 'Includes Weekend Mock Prep & WAEC Coaching',
    group: 'Junior High Candidate',
    includes:
      'Comprehensive BECE mock series, WAEC masterclasses, remedial coaching & weekend seminar prep',
    cycle: 'Advent · Lent · Trinity',
    status: 'Invoiced Termly',
    statusIcon: 'verified',
  },
]

const HEAD_CELLS = [
  { label: 'Academic Level', align: '' },
  { label: 'Target Group', align: '' },
  { label: 'Curriculum & Instructional Inclusions', align: '' },
  { label: 'Billing Cycle', align: 'text-center' },
  { label: 'Fee Schedule Status', align: 'text-center' },
]

function FeeSchedule() {
  const [stage, setStage] = useState('all')
  const rows = FEE_ROWS.filter((r) => stage === 'all' || r.stage === stage)

  return (
    <section id="fee-schedule" className="w-full bg-surface-container-low py-12">
      <div className="container-page flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="block text-label-caps font-bold uppercase tracking-wider text-secondary">
              Tuition Breakdown
            </span>
            <h2 className="mt-1 text-headline-md font-bold text-primary">
              2024/2025 Termly Tuition &amp; Levies
            </h2>
            <p className="mt-1 text-body-md text-on-surface-variant">
              Applicable to all day scholars per single academic term.
            </p>
          </div>

          <div
            className="inline-flex self-start rounded-xl bg-surface-container p-1 md:self-auto"
            role="group"
            aria-label="Filter tuition schedule by school stage"
          >
            {STAGES.map((s) => {
              const active = s.id === stage
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setStage(s.id)}
                  className={`rounded-lg px-3 py-2 text-label-md transition-all sm:px-4 ${
                    active
                      ? 'bg-surface-container-lowest font-semibold text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {rows.length} of {FEE_ROWS.length} academic levels
        </p>

        <div className="w-full overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm">
          <div
            tabIndex={0}
            role="region"
            aria-label="Tuition and levies schedule"
            className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary"
          >
            <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="bg-primary text-on-primary">
                {HEAD_CELLS.map((h) => (
                  <th
                    key={h.label}
                    scope="col"
                    className={`px-6 py-4 text-label-lg font-semibold tracking-wider ${h.align}`}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low text-body-sm">
              {rows.map((r) => (
                <tr key={r.level} className="transition-colors hover:bg-surface-container-low/60">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                        <M className="text-[18px]">{r.icon}</M>
                      </div>
                      <div>
                        <div className="text-title-md font-bold text-primary">{r.level}</div>
                        <div className="text-body-sm text-on-surface-variant">{r.sub}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-on-surface">{r.group}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{r.includes}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex rounded-full bg-surface-container px-3 py-1 text-label-caps font-bold text-primary">
                      {r.cycle}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center gap-1 rounded-full bg-surface-container px-3 py-1 text-label-caps font-semibold text-primary">
                      <M className="text-[14px] text-secondary">{r.statusIcon}</M>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-surface-container bg-surface-container-lowest p-6 text-body-sm text-on-surface-variant sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <M className="text-[18px] text-secondary">info</M>
              <span>
                Tuition policy ratified by the Board of Governors &amp; GES. Standardized schedules
                provided directly to enrolled families.
              </span>
            </div>
            <div className="flex items-center gap-4 font-semibold text-primary">
              <span>Official Invoices Issued by Accounts Office</span>
              <span aria-hidden="true">•</span>
              <span>Structured Termly Billing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 4 — OPTIONAL ANCILLARY & RESIDENTIAL SERVICES
------------------------------------------------------------------- */
const ANCILLARY = [
  {
    icon: 'directions_bus',
    title: 'School Bus Shuttle',
    body: 'Monitored school bus routing across Amasaman, Pokuase, Satellite, Medie, and ACP Junction corridors.',
    label: 'Billing Structure',
    value: 'Billed by Route Zone',
    note: 'Termly subscription per distance',
  },
  {
    icon: 'restaurant',
    title: 'Canteen & Day Boarding',
    body: 'Warm chef-prepared nutritious lunch and 3:00 PM wholesome snack supervised by dietician protocols.',
    label: 'Meal Plan Model',
    value: 'Full Term Daily Plan',
    note: 'Mon–Fri hot lunch & afternoon snack',
  },
  {
    icon: 'bed',
    title: 'Residential Boarding',
    body: 'Upper Primary & JHS students. Includes air-conditioned hostels, laundry, evening prep, and weekend sports.',
    label: 'Boarding Structure',
    value: 'All-Inclusive Term Plan',
    note: 'Hostel accommodation, meals & utilities',
  },
  {
    icon: 'apparel',
    title: 'Full Uniform Package',
    body: 'One-time entry kit: 2 Day uniforms, 1 Friday African Print wear, 1 Physical Education sportswear, school crest badge.',
    label: 'Intake Provision',
    value: 'Complete Entry Kit',
    note: 'Standardized bespoke campus tailoring',
  },
]

function AncillaryServices() {
  return (
    <section className="w-full bg-surface py-12">
      <div className="container-page flex flex-col gap-8">
        <div>
          <span className="block text-label-caps font-bold uppercase tracking-wider text-secondary">
            Complementary Provisions
          </span>
          <h2 className="mt-1 text-headline-md font-bold text-primary">
            Optional Ancillary &amp; Residential Services
          </h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Flexible services billed concurrently with regular term tuition based on parental
            subscription.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ANCILLARY.map((a) => (
            <StaggerItem
              key={a.title}
              className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                  <M className="text-[26px]">{a.icon}</M>
                </div>
                <div>
                  <h3 className="text-title-md font-bold text-primary">{a.title}</h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">{a.body}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-surface-container-high pt-6">
                <div className="text-label-caps uppercase text-on-surface-variant">{a.label}</div>
                <div className="mt-1 text-title-md font-bold text-primary">{a.value}</div>
                <div className="mt-0.5 text-body-sm text-on-surface-variant">{a.note}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 5 — CAMPUS CONTEXT IMAGE BANNER
------------------------------------------------------------------- */
function CampusBanner() {
  return (
    <section className="w-full bg-surface-container-low py-8">
      <div className="container-page">
        <div className="flex flex-col overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm lg:flex-row">
          <div className="relative min-h-[300px] lg:min-h-[360px] lg:w-7/12">
            <img
              src="/images/campus.jpg"
              alt="Sunny courtyard of the Roka International School campus in Amasaman, Ghana"
              width="720"
              height="400"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 p-8 lg:w-5/12 lg:p-12">
            <span className="text-label-caps font-bold uppercase tracking-wider text-secondary">
              Amasaman Campus Facility
            </span>
            <h3 className="text-headline-sm font-semibold leading-tight text-primary">
              Investment Anchored in Purpose-Built Learning
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Every cedi paid fuels air-conditioned STEM labs, safe perimeter transport, interactive
              SMART touch monitors in Basic classrooms, and hygienic dining services under rigorous
              supervisory care.
            </p>
            <div className="flex items-center gap-6 pt-2 text-on-surface">
              <div>
                <div className="text-headline-sm font-bold text-primary">18:1</div>
                <div className="text-label-caps uppercase text-on-surface-variant">
                  Pupil-Teacher Ratio
                </div>
              </div>
              <div className="h-10 w-px bg-surface-container" aria-hidden="true" />
              <div>
                <div className="text-headline-sm font-bold text-primary">100%</div>
                <div className="text-label-caps uppercase text-on-surface-variant">
                  BECE Pass Record
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
   Section 6 — APPROVED PAYMENT METHODS & BANKING CHANNELS
------------------------------------------------------------------- */
const BANKS = [
  { name: 'GCB Bank PLC', branch: 'Amasaman Branch', account: '1421004928371' },
  { name: 'Ecobank Ghana', branch: 'Pokuase Branch', account: '0180014892019' },
]

const MOMO_STEPS = [
  <>
    Dial <span className="font-mono font-bold text-primary">*170#</span> (MTN) or{' '}
    <span className="font-mono font-bold text-primary">*110#</span> (Telecel)
  </>,
  <>
    Select <span className="font-semibold">MoMoPay / Pay Merchant</span>
  </>,
  <>
    Input Till: <span className="font-mono font-bold text-primary">492018</span> &amp; Confirm Name
  </>,
  <>
    Reference: <span className="font-semibold text-primary">Pupil ID / Full Name</span>
  </>,
]

function PaymentChannels() {
  return (
    <section id="payment-channels" className="w-full bg-surface py-12">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="block text-label-caps font-bold uppercase tracking-wider text-secondary">
              Official Bank &amp; Mobile Channels
            </span>
            <h2 className="mt-1 text-headline-md font-bold text-primary">Approved Payment Options</h2>
            <p className="mt-1 text-body-md text-on-surface-variant">
              Choose from authenticated commercial banks, verified mobile money merchant codes, or
              our real-time online fee portal.
            </p>
          </div>

          <div className="flex max-w-md shrink-0 items-start gap-3 rounded-xl bg-tertiary-fixed/30 p-4">
            <M className="mt-0.5 shrink-0 text-[22px] text-tertiary">do_not_disturb_on</M>
            <div>
              <div className="text-label-lg font-bold text-tertiary-container">
                Strict &ldquo;No Cash&rdquo; Policy
              </div>
              <p className="mt-0.5 text-body-sm leading-tight text-on-tertiary-fixed">
                For accounting audits and child safety, strictly zero cash is accepted at campus
                reception.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Channel 1 — Commercial bank direct deposit */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                  <M className="text-[26px]">account_balance</M>
                </div>
                <span className="rounded bg-surface-container px-2.5 py-1 text-label-caps font-bold uppercase text-primary">
                  Branch &amp; Transfer
                </span>
              </div>
              <div>
                <h3 className="text-title-md font-bold text-primary">Partner Bank Accounts</h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  Direct branch deposit slips, standing orders, or internal app wire transfers.
                </p>
              </div>

              {BANKS.map((b) => (
                <div key={b.name} className="space-y-2 rounded-xl bg-surface-container-low p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-label-lg font-bold text-primary">{b.name}</span>
                    <span className="text-label-caps uppercase text-on-surface-variant">
                      {b.branch}
                    </span>
                  </div>
                  <div className="text-body-sm text-on-surface">
                    <span className="text-on-surface-variant">Account:</span>{' '}
                    <span className="font-mono font-bold text-primary">{b.account}</span>
                  </div>
                  <div className="text-body-sm text-on-surface">
                    <span className="text-on-surface-variant">Name:</span>{' '}
                    <span className="font-medium">Roka International School Ltd</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-surface-container pt-4 text-body-sm text-on-surface-variant">
              <span className="font-semibold text-primary">Reference Requirement:</span> State Pupil
              Full Name + Level (e.g.{' '}
              <span className="font-mono font-bold text-primary">Kofi Mensah - JHS 1</span>).
            </div>
          </div>

          {/* Channel 2 — Mobile money merchant */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-fixed/40 text-on-secondary-fixed">
                  <M className="text-[26px]">cell_tower</M>
                </div>
                <span className="rounded bg-secondary-fixed/30 px-2.5 py-1 text-label-caps font-bold uppercase text-on-secondary-fixed">
                  MoMo Merchant
                </span>
              </div>
              <div>
                <h3 className="text-title-md font-bold text-primary">Mobile Money Merchant Till</h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  Zero electronic transfer fees. Instant verification through MTN MoMo &amp; Telecel
                  Cash.
                </p>
              </div>

              <div className="space-y-1 rounded-xl bg-surface-container p-5 text-center">
                <span className="block text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Official Till / Merchant ID
                </span>
                <div className="text-headline-lg font-extrabold tracking-wider text-primary">
                  492 018
                </div>
                <div className="text-body-sm font-semibold text-on-surface">
                  ROKA INTERNATIONAL SCHOOL
                </div>
              </div>

              <div className="space-y-2 text-body-sm text-on-surface">
                <div className="mb-1 font-semibold text-primary">
                  MTN / Telecel Step Instructions:
                </div>
                {MOMO_STEPS.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-container font-mono text-[12px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-surface-container pt-4 text-body-sm text-on-surface-variant">
              Take a screenshot of the confirmation SMS and forward to{' '}
              <span className="font-mono font-semibold text-primary">accounts@roka.edu.gh</span>.
            </div>
          </div>

          {/* Channel 3 — Online fee payment portal */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                  <M className="text-[26px]">credit_card</M>
                </div>
                <span className="rounded bg-surface-container-high px-2.5 py-1 text-label-caps font-bold uppercase text-primary">
                  Automated
                </span>
              </div>
              <div>
                <h3 className="text-title-md font-bold text-primary">Online Portal &amp; Cards</h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  Instant electronic reconciliation, automated student ledger receipting, and
                  256-bit SSL encryption.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-xl bg-surface-container-low p-4">
                <span className="text-label-caps uppercase text-on-surface-variant">
                  Accepted Gateways
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {['VISA', 'Mastercard', 'Gh-Link'].map((g) => (
                    <span
                      key={g}
                      className="rounded bg-surface-container-lowest px-3 py-1.5 font-mono text-body-sm font-bold text-primary shadow-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <M className="shrink-0 text-[18px] text-secondary">verified</M>
                  <span>Immediate PDF receipt issued to parent email</span>
                </div>
                <div className="flex items-center gap-2">
                  <M className="shrink-0 text-[18px] text-secondary">verified</M>
                  <span>Direct sync with student attendance portal</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-surface-container pt-4">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-container px-4 py-3.5 text-label-lg font-bold text-on-secondary shadow-sm transition-colors hover:bg-secondary"
              >
                <M className="text-[18px]">lock</M>
                <span>Launch School Payment Portal</span>
                <M className="text-[15px]">open_in_new</M>
              </a>
              <span className="text-center text-[12px] text-on-surface-variant">
                PCI-DSS Level 1 Certified Secure Payment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 7 — BILLING POLICIES, SIBLING DISCOUNTS & TERMS
------------------------------------------------------------------- */
const POLICIES = [
  {
    icon: 'diversity_1',
    title: 'Sibling Tuition Discount Scheme',
    body: (
      <>
        To assist multi-child families, Roka offers a graduated discount on{' '}
        <strong className="font-semibold text-on-surface">Standard Tuition Fees</strong>: a 5%
        discount for the 2nd concurrently enrolled biological child, and a 10% discount for the 3rd
        and subsequent siblings.
      </>
    ),
    note: 'Applies to core tuition only · Excludes levies',
    tone: 'text-secondary',
  },
  {
    icon: 'hourglass_bottom',
    title: 'Deadlines & Flexible Installments',
    body: (
      <>
        Full fees are due prior to term commencement. Under approved structured plans, a minimum of
        60% must be paid upon reopening, with the 40% balance cleared strictly before the mid-term
        break week.
      </>
    ),
    note: 'Requires written approval from Accounts',
    tone: 'text-tertiary-container',
  },
  {
    icon: 'receipt_long',
    title: 'Reconciliation & Official Receipts',
    body: (
      <>
        Bank teller copies or mobile money transaction receipts must be presented to the Bursary or
        submitted via WhatsApp/email within 48 hours to be validated and credited to the
        student&rsquo;s ledger.
      </>
    ),
    note: 'Official digital receipts generated upon match',
    tone: 'text-primary',
  },
  {
    icon: 'assignment_return',
    title: 'Withdrawal & Refund Protocols',
    body: (
      <>
        Notice of child withdrawal requires one full academic term&rsquo;s written advance notice to
        the Head of Admissions. Tuitions paid for ongoing instructional terms are non-refundable
        after week 2 of instruction.
      </>
    ),
    note: 'Board of Governors ratified',
    tone: 'text-on-surface-variant',
  },
]

function BillingPolicies() {
  return (
    <section className="w-full bg-surface-container-low py-12">
      <div className="container-page flex flex-col gap-8">
        <div>
          <span className="block text-label-caps font-bold uppercase tracking-wider text-secondary">
            Financial Regulations
          </span>
          <h2 className="mt-1 text-headline-md font-bold text-primary">
            Billing Guidelines &amp; Institutional Policies
          </h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Designed to maintain equitable treatment, institutional integrity, and uninterrupted
            student academic focus.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {POLICIES.map((p) => (
            <StaggerItem
              key={p.title}
              className="flex items-start gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container text-primary">
                <M className="text-[24px]">{p.icon}</M>
              </div>
              <div className="space-y-2">
                <h3 className="text-title-md font-bold text-primary">{p.title}</h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{p.body}</p>
                <span
                  className={`block text-label-caps font-bold uppercase tracking-wider ${p.tone}`}
                >
                  {p.note}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 8 — ACCOUNTS DESK SUPPORT & INQUIRIES HERO BAND
------------------------------------------------------------------- */
function AccountsDesk() {
  return (
    <section className="w-full bg-primary py-16 text-on-primary">
      <div className="container-page flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-label-caps uppercase tracking-wider text-surface-container-high">
            <M className="text-[15px] text-secondary-fixed">support_agent</M>
            <span>Dedicated Bursary Desk</span>
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-surface-container-lowest md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Questions Regarding Fees or Flexible Plans?
          </h2>
          <p className="text-body-lg leading-relaxed text-surface-container-high">
            Our Accounts Office is located in the Administration Block, Amasaman Campus. Open
            Monday through Friday from 8:00 AM to 3:30 PM. We are always ready to assist your
            family.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-body-sm text-surface-container-high">
            <div className="flex items-center gap-2">
              <M className="text-[18px] text-secondary-fixed">call</M>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="font-semibold transition-colors hover:text-secondary-fixed"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <M className="text-[18px] text-secondary-fixed">mail</M>
              <a
                href="mailto:accounts@roka.edu.gh"
                className="font-semibold transition-colors hover:text-secondary-fixed"
              >
                accounts@roka.edu.gh
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-4 sm:flex-row lg:w-auto lg:flex-col">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-6 py-3.5 text-label-lg font-bold text-on-secondary shadow-md transition-colors hover:bg-secondary"
          >
            <M className="text-[20px]">phone_in_talk</M>
            <span>Contact Accounts Desk</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest/10 px-6 py-3.5 text-label-lg font-semibold text-surface-container-lowest transition-colors hover:bg-surface-container-lowest/20"
          >
            <M className="text-[20px]">download</M>
            <span>Download Policy Manual</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function AdmissionFees() {
  return (
    <main>
      <PageHeader />
      <SummaryMetrics />
      <FeeSchedule />
      <AncillaryServices />
      <CampusBanner />
      <PaymentChannels />
      <BillingPolicies />
      <AccountsDesk />
    </main>
  )
}
