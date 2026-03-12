type IconProps = { className?: string };

export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M6.5 4.5v11l9-5.5-9-5.5z" />
    </svg>
  );
}

export function ChartBarIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="10" width="3.5" height="7" rx="0.5" />
      <rect x="8.25" y="5" width="3.5" height="12" rx="0.5" />
      <rect x="13.5" y="3" width="3.5" height="14" rx="0.5" />
    </svg>
  );
}

export function UserCircleIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.834 2.855" />
    </svg>
  );
}

export function ArrowRightStartOnRectangleIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3h3a1 1 0 011 1v12a1 1 0 01-1 1h-3M8 13l4-3-4-3M12 10H3" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="14" height="13" rx="2" />
      <path d="M3 8h14M7 2v4M13 2v4" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 8 10 12 14 8" />
    </svg>
  );
}

export function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 12 10 8 14 12" />
    </svg>
  );
}

export function SyncDotIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="#22C55E" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3.5" />
      <circle cx="10" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14l8-8M7 6h7v7" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 7a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 100-4 2 2 0 000 4zM15 17a2 2 0 100-4 2 2 0 000 4zM7 11l6 3M13 6l-6 3" />
    </svg>
  );
}

export function XTwitterIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M11.47 8.96L16.53 3h-1.2L10.93 8.16 7.44 3H3l5.31 7.73L3 17.2h1.2l4.64-5.4 3.71 5.4H17l-5.53-8.24zm-1.64 1.91l-.54-.77L4.88 3.92h1.84l3.46 4.95.54.77 4.49 6.42h-1.84l-3.54-5.19z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M11.25 17.5v-6.57h2.2l.33-2.56h-2.53V6.84c0-.74.2-1.25 1.27-1.25h1.36V3.15A18.2 18.2 0 0012 3.05c-1.97 0-3.31 1.2-3.31 3.4v1.88H6.47v2.56h2.22V17.5h2.56z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.04 3C6.15 3 3 6.13 3 10.01c0 1.24.33 2.44.95 3.5L3 17l3.57-.93A7.01 7.01 0 0010.04 17C13.93 17 17 13.88 17 10.01 17 6.13 13.93 3 10.04 3zm3.48 9.6c-.15.42-.87.8-1.2.85-.33.05-.63.23-2.1-.44-1.78-.8-2.9-2.62-2.99-2.74-.09-.12-.75-.99-.75-1.89 0-.9.47-1.34.64-1.53.17-.18.37-.23.49-.23h.35c.12 0 .28-.04.43.33.16.37.53 1.3.58 1.39.05.1.08.21.02.33-.06.12-.09.2-.18.3-.09.1-.18.23-.27.31-.09.09-.18.18-.08.36.1.18.47.77 1.01 1.24.69.61 1.27.8 1.45.89.18.09.28.08.39-.05.1-.12.45-.53.57-.71.12-.18.24-.15.4-.09.17.06 1.05.5 1.23.59.18.09.3.13.34.21.05.08.05.45-.1.87z" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H7l-4 3V5a1 1 0 011-1z" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h5l5 5v10a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
      <polyline points="11 2 11 7 16 7" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="8" y1="14" x2="14" y2="14" />
    </svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="10" height="14" rx="1" />
      <path d="M8 2h4v2H8z" />
      <line x1="8" y1="8" x2="12" y2="8" />
      <line x1="8" y1="11" x2="12" y2="11" />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15V4l9 4-9 4" />
      <path d="M4 15v2" />
    </svg>
  );
}
