import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT_EXPO } from './motion'
import { ADMISSION_STEPS } from '../data/content'

/**
 * Admission steps band (spec #7).
 * Each step fades up as the connecting line grows from 0 to full width.
 * 300ms per step, 150ms stagger, line animates with the following step.
 */
export default function AdmissionSteps({ tone = 'dark' }) {
  const reduce = useReducedMotion()
  const dark = tone === 'dark'

  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {ADMISSION_STEPS.map((s, i) => (
        <motion.li
          key={s.step}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: i * 0.15, ease: EASE_OUT_EXPO }}
          className="relative"
        >
          {/* Connecting line — grows in alongside the next step */}
          {i < ADMISSION_STEPS.length - 1 && (
            <motion.span
              aria-hidden="true"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.15 + 0.15, ease: EASE_OUT_EXPO }}
              className={`absolute left-14 top-6 hidden h-0.5 origin-left lg:block ${
                dark ? 'bg-white/25' : 'bg-royal-100'
              }`}
              style={{ width: 'calc(100% - 3.5rem)' }}
            />
          )}

          <div
            className={`relative flex h-full flex-col rounded-card border p-5 ${
              dark ? 'border-white/15 bg-white/5' : 'border-hair bg-white'
            }`}
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-gold-500 font-display text-base font-black text-royal-900">
              {s.step}
            </span>
            <h3 className={`mt-4 text-lg ${dark ? 'text-white' : 'text-ink'}`}>{s.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-royal-200' : 'text-ink-soft'}`}>
              {s.body}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
