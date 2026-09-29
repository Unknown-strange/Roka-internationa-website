/* ------------------------------------------------------------------
   Structured site content.
   Content that is real is marked MIGRATED; content that is thin or
   missing on the old site is marked TODO(TBD) — the UI is built to
   hold it, but real data must be supplied before launch.
   (See "Content Notes" in roka-brief.md.)
------------------------------------------------------------------- */

export const ABOUT = {
  // MIGRATED — real copy from the old site
  intro:
    'Roka International School is a Christian private school offering education from Creche through Junior High School, built on academic excellence, strong moral values and a caring community.',
  body: [
    'We follow the Ghana Education Service (GES) curriculum, enriched with modern teaching methods, dedicated teachers and facilities that let children learn by doing — from our science and computer labs to a well-stocked library.',
    'From the earliest years in Creche through to the B.E.C.E preparation in Junior High, every pupil is known, encouraged and challenged to become a confident, capable young person of good character.',
  ],
  quickFacts: [
    { label: 'Levels', value: 'Creche – JHS' },
    { label: 'Curriculum', value: 'GES Curriculum' },
    { label: 'Transport', value: '6-bus shuttle fleet' },
    { label: 'Boarding', value: 'Available' },
  ],
}

export const MISSION_VISION = {
  mission:
    'To provide quality, Christ-centred education that nurtures the whole child — mind, body and character — enabling every learner to excel academically and live responsibly.',
  vision:
    'To be a leading school recognised for academic excellence, strong values and graduates who are confident, disciplined and ready to contribute to society.',
  core: [
    {
      title: 'Christian Values',
      body: 'Faith, integrity and respect underpin everything we do, in and out of the classroom.',
    },
    {
      title: 'Academic Excellence',
      body: 'A rigorous GES curriculum delivered with modern methods and high expectations.',
    },
    {
      title: 'Whole-Child Growth',
      body: 'Sport, arts, clubs and leadership opportunities alongside classroom learning.',
    },
  ],
}

/* -------------------- Academics -------------------- */

export const CURRICULUM_LEVELS = [
  {
    id: 'creche',
    level: 'Creche & Nursery',
    ages: '3 months – 4 years',
    summary: 'A safe, warm start with play-based learning and early social skills.',
    subjects: [
      'Language & Phonics',
      'Number Work',
      'Creative Art & Music',
      'Motor Skills & Play',
      'Social & Moral Education',
    ],
  },
  {
    id: 'kg',
    level: 'Kindergarten',
    ages: '4 – 6 years',
    summary: 'Foundational reading, writing and number confidence through guided play.',
    subjects: [
      'English Language',
      'Mathematics',
      'Creative Art',
      'Our World (Integrated Science)',
      'Physical Education',
    ],
  },
  {
    id: 'primary',
    level: 'Primary School',
    ages: '6 – 12 years',
    summary: 'Core literacy and numeracy with growing independence and enquiry.',
    subjects: [
      'English Language',
      'Mathematics',
      'Integrated Science',
      'Our Way of Life (Social Studies)',
      'Creative Arts',
      'Computing',
      'French',
      'Religious & Moral Education',
    ],
  },
  {
    id: 'jhs',
    level: 'Junior High School',
    ages: '12 – 16 years',
    summary: 'B.E.C.E-focused preparation with lab work, projects and study skills.',
    subjects: [
      'English Language',
      'Mathematics',
      'Integrated Science',
      'Social Studies',
      'Computing',
      'French',
      'Creative Arts',
      'Religious & Moral Education',
      'Pre-Technical Skills',
    ],
  },
]

export const SCHOOL_YEAR = {
  terms: [
    { term: 'First Term', months: 'September – December' },
    { term: 'Second Term', months: 'January – April' },
    { term: 'Third Term', months: 'May – July' },
  ],
  // TODO(TBD): confirm exact dates for the current academic year.
  termEvents: [
    { term: 'First Term', events: 'Reopening, orientation, mid-term break, Christmas celebration' },
    { term: 'Second Term', events: 'Inter-school sports, science fair, mock examinations' },
    { term: 'Third Term', events: 'B.E.C.E preparation, prize-giving day, closing' },
  ],
}

/* -------------------- Facilities -------------------- */

export const FACILITIES = [
  {
    title: 'Boarding House',
    body: 'Supervised boarding with house parents, study periods and a routine built around wellbeing.',
    detail: 'Visiting hours: Saturdays, 10:00am – 1:00pm (parents/guardians only).',
    icon: 'home',
  },
  {
    title: 'Shuttle Service',
    body: 'A dedicated six-bus fleet running safe morning and afternoon routes.',
    detail: 'Routes and pick-up points confirmed at admission.',
    icon: 'bus',
  },
  {
    title: 'Computer & Science Lab',
    body: 'Hands-on practical work in ICT and the sciences, from primary through JHS.',
    detail: 'Supervised sessions with teacher guidance.',
    icon: 'flask',
  },
  {
    title: 'Library',
    body: 'A quiet, well-stocked library supporting reading for pleasure and research.',
    detail: 'Pupils borrow weekly; JHS pupils have dedicated research time.',
    icon: 'book',
  },
]

/* -------------------- Admission -------------------- */

export const ADMISSION_STEPS = [
  { step: '01', title: 'Enquire', body: 'Send an admission request or chat with us on WhatsApp.' },
  { step: '02', title: 'Visit', body: 'Come to an open day or schedule a campus tour.' },
  { step: '03', title: 'Apply', body: 'Complete the admission request form with your child’s details.' },
  { step: '04', title: 'Assess', body: 'Your child sits the entrance examination for their level.' },
  { step: '05', title: 'Confirm', body: 'Submit the medical report and settle fees to secure the place.' },
]

export const OPEN_DAY = {
  // TODO(TBD): confirm the next open day date.
  date: 'To be announced',
  time: '9:00am – 1:00pm',
  agenda: [
    'Campus and facilities tour',
    'Meet the headteacher and teaching staff',
    'Curriculum and class-size overview',
    'Fee structure and shuttle route briefing',
    'Q&A with current parents',
  ],
}

export const SCHOOL_HOURS = [
  { section: 'Creche & Nursery', hours: '7:30am – 3:00pm', days: 'Monday – Friday' },
  { section: 'Kindergarten', hours: '7:30am – 3:00pm', days: 'Monday – Friday' },
  { section: 'Primary School', hours: '7:30am – 3:30pm', days: 'Monday – Friday' },
  { section: 'Junior High School', hours: '7:00am – 4:30pm', days: 'Monday – Friday' },
  { section: 'Boarding', hours: 'Supervised study 6:30pm – 8:30pm', days: 'Monday – Saturday' },
]

export const WITHDRAWAL = {
  steps: [
    'Submit a written withdrawal request addressed to the Headteacher.',
    'Return all school property — uniforms, books, library and lab materials.',
    'Clear any outstanding fees on the pupil’s account.',
    'Collect the pupil’s files and transfer letter within seven (7) working days.',
  ],
  // TODO(TBD): confirm the notice period required by the school.
  note: 'A minimum of one month’s written notice is required before the end of term.',
}

/**
 * TODO(TBD): The old site has no real fee data. These rows are structural
 * placeholders so the table renders — REPLACE with the confirmed fee table.
 */
export const FEES = {
  currency: 'GHS',
  note: 'Figures below are placeholders pending the confirmed fee schedule.',
  isPlaceholder: true,
  rows: [
    { level: 'Creche & Nursery', tuition: '—', boarding: '—', other: '—' },
    { level: 'Kindergarten', tuition: '—', boarding: '—', other: '—' },
    { level: 'Primary School', tuition: '—', boarding: '—', other: '—' },
    { level: 'Junior High School', tuition: '—', boarding: '—', other: '—' },
  ],
  includes: [
    'Tuition and exam levies',
    'Reporting and exercise books',
    'Co-curricular activities',
  ],
  excludes: ['Boarding fees', 'Shuttle transport', 'Uniforms and personal items'],
  // TODO(TBD): confirm bank name, account name and number.
  payment: {
    bank: 'To be confirmed',
    accountName: 'Roka International School',
    accountNumber: 'To be confirmed',
  },
}

/* -------------------- Team -------------------- */

/**
 * TODO(TBD): The old site has no reliable staff data — and it conflicted
 * between two names for the same leadership role. Confirm the correct
 * current name and title before publishing.
 */
export const TEAM = [
  { name: 'To be confirmed', role: 'Headteacher', department: 'Leadership' },
  { name: 'To be confirmed', role: 'Head of Academics', department: 'Leadership' },
  { name: 'To be confirmed', role: 'Creche & Nursery Lead', department: 'Early Years' },
  { name: 'To be confirmed', role: 'Primary Coordinator', department: 'Primary' },
  { name: 'To be confirmed', role: 'JHS Coordinator', department: 'Junior High' },
  { name: 'To be confirmed', role: 'Bursar / Admin Officer', department: 'Administration' },
]

/* -------------------- Achievements -------------------- */

/**
 * TODO(TBD): The Achievements page is currently EMPTY on the old site.
 * These are structural placeholders only.
 */
export const ACHIEVEMENTS = [
  {
    year: '—',
    title: 'Achievement to be added',
    body: 'Real awards, exam results and competition outcomes will be published here.',
    tag: 'Academics',
    placeholder: true,
  },
  {
    year: '—',
    title: 'Achievement to be added',
    body: 'Real awards, exam results and competition outcomes will be published here.',
    tag: 'Sports',
    placeholder: true,
  },
  {
    year: '—',
    title: 'Achievement to be added',
    body: 'Real awards, exam results and competition outcomes will be published here.',
    tag: 'Arts & Culture',
    placeholder: true,
  },
]

/* -------------------- Activities -------------------- */

/**
 * TODO(TBD): The old site only carries the marathon. Real clubs/sports
 * list needs to be supplied.
 */
export const ACTIVITIES = [
  {
    title: 'ROKA ABN Invitational Marathon',
    category: 'Sports',
    body: 'Our flagship inter-school athletics event, bringing together pupils from schools across the region for a day of racing, teamwork and school spirit.',
    featured: true,
  },
  { title: 'STEM & Robotics Club', category: 'Clubs', body: 'Building, coding and problem-solving after school.', placeholder: true },
  { title: 'Debate & Public Speaking', category: 'Clubs', body: 'Confident communication and critical thinking.', placeholder: true },
  { title: 'Football & Athletics', category: 'Sports', body: 'Regular training and inter-school fixtures.', placeholder: true },
  { title: 'Choir & Drama', category: 'Arts', body: 'Music, stagecraft and annual performance weeks.', placeholder: true },
  { title: 'Reading Club', category: 'Clubs', body: 'Guided reading, book talks and library visits.', placeholder: true },
]

/* -------------------- News -------------------- */

export const NEWS_CATEGORIES = [
  'All',
  'Academic Excellence',
  'Athletics & Health',
  'Innovation & Science',
]

/**
 * News shown on the home page and the News index — matches the copy in the
 * Stitch design export. Sample articles; replace with real published news.
 */
export const NEWS = [
  {
    slug: 'outstanding-2024-bece-results',
    title: 'Outstanding 2024 BECE Results: Roka Candidates Sweep Grade Ones',
    category: 'Academic Excellence',
    date: '2025-01-15',
    excerpt:
      'Our graduating class achieved exceptional aggregate marks in Core Mathematics, English Language, and Integrated Science, gaining admission into Ghana’s top category senior high schools.',
    body: [
      'Our graduating class achieved exceptional aggregate marks in Core Mathematics, English Language, and Integrated Science, gaining admission into Ghana’s top category senior high schools.',
      'The results reflect years of disciplined preparation, small class sizes and the close mentoring that our JHS teachers provide from term one.',
      'We celebrate every candidate, and we thank the parents and staff who walked alongside them.',
    ],
    imageLabel: 'Graduating JHS class',
  },
  {
    slug: 'annual-inter-house-sports',
    title: 'Annual Inter-House Sports & Invitational Athletic Meet Announced',
    category: 'Athletics & Health',
    date: '2025-02-02',
    excerpt:
      'Preparations are underway for our prestigious track and field championships. Four historic school houses will compete across sprints, high jump, and relay spectacles.',
    body: [
      'Preparations are underway for our prestigious track and field championships. Four historic school houses will compete across sprints, high jump, and relay spectacles.',
      'Pupils begin training in earnest next term, with house captains appointed to coordinate entries across every age group.',
      'Families will be welcomed to the campus on competition day — look out for the full schedule in the term calendar.',
    ],
    imageLabel: 'Track and field events',
  },
  {
    slug: 'stem-innovation-fair',
    title: 'STEM Innovation Fair: JHS Students Showcase Solar Irrigation Projects',
    category: 'Innovation & Science',
    date: '2025-02-18',
    excerpt:
      'Pupils demonstrated working models addressing Ghanaian agriculture challenges, utilizing micro-controllers and sustainable solar cells in our science lab.',
    body: [
      'Pupils demonstrated working models addressing Ghanaian agriculture challenges, utilizing micro-controllers and sustainable solar cells in our science lab.',
      'Each team presented to a panel of teachers and visiting engineers, explaining their design choices, testing method and expected impact.',
      'Winning projects will be entered into the inter-school science competition later in the term.',
    ],
    imageLabel: 'Science fair projects',
  },
]

/* -------------------- Gallery -------------------- */

export const GALLERY_CATEGORIES = ['All', 'Campus', 'Classrooms', 'Sports', 'Events']

/**
 * Placeholder tiles until real photography is supplied.
 * Brief rule: only student, classroom, campus and activity photography —
 * no personal/founder photography.
 */
export const GALLERY = [
  { id: 1, label: 'Main campus block', category: 'Campus', caption: 'The Roka campus' },
  { id: 2, label: 'Assembly ground', category: 'Campus', caption: 'Morning assembly' },
  { id: 3, label: 'Primary classroom', category: 'Classrooms', caption: 'Primary class in session' },
  { id: 4, label: 'Science laboratory', category: 'Classrooms', caption: 'Practical work in the lab' },
  { id: 5, label: 'Library corner', category: 'Classrooms', caption: 'Reading time' },
  { id: 6, label: 'Computer lab', category: 'Classrooms', caption: 'ICT lesson' },
  { id: 7, label: 'Athletics day', category: 'Sports', caption: 'Track events' },
  { id: 8, label: 'Football practice', category: 'Sports', caption: 'After-school training' },
  { id: 9, label: 'Marathon', category: 'Events', caption: 'ROKA ABN Invitational Marathon' },
  { id: 10, label: 'Science fair', category: 'Events', caption: 'Inter-house science fair' },
  { id: 11, label: 'Prize-giving day', category: 'Events', caption: 'End-of-year awards' },
  { id: 12, label: 'School shuttle fleet', category: 'Campus', caption: 'Six-bus shuttle service' },
]
