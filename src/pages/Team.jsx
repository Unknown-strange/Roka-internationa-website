import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StaggerGroup, StaggerItem } from '../components/motion'
import { CONTACT } from '../data/site'

/* Material Symbol — matches the Stitch export exactly. */
const M = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {children}
  </span>
)

/* ------------------------------------------------------------------
   BREADCRUMB & ACADEMIC REGISTRY STRIP
------------------------------------------------------------------- */
function BreadcrumbBar() {
  return (
    <section className="w-full bg-surface-container-low px-6 py-4 lg:px-12">
      <div className="container-page flex flex-wrap items-center justify-between gap-3 text-body-sm text-on-surface-variant">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <Link className="transition-colors hover:text-primary" to="/">
            Home
          </Link>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <Link className="transition-colors hover:text-primary" to="/about">
            About Us
          </Link>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <span className="font-semibold text-primary" aria-current="page">
            Staff &amp; Faculty
          </span>
        </nav>
        <p className="flex items-center gap-2 text-label-md font-semibold text-primary">
          <span
            className="inline-block h-2 w-2 rounded-full bg-primary-container"
            aria-hidden="true"
          />
          <span>2024/2025 Academic Staff Registry • Amasaman Campus</span>
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   EDITORIAL PAGE INTRO + QUICK METRICS RIBBON
------------------------------------------------------------------- */
const METRICS = [
  {
    icon: 'school',
    title: '100% Certified',
    body: 'Accredited GES & NaCCA Educators',
    tone: 'bg-secondary-container text-on-secondary',
  },
  {
    icon: 'groups',
    title: '18:1 Ratio',
    body: 'Strict Learner-to-Teacher Balance',
    tone: 'bg-primary-container text-on-primary-fixed',
  },
  {
    icon: 'model_training',
    title: 'Continuous Dev.',
    body: 'Termly STEM & Pedagogy Clinics',
    tone: 'bg-secondary-container text-on-secondary',
  },
  {
    icon: 'church',
    title: 'Pastoral Care',
    body: 'Grounded in Christian Mentorship',
    tone: 'bg-surface-container-highest text-primary',
  },
]

function PageIntro() {
  return (
    <section className="w-full bg-surface-container-lowest px-6 py-12 lg:py-16">
      <div className="container-page">
        <div className="max-w-4xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-label-caps font-bold uppercase tracking-wider text-primary">
            <M className="text-[16px]">verified_user</M>
            <span>Christian Educators &amp; Dedicated Mentors • Amasaman, Accra</span>
          </p>
          <h1 className="text-headline-lg-mobile font-bold tracking-tight text-primary md:text-headline-lg">
            The Dedicated Educators Guiding Every Learner to Excellence
          </h1>
          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            At Roka International School, our faculty unites certified GES educators, dedicated
            pastoral mentors, and compassionate support professionals committed to nurturing academic
            distinction, moral fortitude, and Christian character. We operate as a unified body,
            ensuring no child is an afterthought.
          </p>
        </div>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <StaggerItem
              key={m.title}
              className="flex items-start gap-4 rounded-xl bg-surface-container-low p-5 shadow-sm"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${m.tone}`}
                aria-hidden="true"
              >
                <M className="text-[24px]">{m.icon}</M>
              </span>
              <span>
                <span className="block text-title-md font-bold text-primary">{m.title}</span>
                <span className="block text-body-sm text-on-surface-variant">{m.body}</span>
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   STAFF GROUP COLLECTIVE SHOWCASE
------------------------------------------------------------------- */
function CollectiveShowcase() {
  return (
    <section className="w-full bg-surface-container px-6 py-12 lg:py-16">
      <div className="container-page">
        <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-md">
          <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-12">
            <figure className="relative lg:col-span-8">
              <img
                src="/images/faculty.jpg"
                alt="Roka International School staff assembly gathered at the Amasaman campus"
                width="1120"
                height="460"
                loading="lazy"
                decoding="async"
                className="h-[380px] w-full object-cover lg:h-[460px]"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-lg bg-secondary/90 p-3 text-body-sm text-on-secondary backdrop-blur-md">
                <M className="shrink-0 text-[20px] text-primary-container">groups</M>
                <span>
                  Our vibrant faculty and academic leadership assembly at the Amasaman campus
                  grounds.
                </span>
              </figcaption>
            </figure>

            <div className="space-y-6 p-8 lg:col-span-4 lg:p-10">
              <p className="inline-flex rounded-full bg-primary-container/20 px-3 py-1 text-label-caps font-bold uppercase text-primary">
                Collective Excellence
              </p>
              <h2 className="text-headline-sm font-semibold text-primary">
                One Unified Team, One Common Mission
              </h2>
              <p className="text-body-md leading-relaxed text-on-surface-variant">
                We reject the hero-educator myth in favor of a synchronized, collegial standard.
                Every classroom teacher, lab technician, chaplain, and support personnel works
                alongside our leadership to cultivate curious minds and humble hearts.
              </p>

              <div className="space-y-2 rounded-xl bg-surface-container-low p-4">
                <p className="flex items-center gap-2 text-title-md font-bold text-primary">
                  <M className="text-[20px]">handshake</M>
                  <span>Team Philosophy</span>
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  Collaborative, Christ-centered teaching philosophy ensuring every child is seen,
                  supported, and appropriately challenged.
                </p>
              </div>

              <dl className="flex items-start gap-6 pt-2 text-body-sm text-on-surface-variant">
                <div>
                  <dt className="sr-only">Total staff members</dt>
                  <dd>
                    <span className="block text-headline-sm font-bold text-primary">42</span>
                    <span>Total Staff Members</span>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Staff child-protection vetted</dt>
                  <dd>
                    <span className="block text-headline-sm font-bold text-secondary">100%</span>
                    <span>Child-Protection Vetted</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   FACULTY REGISTRY — 5 DEPARTMENTS
------------------------------------------------------------------- */
const LEADERSHIP = [
  {
    ini: 'KM',
    big: true,
    tag: 'Institutional Direction',
    name: 'Kwame Mensah',
    role: 'Head of School',
    bio: 'M.Ed, B.Ed (Curriculum Studies). 16+ years pioneering GES Christian basic education across the Greater Accra region.',
    left: 'GES Licensed',
    icon: 'verified',
    mail: 'kmensah@roka.edu.gh',
  },
  {
    ini: 'GA',
    big: true,
    tag: 'Examinations & Quality',
    name: 'Grace Addo-Kufuor',
    role: 'Academic Dean',
    bio: 'M.Sc (Educational Measurement), B.Sc. Oversees BECE performance diagnostics, termly assessment rubrics, and pedagogy audits.',
    left: 'BECE Lead',
    icon: 'analytics',
    mail: 'gaddokufuor@roka.edu.gh',
  },
  {
    ini: 'EO',
    big: true,
    tag: 'Spiritual Care',
    name: 'Rev. Emmanuel Osei-Bonsu',
    role: 'Head Chaplain & Pastoral Lead',
    bio: 'B.Th, Post-Grad Dip. Counseling. Coordinates learner spiritual wellness, morning chapel liturgies, and family moral counseling.',
    left: 'Pastoral Desk',
    icon: 'favorite',
    mail: 'pastoral@roka.edu.gh',
  },
  {
    ini: 'AS',
    big: true,
    tag: 'Operations & Bursary',
    name: 'Abena Serwaa Boateng',
    role: 'Administrator & Bursar',
    bio: 'CA Ghana, MBA. Leads administrative operations, student admissions clearing, institutional welfare, and campus resource flow.',
    left: 'Administration',
    icon: 'account_balance',
    mail: 'admin@roka.edu.gh',
  },
]

const EARLY = [
  {
    ini: 'CO',
    tag: 'Crèche Lead',
    name: 'Comfort Owusu',
    role: 'Early Literacy & Sensory Play Facilitator',
    bio: 'Cert. Jolly Phonics, Dip. Early Childhood Education. Focuses on psychomotor enrichment and sensory speech exploration.',
    left: 'Room: Nursery Gold',
    right: '8+ Yrs Exp',
  },
  {
    ini: 'DT',
    tag: 'Kindergarten Stage',
    name: 'Doris Tetteh',
    role: 'KG Coordinator & Numeracy Specialist',
    bio: 'B.Ed (Early Childhood). Oversees KG1 & KG2 curriculum transitions, foundational math logic, and expressive arts.',
    left: 'Room: KG Hall A',
    right: '11+ Yrs Exp',
  },
  {
    ini: 'MM',
    tag: 'Support & Welfare',
    name: 'Mercy Mensah',
    role: 'Early Years Assistant & Care Lead',
    bio: 'Trained in pediatric first-aid, hygienic meal management, and social-emotional reassurance for toddler day-care learners.',
    left: 'Room: Infant Suite',
    right: '6+ Yrs Exp',
  },
]

const PRIMARY = [
  {
    ini: 'SG',
    tag: 'Lower Primary',
    name: 'Samuel Gyasi',
    role: 'Numeracy & Reading Mentor',
    bio: 'B.Ed Basic Education (Winneba). Expert in concrete-pictorial-abstract mathematics and individualized remedial reading.',
    left: 'Basic 1–3 Lead',
    right: 'GES Licensed',
  },
  {
    ini: 'PA',
    tag: 'Upper Primary',
    name: 'Patricia Asare',
    role: 'Science & Environment Specialist',
    bio: 'B.Sc Environmental Science, Post-Grad Dip. Ed. Directs hands-on nature discovery, campus recycling, and science club.',
    left: 'Basic 4–6 Lead',
    right: 'Science Lead',
  },
  {
    ini: 'KP',
    tag: 'Languages & Culture',
    name: 'Kofi Poku',
    role: 'Ghanaian Language (Twi) & Heritage',
    bio: 'B.A. Akan Studies (UCC). Cultivates mastery of mother-tongue linguistics, traditional oral storytelling, and cultural ethics.',
    left: 'All Primary Grades',
    right: 'Culture Desk',
  },
  {
    ini: 'JK',
    tag: 'Modern Foreign Lang.',
    name: 'Jean-Paul Koffi',
    role: 'French Language Facilitator',
    bio: 'M.A. FLE (French as Foreign Language). Immersive communicative methods, French dialogue drills, and West African bilingual literacy.',
    left: 'Basic 1–6 & Club',
    right: 'DELF Prim',
  },
]

const JHS = [
  {
    ini: 'IA',
    tag: 'Pure & Applied Math',
    name: 'Isaac Adjei',
    role: 'JHS Mathematics Master',
    bio: 'B.Sc Mathematics Education. Specializes in algebra, spatial geometry, and BECE quantitative prep with a 98% grade 1 record.',
    left: 'JHS 1–3',
    right: '14+ Yrs Exp',
  },
  {
    ini: 'SG',
    tag: 'Integrated Science',
    name: 'Dr. Selasi Gbadegbe',
    role: 'Science & Practical Lab Lead',
    bio: 'Ph.D Science Education, M.Sc Biochemistry. Directs campus STEM experiments, physics-chemistry lab safety, and research fair.',
    left: 'JHS Science Lab',
    right: 'Lab Director',
  },
  {
    ini: 'FN',
    tag: 'Digital Systems',
    name: 'Francisca Nyarko',
    role: 'Computing & ICT Specialist',
    bio: 'B.Sc Computer Science. Teaches computational logic, scratch block coding, digital literacy, and responsible online citizenship.',
    left: 'Computer Lab 1',
    right: 'Tech Lead',
  },
  {
    ini: 'EQ',
    tag: 'Humanities & Ethics',
    name: 'Ebenezer Quaye',
    role: 'Social Studies & RME Lead',
    bio: 'B.Ed Social Sciences. Directs civic engagement modules, constitutional studies, and Religious & Moral Education (RME).',
    left: 'JHS Humanities',
    right: 'Debate Coach',
  },
]

const SUPPORT = [
  {
    ini: 'ED',
    tag: 'Campus Infirmary',
    name: 'Sister Evelyn Danquah',
    role: 'Resident Nursing Sister (SRN)',
    bio: 'State Registered Nurse. 12+ years in pediatric acute clinical care, immunization monitoring, and school infirmary protocols.',
    left: 'Health Bay',
    right: '24/7 Campus On-Call',
  },
  {
    ini: 'BY',
    tag: 'Knowledge Center',
    name: 'Bernice Yeboah',
    role: 'Chief Librarian & Media Curator',
    bio: 'B.A. Information Studies (Legon). Curates our 12,000+ title catalog, research guidance, and quiet reading sanctuary.',
    left: 'Roka Memorial Library',
    right: 'Media Lead',
  },
  {
    ini: 'BA',
    tag: 'Boarding & Pastoral',
    name: 'Mad. Beatrice Appiah',
    role: 'Head Matron & Student Welfare',
    bio: 'Experienced pastoral matron supervising dormitory hygiene, wholesome catering, laundry schedules, and evening devotionals.',
    left: 'Hostel Quad',
    right: 'Resident Matron',
  },
  {
    ini: 'JT',
    tag: 'Transit Safety',
    name: 'Capt. Joshua Tetteh',
    role: 'Lead Transport & Fleet Officer',
    bio: 'Certified defensive driver instructor. Manages bus routes across Amasaman, Pokuase, Medie, and Achimota with GPS tracking.',
    left: 'Fleet Division',
    right: 'Safety Certified',
  },
]

const SECTIONS = [
  {
    id: 'leadership',
    label: 'Academic Leadership',
    eyebrow: 'Administrative Stewardship',
    title: 'Academic Leadership & Pastoral Guidance',
    lead: 'Structured governance ensuring rigorous compliance with National Pre-tertiary Curriculum Standards and institutional fidelity.',
    grid: 'sm:grid-cols-2 lg:grid-cols-4',
    foot: 'body',
    avatar: 'bg-secondary-container text-primary-container',
    chip: 'bg-surface-container text-primary',
    roleTone: 'text-primary',
    members: LEADERSHIP,
  },
  {
    id: 'early',
    label: 'Early Childhood & Crèche',
    eyebrow: 'Foundation Stage',
    title: 'Early Childhood & Crèche Faculty',
    lead: 'Specialists in developmental milestones, early literacy, phonemic play, and nurturing social confidence.',
    grid: 'sm:grid-cols-2 lg:grid-cols-3',
    foot: 'caps',
    avatar: 'bg-surface-container-high text-primary',
    chip: 'bg-primary-container/20 text-primary',
    roleTone: 'text-on-surface-variant',
    members: EARLY,
  },
  {
    id: 'primary',
    label: 'Primary School (Basic 1–6)',
    eyebrow: 'Standard Basic Curriculum',
    title: 'Primary School Faculty (Basic 1–6)',
    lead: 'Cultivating fundamental inquiry, scientific reasoning, cultural grounding, and linguistic agility.',
    grid: 'sm:grid-cols-2 lg:grid-cols-4',
    foot: 'caps',
    avatar: 'bg-surface-container text-primary',
    chip: 'bg-surface-container text-primary',
    roleTone: 'text-on-surface-variant',
    members: PRIMARY,
  },
  {
    id: 'jhs',
    label: 'Junior High (JHS 1–3)',
    eyebrow: 'BECE Rigor & Transition',
    title: 'Junior High School Faculty (JHS 1–3)',
    lead: 'Subject specialists focusing on academic mastery, analytical clarity, and preparation for top-tier senior high placement.',
    grid: 'sm:grid-cols-2 lg:grid-cols-4',
    foot: 'caps',
    avatar: 'bg-secondary-container text-on-secondary',
    chip: 'bg-surface-container text-primary',
    roleTone: 'text-primary',
    members: JHS,
  },
  {
    id: 'support',
    label: 'Specialist & Support',
    eyebrow: 'Campus Life & Wellness',
    title: 'Specialized, Pastoral & Support Staff',
    lead: 'Ensuring student health, physical security, literary resources, and safe logistical transport every school day.',
    grid: 'sm:grid-cols-2 lg:grid-cols-4',
    foot: 'caps',
    avatar: 'bg-surface-container text-primary',
    chip: 'bg-surface-container text-primary',
    roleTone: 'text-primary',
    members: SUPPORT,
  },
]

const TOTAL_STAFF = SECTIONS.reduce((n, s) => n + s.members.length, 0)

/* One staff member card. Initials are decorative — the name sits in the h3. */
function MemberCard({ m, section }) {
  const caps = section.foot === 'caps'
  return (
    <article className="flex w-full flex-col justify-between rounded-xl border border-hairline bg-surface-container-lowest p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="space-y-4">
        <span
          className={`flex ${m.big ? 'h-16 w-16 rounded-xl text-headline-sm' : 'h-14 w-14 rounded-lg text-title-md'} items-center justify-center font-bold ${section.avatar}`}
          aria-hidden="true"
        >
          {m.ini}
        </span>

        <div>
          <span
            className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-label-caps font-bold ${section.chip}`}
          >
            {m.tag}
          </span>
          <h3 className="text-title-md font-bold text-primary">{m.name}</h3>
          <p className={`text-label-md font-semibold ${section.roleTone}`}>{m.role}</p>
        </div>

        <p className="text-body-sm leading-relaxed text-on-surface-variant">{m.bio}</p>
      </div>

      <footer
        className={`mt-5 flex items-center justify-between border-t border-surface-container pt-4 text-on-surface-variant ${
          caps ? 'text-label-caps uppercase' : 'text-body-sm'
        }`}
      >
        <span className="flex items-center gap-1">
          {m.icon ? <M className="text-[16px] text-primary">{m.icon}</M> : null}
          <span>{m.left}</span>
        </span>
        {m.mail ? (
          <a
            className="transition-colors hover:text-primary"
            href={`mailto:${m.mail}`}
            aria-label={`Email ${m.name}`}
          >
            <M className="text-[18px]">mail</M>
          </a>
        ) : (
          <span className="font-bold text-primary">{m.right}</span>
        )}
      </footer>
    </article>
  )
}

function FacultySection({ section }) {
  return (
    <section className="mx-auto max-w-7xl" aria-labelledby={`${section.id}-heading`}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-1 text-label-caps font-bold uppercase tracking-wider text-primary">
            {section.eyebrow}
          </p>
          <h2 id={`${section.id}-heading`} className="text-headline-md font-bold text-primary">
            {section.title}
          </h2>
        </div>
        <p className="max-w-md text-body-sm text-on-surface-variant">{section.lead}</p>
      </div>

      <StaggerGroup className={`grid grid-cols-1 gap-6 ${section.grid}`}>
        {section.members.map((m) => (
          <StaggerItem key={m.name} className="flex">
            <MemberCard m={m} section={section} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}

/* ------------------------------------------------------------------
   STICKY DEPARTMENT FILTER TABS
------------------------------------------------------------------- */
const TABS = [{ id: 'all', label: 'All Faculty & Staff' }, ...SECTIONS.map((s) => ({ id: s.id, label: s.label }))]

function FilterBar({ active, onChange }) {
  const current = SECTIONS.find((s) => s.id === active)
  const status =
    active === 'all'
      ? `Showing all ${TOTAL_STAFF} faculty and staff members`
      : `Showing ${current.members.length} staff in ${current.title}`

  return (
    <div className="sticky top-[76px] z-30 w-full border-b border-hairline bg-surface-container-lowest px-6 py-4 shadow-sm lg:px-12">
      <div className="container-page no-scrollbar flex items-center justify-between gap-4 overflow-x-auto">
        <div
          role="group"
          aria-label="Filter faculty by department"
          className="flex shrink-0 items-center gap-2"
        >
          {TABS.map((t) => {
            const on = active === t.id
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => onChange(t.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-label-md font-semibold transition-all duration-200 ${
                  on
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <p
          role="status"
          className="sr-only flex shrink-0 items-center gap-2 pl-4 text-label-caps font-bold uppercase tracking-wider text-on-surface-variant md:not-sr-only"
        >
          <M className="text-[16px] text-primary">sync</M>
          <span>{status}</span>
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
   FACULTY COMMITMENTS & PROFESSIONAL STANDARDS BAND
------------------------------------------------------------------- */
const COMMITMENTS = [
  {
    icon: 'verified',
    title: 'GES Licensing & NaCCA Updates',
    body: 'Annual pedagogy retraining aligning with updated national basic education frameworks and evaluation rubrics.',
  },
  {
    icon: 'shield',
    title: 'Child Safeguarding Vetting',
    body: 'Zero-tolerance child protection policies, background checks, and strictly monitored campus visitor access protocols.',
  },
  {
    icon: 'psychology',
    title: 'Differentiated Coaching',
    body: 'Tailored learning clinics for gifted and developing learners without peer stigmatization or instructional isolation.',
  },
  {
    icon: 'church',
    title: 'Christian Role Modeling',
    body: 'Instructors live out humility, integrity, truth, and servant leadership, inspiring moral self-discipline in students.',
  },
]

function CommitmentsBand() {
  return (
    <section className="w-full bg-surface-container-low px-6 py-14 lg:px-12">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <p className="text-label-caps font-bold uppercase tracking-widest text-primary">
            Accountability Framework
          </p>
          <h2 className="text-headline-md font-bold text-primary">
            Our Institutional Faculty Commitments
          </h2>
          <p className="text-body-sm text-on-surface-variant">
            Every educator and operational staff member at Roka adheres to uncompromising statutory
            and ethical codes.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((c) => (
            <StaggerItem key={c.title} className="space-y-3 rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container text-primary-container"
                aria-hidden="true"
              >
                <M className="text-[20px]">{c.icon}</M>
              </span>
              <h3 className="text-title-md font-bold text-primary">{c.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{c.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   BOTTOM CTA BANNER (deep gold band, navy + gold punch)
------------------------------------------------------------------- */
function CtaBand() {
  return (
    <section id="visit-faculty" className="w-full bg-primary px-6 py-16 text-on-primary lg:px-12">
      <div className="container-page flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-label-caps font-bold uppercase tracking-wider text-on-secondary">
            <M className="text-[16px]">pin_drop</M>
            <span>Amasaman Campus Visits</span>
          </p>
          <h2 className="text-headline-lg-mobile font-extrabold tracking-tight text-surface-container-lowest md:text-headline-lg">
            Experience Our Warm, Nurturing Community in Person
          </h2>
          <p className="text-body-lg leading-relaxed text-surface-container-high">
            Schedule a campus tour or speak with our Academic Dean to discuss how our faculty
            supports your child&apos;s distinct educational journey from crèche through basic school.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-body-sm text-surface-container-high">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-secondary-fixed"
            >
              <M className="text-[18px] text-secondary-fixed">call</M>
              <span>
                {CONTACT.phone} / {CONTACT.phoneAlt}
              </span>
            </a>
            <span className="hidden text-secondary-container sm:inline" aria-hidden="true">
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

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
          <Link
            to="/admission/open-day"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-8 py-3.5 text-label-lg font-bold text-on-primary-fixed shadow-md transition-colors hover:bg-primary-fixed"
          >
            <M className="text-[20px]">calendar_month</M>
            <span>Schedule a Campus Tour</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-3.5 text-label-lg font-semibold text-on-secondary transition-colors hover:bg-secondary"
          >
            <M className="text-[20px]">contact_support</M>
            <span>Contact Faculty Desk</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */
export default function Team() {
  const [active, setActive] = useState('all')
  const visible = SECTIONS.filter((s) => active === 'all' || s.id === active)

  return (
    <main>
      <BreadcrumbBar />
      <PageIntro />
      <CollectiveShowcase />
      <FilterBar active={active} onChange={setActive} />

      <div className="w-full bg-surface px-6 py-12 lg:px-12">
        <div key={active} className="space-y-16">
          {visible.map((s) => (
            <FacultySection key={s.id} section={s} />
          ))}
        </div>
      </div>

      <CommitmentsBand />
      <CtaBand />
    </main>
  )
}
