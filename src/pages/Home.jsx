import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, StaggerGroup, StaggerItem, HeroIn, EASE_OUT_EXPO } from '../components/motion'
import { NEWS } from '../data/content'
import { CONTACT } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* ------------------------------------------------------------------
   Section 1 — HERO
   Full-bleed navy with campus photography, gold badge, dual CTAs and
   a four-pillar trust strip. Load-in: headline 0ms, lead 100ms,
   CTAs 200ms, pillars 300ms. Background slow-zooms (spec #1).
------------------------------------------------------------------- */
const TRUST_PILLARS = [
  { icon: 'verified', title: '100% BECE', sub: 'Pass Rate Track Record' },
  { icon: 'church', title: 'Christian Values', sub: 'Moral Foundation' },
  { icon: 'science', title: 'Modern Labs', sub: 'ICT & Science Stations' },
  { icon: 'night_shelter', title: 'Boarding & Day', sub: 'Safe Student Care' },
]

function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative w-full overflow-hidden bg-primary">
      {/* Background photography + brand gradients */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/classroom.jpg)' }}
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(61,42,0,0.95), rgba(107,74,0,0.90) 55%, rgba(107,74,0,0.55))',
        }}
        initial={{ scale: 1 }}
        animate={reduce ? { scale: 1 } : { scale: 1.05 }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, #7a5900, transparent 55%)' }}
      />

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center pb-16 pt-32 lg:pb-24 lg:pt-44">
        <div className="max-w-3xl space-y-6">
          <HeroIn delay={0}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
              <span className="overline text-secondary-fixed">
                Creche to JHS • Amasaman, Accra • GES Curriculum
              </span>
            </span>
          </HeroIn>

          <HeroIn delay={0.1}>
            <h1 className="text-display-hero-mobile font-extrabold leading-none tracking-tight text-on-primary md:text-[2.75rem] md:leading-tight lg:text-display-hero">
              Preparing Inquiring Minds, Empowering Disciplined Leaders for Christ &amp; Country
            </h1>
          </HeroIn>

          <HeroIn delay={0.2}>
            <p className="max-w-2xl text-body-lg leading-relaxed text-surface-container-high">
              A welcoming Christian-values learning community in Amasaman providing world-class
              Ghana Education Service (GES) curriculum from Creche through Junior High School.
            </p>
          </HeroIn>

          <HeroIn delay={0.3} className="pt-2">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link to="/admission/open-day" className="btn btn-primary group">
                Schedule a Campus Tour
                <M className="text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </M>
              </Link>
            </div>
          </HeroIn>
        </div>

        {/* Quick trust pillars */}
        <HeroIn delay={0.45} className="mt-16">
          <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-10 md:grid-cols-4">
            {TRUST_PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-200 hover:border-secondary-container/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container/20">
                  <M className="text-[22px] text-secondary-container">{p.icon}</M>
                </div>
                <div>
                  <p className="text-title-md font-bold text-on-primary">{p.title}</p>
                  <p className="text-body-sm leading-tight text-surface-container-high">{p.sub}</p>
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
   Section 2 — A THREE-WAY PARTNERSHIP (white band)
------------------------------------------------------------------- */
const PARTNERSHIP_POINTS = [
  {
    title: 'Active Parental Engagement & Termly Consultations',
    body: 'Structured one-on-one reviews assessing cognitive, spiritual, and social milestones.',
  },
  {
    title: 'Dedicated Mentorship & Christian Moral Formative Guidance',
    body: 'Classroom teachers double as pastoral mentors instilling integrity and discipline.',
  },
  {
    title: 'Individualized Learning Attention from Creche to JHS 3',
    body: 'Low teacher-to-student ratios that identify learning bottlenecks early.',
  },
]

function Partnership() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo side with overlap frame */}
          <Reveal className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/mentorship.jpg"
                alt="Parent, Teacher, and Pupil collaborating at Roka"
                loading="lazy"
                decoding="async"
                className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(61,42,0,0.75), transparent 55%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-surface-container-lowest/95 p-4 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <M className="text-[28px] text-secondary-container">handshake</M>
                  <div>
                    <p className="text-title-md font-bold text-primary">Home-School Synergy</p>
                    <p className="text-body-sm text-on-surface-variant">
                      Continuous termly academic consultation and guidance logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden h-24 w-24 items-center justify-center rounded-full bg-secondary-container p-2 text-center shadow-lg sm:flex">
              <span className="overline font-extrabold text-on-secondary">
                100% GES Certified
              </span>
            </div>
          </Reveal>

          {/* Narrative side */}
          <Reveal delay={0.1} className="space-y-6 lg:col-span-6">
            <div className="space-y-2">
              <span className="chip chip-gold">Our Educational Philosophy</span>
              <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
                A Three-Way Partnership: Parent, Teacher, and Pupil
              </h2>
            </div>

            <p className="text-body-md leading-relaxed text-on-surface-variant">
              At Roka International School, we firmly believe academic brilliance and moral strength
              are co-nurtured. Education flourishes when the home, the educator, and the learner walk
              hand-in-hand. We maintain an open-door policy, detailed student progress logs, and
              collaborative termly reviews to ensure your child receives holistic guidance.
            </p>

            <div className="space-y-3.5 pt-2">
              {PARTNERSHIP_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3.5 rounded-xl bg-surface-container-low p-3 transition-colors duration-200 hover:bg-surface-container"
                >
                  <M className="mt-0.5 text-[22px] text-primary">check_circle</M>
                  <div>
                    <p className="text-title-md font-semibold text-on-surface">{p.title}</p>
                    <p className="text-body-sm text-on-surface-variant">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="flex items-start gap-4 rounded-xl bg-primary p-5 shadow-sm">
              <M className="shrink-0 text-[32px] text-secondary-fixed">format_quote</M>
              <p className="text-body-md italic leading-snug text-surface-container-high">
                “When school and home speak with one voice, a child discovers unshakable
                confidence.”
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 3 — CURRICULUM SNAPSHOT (soft slate band)
------------------------------------------------------------------- */
const DIVISIONS = [
  {
    icon: 'child_care',
    ages: 'Ages 18 mos – 4 yrs',
    title: 'Crèche & Nursery',
    body: 'Foundational literacy, sensory motor development, phonics, play-based inquiry, and uplifting Christian songs.',
    cta: 'Explore Early Years',
  },
  {
    icon: 'menu_book',
    ages: 'Ages 5 – 8 yrs | Class 1-3',
    title: 'Lower Primary',
    body: 'Core numeracy, reading fluency, integrated natural science, foundational computing, and exploratory creative arts.',
    cta: 'Explore Lower Primary',
  },
  {
    icon: 'psychology',
    ages: 'Ages 9 – 11 yrs | Class 4-6',
    title: 'Upper Primary',
    body: 'Advanced mathematics, critical thinking, STEM experiments, citizenship education, Ghanaian languages, and introductory French.',
    cta: 'Explore Upper Primary',
  },
  {
    icon: 'school',
    ages: 'Ages 12 – 15 yrs | JHS 1-3',
    title: 'Junior High School',
    body: 'Intensive BECE examination preparation, science practicals, pre-technical skills, ICT coding, and prefectorial student governance.',
    cta: 'Explore JHS',
  },
]

function Curriculum() {
  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28">
      <div className="container-page space-y-12">
        <Reveal className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="chip chip-navy">Ghana Education Service Curriculum</span>
          <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Structured Pathways from Early Years to Junior High
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Rigorous, balanced, and values-centered education aligned with national standards and
            global 21st-century competencies.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DIVISIONS.map((d) => (
            <StaggerItem key={d.title}>
              <Link
                to="/academics"
                className="roka-card roka-card-hover group flex h-full flex-col justify-between p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                    <M className="text-[26px]">{d.icon}</M>
                  </div>
                  <div>
                    <span className="overline text-secondary">{d.ages}</span>
                    <h3 className="mt-1 text-headline-sm font-bold text-primary">{d.title}</h3>
                  </div>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">{d.body}</p>
                </div>
                <div className="mt-6 border-t border-outline-variant/30 pt-6">
                  <span className="inline-flex items-center gap-1 text-label-md font-bold text-primary transition-colors group-hover:text-secondary">
                    {d.cta}
                    <M className="text-[16px]">arrow_forward</M>
                  </span>
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
   Section 4 — THE ROKA CORE PILLARS (white band)
------------------------------------------------------------------- */
const PILLARS = [
  {
    icon: 'shield',
    title: '1. Empowering',
    body: 'Nurturing independent thinking, steadfast self-discipline, and eloquent, confident speech in every student.',
  },
  {
    icon: 'auto_stories',
    title: '2. Engaging',
    body: 'Stimulating hands-on learning through active science labs, parliamentary debate clubs, and collaborative projects.',
  },
  {
    icon: 'military_tech',
    title: '3. Celebrating',
    body: 'Recognizing honest moral character, persevering diligence, artistic talent, and exemplary sportsmanship.',
  },
  {
    icon: 'trophy',
    title: '4. Awarding',
    body: 'Consistent termly honors and Speech & Prize Giving Day citations that cultivate healthy ambition and excellence.',
  },
]

function Pillars() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="container-page space-y-14">
        <Reveal className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="chip chip-gold">What Guides Us</span>
          <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            The Roka Core Pillars
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Instilling timeless Christian character alongside academic diligence every day.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <StaggerItem
              key={p.title}
              className="space-y-4 rounded-2xl bg-surface-container-low p-8 transition-colors duration-300 hover:bg-surface-container"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-md">
                <M className="text-[32px] text-secondary-container">{p.icon}</M>
              </div>
              <h3 className="text-headline-sm font-bold text-primary">{p.title}</h3>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">{p.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 5 — FACILITIES HIGHLIGHT BAND (Deep Solar Gold gradient)
------------------------------------------------------------------- */
const FACILITY_CARDS = [
  {
    icon: 'bed',
    title: 'Boarding House Accommodation',
    body: 'Serene, secure, and chaperoned home-away-from-home with balanced nutritional meal plans, medical clinic oversight, and supervised evening prep study.',
    foot: '24/7 Security & Resident Matrons',
    footIcon: 'check_circle',
  },
  {
    image: '/images/lab.jpg',
    imageAlt: 'Roka modern science and computer laboratory',
    tag: 'High-Tech Lab',
    title: 'Modern Computer & Science Lab',
    body: 'Hands-on physics, chemistry, biology apparatus and high-speed desktop coding stations with certified instructors and safety gear.',
    foot: '1:1 Student Computer Workstations',
    footIcon: 'desktop_windows',
    featured: true,
  },
  {
    icon: 'local_library',
    title: 'Rich Multi-Disciplinary Library',
    body: 'Thousands of curriculum textbooks, African literature classics, reference encyclopedias, and quiet reading alcoves fostering lifelong reading culture.',
    foot: 'Over 8,000 Curated Volumes',
    footIcon: 'menu_book',
  },
]

function Facilities() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 text-on-primary lg:py-28"
      style={{ background: 'linear-gradient(135deg, #8a6405 0%, #6b4a00 48%, #452f00 100%)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-gold/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-48 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />

      <div className="container-page relative z-10 space-y-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl space-y-3">
            <span className="overline text-secondary-fixed">Purpose-Built Environment</span>
            <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-surface-container-lowest md:text-[2rem] md:leading-tight lg:text-headline-lg">
              World-Class Facilities Designed for Holistic Growth
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/facilities"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-label-lg text-on-primary transition-colors duration-200 hover:bg-white/20"
            >
              Explore All Campus Facilities
              <M className="text-[18px]">arrow_forward</M>
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FACILITY_CARDS.map((f) => (
            <StaggerItem
              key={f.title}
              className={`group relative flex flex-col justify-between space-y-6 rounded-2xl border border-white/60 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary-container hover:bg-secondary-container hover:shadow-2xl active:translate-y-0 active:border-secondary active:bg-secondary active:shadow-lg ${
                f.featured ? 'ring-2 ring-gold/50' : ''
              }`}
            >
              <div className="space-y-4">
                {f.image ? (
                  <div className="relative h-44 w-full overflow-hidden rounded-xl">
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500"
                    />
                    <span className="absolute right-3 top-3 rounded bg-secondary-container px-2.5 py-1 text-label-caps font-bold text-on-secondary transition-colors duration-300 group-hover:bg-white group-hover:text-secondary-container">
                      {f.tag}
                    </span>
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container/10 text-secondary-container transition-colors duration-300 group-hover:bg-white/15 group-hover:text-secondary-fixed">
                    <M className="text-[28px]">{f.icon}</M>
                  </div>
                )}

                <h3 className="text-headline-sm font-bold text-on-surface transition-colors duration-300 group-hover:text-white">
                  {f.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant transition-colors duration-300 group-hover:text-white/85">
                  {f.body}
                </p>
              </div>

              <div className="flex items-center gap-2 text-label-md text-secondary-container transition-colors duration-300 group-hover:text-secondary-fixed">
                <M className="text-[18px]">{f.footIcon}</M>
                <span>{f.foot}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 6 — ANNUAL EVENT: ROKA ABN INVITATIONAL MARATHON
------------------------------------------------------------------- */
const MARATHON_SPECS = [
  { label: 'Date', value: 'Saturday, Oct 18, 2025' },
  { label: 'Location', value: 'Amasaman Circuit' },
  { label: 'Categories', value: 'U-6 (1km), U-10, U-14' },
  { label: 'Delegations', value: '25+ Schools & Clubs' },
]

function Marathon() {
  return (
    <section className="w-full bg-surface-container-high/40 py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-xl lg:grid-cols-12">
            {/* Image side */}
            <div className="relative min-h-[360px] lg:col-span-6 lg:min-h-full">
              <img
                src="/images/marathon.jpg"
                alt="Students running in Roka Invitational Mini-Marathon in Accra"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(61,42,0,0.75), transparent 55%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <span className="chip bg-secondary-container text-on-secondary">
                  Established in Accra
                </span>
                <p className="mt-2 text-headline-sm font-bold">Over 1,200 Youth Runners Annually</p>
              </div>
            </div>

            {/* Details side */}
            <div className="flex flex-col justify-between space-y-6 p-8 lg:col-span-6 lg:p-12">
              <div className="space-y-4">
                <span className="chip" style={{ background: 'rgba(255,222,162,0.4)' }}>
                  Annual Hallmark Sporting Event
                </span>
                <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
                  The Roka ABN Invitational Marathon
                </h2>
                <p className="text-body-md leading-relaxed text-on-surface-variant">
                  Building endurance, camaraderie, and healthy sports competition for young
                  athletes ages 4 to 14 from across Greater Accra.
                </p>

                <dl className="grid grid-cols-2 gap-4 pt-2">
                  {MARATHON_SPECS.map((s) => (
                    <div key={s.label} className="space-y-1 rounded-xl bg-surface-container-low p-3.5">
                      <dt className="overline text-on-surface-variant">{s.label}</dt>
                      <dd className="text-title-md font-bold text-primary">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
                <Link to="/activities" className="btn btn-primary font-bold">
                  Register Pupil / School
                </Link>
                <Link to="/activities" className="btn btn-outline-dark font-semibold">
                  View Past Highlights &amp; Times
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 7 — CAMPUS PHOTO MOSAIC
------------------------------------------------------------------- */
const MOSAIC = [
  {
    image: '/images/classroom.jpg',
    alt: 'Classroom learning at Roka',
    tag: 'Classroom',
    title: 'Modern Classroom & Collaborative Studies',
    body: 'Engaged minds under dedicated pedagogical care.',
  },
  {
    image: '/images/lab.jpg',
    alt: 'ICT computer and science lab',
    tag: 'Science Lab',
    title: 'ICT Computer & Science Experiments',
    body: 'Practical STEM education preparing digital innovators.',
  },
  {
    image: '/images/marathon.jpg',
    alt: 'Sports day track athletics',
    tag: 'Athletics',
    title: 'Sports Day & Track Athletics',
    body: 'Promoting physical vitality, team spirit, and discipline.',
  },
  {
    image: '/images/mentorship.jpg',
    alt: 'Dedicated teacher mentorship',
    tag: 'Academic Care',
    title: 'Dedicated Teacher Mentorship',
    body: 'Patient individual coaching every step of the journey.',
  },
]

function Gallery() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="container-page space-y-12">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <Reveal className="space-y-2">
            <span className="chip chip-gold">Life at Roka</span>
            <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              Inside Our Vibrant School Community
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-body-md text-on-surface-variant">
              A glimpse into the daily rhythm of inquiry, play, spiritual enrichment, and fellowship
              at our Amasaman campus.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOSAIC.map((t) => (
            <StaggerItem key={t.tag}>
              <Link
                to="/gallery"
                className="group relative block h-72 overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={t.image}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(61,42,0,0.8), rgba(61,42,0,0.2) 55%, transparent)',
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface-container-lowest px-3 py-1 text-label-caps font-bold text-primary shadow">
                  {t.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-title-md font-bold text-on-primary">{t.title}</h3>
                  <p className="text-body-sm text-surface-container-high">{t.body}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}

          {/* Tile 5 — Boarding life (graphic tile) */}
          <StaggerItem>
            <Link
              to="/facilities"
              className="relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl bg-primary p-6 shadow-sm"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #7a5900, #3d2a00)',
                }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface-container-lowest px-3 py-1 text-label-caps font-bold text-primary shadow">
                Boarding Life
              </span>
              <div className="relative z-10 space-y-2">
                <M className="text-[36px] text-secondary-container">night_shelter</M>
                <h3 className="text-title-md font-bold text-on-primary">Boarding &amp; Pastoral Care</h3>
                <p className="text-body-sm text-surface-container-high">
                  A nurturing, structured home environment with evening devotions.
                </p>
              </div>
            </Link>
          </StaggerItem>

          {/* Tile 6 — Culture & Arts (graphic tile) */}
          <StaggerItem>
            <Link
              to="/activities"
              className="relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl bg-surface-container p-6 shadow-sm"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #f6ecd6, #fdf8ef)',
                }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-label-caps font-bold text-on-primary shadow">
                Culture &amp; Arts
              </span>
              <div className="relative z-10 space-y-2">
                <M className="text-[36px] text-primary">palette</M>
                <h3 className="text-title-md font-bold text-primary">
                  Creative Arts &amp; Cultural Celebrations
                </h3>
                <p className="text-body-sm text-on-surface-variant">
                  Ghanaian cultural week, music ensemble, and drama exhibitions.
                </p>
              </div>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 8 — LATEST NEWS & EVENTS (soft slate band)
------------------------------------------------------------------- */
function LatestNews() {
  const posts = NEWS.slice(0, 3)

  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28">
      <div className="container-page space-y-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal className="space-y-2">
            <span className="chip chip-navy">Campus Dispatches</span>
            <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              Latest School News &amp; Announcements
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/news"
              className="inline-flex items-center gap-1 text-label-lg font-bold text-primary transition-colors hover:text-secondary"
            >
              View All Bulletins
              <M className="text-[18px]">arrow_forward</M>
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="flex h-full flex-col justify-between space-y-4 rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span className="rounded-full bg-surface-container px-2.5 py-1 text-label-caps font-bold text-primary">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <h3 className="text-headline-sm font-bold leading-snug text-primary">
                    <Link to={`/news/${post.slug}`} className="transition-colors hover:text-secondary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">
                    {post.excerpt}
                  </p>
                </div>
                <div className="border-t border-outline-variant/20 pt-4">
                  <Link
                    to={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1 text-label-md font-bold text-primary transition-colors hover:text-secondary"
                  >
                    Read Full Report
                    <M className="text-[16px]">chevron_right</M>
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 9 — 3-STEP ADMISSIONS BAND (Deep Base Navy)
------------------------------------------------------------------- */
const ADMISSION_THREE = [
  {
    n: '01',
    title: 'Complete Admission Form',
    body: 'Download our physical application or submit online. Attach previous terminal academic reports and certified birth certificate copy.',
  },
  {
    n: '02',
    title: 'Sit the Entrance Assessment',
    body: 'Diagnostic placement assessment evaluating competency in English comprehension, Mathematics, and General Science.',
  },
  {
    n: '03',
    title: 'Medical Clearance & Interview',
    body: 'Submission of medical form, informal parent-pupil orientation conversation, and issuance of official welcome admission packet.',
  },
]

function AdmissionsBand() {
  return (
    <section className="relative w-full overflow-hidden bg-amber-base py-20 text-on-primary lg:py-28">
      <div className="container-page space-y-12">
        <Reveal className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="overline text-secondary-fixed">Join the Roka Family</span>
          <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-surface-container-lowest md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Simple 3-Step Admissions Process
          </h2>
          <p className="text-body-md text-surface-container-high">
            Enrolling your child in an environment where scholarly excellence and sound moral values
            meet.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ADMISSION_THREE.map((s) => (
            <StaggerItem
              key={s.n}
              className="space-y-4 rounded-2xl border border-white/15 bg-primary-container/40 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container font-black text-on-secondary shadow-md">
                {s.n}
              </div>
              <h3 className="text-headline-sm font-bold text-surface-container-lowest">{s.title}</h3>
              <p className="text-body-sm leading-relaxed text-surface-container-high">{s.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal
          delay={0.2}
          className="mx-auto max-w-2xl rounded-xl border border-white/20 bg-white/10 p-4 text-center"
        >
          <p className="text-body-sm text-surface-container-high">
            <strong className="font-bold text-secondary-fixed">Notice:</strong> Admission is
            strictly merit-based and subject to the school administration’s discretion and class
            space availability.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
          <Link to="/admission/apply" className="btn btn-primary group">
            Start Your Application Online Now
            <M className="text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </M>
          </Link>
          <div className="flex items-center gap-2 text-body-sm text-surface-container-high">
            <M className="text-[20px] text-secondary-fixed">headset_mic</M>
            <span>
              Admissions Helpline:{' '}
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="font-bold hover:text-white">
                {CONTACT.phone}
              </a>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 10 — NEWSLETTER SIGNUP STRIP
------------------------------------------------------------------- */
function Newsletter() {
  return (
    <section className="w-full bg-surface-container py-12">
      <div className="container-page flex flex-col items-center justify-between gap-8 lg:flex-row">
        <Reveal className="space-y-1">
          <h2 className="text-headline-sm font-bold text-primary">
            Stay Updated with Roka Term Calendars &amp; Events
          </h2>
          <p className="text-body-sm text-on-surface-variant">
            Receive termly newsletter releases, admission deadlines, and academic notices.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-auto">
          <form
            className="flex w-full flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Parent&apos;s email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter parent's email address"
              className="min-w-[280px] rounded-lg border border-hairline bg-surface-container-lowest px-4 py-3 text-body-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-secondary-container px-6 py-3 text-label-lg font-bold text-on-secondary transition-colors hover:bg-secondary"
            >
              Subscribe Now
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ==================================================================
   HOME PAGE
   ================================================================== */
export default function Home() {
  return (
    <main>
      <Hero />
      <Partnership />
      <Curriculum />
      <Pillars />
      <Facilities />
      <Marathon />
      <Gallery />
      <LatestNews />
      <AdmissionsBand />
      <Newsletter />
    </main>
  )
}

