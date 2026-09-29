import { Link } from 'react-router-dom'
import { Reveal } from './motion'
import Icon from './Icon'
import { whatsappLink, CONTACT } from '../data/site'

/* ------------------------------------------------------------------
   Buttons — pill-shaped (design system rule).
   Primary = golden yellow, Secondary = royal blue outline.
------------------------------------------------------------------- */

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  pulse = false,
  icon,
  ...rest
}) {
  const base =
    'ring-focus inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-200 ease-out will-change-transform'

  const variants = {
    primary:
      'bg-gold-500 text-royal-900 hover:bg-gold-400 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border border-royal-200 bg-white text-royal hover:border-royal hover:bg-royal-50',
    ghost: 'text-royal hover:bg-royal-50',
    light: 'bg-white/10 text-white ring-white/30 backdrop-blur hover:bg-white/20 border border-white/25',
    solid: 'bg-royal text-white hover:bg-royal-700 hover:-translate-y-0.5',
  }

  const cls = `${base} ${variants[variant]} ${pulse ? 'animate-cta-pulse' : ''} ${className}`

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="size-4" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}

/* ------------------------------------------------------------------
   Section heading — semantic h2, optional eyebrow label.
------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
  className = '',
}) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <Reveal
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? 'text-gold-400' : 'text-ember-500'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-balance text-3xl sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-royal-100' : 'text-ink-soft'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

/* ------------------------------------------------------------------
   Page header — used at the top of every inner page.
------------------------------------------------------------------- */

export function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="relative overflow-hidden bg-royal-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #f2b705 0, transparent 45%), radial-gradient(circle at 85% 75%, #1e4098 0, transparent 50%)',
        }}
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-royal-100 sm:text-xl">
              {intro}
            </p>
          )}
        </Reveal>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
      <div aria-hidden="true" className="h-1.5 w-full bg-gold-500" />
    </header>
  )
}

/* ------------------------------------------------------------------
   Photo tile — labelled gallery/facility tile.
   Renders a real <img> when `src` is supplied; otherwise a branded
   placeholder (no green) so no tile is ever empty.
------------------------------------------------------------------- */

export function PhotoTile({ src, label, caption, onOpen, className = '', tall = false }) {
  const Wrapper = onOpen ? 'button' : 'div'

  return (
    <Wrapper
      type={onOpen ? 'button' : undefined}
      onClick={onOpen}
      aria-label={onOpen ? `Open image: ${caption || label}` : undefined}
      className={`group relative block w-full overflow-hidden rounded-tile border border-hair text-left transition-all duration-250 ease-out ${
        tall ? 'aspect-[4/5]' : 'aspect-[4/3]'
      } ${onOpen ? 'ring-focus cursor-zoom-in hover:-translate-y-1 hover:border-royal-200' : ''} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={caption || label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #123a8f 0%, #1e4098 55%, #0a1f4d 100%)',
          }}
        >
          <span className="absolute -right-6 -top-6 size-24 rounded-full bg-gold-500/25" />
          <span className="absolute -bottom-8 -left-4 size-32 rounded-full bg-white/10" />
        </div>
      )}

      {/* Caption / category label over a darkened overlay */}
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-royal-deep/95 via-royal-deep/60 to-transparent p-4 opacity-95 transition-opacity duration-250 ease-out">
        <span className="text-sm font-semibold text-white drop-shadow-sm">{caption || label}</span>
        {onOpen && (
          <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-[0.7rem] font-bold text-royal-900 opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100">
            View
          </span>
        )}
      </span>
    </Wrapper>
  )
}

/* ------------------------------------------------------------------
   CTA band — deep blue banner with WhatsApp / Apply actions.
------------------------------------------------------------------- */

export function CtaBand({
  title = 'Ready to join the Roka family?',
  body = 'Start an admission request, or chat with us directly on WhatsApp — we usually reply the same day.',
}) {
  return (
    <section className="bg-royal text-white">
      <div className="container-page grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Admissions open
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-[2.6rem]">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-royal-100">{body}</p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-3 lg:justify-end">
          <Button to="/admission/apply" pulse icon="arrow">
            Apply Now
          </Button>
          <Button href={whatsappLink()} variant="light" icon="whatsapp">
            Chat on WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------- */

export function CheckList({ items, tone = 'light' }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
              tone === 'dark' ? 'bg-gold-500/20 text-gold-400' : 'bg-gold-100 text-gold-700'
            }`}
          >
            <Icon name="check" className="size-3.5" strokeWidth={2.6} />
          </span>
          <span className={tone === 'dark' ? 'text-royal-100' : 'text-ink-soft'}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PlaceholderNote({ children = 'Content to be confirmed before launch.' }) {
  return (
    <p className="rounded-xl border border-dashed border-ember-400/60 bg-ember-500/5 px-4 py-3 text-sm text-ember-600">
      <span className="font-bold uppercase tracking-wider">Placeholder —</span> {children}
    </p>
  )
}

export function ContactStrip() {
  const items = [
    { icon: 'phone', label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    { icon: 'mail', label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: 'pin', label: CONTACT.address },
  ]
  return (
    <ul className="flex flex-wrap gap-x-8 gap-y-4">
      {items.map((it) => (
        <li key={it.icon} className="flex items-center gap-3 text-sm">
          <span className="grid size-9 place-items-center rounded-full bg-royal-50 text-royal">
            <Icon name={it.icon} className="size-4.5" />
          </span>
          {it.href ? (
            <a href={it.href} className="hover:text-royal hover:underline">
              {it.label}
            </a>
          ) : (
            <span className="text-ink-soft">{it.label}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
