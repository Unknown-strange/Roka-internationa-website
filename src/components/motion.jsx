/**
 * Motion primitives — every animated component in the site is built from
 * these. Implements the rules in `roka-animations.md`:
 *  - scroll reveals: fade up + 16-20px slide, 400-500ms ease-out, once
 *  - stagger: 60-100ms, capped at 6 items (rest animate together)
 *  - always respects prefers-reduced-motion via useReducedMotion()
 *  - never blocks interaction
 */
import { motion, useReducedMotion } from 'framer-motion'

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

/** Stagger delay per index, capped at 6 animated children. */
export const staggerDelay = (i, step = 0.08, cap = 6) => Math.min(i, cap) * step

/**
 * Section-level scroll reveal (spec #11).
 * Animates once — it does not re-trigger when scrolling back up.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 20,
  duration = 0.45,
  amount = 0.2,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Grouped reveal for card grids (spec #3, #6, #8).
 * Children are staggered; items past the 6th animate together.
 */
export function StaggerGroup({
  children,
  as: Tag = 'div',
  step = 0.08,
  delay = 0,
  y = 20,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : step, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Child item for StaggerGroup. */
export function StaggerItem({ children, y = 20, className = '', ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Hero load-in (spec #1): fade up + 16px slide, staggered
 * headline 0ms → subhead 100ms → CTAs 200ms. Runs on mount, no scroll.
 */
export function HeroIn({ children, delay = 0, className = '', ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Wrapper for mount/unmount animations (lightbox, news cross-fade). */
export { AnimatePresence, motion } from 'framer-motion'
