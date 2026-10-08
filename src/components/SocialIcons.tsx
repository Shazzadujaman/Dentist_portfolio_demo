type IconProps = { className?: string };

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.25-1.5 1.5-1.5H16.7V4c-.3 0-1.25-.1-2.35-.1-2.32 0-3.9 1.42-3.9 4.03V10H8v3h2.45v8h3.05z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.5 9H3.7v11.3h2.8V9zM5.1 4.2a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20.3 13.2c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3.05 1.7V9H10.6c.05.8 0 11.3 0 11.3h2.75v-6.3c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52v6.08h2.75v-6.78z" />
    </svg>
  );
}

export function XIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4 4h4.1l3.5 4.7L15.7 4H20l-6.2 7.2L20.5 20H16.4l-3.9-5.3L8.2 20H4l6.6-7.6L4 4z" />
    </svg>
  );
}
