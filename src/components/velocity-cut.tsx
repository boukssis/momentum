export function VelocityCut({ className = "h-3 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 12" className={className} aria-hidden="true" fill="currentColor">
      <path d="M0 0h74L64 12H0V0z" />
      <path d="M84 0h44v12H74l10-12z" />
    </svg>
  );
}
