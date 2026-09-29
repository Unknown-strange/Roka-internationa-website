/* ------------------------------------------------------------------
   Global site constants — navigation, contact details, external links.
   Anything marked TODO is placeholder data that must be confirmed
   before launch (see "Content Notes" in roka-brief.md).
------------------------------------------------------------------- */

/** TODO(TBD): confirm the school's real WhatsApp number before launch. */
export const WHATSAPP_NUMBER = '233241234567'

/**
 * Contact details as published in the Stitch design export.
 * TODO(TBD): confirm the phone numbers and email are current before launch.
 */
export const CONTACT = {
  phone: '+233 24 123 4567',
  phoneAlt: '+233 50 987 6543',
  email: 'admissions@roka.edu.gh',
  address:
    'Amasaman Main Road, near Satellite Junction, Ga West Municipality, Greater Accra, Ghana',
  shortAddress: 'Amasaman, Ga West Municipality — Greater Accra',
  hours: 'Mon – Fri, 7:30am – 4:30pm',
}

/** The only off-domain destinations allowed in normal navigation. */
export const PORTAL_URL = 'https://app.rokainternationalschool.com'

export const whatsappLink = (message = 'Hello Roka International School, I would like to enquire about admissions.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/**
 * Primary navigation — 7 top-level entries so the bar fits comfortably
 * on large screens (a flat 10-item list measured 882px wide and
 * overflowed the header at 1280px+).
 * Every route in the site map remains reachable via a dropdown.
 */
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Team', to: '/about/team' },
      { label: 'Mission & Vision', to: '/about/mission-vision' },
      { label: 'Our Achievements', to: '/achievements' },
    ],
  },
  { label: 'Academics', to: '/academics' },
  {
    label: 'Admission',
    to: '/admission',
    children: [
      { label: 'Admission Overview', to: '/admission' },
      { label: 'Schedule a Campus Tour', to: '/admission/open-day' },
      { label: 'School Fees', to: '/admission/fees' },
      { label: 'School Sections / Hours', to: '/admission/hours' },
      { label: 'Prospectus', to: '/admission/prospectus' },
      { label: 'Withdrawal of Children', to: '/admission/withdrawal' },
      { label: 'Admission Request Form', to: '/admission/apply' },
    ],
  },
  {
    label: 'Campus',
    to: '/facilities',
    children: [
      { label: 'Facilities', to: '/facilities' },
      { label: 'Activities', to: '/activities' },
      { label: 'Photo Gallery', to: '/gallery' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

/** The four school values — used in the dark blue highlight band. */
export const VALUES = [
  {
    title: 'Empowering',
    body: 'Giving every child the confidence, skills and character to lead.',
    icon: 'spark',
  },
  {
    title: 'Engaging',
    body: 'Curious, hands-on learning that keeps pupils active and involved.',
    icon: 'hand',
  },
  {
    title: 'Celebrating',
    body: 'Recognising effort and achievement in the classroom and beyond.',
    icon: 'star',
  },
  {
    title: 'Awarding',
    body: 'Rewarding growth, discipline and excellence at every level.',
    icon: 'trophy',
  },
]
