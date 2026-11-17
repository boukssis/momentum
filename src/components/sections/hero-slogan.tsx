const kinds = ["top", "mid", "bottom"] as const;

type Kind = (typeof kinds)[number];

function LogoStroke({ kind }: { kind: Kind }) {
  if (kind === "mid") {
    return (
      <span className="relative block h-full w-full bg-ink">
        <span
          className="absolute inset-y-0 left-0 bg-orange"
          style={{ width: "58%", clipPath: "polygon(0 0, 100% 0, calc(100% - 0.22em) 100%, 0 100%)" }}
        />
        <span
          className="absolute inset-y-0 right-0 bg-orange"
          style={{ width: "calc(42% - 0.16em)", clipPath: "polygon(0.22em 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </span>
    );
  }
  if (kind === "bottom") {
    return (
      <span className="relative block h-full w-full bg-ink">
        <span
          className="absolute inset-0 bg-ivory"
          style={{ clipPath: "polygon(0.14em 0, calc(100% - 0.1em) 0, calc(100% - 0.28em) 100%, 0 100%)" }}
        />
      </span>
    );
  }
  return (
    <span className="relative block h-full w-full bg-ink">
      <span className="absolute inset-0 bg-ivory" />
    </span>
  );
}

export function HeroSlogan({ lines }: { lines: string[] }) {
  return (
    <h1 className="hero-slogan relative mt-5">
      <span
        className="grid"
        style={{ gridTemplateColumns: `repeat(${lines.length}, max-content)`, columnGap: "0.12em" }}
      >
        {lines.map((line, index) => (
          <span key={line} className="block" style={{ gridColumn: index + 1, gridRow: index + 1 }}>
            <span
              className="hero-slogan-line mb-[0.16em] block h-[0.07em] w-[1.15em]"
              style={{ animationDelay: `${0.12 + index * 0.46}s` }}
              aria-hidden
            >
              <LogoStroke kind={kinds[index] ?? "bottom"} />
            </span>
            <span className="hero-slogan-word block" style={{ animationDelay: `${0.34 + index * 0.46}s` }}>
              {line}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}
