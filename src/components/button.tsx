import Link from "next/link";

const variants = {
  orange: "bg-orange text-ink hover:bg-ivory",
  ink: "bg-ink text-ivory hover:bg-orange hover:text-ink",
  ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  "ghost-light": "border border-ivory/30 text-ivory hover:bg-ivory hover:text-ink",
} as const;

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="arrow" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "orange",
  className = "",
  newTabLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  newTabLabel?: string;
}) {
  const external = href.startsWith("http");
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300 ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {external && newTabLabel ? <span className="sr-only"> {newTabLabel}</span> : null}
      <Arrow />
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
