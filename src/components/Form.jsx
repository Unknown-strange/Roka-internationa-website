import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { EASE_OUT_EXPO } from './motion'
import Icon from './Icon'

/**
 * Form kit — implements animation spec #9 (Forms):
 *  - input focus: border transitions to the gold/blue accent in 150ms
 *  - submitting: button label is replaced by a spinner
 *  - success: button swaps to a checkmark + "Sent" scaling in 0.9 -> 1 (200ms)
 *  - error: small horizontal shake (300ms) + inline error message fade-in
 * All states respect prefers-reduced-motion.
 */

const FOCUS_RING =
  'focus:border-gold-500 focus:ring-4 focus:ring-gold-300/50 focus:outline-none'

export function Field({ label, name, type = 'text', value, onChange, error, hint, required, ...rest }) {
  const id = `field-${name}`
  const errId = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-ember-500" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errId : hint ? `${id}-hint` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink transition-colors duration-150 ease-out placeholder:text-ink-mute ${
          error ? 'border-ember-500 ring-4 ring-ember-500/15' : 'border-hair'
        } ${FOCUS_RING}`}
        {...rest}
      />

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-mute">
          {hint}
        </p>
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            id={errId}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-1.5 text-sm font-medium text-ember-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export function TextArea({ label, name, value, onChange, error, hint, required, rows = 5, ...rest }) {
  const id = `field-${name}`
  const errId = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-ember-500" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errId : hint ? `${id}-hint` : undefined}
        className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-ink transition-colors duration-150 ease-out placeholder:text-ink-mute ${
          error ? 'border-ember-500 ring-4 ring-ember-500/15' : 'border-hair'
        } ${FOCUS_RING}`}
        {...rest}
      />

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-mute">
          {hint}
        </p>
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            id={errId}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-1.5 text-sm font-medium text-ember-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Select({ label, name, value, onChange, error, options, required, ...rest }) {
  const id = `field-${name}`
  const errId = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-ember-500" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink transition-colors duration-150 ease-out ${
          error ? 'border-ember-500 ring-4 ring-ember-500/15' : 'border-hair'
        } ${FOCUS_RING}`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o} value={o === '' ? '' : o}>
            {o || 'Select…'}
          </option>
        ))}
      </select>

      <AnimatePresence>
        {error && (
          <motion.p
            id={errId}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-1.5 text-sm font-medium text-ember-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Submit button with loading / success / error states.
 * `status` is one of 'idle' | 'sending' | 'success' | 'error'.
 */
export function SubmitButton({ status, idleLabel = 'Send', successLabel = 'Sent', errorLabel = 'Try again' }) {
  const reduce = useReducedMotion()
  const isError = status === 'error'

  const label = () => {
    if (status === 'sending') {
      return (
        <>
          <span
            className="size-4 animate-spin rounded-full border-2 border-royal-900/30 border-t-royal-900"
            aria-hidden="true"
          />
          Sending…
        </>
      )
    }
    if (status === 'success') {
      return (
        <motion.span
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
          className="inline-flex items-center gap-2"
        >
          <Icon name="check" className="size-4" strokeWidth={2.6} />
          {successLabel}
        </motion.span>
      )
    }
    return isError ? errorLabel : idleLabel
  }

  return (
    <button
      type="submit"
      disabled={status === 'sending'}
      className={`ring-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-bold text-royal-900 transition-all duration-200 ease-out hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70 ${
        isError ? 'animate-shake' : ''
      }`}
    >
      {label()}
    </button>
  )
}

/** Success / error banner that appears after submit. */
export function FormMessage({ status, children }) {
  return (
    <AnimatePresence>
      {status === 'success' || status === 'error' ? (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
          className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm ${
            status === 'success'
              ? 'border-royal-200 bg-royal-50 text-royal-700'
              : 'border-ember-400 bg-ember-500/5 text-ember-600'
          }`}
        >
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
              status === 'success' ? 'bg-royal text-white' : 'bg-ember-500 text-white'
            }`}
          >
            <Icon
              name={status === 'success' ? 'check' : 'close'}
              className="size-3"
              strokeWidth={3}
            />
          </span>
          <span>{children}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------
   Validation helpers
------------------------------------------------------------------- */

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

export function validate(rules, values) {
  const errors = {}
  for (const [field, fns] of Object.entries(rules)) {
    for (const fn of fns) {
      const msg = fn(values[field], values)
      if (msg) {
        errors[field] = msg
        break
      }
    }
  }
  return errors
}

export const required = (label) => (v) =>
  !v || !String(v).trim() ? `${label} is required.` : ''

export const emailRule = () => (v) => (!v ? '' : isEmail(v) ? '' : 'Enter a valid email address.')

/**
 * Reusable submit flow for controlled forms.
 *
 * `setValues` should point at the page's state setter so the form can be
 * cleared on success; `empty` is the blank value object.
 *
 * TODO(INTEGRATION): `send` is where the form service goes.
 * Point it at Formspree / Resend / a serverless function, e.g.
 *   fetch('https://formspree.io/f/XXXX', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(values) })
 * Until then it resolves after a short delay so every UI state is testable.
 */
export function useForm({ rules, values, setValues, empty, onSuccess }) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e, send) => {
    e.preventDefault()

    const found = validate(rules, values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('error')
      // Move focus to the first invalid field for keyboard / AT users
      const first = Object.keys(found)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }

    setStatus('sending')
    try {
      await send(values)
      setStatus('success')
      setErrors({})
      if (setValues && empty) setValues(empty)
      onSuccess?.()
    } catch {
      setStatus('error')
    }
  }

  return { errors, setErrors, status, setStatus, handleSubmit }
}
