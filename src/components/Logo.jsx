/**
 * Roka crest mark — the official shield bearing the motto
 * "The fear of God is the beginning of wisdom".
 *
 * Source: roka_images/cropped-logo-only-Copy-192x192 — a 192×192
 * PNG with a fully transparent background, so it drops straight
 * onto the navy header without a backing plate.
 */
export function LogoMark({ size = 40, className = '' }) {
  return (
    <img
      src="/images/logo-crest.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

/** Crest + stacked wordmark — used in the header and the footer. */
export function Logo({ size = 40, tone = 'light' }) {
  const primary = tone === 'light' ? 'text-on-primary' : 'text-surface-container-lowest'
  const secondary = tone === 'light' ? 'text-surface-container-high' : 'text-on-surface-variant'

  return (
    <span className="flex items-center gap-3">
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className={`text-headline-sm font-extrabold uppercase tracking-tight ${primary}`}>
          Roka
        </span>{' '}
        <span className={`overline ${secondary}`}>International School</span>
      </span>
    </span>
  )
}
