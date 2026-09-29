/**
 * Inline SVG icon set (no icon-library dependency).
 * Usage: <Icon name="bus" className="size-6" />
 */

const PATHS = {
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
  ),
  hand: (
    <path d="M9 11V5.5a1.5 1.5 0 1 1 3 0V11m0-1.5V4.5a1.5 1.5 0 0 1 3 0V11m0-1v-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-3a1.5 1.5 0 0 1 3 0" />
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z" />
  ),
  trophy: (
    <path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4.5A1.5 1.5 0 0 0 3 7.5v.5a3 3 0 0 0 3 3h1M17 6h2.5A1.5 1.5 0 0 1 21 7.5v.5a3 3 0 0 1-3 3h-1M9 20h6M12 14v6" />
  ),
  home: (
    <path d="M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5M10 20v-5h4v5" />
  ),
  bus: (
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16zM4 11h16M7.5 17.5v2M16.5 17.5v2M8 14.2h.01M16 14.2h.01" />
  ),
  flask: (
    <path d="M9.5 3v6.2L4.8 17a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3l-4.7-7.8V3M8 3h8M6.6 14.5h10.8" />
  ),
  book: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m5 13 4 4L19 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  whatsapp: (
    <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.5a8.4 8.4 0 1 1 15.5-4.3zM8.9 9.2c.2-.5.4-.5.7-.5h.6c.2 0 .5 0 .7.5l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.2 1.5 1.7.7.6 1.2.7 1.4.8.3.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .6-.3 1.4-.9 1.8-.5.4-1.3.5-2 .4-1.7-.4-3.7-1.7-5.2-3.4-1-1.2-1.7-2.6-1.9-3.7-.1-.7 0-1.4.4-1.9z" />
  ),
  phone: <path d="M4.5 5.5c0-1 1-2 2-2h1.7c.5 0 1 .3 1.2.8l.9 2.4c.2.5.1 1-.3 1.3l-1 .8a12 12 0 0 0 5.4 5.4l.8-1c.3-.4.9-.5 1.3-.3l2.4.9c.5.2.8.7.8 1.2v1.7c0 1-1 2-2 2A14.5 14.5 0 0 1 4.5 5.5z" />,
  mail: <path d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6 8.5-6" />,
  pin: <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7.5V12l3 2" />,
  download: <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4.5 19.5h15" />,
  external: <path d="M14 4h6v6M20 4l-8.5 8.5M18 14v5.5A1.5 1.5 0 0 1 16.5 21h-11A1.5 1.5 0 0 1 4 19.5v-11A1.5 1.5 0 0 1 5.5 7H11" />,
  calendar: <path d="M4.5 6.5h15v13h-15zM8 3.5v4M16 3.5v4M4.5 11h15" />,
  users: <path d="M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16.5 5.2a3.5 3.5 0 0 1 0 6.6M17 14.4a6.5 6.5 0 0 1 4.5 5.6" />,
  cap: <path d="M12 4 2.5 9 12 14l9.5-5zM6.5 11.5V17c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-5.5M21.5 9v5" />,
  shield: <path d="M12 3 5 5.5v6c0 4.3 3 7.9 7 9.5 4-1.6 7-5.2 7-9.5v-6zM9 12l2 2 4-4" />,
}

export default function Icon({ name, className = 'size-5', strokeWidth = 1.7 }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {d}
    </svg>
  )
}
