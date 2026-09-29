# Roka International School — Animation Spec

> **Status:** implemented in this codebase with **Framer Motion** + CSS transitions
> (React + Vite + Tailwind CSS v4 build).
> Every animation respects `prefers-reduced-motion: reduce` by disabling or
> drastically shortening itself.

## General rules

- **Duration:** 200–400ms for micro-interactions (hovers, buttons), 400–700ms for
  section reveals. Nothing should feel slow or delay the user from reading content.
- **Easing:** "ease-out" for things entering the screen
  (`cubic-bezier(0.16, 1, 0.3, 1)`), "ease-in-out" for looping/continuous motion.
- **Never block interaction:** a CTA button must be clickable immediately, even
  mid-animation.
- **Stagger children** by 60–100ms when animating a group (cards, grid items),
  capped at ~6 items staggered — beyond that, animate remaining items together.

---

## Where each animation lives

| # | Animation | Implementation | File |
|---|-----------|----------------|------|
| 1 | Hero load-in + background slow zoom | `HeroIn` (staggered fade-up) + `animate-kenburns`-style Framer zoom | `src/pages/Home.jsx` (`HeroBackdrop`, `HeroIn`) |
| 2 | Sticky navigation | sliding gold underline, mobile menu slides in from right, backdrop fade, header shadow on scroll | `src/components/Header.jsx` |
| 3 | Card grids fade-up + stagger | `StaggerGroup` / `StaggerItem` | `src/components/motion.jsx` |
| 4 | Curriculum ladder accordion | `AnimatePresence` height/opacity + chevron rotate | `src/pages/Academics.jsx` |
| 5 | Photo grid hover + lightbox | `PhotoTile` hover scale, `AnimatePresence` lightbox (scale 0.95→1) | `src/components/ui.jsx`, `src/pages/Gallery.jsx` |
| 6 | News cards + filter cross-fade | `StaggerGroup` + `AnimatePresence mode="wait"` | `src/pages/News.jsx` |
| 7 | Admission steps draw-in | sequential fade-up + connecting line `scaleX` 0→1 | `src/components/AdmissionSteps.jsx` |
| 8 | Dark blue values/facilities band | heading first, items staggered at 80ms after 150ms | `src/pages/Home.jsx`, `src/pages/About.jsx` |
| 9 | Forms | focus ring, spinner, success scale-in, error shake | `src/components/Form.jsx` |
| 10 | Primary CTA pulse | `.animate-cta-pulse` keyframes, pauses on hover/focus | `src/index.css` |
| 11 | General scroll reveals | `Reveal` (`whileInView`, once, 20% visible) | `src/components/motion.jsx` |

---

## 1. Hero (Home)

- **Effect:** background image slow zoom (scale 1 → 1.05 over 8–10s, looping),
  headline and CTA buttons fade up + slide up 16px on page load.
- **Trigger:** on page load, no scroll needed.
- **Timing:** headline at 0ms, subhead at 100ms, CTAs at 200ms (staggered fade-up).
- **Reduced motion:** disable the background zoom; keep a simple fade-in for text.

**Implementation:** `HeroBackdrop` animates scale 1 → 1.05 over 9s with
`repeat: Infinity, repeatType: 'reverse'`. `<HeroIn delay={0 | 0.1 | 0.2 | 0.3 | 0.45}>`
handles the headline → subhead → CTA → stats sequence. Under reduced motion the
zoom is skipped (`reduce ? { scale: 1 }`) and only opacity animates.

## 2. Sticky Navigation

- **Effect:** underline/pill indicator slides to the hovered/active nav item;
  mobile menu slides in from the right (or drops down) with a fade on the backdrop.
- **Trigger:** hover (desktop), tap on hamburger icon (mobile).
- **Timing:** 200ms ease-out.
- **Extra:** header gains a subtle background/shadow on scroll past the hero (150ms).

**Implementation:** each nav link renders an `absolute` gold bar with
`origin-left scale-x-0 → scale-x-100` over 200ms. The header toggles
`bg-white/95 backdrop-blur + border + shadow` once `scrollY > 12`. The mobile
drawer animates `x: '100%' → 0` over 280ms with a fading backdrop; accordions
inside use `height: auto` transitions. Body scroll locks while open.

## 3. Curriculum / Values / Facility Cards

- **Effect:** fade up + slide up 20px, staggered across the row/grid.
- **Trigger:** scroll into view (intersection observer, ~20% visible).
- **Timing:** 400ms per card, 80ms stagger between cards.
- **Hover extra:** icon scales to 1.1 and/or shifts color to accent yellow, 150ms ease-out.

**Implementation:** `<StaggerGroup step={0.08}>` with `<StaggerItem>` children —
`viewport={{ once: true, amount: 0.2 }}`, each item `opacity 0 → 1, y 20 → 0` at
400ms. Stagger delay is clamped at 6 items via `staggerDelay(i, step, cap)`.

## 4. Curriculum Ladder (Academics page)

- **Effect:** accordion expand/collapse revealing the subject list for a level.
- **Trigger:** click/tap on the level card or header.
- **Timing:** 300ms height/opacity transition, ease-in-out. Chevron rotates 180°.

**Implementation:** `AnimatePresence` with
`{ height: 0 → 'auto', opacity: 0 → 1 }` at `duration: 0.3, ease: 'easeInOut'`.
Disclosure buttons expose `aria-expanded` + `aria-controls`; the chevron uses
`rotate-90` on open.

## 5. Gallery / Facilities Photo Grid

- **Effect:** image scales to 1.05 on hover with the caption/category label fading
  in over a darkened overlay.
- **Trigger:** hover (desktop) / tap (mobile, toggles overlay).
- **Timing:** 250ms ease-out.
- **Lightbox:** on click, image + overlay fade and scale in from 0.95 → 1 over 250ms;
  background dims with a fade.

**Implementation:** `PhotoTile` uses `group-hover:scale-105` on the media and a
`bg-gradient-to-t from-royal-deep/95` caption bar. The lightbox is a fixed
`bg-royal-deep/90 backdrop-blur-sm` layer with a `motion.div` scaling 0.95 → 1
over 250ms using `EASE_OUT_EXPO`; closes on backdrop click, close button and
`Escape`, with body-scroll lock.

## 6. News / Events Cards

- **Effect:** same staggered fade-up as section 3, applied to the card grid.
- **Trigger:** scroll into view.
- **Extra:** category filter chip switch cross-fades the card grid
  (200ms fade-out old set, 200ms fade-in new set) rather than an abrupt swap.

**Implementation:** `<AnimatePresence mode="wait">` with the grid keyed on the
active category, `transition={{ duration: 0.2 }}`.

## 7. Admission Steps Band

- **Effect:** each step (number + label) draws in sequentially — fade up plus a
  connecting line between steps animating its width from 0 to full.
- **Trigger:** scroll into view.
- **Timing:** 300ms per step, 150ms stagger, line animates alongside the
  following step's entrance.

**Implementation:** `src/components/AdmissionSteps.jsx` — each `<motion.li>`
fades up at `i * 0.15`, and the connector span animates `scaleX: 0 → 1` starting
150ms later. Accepts `tone="dark" | "light"` for blue vs. white backgrounds.

## 8. Values / Facilities Highlight Band (dark blue sections)

- **Effect:** fade up on the heading first, then the icon-and-text items stagger in.
- **Trigger:** scroll into view.
- **Timing:** heading 400ms, items staggered at 80ms each starting 150ms after the heading.

**Implementation:** `<SectionHeading>` is a `Reveal` (400ms), followed by a
`<StaggerGroup step={0.08} delay={0.15}>`. Icons use
`transition-transform duration-150 ease-out hover:scale-110`.

## 9. Forms (Admission Request, Contact)

- **Effect:** input focus — border color transitions to accent yellow/blue, 150ms.
  Submit button shows a spinner/loading state replacing the label while submitting.
  On success, button content swaps to a checkmark + "Sent" with a quick scale-in
  (0.9 → 1, 200ms); on error, a shake animation (small horizontal translate, 300ms)
  plus an inline error message fade-in.
- **Trigger:** focus/blur on inputs; form submit event.

**Implementation:** `src/components/Form.jsx`
(`Field` / `TextArea` / `Select` / `SubmitButton` / `FormMessage` / `useForm`).
- Focus: `focus:border-gold-500 focus:ring-4 focus:ring-gold-300/50` at 150ms.
- Sending: label replaced by an `animate-spin` ring + "Sending…".
- Success: `motion.span` scales 0.9 → 1 with a check icon.
- Error: `.animate-shake` keyframes (300ms) on the button, plus a
  `role="alert"` message fading in; focus moves to the first invalid field.

## 10. Primary CTA Buttons ("Apply Now", "Chat on WhatsApp")

- **Effect:** subtle recurring pulse (scale 1 → 1.03 → 1 + soft box-shadow glow)
  on the primary "Apply Now" button only, elsewhere used sparingly (once per page).
- **Trigger:** continuous, slow loop every 3–4s, pauses on hover/focus.
- **Reduced motion:** disable the pulse entirely; keep the static button styling.

**Implementation:** `.animate-cta-pulse` in `src/index.css` — a 3.5s `roka-pulse`
keyframe animation that pauses on `:hover` / `:focus-visible`. Applied via the
`pulse` prop on the `Button` component. Disabled entirely in the
`prefers-reduced-motion` block.

## 11. General Scroll Reveals

- **Effect:** section headings and intro paragraphs fade up + slide up 16–20px.
- **Trigger:** scroll into view, ~20% visible, animate once (no re-trigger).
- **Timing:** 400–500ms ease-out.

**Implementation:** `Reveal` in `src/components/motion.jsx` using
`whileInView` with `viewport={{ once: true, amount: 0.2 }}` and
`transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}`.

---

## Implementation notes

- **React/Vite:** Framer Motion's `whileInView` for scroll reveals,
  `AnimatePresence` for the news filter cross-fade and lightbox mount/unmount,
  and **CSS transitions** (not Framer Motion) for simple hover states to keep
  bundle weight down.
- **Reduced motion:** every primitive calls `useReducedMotion()` from Framer
  Motion, and `src/index.css` carries a global `prefers-reduced-motion: reduce`
  block that neutralises all animations and transitions as a safety net.
- **Colocation:** animation code lives with its component rather than in one
  global animation file, so each page's motion can be implemented and tested
  independently.
- **Shared easing:** `EASE_OUT_EXPO = [0.16, 1, 0.3, 1]` is exported from
  `src/components/motion.jsx` — import it rather than redefining the curve.

### Adding a new animation

```jsx
import { Reveal, StaggerGroup, StaggerItem, EASE_OUT_EXPO } from '../components/motion'

// Scroll reveal, once, 20% visible
<Reveal delay={0.1}><h2>…</h2></Reveal>

// Staggered grid (80ms between items)
<StaggerGroup className="grid gap-5 sm:grid-cols-3">
  {items.map((item) => (
    <StaggerItem key={item.id}>…</StaggerItem>
  ))}
</StaggerGroup>
```

Check every new animation against the three rules: **200–400ms micro /
400–700ms reveal**, **ease-out on entry**, **never blocks interaction** — and
confirm it is skipped under `prefers-reduced-motion`.
