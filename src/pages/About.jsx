import { Link } from 'react-router-dom'
import { Reveal, StaggerGroup, StaggerItem, HeroIn } from '../components/motion'
import { CONTACT } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '', fill = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    aria-hidden="true"
    style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {children}
  </span>
)

/* ------------------------------------------------------------------
   1. BREADCRUMB & PAGE HEADER BANNER
------------------------------------------------------------------- */
const HERO_METRICS = [
  { icon: 'verified_user', label: 'GES Reg: #GAR/AMA/0419' },
  { icon: 'school', label: 'Crèche Through JHS 3' },
  { icon: 'pin_drop', label: 'Amasaman, Ga West Municipality' },
]

function PageBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      {/* Campus exterior photograph with navy gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campus.jpg"
          alt="Roka International School Amasaman campus exterior and courtyard grounds"
          className="h-full w-full scale-105 object-cover object-center opacity-30"
          width={1536}
          height={1024}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--color-primary), rgba(107,74,0,0.9) 55%, rgba(168,122,5,0.8))',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--color-primary), transparent 55%, rgba(122,89,0,0.4))',
          }}
        />
      </div>

      <div className="container-page relative z-10 flex flex-col justify-center py-16 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-surface-container-high">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-label-md font-semibold transition-colors hover:text-secondary-fixed"
          >
            <M className="text-[16px]">home</M>
            <span>Home</span>
          </Link>
          <span className="text-label-md text-outline-variant/60">/</span>
          <span className="text-label-md font-semibold tracking-wide text-secondary-fixed">
            About Us
          </span>
        </nav>

        <HeroIn delay={0}>
          <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full bg-tertiary-container/60 px-3.5 py-1.5 text-label-caps uppercase tracking-widest text-tertiary-fixed shadow-sm">
            <M className="text-[15px] text-on-tertiary-container">church</M>
            Christian Heritage &amp; Intellectual Rigor
          </span>
        </HeroIn>

        <div className="max-w-4xl">
          <HeroIn delay={0.1}>
            <h1 className="mb-6 text-display-hero-mobile font-extrabold leading-tight tracking-tight text-surface-container-lowest md:text-[2.75rem] md:leading-tight lg:text-display-hero">
              Rooted in Values, Striving for Academic &amp; Moral Excellence
            </h1>
          </HeroIn>

          <HeroIn delay={0.2}>
            <p className="max-w-3xl text-body-lg font-light leading-relaxed text-surface-container-high">
              Discover the heritage, leadership ethos, and Christian pedagogical foundation shaping
              future leaders in Greater Accra. We educate the complete child through discipline,
              curiosity, and steadfast purpose.
            </p>
          </HeroIn>
        </div>

        {/* Live campus quick-metric pills */}
        <HeroIn delay={0.3} className="mt-10">
          <div className="flex flex-wrap items-center gap-4 border-t border-white/15 pt-8 lg:gap-8">
            {HERO_METRICS.map((m, i) => (
              <div key={m.label} className="contents">
                {i > 0 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-outline-variant/40 sm:block" />
                )}
                <div className="flex items-center gap-2.5 text-surface-container-lowest">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container/20 text-secondary-fixed">
                    <M className="text-[18px]">{m.icon}</M>
                  </span>
                  <span className="text-label-md tracking-wide">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </HeroIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   2. CAMPUS QUICK FACTS & ACCREDITATION BAND
------------------------------------------------------------------- */
const FACTS = [
  {
    icon: 'workspace_premium',
    label: 'Accreditation',
    value: 'GES Fully Certified',
    note: 'Amasaman District Directorate',
    color: 'text-secondary',
  },
  {
    icon: 'timeline',
    label: 'Academic Span',
    value: 'Crèche to JHS 3',
    note: 'Continuous educational continuum',
    color: 'text-primary',
  },
  {
    icon: 'apartment',
    label: 'Campus Model',
    value: 'Day & Boarding',
    note: 'Secure, pastoral care facilities',
    color: 'text-tertiary-container',
  },
  {
    icon: 'groups',
    label: 'Class Density',
    value: '18:1 Ratio',
    note: 'Focused individualized instruction',
    color: 'text-secondary',
  },
]

function QuickFacts() {
  return (
    <section className="w-full bg-surface-container-lowest py-8 shadow-sm">
      <div className="container-page">
        <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {FACTS.map((f) => (
            <StaggerItem
              key={f.label}
              className="flex flex-col rounded-xl bg-surface p-4 transition-colors duration-300 hover:bg-surface-container"
            >
              <div className={`mb-1 flex items-center gap-2 ${f.color}`}>
                <M className="text-[20px]" fill={f.icon === 'workspace_premium'}>
                  {f.icon}
                </M>
                <span className="text-label-caps uppercase tracking-wider">{f.label}</span>
              </div>
              <span className="text-title-md font-bold text-primary">{f.value}</span>
              <p className="mt-0.5 text-body-sm text-on-surface-variant">{f.note}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   3. ACADEMIC PHILOSOPHY & GES FOUNDATION
------------------------------------------------------------------- */
const TENETS = [
  {
    icon: 'history_edu',
    fill: true,
    title: 'Tradition & Rigor',
    body: 'Deep grounding in mathematics, literacy, Ghanaian culture, and national GES benchmarks leading to outstanding BECE achievement.',
    tag: 'GES Syllabi',
  },
  {
    icon: 'science',
    title: 'Pedagogical Inquiry',
    body: 'Interactive STEM/ICT workstations, group project collaboration, and structured scientific problem-solving routines.',
    tag: 'Applied STEM',
  },
  {
    icon: 'shield_with_heart',
    title: 'Christ-Centered Character',
    body: 'Instilling modesty, integrity, personal accountability, and deep reverence for God, family, and national service.',
    tag: 'Moral Anchor',
  },
]

function Philosophy() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28">
      <div className="container-page flex flex-col gap-16">
        {/* Section header with visual accent */}
        <Reveal className="flex max-w-3xl flex-col">
          <span className="mb-4 inline-flex items-center gap-2.5 self-start rounded-full bg-surface-container-highest px-3 py-1 text-label-caps uppercase tracking-widest font-bold text-primary">
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
            Our Foundational Philosophy · GES Curriculum
          </span>
          <h2 className="text-headline-lg-mobile font-bold leading-tight tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Preparing Children for Senior High School Through Balanced, Disciplined Nurture
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-on-surface-variant">
            At Roka International School, we synthesize the rigorous standards of the Ghana Education
            Service (GES) with modern exploratory methods. We champion academic discipline alongside
            authentic Christian character, ensuring every pupil departs for Senior High School
            equipped intellectually, ethically, and socially.
          </p>
        </Reveal>

        {/* Narrative two-column editorial block */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Visual & architectural callout */}
          <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-primary-container p-8 text-surface-container-lowest shadow-xl lg:col-span-5 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-secondary-container/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/40 blur-2xl"
            />

            <div className="relative z-10 flex flex-col gap-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container text-on-secondary shadow-md">
                <M className="text-[28px]" fill>
                  auto_stories
                </M>
              </span>
              <h3 className="text-headline-sm font-bold leading-snug text-surface-container-lowest">
                Equipping Tomorrow&apos;s Thinkers in Greater Accra
              </h3>
              <p className="text-body-md leading-relaxed text-surface-container-high">
                Our campus in Amasaman provides an oasis of focused scholarly calm. From structured
                morning assemblies to collaborative laboratory sessions, our instructional
                environment values quiet concentration, vocal participation, and mutual respect.
              </p>
            </div>

            <div className="relative z-10 mt-6 border-t border-white/15 pt-8">
              <div className="flex items-center gap-3">
                <M className="text-[24px] text-secondary-fixed">verified</M>
                <span className="text-label-lg font-semibold text-surface-container-lowest">
                  100% BECE Examination Pass Record
                </span>
              </div>
              <p className="mt-1 ml-9 text-body-sm text-surface-container-high">
                Consistent placement in Grade A Senior High Schools across Ghana.
              </p>
            </div>
          </Reveal>

          {/* Analytical context & pedagogical pillars */}
          <Reveal delay={0.1} className="flex flex-col justify-between gap-6 lg:col-span-7">
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-title-md font-bold text-primary">
                <M className="text-[22px] text-secondary">psychology</M>
                Ghanaian Educational Heritage Meets 21st-Century Competencies
              </h3>
              <p className="text-body-md leading-relaxed text-on-surface-variant">
                We anchor pupils in the national curriculum benchmarks set by the Ghana Education
                Service while infusing digital research techniques, computer programming literacy,
                and communicative fluency in English, Twi, and French. Homework is regular,
                structured, and assessed constructively to cultivate lifelong habits of self-study.
              </p>
            </div>

            <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {TENETS.map((t) => (
                <StaggerItem
                  key={t.title}
                  className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-5 shadow-sm transition-colors duration-300 hover:bg-surface-container"
                >
                  <div>
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
                      <M className="text-[20px]" fill={t.fill}>
                        {t.icon}
                      </M>
                    </span>
                    <h4 className="mb-1.5 text-label-lg font-bold text-primary">{t.title}</h4>
                    <p className="text-body-sm leading-normal text-on-surface-variant">{t.body}</p>
                  </div>
                  <div className="mt-4 pt-2">
                    <span className="text-label-caps font-bold uppercase tracking-wider text-secondary">
                      {t.tag}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   4. MODEST LEADERSHIP WELCOME QUOTE BLOCK
------------------------------------------------------------------- */
function WelcomeQuote() {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-8 shadow-lg lg:p-12">
            <M
              className="pointer-events-none absolute -bottom-8 -right-6 select-none text-[160px] text-surface-container/70"
              fill
            >
              format_quote
            </M>

            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
              {/* Institutional seal — strictly no personal portraits */}
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary p-4 text-on-primary shadow-md">
                <M className="text-[44px]">shield</M>
                <span className="mt-1 text-label-caps uppercase tracking-wider text-surface-container-lowest">
                  Veritas
                </span>
              </div>

              <div className="flex flex-col">
                <div className="mb-3 flex items-center gap-1.5 text-secondary-container">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <M key={i} className="text-[20px]" fill>
                      star
                    </M>
                  ))}
                </div>

                <blockquote className="text-headline-sm font-medium italic leading-relaxed text-primary">
                  “At Roka, we do not merely educate pupils for examinations; we mold upright
                  characters equipped with intellectual agility and steadfast Christian convictions
                  to impact Ghana and the world.”
                </blockquote>

                <figcaption className="mt-6 flex flex-col justify-between gap-2 border-t border-outline-variant/25 pt-4 sm:flex-row sm:items-center">
                  <cite className="text-title-md font-bold not-italic tracking-tight text-on-surface">
                    — Board of Governors &amp; School Administration
                  </cite>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 text-label-caps font-bold uppercase tracking-wider text-primary">
                    <M className="text-[14px]">assured_workload</M>
                    Roka International School
                  </span>
                </figcaption>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   5. SUB-PAGES NAVIGATION GRID
------------------------------------------------------------------- */
const SUBPAGES = [
  {
    icon: 'groups',
    tag: 'Certified Faculty',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Our Team & Faculty',
    body: 'Meet our dedicated certified Ghanaian educators, pastoral housemasters, and subject specialists committed to individual pupil growth across every grade level.',
    cta: 'Meet Our Educators',
    to: '/about/team',
  },
  {
    icon: 'explore',
    tag: 'Guiding Creed',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    title: 'Mission, Vision & Values',
    body: 'Explore our guiding purpose: empowering young minds with godliness, critical intellect, moral courage, and selfless national leadership under God.',
    cta: 'Explore Mission & Values',
    to: '/about/mission-vision',
  },
  {
    icon: 'military_tech',
    fill: true,
    tag: 'Excellence Metric',
    tagClass: 'bg-primary-fixed text-on-primary-fixed',
    title: 'Track Record & Achievements',
    body: 'From consecutive 100% BECE distinctions to regional athletic crowns at the Roka Invitational Marathon and national STEM science exhibits.',
    cta: 'View Milestones & Accolades',
    to: '/achievements',
  },
]

function StoryGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1 text-label-caps uppercase tracking-widest font-bold text-primary">
              <M className="text-[15px]">explore</M>
              Discover More
            </span>
            <h2 className="text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              Explore Our Story &amp; Community
            </h2>
            <p className="mt-2 max-w-2xl text-body-md leading-relaxed text-on-surface-variant">
              Gain a complete picture of life at Roka: meet the certified educators guiding each
              class, examine our foundational creed, and review years of regional academic accolades.
            </p>
          </Reveal>

          <div className="hidden items-center gap-2 text-label-md text-primary lg:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary-container" />
            <span>Official Institutional Dossier</span>
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SUBPAGES.map((s) => (
            <StaggerItem key={s.title}>
              <Link
                to={s.to}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-low hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container-high text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-surface-container-lowest">
                    <M className="text-[28px]" fill={s.fill}>
                      {s.icon}
                    </M>
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-1 text-label-caps font-bold uppercase tracking-wide ${s.tagClass}`}
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 text-headline-sm font-bold text-primary transition-colors group-hover:text-amber-royal">
                    {s.title}
                  </h3>
                  <p className="mb-6 text-body-md leading-relaxed text-on-surface-variant">
                    {s.body}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-outline-variant/25 pt-4 text-label-lg font-bold text-primary transition-colors group-hover:text-secondary">
                  <span>{s.cta}</span>
                  <M className="text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </M>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   6. PRE-FOOTER CALL-TO-ACTION CARD
------------------------------------------------------------------- */
function VisitCta() {
  return (
    <section className="w-full bg-surface pt-4 pb-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-surface-container-lowest shadow-2xl lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary-container/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-container/80 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="flex flex-col gap-4 lg:col-span-7">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-surface-container-highest/20 px-3 py-1 text-label-caps uppercase tracking-widest font-bold text-secondary-fixed">
                  <M className="text-[15px]">event</M>
                  Experience Roka Firsthand
                </span>
                <h2 className="text-headline-lg-mobile font-bold leading-tight tracking-tight text-surface-container-lowest md:text-[2rem] md:leading-tight lg:text-headline-lg">
                  Begin Your Child&apos;s Journey to Distinguished Leadership
                </h2>
                <p className="max-w-xl text-body-lg leading-relaxed text-surface-container-high">
                  We welcome prospective parents for guided morning observations in Amasaman. Tour
                  our lecture halls, ICT suites, and playing fields while meeting our administration.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-surface-container-high">
                  <span className="flex items-center gap-1.5">
                    <M className="text-[18px] text-secondary-fixed">calendar_month</M>
                    <span>Open Monday – Friday, 8:00 AM – 3:30 PM</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <M className="text-[18px] text-secondary-fixed">desk</M>
                    <span>Admissions Desk Open</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:col-span-5 lg:flex-col lg:items-end">
                <Link
                  to="/admission/open-day"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-secondary-container px-8 py-4 text-center text-label-lg font-bold text-on-secondary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl"
                >
                  <M className="text-[20px]" fill>
                    directions_walk
                  </M>
                  <span>Schedule a Campus Visit</span>
                </Link>

                <Link
                  to="/admission/prospectus"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-surface-container-highest/10 px-8 py-4 text-center text-label-lg font-semibold text-surface-container-lowest transition-all hover:bg-surface-container-highest/20"
                >
                  <M className="text-[20px]">download</M>
                  <span>Download School Prospectus</span>
                </Link>

                <p className="mt-1 text-center text-body-sm text-surface-container-high lg:text-right">
                  Have questions? Direct line:{' '}
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="font-semibold text-secondary-fixed hover:underline"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ==================================================================
   ABOUT PAGE
   ================================================================== */
export default function About() {
  return (
    <main>
      <PageBanner />
      <QuickFacts />
      <Philosophy />
      <WelcomeQuote />
      <StoryGrid />
      <VisitCta />
    </main>
  )
}


