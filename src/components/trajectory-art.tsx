const spine =
  "M220 1320 C280 1120 180 980 340 820 C500 660 420 500 580 380 C740 260 700 140 900 40 L860 92 C700 188 760 308 600 428 C440 548 530 708 370 868 C220 1028 310 1168 250 1320 Z";

const heat =
  "M70 1140 C190 1000 150 860 310 740 C490 600 450 460 610 350 C770 240 830 150 1040 48 L1008 92 C820 186 770 270 620 380 C470 490 510 640 330 780 C170 920 210 1060 100 1164 Z";

const veil = "M340 1380 C300 1140 490 1020 450 820 C410 620 610 500 730 360 C850 220 910 140 1060 36";

const rail = "M520 1180 C610 1040 590 900 730 780 C890 640 860 480 1020 360 C1120 280 1200 210 1320 120";

const travel = "M70 1140 C190 1000 150 860 310 740 C490 600 450 460 610 350 C770 240 830 150 1040 48";

export function TrajectoryArt({
  variant,
  part = "all",
}: {
  variant: "hero" | "close";
  part?: "back" | "front" | "all";
}) {
  const id = `${variant}-${part}`;
  const showBack = part === "all" || part === "back";
  const showFront = part === "all" || part === "front";
  const ink = variant === "close";

  return (
    <svg
      className="trajectory-art"
      viewBox="0 0 1200 1400"
      preserveAspectRatio={variant === "hero" ? "xMaxYMid slice" : "xMaxYMid meet"}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-veil`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={ink ? "#070708" : "#f3f0e8"} stopOpacity="0" />
          <stop offset="0.4" stopColor={ink ? "#070708" : "#f3f0e8"} stopOpacity={ink ? "0.16" : "0.2"} />
          <stop offset="1" stopColor={ink ? "#070708" : "#f3f0e8"} stopOpacity={ink ? "0.34" : "0.42"} />
        </linearGradient>
        <linearGradient id={`${id}-heat`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={ink ? "#070708" : "#9a3000"} stopOpacity={ink ? "0.2" : "1"} />
          <stop offset="0.48" stopColor={ink ? "#070708" : "#fd4e00"} stopOpacity={ink ? "0.55" : "1"} />
          <stop offset="1" stopColor={ink ? "#070708" : "#ffd0c2"} stopOpacity={ink ? "0.85" : "1"} />
        </linearGradient>
      </defs>
      {showBack ? (
        <g className="trajectory-back">
          <path className="ribbon-fill" d={spine} fill={`url(#${id}-veil)`} />
          <path className="ribbon ribbon-slow" d={veil} pathLength={1} stroke={ink ? "rgba(7,7,8,0.45)" : "rgba(243,240,232,0.55)"} strokeWidth="1.6" />
        </g>
      ) : null}
      {showFront ? (
        <g>
          <path className="ribbon ribbon-mid" d={rail} pathLength={1} stroke={ink ? "rgba(7,7,8,0.55)" : "rgba(243,240,232,0.78)"} strokeWidth="2.2" />
          <path className="ribbon-fill ribbon-fill-late" d={heat} fill={`url(#${id}-heat)`} />
          <polygon className="traveler" points="0,0 18,0 13,6 -5,6" fill={ink ? "#070708" : "#fd4e00"} style={{ offsetPath: `path('${travel}')` }} />
        </g>
      ) : null}
    </svg>
  );
}
