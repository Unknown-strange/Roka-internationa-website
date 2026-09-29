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
   BREADCRUMB, EYEBROW, HEADLINE & 4-STAT PILLAR BAR
------------------------------------------------------------------- */
const STATS = [
  { icon: 'groups', value: '15+ Active Clubs', body: 'STEM, Creative Arts, Leadership & Service' },
  { icon: 'child_care', value: 'Age 4 to 14', body: 'Inclusive across Early Years to JHS 3' },
  {
    icon: 'calendar_view_week',
    value: 'Friday Blocks',
    body: 'Dedicated 2-hour co-curricular period',
  },
  {
    icon: 'health_and_safety',
    value: 'Safety & Care',
    body: 'First-aid staff & certified instructors',
  },
]

function IntroHeader() {
  return (
    <section className="w-full bg-surface-container-low py-12 lg:py-16">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-label-md text-on-surface-variant">
          <Link className="transition-colors hover:text-primary" to="/">
            Home
          </Link>
          <M className="text-[14px]">chevron_right</M>
          <span className="font-bold text-primary" aria-current="page">
            Activities &amp; Student Life
          </span>
        </nav>

        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-container/20 px-3 py-1.5 text-label-caps font-bold text-on-primary-fixed-variant">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>BEYOND THE CLASSROOM · WHOLE-CHILD DEVELOPMENT · AMASAMAN, ACCRA</span>
        </p>

        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="text-headline-lg-mobile font-bold tracking-tight text-primary md:text-headline-lg">
              Vibrant Extracurriculars Cultivating Character, Creativity &amp; Health
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-body-md leading-relaxed text-on-surface-variant">
              At Roka International School, learning transcends textbooks. From competitive
              athletics and robotics to gospel chorale and traditional cultural troupes, our
              co-curricular programs instill leadership, discipline, Christian sportsmanship, and
              lifelong camaraderie.
            </p>
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem
              key={s.value}
              className="flex items-start gap-4 rounded-xl bg-surface p-6 shadow-sm"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary"
                aria-hidden="true"
              >
                <M className="text-[26px]">{s.icon}</M>
              </span>
              <span>
                <span className="block text-headline-sm font-bold text-primary">{s.value}</span>
                <span className="text-body-sm text-on-surface-variant">{s.body}</span>
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   FEATURED MARATHON EVENT SPOTLIGHT
------------------------------------------------------------------- */
const MARATHON_HIGHLIGHTS = [
  {
    icon: 'verified_user',
    title: 'Ages 4 – 14',
    body: 'Crèche, Primary & JHS tiers with dedicated distance heats.',
  },
  {
    icon: 'event',
    title: 'Trinity Term',
    body: 'Held annually in May / June as our reopening highlight.',
  },
  {
    icon: 'pace',
    title: '3 Race Categories',
    body: '1km Mini-Sprint, 2.5km Junior Dash, and 5km JHS Challenge.',
  },
  {
    icon: 'medical_services',
    title: 'Full Paramedic Escort',
    body: 'Police escort, certified nurses, hydration pods & finisher medals.',
  },
]

function MarathonSpotlight() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl bg-secondary text-on-secondary shadow-xl">
          <div className="grid grid-cols-1 lg:min-h-[580px] lg:grid-cols-12">
            {/* Visual panel */}
            <div className="relative min-h-[340px] lg:col-span-6 lg:min-h-full">
              <img
                src="/images/marathon.jpg"
                alt="Young athletes running in the ROKA ABN Invitational Marathon"
                width="720"
                height="580"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent lg:hidden"
              />
              <p className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-primary-container px-3 py-1.5 text-label-caps font-bold text-on-primary-fixed shadow-md">
                <M className="text-[15px]">sprint</M>
                <span>FLAGSHIP COMMUNITY RACE</span>
              </p>
            </div>

            {/* Content panel */}
            <div className="flex flex-col justify-between p-8 lg:col-span-6 lg:p-14">
              <div>
                <p className="mb-2 text-label-caps font-bold tracking-widest text-primary-container">
                  ANNUAL SPORTING TRADITION · GA WEST RUN
                </p>
                <h2 className="mb-4 text-headline-lg-mobile font-bold text-surface-container-lowest md:text-headline-lg">
                  The Annual ROKA ABN Invitational Marathon
                </h2>
                <p className="mb-8 text-body-md leading-relaxed text-secondary-fixed-dim">
                  The premier youth distance and fitness event in Ga West Municipality. Bringing
                  together hundreds of passionate young runners across Greater Accra to celebrate
                  endurance, holistic wellness, and community fellowship in a safe, marshaled
                  environment.
                </p>

                <StaggerGroup className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {MARATHON_HIGHLIGHTS.map((h) => (
                    <StaggerItem key={h.title} className="rounded-lg bg-secondary-container p-4">
                      <p className="mb-1 flex items-center gap-2 text-label-md font-semibold text-primary-container">
                        <M className="text-[18px]">{h.icon}</M>
                        <span>{h.title}</span>
                      </p>
                      <p className="text-body-sm text-secondary-fixed-dim">{h.body}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/admission/apply"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-6 py-3 text-label-lg font-bold text-on-primary-fixed shadow-lg transition-colors hover:bg-primary-fixed-dim"
                >
                  <span>Register for 2025 Marathon</span>
                  <M className="text-[18px]">arrow_forward</M>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-label-md font-semibold text-on-secondary transition-colors hover:bg-white/15"
                >
                  <M className="text-[18px]">download</M>
                  <span>Race Route Guide (PDF)</span>
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
   CO-CURRICULAR CLUBS & SOCIETIES (12 clubs, 5 categories)
------------------------------------------------------------------- */
const CLUB_FILTERS = [
  { id: 'all', label: 'All Activities (12)' },
  { id: 'stem', label: 'STEM & Innovation' },
  { id: 'sports', label: 'Sports & Athletics' },
  { id: 'arts', label: 'Performing & Cultural Arts' },
  { id: 'leadership', label: 'Faith & Leadership' },
  { id: 'lifeskills', label: 'Life Skills & Hobbies' },
]

const CLUBS = [
  {
    cat: 'stem',
    icon: 'smart_toy',
    chip: 'STEM & INNOVATION',
    title: 'Robotics & Coding Club',
    bio: 'Hands-on block and syntax coding, Scratch games, LEGO Mindstorms mechanics, sensor loops, and computational problem-solving challenges.',
    elig: 'Ages 8–14 (Basic 3 – JHS 3)',
    time: 'Wednesday Afternoons',
  },
  {
    cat: 'leadership',
    icon: 'military_tech',
    chip: 'FAITH & LEADERSHIP',
    title: 'Cadet Corps & Leadership Drill',
    bio: 'Instilling rigorous civic honor, parade protocol, ceremonial formations, flag ethics, and outdoor campmanship under retired armed forces drillmasters.',
    elig: 'Ages 9–14 (Basic 4 – JHS 3)',
    time: 'Friday Co-Curricular Block',
  },
  {
    cat: 'sports',
    icon: 'sports_soccer',
    chip: 'SPORTS & ATHLETICS',
    title: 'Junior Falcon Football Academy',
    bio: 'Ball mastery, tactical movement, positional discipline, and regional friendly fixtures with sister schools across Ga West and Amasaman.',
    elig: 'Ages 5–14 (All Grades)',
    time: 'Tuesday & Thursday',
  },
  {
    cat: 'arts',
    icon: 'nightlife',
    chip: 'PERFORMING & CULTURAL',
    title: 'Cultural Dance & Drumming Troupe',
    bio: 'Immersion into Ghanaian heritage through Fontomfrom, Kpanlogo, and Adowa rhythms, ancestral storytelling, and vibrant festival costumes.',
    elig: 'Ages 6–14 (Basic 1 – JHS 3)',
    time: 'Friday Co-Curricular Block',
  },
  {
    cat: 'arts',
    icon: 'mic',
    chip: 'PERFORMING & CULTURAL',
    title: 'School Choir & Gospel Chorale',
    bio: 'Soprano, alto, and tenor harmonization, vocal breathing techniques, Christian ministration at chapel assemblies, and Christmas cantatas.',
    elig: 'Ages 4–14 (All Levels)',
    time: 'Thursday Mornings',
  },
  {
    cat: 'stem',
    icon: 'science',
    chip: 'STEM & INNOVATION',
    title: 'Science Explorers & Eco Club',
    bio: 'Hands-on botanical gardening on campus grounds, solar kit circuit experiments, water filtration labs, and preparing entries for national science fairs.',
    elig: 'Ages 6–13 (Primary 1–6)',
    time: 'Mondays 3:30 – 4:45 PM',
  },
  {
    cat: 'lifeskills',
    icon: 'neurology',
    chip: 'LIFE SKILLS & HOBBIES',
    title: 'Chess & Mind Sports Club',
    bio: 'Opening strategies, endgame gambits, cognitive patience, spatial awareness, and competitive ranking in intra-school tournament ladders.',
    elig: 'Ages 7–14',
    time: 'Wednesdays 3:30 – 4:45 PM',
  },
  {
    cat: 'leadership',
    icon: 'record_voice_over',
    chip: 'FAITH & LEADERSHIP',
    title: 'Debate & Public Speaking Society',
    bio: 'Parliamentary style debates, vocal articulation, counter-argument formulation, speechwriting, and poise under cross-examination scrutiny.',
    elig: 'Ages 9–14 (Basic 5 – JHS 3)',
    time: 'Tuesdays 3:30 – 4:45 PM',
  },
  {
    cat: 'sports',
    icon: 'local_fire_department',
    chip: 'SPORTS & ATHLETICS',
    title: 'Track & Field Athletics Squad',
    bio: 'Sprint mechanics, baton exchange drills, long jump approach, high jump technique, and aerobic stamina preparation for Ga West Zonal Games.',
    elig: 'Ages 6–14',
    time: 'Saturday Morning 7:30 AM',
  },
  {
    cat: 'arts',
    icon: 'theater_comedy',
    chip: 'PERFORMING & CULTURAL',
    title: 'French Drama & Francophone Club',
    bio: 'Conversational French sketches, roleplay dialogues, DELF Prim exam games, and French-African folklore performances for school assemblies.',
    elig: 'Ages 7–14',
    time: 'Thursdays 3:30 – 4:45 PM',
  },
  {
    cat: 'lifeskills',
    icon: 'emergency',
    chip: 'LIFE SKILLS & HOBBIES',
    title: 'Junior Red Cross & First Aid Cadets',
    bio: 'Basic bandaging, CPR awareness, heat exhaustion management, campus sanitation inspection, and humanitarian volunteerism in the community.',
    elig: 'Ages 8–14',
    time: 'Friday Co-Curricular Block',
  },
  {
    cat: 'lifeskills',
    icon: 'restaurant_menu',
    chip: 'LIFE SKILLS & HOBBIES',
    title: 'Home Economics & Culinary Arts',
    bio: 'Practical nutrition principles, basic baking, table setting etiquette, healthy snacks, garment repair, and domestic hospitality management.',
    elig: 'Ages 9–14 (Basic 4 – JHS 3)',
    time: 'Bi-Weekly Saturday Morning',
  },
]

function ClubCard({ c }) {
  const goldChip = c.cat === 'sports'
  return (
    <article className="flex w-full flex-col justify-between rounded-xl border border-hairline bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary"
            aria-hidden="true"
          >
            <M className="text-[24px]">{c.icon}</M>
          </span>
          <span
            className={`rounded-full px-3 py-1 text-label-caps font-bold ${
              goldChip ? 'bg-primary-container/20 text-on-primary-fixed-variant' : 'bg-surface-container text-primary'
            }`}
          >
            {c.chip}
          </span>
        </div>
        <h3 className="mb-2 text-headline-sm font-semibold text-primary">{c.title}</h3>
        <p className="mb-6 text-body-sm leading-relaxed text-on-surface-variant">{c.bio}</p>
      </div>

      <dl className="space-y-2 rounded-lg bg-surface-container-low p-3.5 text-label-md">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <dt className="flex items-center gap-1.5 text-on-surface-variant">
            <M className="text-[16px] text-primary">person</M>
            <span>Eligibility:</span>
          </dt>
          <dd className="font-bold text-on-surface">{c.elig}</dd>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <dt className="flex items-center gap-1.5 text-on-surface-variant">
            <M className="text-[16px] text-primary">schedule</M>
            <span>Timetable:</span>
          </dt>
          <dd className="font-bold text-on-surface">{c.time}</dd>
        </div>
      </dl>
    </article>
  )
}

function ClubsDirectory({ active, onChange }) {
  const visible = CLUBS.filter((c) => active === 'all' || c.cat === active)
  const status =
    active === 'all'
      ? `Showing all ${CLUBS.length} clubs and societies`
      : `Showing ${visible.length} of ${CLUBS.length} clubs`

  return (
    <section id="clubs-directory" className="w-full bg-surface-container-low py-16 lg:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 block text-label-caps font-bold uppercase tracking-widest text-primary">
              EXPLORE OUR CLUBS
            </p>
            <h2 className="text-headline-lg-mobile font-bold tracking-tight text-primary md:text-headline-lg">
              Co-Curricular Clubs &amp; Societies
            </h2>
          </div>
          <p className="max-w-md text-body-md text-on-surface-variant">
            Every student joins at least one academic or athletic society per term, with certified
            coaches and experienced faculty advisors guiding their growth.
          </p>
        </div>

        <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-4" role="group" aria-label="Filter clubs by category">
          {CLUB_FILTERS.map((f) => {
            const on = active === f.id
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => onChange(f.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-label-md font-semibold transition-all duration-200 ${
                  on
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'bg-surface text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <p
          role="status"
          className="sr-only mb-6 flex items-center gap-2 text-label-md font-semibold text-on-surface-variant md:not-sr-only"
        >
          <M className="text-[16px] text-primary">filter_list</M>
          <span>{status}</span>
        </p>

        <StaggerGroup key={active} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <StaggerItem key={c.title} className="flex">
              <ClubCard c={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
