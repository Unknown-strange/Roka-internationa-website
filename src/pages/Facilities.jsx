import { Link } from 'react-router-dom'
import { StaggerGroup, StaggerItem } from '../components/motion'
import { CONTACT } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* Shared section heading: eyebrow pill + headline + optional lead copy. */
function SectionHead({ eyebrow, icon, tone, title, lead, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} space-y-3 ${className}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-label-caps font-bold uppercase tracking-wider ${tone}`}
      >
        <M className="text-[15px]">{icon}</M>
        <span>{eyebrow}</span>
      </span>
      <h2 className="text-headline-lg-mobile font-bold tracking-tight text-primary md:text-[2rem] md:leading-tight lg:text-headline-lg">
        {title}
      </h2>
      <p className="text-body-md leading-relaxed text-on-surface-variant">{lead}</p>
    </div>
  )
}

/* Four-up supporting feature cards. */
function FeatureGrid({ items, cardTone, iconTone = 'text-secondary', gap = 'gap-4', className = '' }) {
  return (
    <StaggerGroup
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gap} ${className}`}
    >
      {items.map((f) => (
        <StaggerItem
          key={f.title}
          className={`space-y-2 rounded-xl ${cardTone} p-5 shadow-sm`}
        >
          <M className={`text-[24px] ${iconTone}`}>{f.icon}</M>
          <h3 className="text-title-md font-bold text-primary">{f.title}</h3>
          <p className="text-body-sm text-on-surface-variant">{f.body}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  )
}

/* Two-up photo cards with a gold scrim and caption stack. */
function Gallery({ photos }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {photos.map((p) => (
        <div
          key={p.title}
          className="group relative h-[320px] overflow-hidden rounded-2xl shadow-md lg:h-[400px]"
        >
          <img
            src={p.src}
            alt={p.alt}
            width="720"
            height="400"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:duration-0"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/65 to-transparent"
          />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="mb-1 inline-block rounded-full bg-secondary-container px-3.5 py-1 text-label-caps font-bold uppercase tracking-wider text-on-secondary shadow-sm">
              {p.tag}
            </span>
            <h3 className="text-title-md font-bold text-surface-container-lowest">{p.title}</h3>
            <p className="text-body-sm text-surface-container-high">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------
   PAGE HEADER & HERO
------------------------------------------------------------------- */
const HERO_PILLS = [
  { icon: 'school', label: '15+ Dedicated Learning Zones' },
  { icon: 'ac_unit', label: 'Fully Air-Conditioned Suites' },
  { icon: 'verified_user', label: 'Strict 24/7 Gated Security' },
]

function FacilitiesHero() {
  return (
    <section className="w-full bg-surface-container-lowest pb-16">
      <div className="container-page pt-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <li>
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-primary">
                <M className="text-[16px]">home</M>
                <span>Home</span>
              </Link>
            </li>
            <li className="text-outline" aria-hidden="true">
              /
            </li>
            <li className="font-bold text-primary" aria-current="page">
              Facilities
            </li>
          </ol>
        </nav>

        <div className="mb-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3.5 py-1.5 text-label-caps uppercase tracking-widest text-on-primary-container">
              <M className="text-[15px] text-secondary">domain</M>
              <span>Purpose-Built Learning Infrastructure • Amasaman, Accra</span>
            </div>
            <h1 className="text-headline-lg-mobile font-extrabold tracking-tight text-primary md:text-[2.5rem] md:leading-tight lg:text-display-hero">
              World-Class Campus Facilities Built for Scholarly &amp; Moral Excellence
            </h1>
          </div>

          <div className="flex flex-col justify-between lg:col-span-4">
            <p className="mb-6 text-body-md leading-relaxed text-on-surface-variant">
              Nestled in a serene, purpose-designed educational compound in Amasaman, Greater Accra,
              Roka International School pairs disciplined Christian nurture with state-of-the-art
              educational spaces. From high-throughput computer and science labs to modern boarding
              houses and safe daily shuttle routes, our physical grounds inspire curiosity and
              focused learning.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#schedule-tour"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-6 py-3 text-label-lg font-bold text-on-secondary shadow-sm transition-all hover:bg-secondary"
              >
                <M className="text-[18px]">calendar_month</M>
                <span>Book a Campus Tour</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container px-5 py-3 text-label-lg font-semibold text-primary transition-colors hover:bg-surface-container-high"
              >
                <M className="text-[18px]">download</M>
                <span>Download Facilities Guide (PDF)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Campus exterior hero image card */}
        <div className="group relative w-full overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/campus.jpg"
            alt="Modern educational school campus exterior of an international school in Amasaman, Accra, Ghana"
            width="1280"
            height="540"
            className="h-[400px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:duration-0 lg:h-[540px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-transparent"
          />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl space-y-2">
              <span className="inline-block rounded-full bg-secondary/90 px-3 py-1 text-label-caps uppercase tracking-wider text-on-secondary backdrop-blur-sm">
                Primary &amp; Junior High Campus
              </span>
              <p className="text-title-md font-semibold text-surface-container-lowest">
                A Secure, Serene Sanctuary Designed to Inspire Everyday Intellectual Growth
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {HERO_PILLS.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-xl bg-surface-container-lowest/90 px-4 py-2 text-label-md font-bold text-primary shadow-sm backdrop-blur-md"
                >
                  <M className="text-[18px] text-secondary">{p.icon}</M>
                  <span>{p.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 1 — RESIDENTIAL BOARDING HOUSES
------------------------------------------------------------------- */
const BOARDING_FEATURES = [
  { icon: 'hvac', title: 'Air-Conditioned Dorms', body: 'Individual lockers & comfortable bunks' },
  {
    icon: 'medical_services',
    title: 'Resident Nurse 24/7',
    body: 'On-call clinical station on grounds',
  },
  {
    icon: 'menu_book',
    title: 'Supervised Prep Hours',
    body: 'Evening quiet study with tutors',
  },
  {
    icon: 'restaurant',
    title: 'Dietician-Approved Dining',
    body: '3 hot, wholesome daily meals',
  },
]

const BOARDING_PHOTOS = [
  {
    src: '/images/dormitory.jpg',
    alt: 'Modern, comfortable school boarding house dormitory bedroom for boys and girls',
    tag: 'Accommodations',
    title: 'Modern Air-Conditioned Dormitories',
    text: 'Individual storage lockers, ergonomic bedding, and dedicated house-parent suites.',
  },
  {
    src: '/images/dining.jpg',
    alt: 'Peaceful boarding school dining and recreation hall',
    tag: 'Dining & Fellowship',
    title: 'Wholesome Pastoral Dining & Common Room',
    text: 'Communal dining hall serving fresh Ghanaian and continental balanced nutrition daily.',
  },
]

function BoardingHouses() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Safe & Nurturing Home Away From Home"
            icon="night_shelter"
            tone="bg-secondary-fixed/50 text-on-secondary-fixed"
            title="Residential Boarding Houses"
            lead="Wholesome residential life designed for focused study, spiritual devotions, and social maturity. Segregated, air-conditioned boys' and girls' wings supervised 24/7 by dedicated resident housemasters and matrons. Includes structured evening prep, comfortable sleeping quarters, and nutritious dietician-approved dining."
          />

          <div className="w-full max-w-md shrink-0 rounded-2xl border-l-4 border-secondary bg-surface-container-lowest p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-3 text-secondary">
              <M className="text-[24px]">schedule</M>
              <span className="text-title-md font-bold text-primary">Boarding Visiting Hours</span>
            </div>
            <p className="mb-2 text-body-sm font-semibold text-on-surface">
              Saturday: 2:00 PM – 4:00 PM
              <br />
              Sunday: 3:00 PM – 4:00 PM
            </p>
            <div className="flex items-start gap-2 rounded-lg bg-surface-container-low p-3 text-label-md text-on-surface-variant">
              <M className="mt-0.5 shrink-0 text-[16px] text-secondary">info</M>
              <span>
                Notice: Parents and certified guardians must sign in at the campus security lodge
                with valid national identification.
              </span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <FeatureGrid items={BOARDING_FEATURES} cardTone="bg-surface-container-lowest" />
        </div>

        <Gallery photos={BOARDING_PHOTOS} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 2 — SCHOOL BUS SHUTTLES & LOGISTICS
------------------------------------------------------------------- */
const TRANSPORT_FEATURES = [
  {
    icon: 'commute',
    title: 'Comprehensive 6-Bus Fleet',
    body: 'Fully owned, consistently maintained institution fleet in high-visibility livery.',
  },
  {
    icon: 'airline_seat_recline_extra',
    title: 'Certified Bus Chaperones',
    body: 'Attendants ensure seatbelt compliance, orderly boarding, and parent handovers.',
  },
  {
    icon: 'alt_route',
    title: 'Zoned Transit Corridors',
    body: 'Optimized morning and afternoon routes to reduce student travel fatigue.',
  },
  {
    icon: 'health_and_safety',
    title: 'First-Aid Equipped',
    body: 'Every vehicle carries emergency kits, fire equipment, and direct radio dispatch.',
  },
]

const ROUTES = ['Satellite Junction', 'Pokuase Interchange', 'Amasaman Township']

const TRANSPORT_PHOTOS = [
  {
    src: '/images/bus-fleet.jpg',
    alt: 'Fleet of school shuttle buses parked on the paved driveway of the Roka International School campus',
    tag: 'Transit Logistics',
    title: '6-Bus Punctual Transport Fleet',
    text: 'Air-conditioned commuter safety covering Ga West & Greater Accra residential zones.',
  },
  {
    src: '/images/campus.jpg',
    alt: 'Secure gated pick-up and drop-off bays at the Roka International School campus',
    tag: 'Access Architecture',
    title: 'Secure Gated Pick-Up & Drop-Off Bays',
    text: 'Paved internal loop driveway ensuring no student walks across open motor traffic.',
  },
]

function ShuttleServices() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="container-page">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="Monitored Student Logistics"
              icon="directions_bus"
              tone="bg-surface-container text-on-primary-container"
              title="Safe Fleet & Shuttle Services"
              lead="Reliable, punctual door-to-hub student transportation serving families across Amasaman, Pokuase, Satellite, Medie, ACP Junction, and surrounding corridors. All vehicles undergo daily mechanical safety checks, speed governance, and real-time route monitoring."
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-primary p-7 text-on-primary shadow-lg lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-secondary-container/15"
            />
            <div className="mb-3 flex items-center gap-2.5 text-secondary-fixed">
              <M className="text-[26px]">airport_shuttle</M>
              <span className="text-label-caps font-bold uppercase tracking-wider">
                Key Transport Metric
              </span>
            </div>
            <h3 className="mb-2 text-headline-md font-bold text-surface-container-lowest">
              Dedicated 6-Bus Fleet Serving Greater Accra
            </h3>
            <p className="mb-4 text-body-sm leading-relaxed text-surface-container-high">
              Modern, air-conditioned yellow and royal blue buses operated by vetted professional
              drivers and trained bus chaperones on every trip.
            </p>
            <div className="flex flex-wrap gap-2 text-label-md">
              {ROUTES.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-1 rounded bg-secondary-container px-2.5 py-1 text-on-secondary"
                >
                  <M className="text-[14px] text-secondary-fixed">check_circle</M>
                  <span>{r}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <FeatureGrid
            items={TRANSPORT_FEATURES}
            cardTone="bg-surface-container-low"
            gap="gap-6"
          />
        </div>

        <Gallery photos={TRANSPORT_PHOTOS} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 3 — COMPUTER & SCIENCE LABS
------------------------------------------------------------------- */
const LAB_FEATURES = [
  {
    icon: 'terminal',
    title: 'Individual Terminals',
    body: 'High-speed filtered broadband with localized student firewall protections.',
  },
  {
    icon: 'science',
    title: 'Specialized Wet Benches',
    body: 'Safe chemical handling sinks, gas points, and safety eye-wash units.',
  },
  {
    icon: 'co_present',
    title: 'Interactive Smart Boards',
    body: 'Digital projection systems delivering live interactive 3D simulations.',
  },
  {
    icon: 'precision_manufacturing',
    title: '1:1 Apparatus Access',
    body: 'Individual microscopes and glassware sets for practical BECE exam mastery.',
  },
]

const LAB_PHOTOS = [
  {
    src: '/images/science-lab.jpg',
    alt: 'School science laboratory with pupils using microscopes and test tubes on laboratory benches',
    tag: 'Scientific Inquiry',
    title: 'Advanced Experimental Science Lab',
    text: 'Full laboratory equipment enabling hands-on experiments across Integrated Science syllabi.',
  },
  {
    src: '/images/lab.jpg',
    alt: 'Students working on desktop monitors in a school ICT laboratory',
    tag: 'Coding & Computing',
    title: 'Full-Station Digital ICT Suite',
    text: 'Individual computer terminals running modern computing, coding, and office literacy packages.',
  },
]

function ScienceLabs() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="container-page">
        <SectionHead
          className="mb-12"
          eyebrow="Hands-on STEM & Digital Discovery"
          icon="biotech"
          tone="bg-surface-container-highest text-primary"
          title="Modern Computer & Science Laboratories"
          lead="Theory meets active experimentation. Our dedicated science and ICT laboratories provide every pupil with practical, experiential learning. Students engage with physics, chemistry, biology apparatus, and dual-boot networked computer terminals running Scratch, Python, and GES-standard ICT curricula."
        />

        <div className="mb-10">
          <FeatureGrid items={LAB_FEATURES} cardTone="bg-surface-container-lowest" />
        </div>

        <Gallery photos={LAB_PHOTOS} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 4 — LIBRARY & RESOURCE CENTER
------------------------------------------------------------------- */
const LIBRARY_FEATURES = [
  {
    icon: 'collections_bookmark',
    title: 'Curated Collections',
    body: 'Early readers, African fiction, Cambridge references, and encyclopedia sets.',
  },
  {
    icon: 'tablet_mac',
    title: 'E-Reader & Tablet Pods',
    body: 'Digital media access for supervised research and interactive audiobook listening.',
  },
  {
    icon: 'groups',
    title: 'Guided Reading Circles',
    body: 'Weekly literacy development clubs led by certified childhood reading mentors.',
  },
  {
    icon: 'chair',
    title: 'Quiet Revision Carrels',
    body: 'Distraction-free private study cubicles for Primary & JHS examination prep.',
  },
]

const LIBRARY_PHOTOS = [
  {
    src: '/images/library.jpg',
    alt: 'Modern, vibrant school library and media learning resource centre',
    tag: 'Literacy Haven',
    title: 'Sunlit Multi-Level Media Library & Reading Pods',
    text: 'Comfortable beanbags, wooden oak stacks, and silent reading zones designed for all age grades.',
  },
  {
    src: '/images/classroom.jpg',
    alt: 'Students in school uniforms sitting at desks in a bright, modern classroom',
    tag: 'Academic Engagement',
    title: 'Collaborative Learning & Literature Studies',
    text: 'Engaged classrooms supporting open inquiry, interactive group work, and vocal participation.',
  },
]

function LibraryCenter() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="container-page">
        <SectionHead
          className="mb-12"
          eyebrow="Vibrant Knowledge & Media Haven"
          icon="local_library"
          tone="bg-surface-container text-on-primary-container"
          title="Modern Library & Media Learning Center"
          lead="A sunlit, two-story learning sanctuary housing thousands of cataloged physical volumes, Ghanaian and African literature, encyclopedia sets, and digital tablet research stations. Designed with cozy reading pods, group discussion tables, and tranquil study corners to cultivate lifelong reading habits."
        />

        <div className="mb-10">
          <FeatureGrid items={LIBRARY_FEATURES} cardTone="bg-surface-container-low" />
        </div>

        <Gallery photos={LIBRARY_PHOTOS} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 5 — CAMPUS SAFETY & MAINTENANCE STANDARDS
------------------------------------------------------------------- */
const STANDARDS = [
  {
    icon: 'videocam',
    title: '24/7 Security & CCTV Perimeter',
    body: 'Manned security lodge with strict visitor verification, biometric logging, perimeter walling, and round-the-clock IP camera coverage.',
    note: 'Always Manned',
  },
  {
    icon: 'power',
    title: 'Treated Water & Standby Generator',
    body: 'Multi-stage borehole purification plants paired with automated diesel generator backup guarantees zero disruption to classroom activities.',
    note: '100% Redundancy',
  },
  {
    icon: 'healing',
    title: 'On-Site Clinic & Nursing Sister',
    body: 'Fully stocked campus infirmary managed by a licensed resident nurse for immediate first-aid, routine checks, and rapid specialist referral.',
    note: 'Medical Care On Grounds',
  },
  {
    icon: 'sanitizer',
    title: 'Hygienic Catering & Sanitation',
    body: 'Strict FDA and GES environmental health standards. Continuous cleaning schedules, clean washrooms, and food safety handler licensing.',
    note: 'Daily Audited Cleanliness',
  },
]

function CampusStandards() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="container-page">
        <SectionHead
          className="mb-14"
          align="center"
          eyebrow="Health, Safety & Institutional Duty of Care"
          icon="security"
          tone="bg-surface-container text-primary"
          title="Institutional Campus Standards"
          lead="We maintain an uncompromising culture of safety, physical reliability, and spotless environmental hygiene so learners and educators focus exclusively on scholarly achievement."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((s) => (
            <StaggerItem
              key={s.title}
              className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                  <M className="text-[26px]">{s.icon}</M>
                </div>
                <h3 className="mb-2 text-title-md font-bold text-primary">{s.title}</h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{s.body}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-surface-container pt-4 text-label-md font-semibold text-primary">
                <M className="text-[16px] text-secondary">verified</M>
                <span>{s.note}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   SECTION 6 — HIGH-IMPACT CALL TO ACTION STRIP
------------------------------------------------------------------- */
function CtaBand() {
  return (
    <section
      id="schedule-tour"
      className="relative w-full overflow-hidden bg-primary py-20 text-on-primary"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary-container/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary-container/15 blur-3xl"
      />

      <div className="container-page relative z-10">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-label-caps font-bold uppercase tracking-wider text-secondary-fixed">
              <M className="text-[15px]">meeting_room</M>
              <span>Open Doors for Prospective Families</span>
            </span>
            <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-surface-container-lowest md:text-[2.5rem] md:leading-tight lg:text-display-hero">
              Experience Our Amasaman Campus in Person
            </h2>
            <p className="text-body-lg leading-relaxed text-surface-container-high">
              We invite prospective parents and guardians to tour our grounds, meet our housemasters
              and faculty, and inspect our learning facilities. Feel the vibrant, disciplined, and
              loving Christian environment where your child will thrive.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-body-sm text-surface-container-high lg:justify-start">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-secondary-fixed"
              >
                <M className="text-[18px] text-secondary-fixed">call</M>
                <span>
                  {CONTACT.phone} / {CONTACT.phoneAlt}
                </span>
              </a>
              <span className="text-secondary-container" aria-hidden="true">
                •
              </span>
              <a
                href="mailto:admissions@roka.edu.gh"
                className="flex items-center gap-2 transition-colors hover:text-secondary-fixed"
              >
                <M className="text-[18px] text-secondary-fixed">mail</M>
                <span>admissions@roka.edu.gh</span>
              </a>
            </div>
          </div>

          {/* Action card */}
          <div className="w-full max-w-md shrink-0 space-y-4 rounded-2xl bg-secondary-container p-8 text-center shadow-2xl lg:text-left">
            <div className="space-y-1">
              <h3 className="text-title-md font-bold text-surface-container-lowest">
                Bookings &amp; Inquiries
              </h3>
              <p className="text-body-sm text-surface-container-high">
                Select an option below to plan your family visit.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <Link
                to="/admission/open-day"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-label-lg font-bold text-secondary shadow-md transition-transform active:scale-[0.98]"
              >
                <M className="text-[20px]">calendar_today</M>
                <span>Schedule a Guided Campus Tour</span>
              </Link>
              <Link
                to="/admission/prospectus"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-lowest/10 px-6 py-3.5 text-label-lg font-semibold text-surface-container-lowest transition-colors hover:bg-surface-container-lowest/20"
              >
                <M className="text-[20px]">description</M>
                <span>Download Full Prospectus (PDF)</span>
              </Link>
            </div>
            <p className="pt-2 text-center text-label-caps tracking-wider text-surface-container-high">
              Campus Office Open Mon – Fri: 7:30 AM – 4:30 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Facilities() {
  return (
    <main>
      <FacilitiesHero />
      <BoardingHouses />
      <ShuttleServices />
      <ScienceLabs />
      <LibraryCenter />
      <CampusStandards />
      <CtaBand />
    </main>
  )
}
