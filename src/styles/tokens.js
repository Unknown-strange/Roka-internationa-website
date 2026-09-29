/* ==================================================================
   ROKA INTERNATIONAL SCHOOL — DESIGN TOKENS (JS reference)

   The working tokens live in `src/index.css` under `@theme`.
   This module mirrors them so colors can be referenced from JS/TS
   (charts, inline styles, PDF/export templates, tests).

   RULES
   • Deep Solar Gold is the MAIN colour; Deep Royal Navy is SECONDARY.
   • Terracotta is used sparingly.
   • GREEN IS BANNED in every token, state and illustration.
   • Success states = Deep Solar Gold checkmarks on Deep Royal Navy.
   • Only the DEEP gold may fill a large surface; vivid gold (#f5b716)
     is reserved for accents and never used as a background fill.
   ================================================================== */

export const COLORS = {
  /* ---- Primary: Deep Solar Gold (main brand colour) ---- */
  primary: '#7a5900',
  onPrimary: '#ffffff',
  primaryContainer: '#febf22',
  onPrimaryContainer: '#6d4f00',
  inversePrimary: '#ffdea2',
  primaryFixed: '#ffdea2',
  primaryFixedDim: '#fbbc1e',
  onPrimaryFixed: '#261900',
  onPrimaryFixedVariant: '#5c4200',
  amberRoyal: '#a87a05', // rich gold — contrast bands
  amberBase: '#6b4a00', // deep gold — admissions band
  amberDeep: '#3d2a00', // deepest gold — footer, facilities band
  charcoal: '#1e293b', // Charcoal Ink — headings & body
  mutedSlate: '#64748b', // Muted Slate — metadata, subtle icons

  /* ---- Secondary: Deep Royal Navy (accents, CTAs, detail) ---- */
  secondary: '#00194c',
  onSecondary: '#ffffff',
  secondaryContainer: '#132e6b',
  onSecondaryContainer: '#8198db',
  secondaryFixed: '#dbe1ff',
  secondaryFixedDim: '#b3c5ff',
  onSecondaryFixed: '#001849',
  onSecondaryFixedVariant: '#2c4481',
  navyRoyal: '#132e6b', // Deep Royal Navy
  navyBase: '#0d2354', // Base navy
  navyDeep: '#081534', // Deep Navy Base
  gold: '#f5b716', // Vivid gold accent (never a large fill)
  goldHover: '#f9ba1a',

  /* ---- Tertiary: Terracotta (used sparingly) ---- */
  tertiary: '#3e0900',
  onTertiary: '#ffffff',
  tertiaryContainer: '#631400',
  onTertiaryContainer: '#ff6b43',
  tertiaryFixed: '#ffdbd1',
  tertiaryFixedDim: '#ffb5a1',
  onTertiaryFixed: '#3c0800',
  onTertiaryFixedVariant: '#881f00',
  terracotta: '#d94e28',
  terracottaDark: '#c83e1b',

  /* ---- Surfaces (warm gold-tinted) ---- */
  surface: '#fffcf6',
  surfaceDim: '#e9dcc4',
  surfaceBright: '#fffcf6',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#fdf8ef',
  surfaceContainer: '#faf0df',
  surfaceContainerHigh: '#f6ecd6',
  surfaceContainerHighest: '#f1e5c9',
  surfaceVariant: '#f1e5c9',
  surfaceTint: '#a87a05',
  softSlate: '#fdfaf4', // architectural band 2
  softSlate2: '#f7f1e6',

  /* ---- Text ---- */
  onSurface: '#111c2d',
  onSurfaceVariant: '#444650',
  onBackground: '#111c2d',
  inverseSurface: '#241b0a',
  inverseOnSurface: '#fdf6e7',

  /* ---- Outline / dividers (warm) ---- */
  outline: '#7a7266',
  outlineVariant: '#d6cdba',
  hairline: '#ece4d4',

  /* ---- Error (never green) ---- */
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
}

/** Colour roles for full-bleed alternating section bands. */
export const BANDS = {
  white: COLORS.surfaceContainerLowest, // #ffffff
  slate: COLORS.softSlate, // #fdfaf4
  slateAlt: COLORS.softSlate2, // #f7f1e6
  tinted: COLORS.surfaceContainer, // #faf0df
  gold: COLORS.amberDeep, // #3d2a00 — high-impact / footer
  goldMid: COLORS.amberBase, // #6b4a00 — admissions band
}

/** Elevation — warm-tinted, never neutral black. */
export const ELEVATION = {
  cardRest: 'none',
  cardHover: '0 8px 24px -4px rgba(122, 89, 0, 0.10)',
  overlay: '0 16px 36px -6px rgba(61, 42, 0, 0.20)',
  cta: '0 10px 24px -8px rgba(0, 25, 76, 0.45)',
  borderLight: `1px solid ${COLORS.hairline}`,
  borderOnGold: '1px solid rgba(255, 255, 255, 0.18)',
}

/** Typography scale — Plus Jakarta Sans across every level. */
export const TYPE = {
  'display-hero': { size: 56, line: 64, weight: 800, tracking: '-0.03em' },
  'display-hero-mobile': { size: 36, line: 44, weight: 800, tracking: '-0.02em' },
  'headline-lg': { size: 40, line: 48, weight: 700, tracking: '-0.02em' },
  'headline-lg-mobile': { size: 28, line: 36, weight: 700, tracking: '-0.01em' },
  'headline-md': { size: 28, line: 36, weight: 700, tracking: '-0.01em' },
  'headline-sm': { size: 22, line: 28, weight: 600, tracking: '0' },
  'title-md': { size: 18, line: 24, weight: 600, tracking: '0' },
  'body-lg': { size: 18, line: 28, weight: 400, tracking: '0' },
  'body-md': { size: 16, line: 24, weight: 400, tracking: '0' },
  'body-sm': { size: 14, line: 20, weight: 400, tracking: '0' },
  'label-lg': { size: 15, line: 20, weight: 600, tracking: '0.01em' },
  'label-md': { size: 13, line: 18, weight: 600, tracking: '0.02em' },
  'label-caps': { size: 11, line: 16, weight: 700, tracking: '0.08em' },
}

/** Radius scale. */
export const RADIUS = {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
}

/** Layout metrics. */
export const LAYOUT = {
  maxWidth: 1280,
  gutterDesktop: '1.5rem',
  gutterTablet: '1.25rem',
  gutterMobile: '1rem',
  marginDesktop: '3rem',
  marginMobile: '1.25rem',
}

export default COLORS
