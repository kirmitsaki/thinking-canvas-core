type Props = { size?: number; className?: string };

export default function LinkedInIcon({ size = 20, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5v6" />
      <circle cx="8" cy="7.5" r="0.6" />
      <path d="M12 16.5v-6" />
      <path d="M12 13c0-1.5 1-2.5 2.25-2.5S16.5 11.5 16.5 13v3.5" />
    </svg>
  );
}
