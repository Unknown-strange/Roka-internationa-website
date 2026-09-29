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
   Section 1 — BREADCRUMB + ACADEMIC CONTINUUM HEADER
   Soft warm band, eyebrow badge, lead paragraph, two anchor CTAs
   and a four-stat trust strip.
------------------------------------------------------------------- */
const STATS = [
  { icon: 'workspace_premium', value: '100% BECE', label: 'Distinction Pass Rate', tone: 'text-primary' },
  { icon: 'biotech', value: 'GES + STEM', label: 'Enriched Labs & Coding', tone: 'text-primary' },
  { icon: 'calendar_month', value: '3 Terms', label: 'Liturgical & Academic Cycle', tone: 'text-primary' },
  { icon: 'shield_with_heart', value: 'Christian Care', label: 'Mentorship & Discipleship', tone: 'text-secondary' },
]

function AcademicHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-14 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-surface-container-high/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-primary-fixed/40 blur-2xl"
      />

      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-label-md font-semibold text-on-surface-variant transition-colors hover:text-primary"
          >
            <M className="text-[16px]">home</M>
            <span>Home</span>
          </Link>
          <M className="text-[14px] text-outline">chevron_right</M>
          <span className="text-label-md font-bold text-primary">Academics</span>
        </nav>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-3.5 py-1.5 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" aria-hidden="true" />
          <span className="text-label-caps font-bold uppercase tracking-wider text-primary">
            Ghana Education Service (GES) Curriculum · Nursery to JHS
          </span>
        </div>

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h1 className="mb-5 text-display-hero-mobile font-extrabold tracking-tight text-primary md:text-[2.75rem] md:leading-tight lg:text-display-hero">
              Our Academic Journey
            </h1>
            <p className="max-w-3xl text-body-lg leading-relaxed text-on-surface-variant">
              A holistic educational continuum rooted in Christian discipleship, intellectual rigor,
              and national excellence. Discover our structured GES curriculum pathways and term
              calendar from foundational Crèche to Junior High School certification.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
            <a
              href="#curriculum-ladder"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-6 py-3.5 text-label-lg font-bold text-on-secondary shadow-md transition-all hover:bg-secondary"
            >
              <M className="text-[20px]">school</M>
              <span>Explore Curriculum Ladder</span>
            </a>
            <a
              href="#term-calendar"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest px-6 py-3.5 text-label-lg font-bold text-primary shadow-sm transition-all hover:bg-surface-container"
            >
              <M className="text-[20px]">event_note</M>
              <span>View Term Dates</span>
            </a>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 rounded-xl bg-surface-container-lowest/80 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.value} className="flex items-center gap-3 p-2">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container ${s.tone}`}>
                <M className="text-[22px]">{s.icon}</M>
              </div>
              <div>
                <span className="block text-title-md font-bold text-primary">{s.value}</span>
                <span className="block text-label-md text-on-surface-variant">{s.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 2 — IMMERSION: two visual feature cards
------------------------------------------------------------------- */
const IMMERSION = [
  {
    image: '/images/classroom.jpg',
    imageAlt: 'Active classroom participation at Roka International School',
    badge: { icon: 'front_hand', label: 'Active In-Class Engagement', tone: 'bg-amber-deep/95 text-on-primary' },
    ratio: 'Class Ratio 1:20',
    dot: 'bg-secondary-container',
    kicker: 'Early & Primary Pedagogy',
    kickerTone: 'text-secondary',
    title: 'Confident Voice & Collaborative Learning',
    body: 'Students are mentored to speak articulately, question boldly, and debate respectfully. Through team presentation routines and student-led seminars, learners master Ghanaian history, language arts, and social leadership early in their school journey.',
    foot: 'Teacher-Guided Critical Dialogue',
    footIcon: 'psychology',
  },
  {
    image: '/images/lab.jpg',
    imageAlt: 'STEM science laboratory and ICT suite at Roka International School',
    badge: { icon: 'biotech', label: 'Practical STEM Suites', tone: 'bg-secondary-container text-on-secondary' },
    ratio: 'HP Multi-Station Lab',
    dot: 'bg-tertiary-fixed-dim',
    kicker: 'Upper Primary & JHS Scientific Labs',
    kickerTone: 'text-tertiary',
    title: 'Experimental Science & Digital Coding',
    body: 'Equipped with chemistry glassware, biological specimens, and dedicated individual computer terminals, our lab instructors bridge the Ghanaian national syllabus with real-world technological and experimental problem solving.',
    foot: 'WAEC Practical Exam Readiness',
    footIcon: 'science',
  },
]

function Immersion() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-secondary">
            Campus Immersion
          </span>
          <h2 className="mb-4 text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Where Inquiry Ignites Scholarly Character
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Inside our state-of-the-art classrooms and experimental laboratories in Amasaman,
            children find a vibrant balance of interactive Ghanaian curriculum, hands-on scientific
            discovery, and daily pastoral encouragement.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {IMMERSION.map((c) => (
            <StaggerItem
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 w-full overflow-hidden bg-surface-container">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 shadow-sm backdrop-blur-md ${c.badge.tone}`}
                >
                  <M className="text-[15px]">{c.badge.icon}</M>
                  <span className="text-label-caps font-bold uppercase tracking-wider">{c.badge.label}</span>
                </div>
                <span className="absolute bottom-4 right-4 rounded-lg bg-surface-container-lowest/90 px-3 py-1 text-label-caps font-bold text-primary shadow-sm backdrop-blur">
                  {c.ratio}
                </span>
              </div>

              <div className="flex flex-grow flex-col justify-between p-8">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} aria-hidden="true" />
                    <span className={`text-label-caps font-bold uppercase tracking-wider ${c.kickerTone}`}>
                      {c.kicker}
                    </span>
                  </div>
                  <h3 className="mb-3 text-headline-sm font-semibold text-primary">{c.title}</h3>
                  <p className="mb-6 text-body-md leading-relaxed text-on-surface-variant">{c.body}</p>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-4 pt-4">
                  <span className="text-label-md font-semibold text-primary">{c.foot}</span>
                  <M className="text-[20px] text-primary">{c.footIcon}</M>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 3 — THE THREE-TERM CHRISTIAN ACADEMIC CALENDAR
------------------------------------------------------------------- */
const TERMS = [
  {
    tag: 'Term 1 · Foundation & Harvest',
    icon: 'church',
    name: 'Advent Term',
    dates: 'Sept 10, 2024 – Dec 18, 2024',
    focus:
      'Setting moral anchors, baseline diagnostic assessments, prefect commissioning, and personal academic growth targets.',
    milestones: [
      'Cultural Interaction Week & Heritage Fair',
      'National Literacy Day & Reading Fair',
      'Annual Speech & Prize-Giving Day',
      'Grand Festival of Nine Lessons & Carols',
    ],
    foot: '14 Weeks of Instructional Study',
    footTone: 'bg-surface-container-high/40 text-primary',
  },
  {
    tag: 'Term 2 · Diligence & Service',
    icon: 'volunteer_activism',
    name: 'Lent Term',
    dates: 'Jan 14, 2025 – Apr 11, 2025',
    focus:
      'Physical endurance, laboratory experimentation, community charity, and quiet reflection on Christ’s self-giving love.',
    milestones: [
      'Roka Invitational Inter-Schools Mini-Marathon',
      'Science & Tech Innovation Project Fair',
      '6th March Ghana Independence Parade',
      'Easter Passion Play & Ga West Hospital Charity',
    ],
    foot: '13 Weeks of Intensive Discovery',
    footTone: 'bg-secondary-container/20 text-secondary',
    current: true,
  },
  {
    tag: 'Term 3 · Climax & Excellence',
    icon: 'military_tech',
    name: 'Trinity Term',
    dates: 'May 06, 2025 – Jul 24, 2025',
    focus:
      'Examination mastery, leadership transitions, commissioning ceremonies, and thanksgiving to the Triune God.',
    milestones: [
      'Mock BECE & Senior High Diagnostic Drills',
      'Prefectorial Elections & Formal Handover',
      'Inter-House "Battle of Brains" Championship',
      'JHS 3 Graduation & Valedictory Banquet',
    ],
    foot: '12 Weeks + National BECE Sitting',
    footTone: 'bg-surface-container-high/40 text-primary',
  },
]

function TermCalendar() {
  return (
    <section id="term-calendar" className="w-full bg-surface-container-low py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-secondary">
              Church &amp; School Tradition
            </span>
            <h2 className="mb-3 text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              The Three-Term Academic Calendar
            </h2>
            <p className="text-body-md leading-relaxed text-on-surface-variant">
              Our yearly rhythm is intentionally ordered according to both Ghana Education Service
              benchmarks and timeless Christian celebrations, grounding young minds in prayer,
              scholastic grit, and festive communal worship.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-label-md font-bold text-on-primary shadow transition-colors hover:bg-amber-deep"
            >
              <M className="text-[18px] text-on-primary">download</M>
              <span>Download 2024/2025 Full Calendar (PDF)</span>
            </Link>
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TERMS.map((t) => (
            <StaggerItem
              key={t.name}
              className="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {t.current && (
                <span className="absolute -top-3 left-8 rounded-full bg-secondary-container px-3 py-0.5 text-label-caps font-bold text-on-secondary shadow-sm">
                  Current Term
                </span>
              )}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-surface-container px-3 py-1 text-label-caps uppercase text-primary">
                    {t.tag}
                  </span>
                  <M className="text-[24px] text-secondary-container">{t.icon}</M>
                </div>
                <h3 className="mb-2 text-headline-sm font-semibold text-primary">{t.name}</h3>
                <div className="mb-6 flex items-center gap-2 rounded-lg bg-surface-container-low px-3 py-2 text-label-md text-on-surface-variant">
                  <M className="text-[16px] text-primary">calendar_today</M>
                  <span>{t.dates}</span>
                </div>
                <h4 className="mb-3 text-label-caps font-bold uppercase tracking-wider text-outline">
                  Curriculum Focus &amp; Spiritual Tone
                </h4>
                <p className="mb-6 text-body-sm leading-relaxed text-on-surface-variant">{t.focus}</p>
                <h4 className="mb-3 text-label-caps font-bold uppercase tracking-wider text-outline">
                  Key Milestones &amp; Events
                </h4>
                <ul className="mb-8 space-y-3 text-body-sm text-on-surface">
                  {t.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2.5">
                      <M className="mt-0.5 shrink-0 text-[18px] text-secondary">check_circle</M>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-lg p-3 text-center ${t.footTone}`}>
                <span className="text-label-caps font-bold">{t.foot}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 4 — MAJOR EVENTS THIS TERM (5-card milestone tracker)
------------------------------------------------------------------- */
const EVENTS = [
  {
    icon: 'menu_book',
    chip: 'Week 4 · Academic',
    chipTone: 'bg-secondary-fixed/40 text-on-secondary-fixed',
    title: 'Literacy Day',
    body: 'Book character parade, creative spelling bee, and original story exhibition across all primary grades.',
    date: 'Feb 06, 2025',
  },
  {
    icon: 'how_to_vote',
    chip: 'Week 7 · Leadership',
    chipTone: 'bg-surface-container-high text-primary',
    title: 'Prefect Vetting',
    body: 'Democracy in action: student manifestos, rigorous moral vetting panel, and universal school voting.',
    date: 'Feb 27, 2025',
  },
  {
    icon: 'music_note',
    chip: 'Annual Festival',
    chipTone: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Nine Lessons Carols',
    body: 'Grand orchestral brass choir, scripted nativity plays, Scripture readings, and parental thanksgiving.',
    date: 'Term 1 Climax',
  },
  {
    icon: 'hub',
    chip: 'Week 9 · Innovation',
    chipTone: 'bg-secondary-fixed/40 text-on-secondary-fixed',
    title: 'Science Showcase',
    body: 'Hands-on robotics, hydraulic crane models, local water filtration tests, and software prototypes.',
    date: 'Mar 13, 2025',
  },
  {
    icon: 'trophy',
    chip: 'Inter-House',
    chipTone: 'bg-surface-container-high text-primary',
    title: 'Battle of Brains',
    body: 'Speed mathematics, Ghanaian current affairs, core science problems, and Christian Bible trivia bowl.',
    date: 'Apr 03, 2025',
  },
]

function MajorEvents() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 max-w-3xl">
          <span className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-secondary">
            Ongoing Term Highlights
          </span>
          <h2 className="mb-3 text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Major Events This Term
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Key benchmark dates, student leadership showcases, and vibrant community gatherings
            that shape our pupils into well-rounded disciples and achievers.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {EVENTS.map((e) => (
            <StaggerItem
              key={e.title}
              className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary">
                  <M className="text-[24px]">{e.icon}</M>
                </div>
                <span
                  className={`mb-3 inline-block rounded px-2.5 py-1 text-label-caps font-bold ${e.chipTone}`}
                >
                  {e.chip}
                </span>
                <h3 className="mb-2 text-title-md font-bold text-primary">{e.title}</h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{e.body}</p>
              </div>
              <div className="mt-6 rounded bg-surface-container-low px-3 py-2 text-label-caps font-semibold text-primary">
                {e.date}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 5 — THE ROKA CURRICULUM LADDER (4 progressive stages)
------------------------------------------------------------------- */
const STAGE1_CARDS = [
  {
    icon: 'spellcheck',
    title: 'Early Literacy & Phonics',
    body: 'Jolly Phonics multi-sensory sound recognition, pencil grip modeling, and speech articulation exercises.',
  },
  {
    icon: 'calculate',
    title: 'Early Numeracy & Sorting',
    body: 'Number-shape-color matching, count sequences, size sorting, and elementary spatial perception.',
  },
  {
    icon: 'auto_stories',
    title: 'Rhymes & Bible Stories',
    body: 'Interactive storytelling, gratitude prayers, songs of faith, and moral role-playing in fellowship.',
  },
  {
    icon: 'palette',
    title: 'Creative Arts & Color',
    body: 'Finger painting, clay sculpting, collage assembly, and hand-eye dexterity stimulation.',
  },
  {
    icon: 'sports_gymnastics',
    title: 'Physical Coordination',
    body: 'Guided balance beams, indoor soft obstacle games, rhythm marching, and reflex training.',
  },
  {
    icon: 'table_restaurant',
    title: 'Practical Life & Etiquette',
    body: 'Polite greeting routines, sharing toys, self-feeding hygiene, and gentle independence habits.',
  },
]

const STAGE2_SUBJECTS = [
  'English Reading & Grammar',
  'Mental Mathematics & Ops',
  'Science & Nature Study',
  'Ghanaian Language (Asante Twi)',
  'French Language Basics',
  'Computing & ICT Literacy',
  'Religious & Moral Education (RME)',
  'Creative Arts & Physical Health',
]

const STAGE3_MODULES = [
  { kicker: 'Language', title: 'English Literature', sub: 'Grammar & Composition' },
  { kicker: 'Mathematics', title: 'Applied Mathematics', sub: 'Fractions, Geometry & Data' },
  { kicker: 'Science', title: 'Integrated Science', sub: 'Ecosystems & Matter' },
  { kicker: 'Technology', title: 'Computing & Scratch', sub: 'Block Coding & Office Tools' },
  { kicker: 'Ghanaian Culture', title: 'Asante Twi', sub: 'Oral Traditions & Proverbs' },
  { kicker: 'International', title: 'French Communication', sub: 'Dialogue & Written Syntax' },
  { kicker: 'Civic Life', title: 'Social Studies & RME', sub: 'Governance & Christian Ethics' },
  { kicker: 'Innovation', title: 'Design & Technology', sub: 'Visual Drafting & Craft' },
]

const STAGE4_PANELS = [
  {
    title: 'Core Academic Subjects',
    items: [
      'English Language & Literature',
      'Core Mathematics & Algebra',
      'Integrated Science (Phy/Chem/Bio)',
      'Social Studies & Ghanaian History',
    ],
  },
  {
    title: 'Technical & Modern Languages',
    items: [
      'Computing & Applied Lab IT',
      'Career Technology & Technical Draw',
      'Ghanaian Language & Culture (Twi)',
      'French (Oral Fluency & Dictation)',
    ],
  },
  {
    title: 'Values & Examination Mastery',
    items: [
      'Religious & Moral Education (RME)',
      'Creative Arts & Product Design',
      'Continuous WAEC Mock Drills',
      '1-on-1 Senior High Placement Counseling',
    ],
  },
]

/* Shared header block used by stages 1–3. */
function StageHead({ pill, pillTone, age, title, chipIcon, chip }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 rounded-lg bg-surface-container-low/50 p-6 pb-6 lg:flex-row lg:items-center">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-label-caps font-bold ${pillTone}`}>{pill}</span>
          <span className="text-label-caps uppercase tracking-widest text-outline">{age}</span>
        </div>
        <h3 className="text-headline-md text-primary">{title}</h3>
      </div>
      <div className="inline-flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2 text-label-md font-semibold text-primary">
        <M className="text-[18px]">{chipIcon}</M>
        <span>{chip}</span>
      </div>
    </div>
  )
}

function CurriculumLadder() {
  return (
    <section id="curriculum-ladder" className="w-full bg-surface-container py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-14 max-w-3xl">
          <span className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-secondary">
            Structured Learning Pathways
          </span>
          <h2 className="mb-4 text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
            The Roka Curriculum Ladder
          </h2>
          <p className="text-body-md leading-relaxed text-on-surface-variant">
            Rooted firmly within the rigorous guidelines of the Ghana Education Service (GES) and
            National Council for Curriculum and Assessment (NaCCA), our four progressive stages
            foster emotional maturity, mathematical acuity, and expressive communication.
          </p>
        </div>

        <div className="space-y-8">
          {/* ---- Stage 1 · Crèche & Nursery ---- */}
          <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
            <div className="p-8 lg:p-10">
              <StageHead
                pill="Stage 1"
                pillTone="bg-surface-container-highest text-primary"
                age="Ages 6 Months – 4 Years"
                title="Crèche & Nursery (Foundational Stage)"
                chipIcon="child_care"
                chip="Early Childhood Development"
              />
              <p className="mb-8 max-w-4xl text-body-lg leading-relaxed text-on-surface-variant">
                We focus on warm sensory discovery, phonemic phonics groundwork, fine and gross
                motor dexterity, and tender Christian character cultivation. Children learn by
                touching, singing, building, and exploring in a secure, air-conditioned haven.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {STAGE1_CARDS.map((c) => (
                  <div key={c.title} className="rounded-lg bg-surface-container-low p-5">
                    <div className="mb-2 flex items-center gap-2 text-title-md font-bold text-primary">
                      <M className="text-secondary-container">{c.icon}</M>
                      <h4>{c.title}</h4>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Stage 2 · Lower Primary ---- */}
          <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
            <div className="p-8 lg:p-10">
              <StageHead
                pill="Stage 2"
                pillTone="bg-secondary-fixed text-on-secondary-fixed"
                age="Basic 1 – 3 | Ages 5 – 8 Years"
                title="Lower Primary School"
                chipIcon="menu_book"
                chip="Fluency & Quantitative Literacy"
              />
              <p className="mb-8 max-w-4xl text-body-lg leading-relaxed text-on-surface-variant">
                Transitioning pupils from early exploration to rigorous reading fluency, arithmetic
                computation, and bilingual discovery. Children develop steady study discipline
                alongside rich moral education.
              </p>
              <div className="space-y-4">
                <h4 className="text-label-caps uppercase tracking-wider text-secondary">
                  Core Subjects Prescribed by GES &amp; Roka Standards:
                </h4>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {STAGE2_SUBJECTS.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 rounded-lg bg-surface-container-low p-3.5 text-label-md text-on-surface"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---- Stage 3 · Upper Primary ---- */}
          <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
            <div className="p-8 lg:p-10">
              <StageHead
                pill="Stage 3"
                pillTone="bg-primary-fixed text-primary"
                age="Basic 4 – 6 | Ages 9 – 11 Years"
                title="Upper Primary School"
                chipIcon="terminal"
                chip="Analytical Synthesis & Coding"
              />
              <p className="mb-8 max-w-4xl text-body-lg leading-relaxed text-on-surface-variant">
                At this pivotal juncture, pupils move from rote comprehension to inductive analysis,
                hypothesis testing in science, collaborative project defense, and algorithmic logic
                in our computer lab.
              </p>
              <div className="space-y-4">
                <h4 className="text-label-caps font-bold uppercase tracking-wider text-primary">
                  Core Subjects &amp; Practical Modules:
                </h4>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {STAGE3_MODULES.map((m) => (
                    <div key={m.title} className="rounded-lg bg-surface-container-low p-4">
                      <span className="mb-1 block text-label-caps text-outline">{m.kicker}</span>
                      <span className="block text-label-md font-bold text-primary">{m.title}</span>
                      <span className="text-body-sm text-on-surface-variant">{m.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---- Stage 4 · Junior High School (brand feature card) ---- */}
          <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary shadow-xl">
            <div className="p-8 lg:p-10">
              <div className="mb-6 flex flex-col justify-between gap-4 rounded-lg bg-secondary-container/40 p-6 lg:flex-row lg:items-center">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-secondary-container px-3 py-1 text-label-caps font-bold text-on-secondary">
                      Stage 4 · Capstone
                    </span>
                    <span className="text-label-caps uppercase tracking-widest text-surface-container-high">
                      Basic 7 – 9 (JHS 1 – 3) | Ages 12 – 15 Years
                    </span>
                  </div>
                  <h3 className="text-headline-md text-surface-container-lowest">
                    Junior High School &amp; BECE Certification
                  </h3>
                </div>
                <div className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-surface-container-lowest px-4 py-2 text-label-md font-bold text-primary">
                  <M className="text-[18px] text-secondary">verified</M>
                  <span>100% Grade A Placements</span>
                </div>
              </div>

              <p className="mb-8 max-w-4xl text-body-lg leading-relaxed text-surface-container-high">
                Our Junior High department is a proven engine of academic excellence, preparing
                young adolescents to ace the Basic Education Certificate Examination (BECE)
                administered by the West African Examinations Council (WAEC), securing admissions
                into prestigious Ghanaian Senior High Schools (Achimota, Presec Legon, Wesley Girls,
                Prempeh College, and Mfantsipim).
              </p>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {STAGE4_PANELS.map((p) => (
                  <div key={p.title} className="rounded-lg bg-secondary-container/30 p-5">
                    <h4 className="mb-2 text-title-md font-bold text-secondary-fixed">{p.title}</h4>
                    <ul className="space-y-1.5 text-body-sm text-surface-container-high">
                      {p.items.map((i) => (
                        <li key={i}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-secondary-container p-5 sm:flex-row">
                <div className="flex items-center gap-3">
                  <M className="shrink-0 text-[28px] text-primary-fixed">school</M>
                  <div>
                    <span className="block text-title-md font-bold text-primary-fixed">
                      Looking to enroll into JHS 1 or transfer into JHS 2?
                    </span>
                    <span className="block text-body-sm text-secondary-fixed">
                      Admissions testing and transcript evaluations are held bi-weekly on campus.
                    </span>
                  </div>
                </div>
                <Link
                  to="/admission/apply"
                  className="shrink-0 rounded-lg bg-gold px-6 py-2.5 text-label-md font-bold text-amber-deep shadow transition-colors hover:bg-gold-hover focus-visible:outline-none"
                >
                  Apply for JHS Intake
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 6 — HOLISTIC SUPPORT BEYOND TEXTBOOKS
   Three support pillars + a national exam readiness checklist.
------------------------------------------------------------------- */
const SUPPORT = [
  {
    icon: 'support_agent',
    tone: 'text-primary',
    title: 'Personalized Remedial Clinics',
    body: 'Afternoon one-on-one sessions for learners needing additional guidance in core numeracy and phonics.',
  },
  {
    icon: 'auto_stories',
    tone: 'text-secondary',
    title: 'Christian Scripture & Ethics',
    body: 'Morning devotions, memory verse recitations, and values that teach honesty, diligence, and respect.',
  },
  {
    icon: 'devices',
    tone: 'text-primary',
    title: 'Computer Lab Practical Time',
    body: 'Every student gets guaranteed individual workstation access each week to develop keyboarding and research competence.',
  },
]

const CHECKLIST = [
  { label: 'Ghana Education Service (GES) Basic Syllabus', tag: '100% Compliant', tone: 'bg-secondary-fixed/40 text-on-secondary-fixed' },
  { label: 'National Council for Curriculum & Assessment (NaCCA) Alignment', tag: 'Certified Standard', tone: 'bg-secondary-fixed/40 text-on-secondary-fixed' },
  { label: 'WAEC BECE Historical Pass Rate', tag: '100% First-Class', tone: 'bg-primary text-on-primary' },
  { label: 'Foreign Language Competency (French Oral & Written)', tag: 'Basic 1 to JHS 3', tone: 'bg-secondary-fixed/40 text-on-secondary-fixed' },
  { label: 'Parent Portal Online Term Grade Sheets & Diagnostics', tag: 'Updated Weekly', tone: 'bg-secondary-fixed/40 text-on-secondary-fixed' },
]

function HolisticSupport() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-secondary">
              Scholastic Excellence
            </span>
            <h2 className="mb-5 text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
              Holistic Support Beyond Textbooks
            </h2>
            <p className="mb-6 text-body-md leading-relaxed text-on-surface-variant">
              At Roka, academic achievement is not left to chance. Every child is guided by
              qualified teachers who undergo periodic GES pedagogical refresher training and
              spiritual retreat days.
            </p>

            <div className="space-y-4">
              {SUPPORT.map((s) => (
                <div key={s.title} className="flex items-start gap-4 rounded-xl bg-surface-container-low p-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container ${s.tone}`}
                  >
                    <M className="text-[22px]">{s.icon}</M>
                  </div>
                  <div>
                    <h3 className="text-title-md font-bold text-primary">{s.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-surface-container-low p-8 shadow-sm lg:col-span-7 lg:p-10">
            <div className="mb-6 flex items-center justify-between rounded-lg bg-surface-container-lowest p-4 pb-4">
              <div>
                <span className="block text-label-caps font-bold uppercase tracking-wider text-secondary">
                  Curriculum Benchmark
                </span>
                <h3 className="text-title-md font-bold text-primary">National Exam Readiness Checklist</h3>
              </div>
              <M className="text-[28px] text-primary">assignment_turned_in</M>
            </div>

            <div className="space-y-4 text-body-sm text-on-surface">
              {CHECKLIST.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface-container-lowest p-4"
                >
                  <span className="min-w-0 font-semibold text-primary">{c.label}</span>
                  <span className={`shrink-0 rounded px-3 py-1 text-label-caps font-bold ${c.tone}`}>
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Section 7 — ACADEMIC INQUIRIES CTA BAND
------------------------------------------------------------------- */
function CtaBand() {
  const telHref = `tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`

  return (
    <section className="w-full bg-primary py-16 text-on-primary lg:py-20">
      <div className="container-page text-center">
        <div className="mx-auto max-w-3xl">
          <span className="mb-3 block text-label-caps font-bold uppercase tracking-widest text-secondary-fixed">
            Admissions &amp; Curriculum Counseling
          </span>
          <h2 className="mb-5 text-headline-lg-mobile font-bold tracking-tight text-surface-container-lowest md:text-[2rem] md:leading-tight lg:text-headline-lg">
            Have Questions Regarding Curriculum or Admissions?
          </h2>
          <p className="mb-10 text-body-lg leading-relaxed text-surface-container-high">
            Our Academic Dean and Admissions Officers in Amasaman are ready to walk you through our
            syllabus, classroom arrangements, and prospective entrance assessments for your child.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/admission/apply"
              className="btn btn-primary w-full sm:w-auto"
            >
              <M className="text-[20px] text-secondary-fixed">edit_calendar</M>
              <span>Schedule an Academic Consultation</span>
            </Link>
            <a href={telHref} className="btn btn-outline-light w-full sm:w-auto">
              <M className="text-[20px]">call</M>
              <span>Call {CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Academics() {
  return (
    <main>
      <AcademicHero />
      <Immersion />
      <TermCalendar />
      <MajorEvents />
      <CurriculumLadder />
      <HolisticSupport />
      <CtaBand />
    </main>
  )
}
