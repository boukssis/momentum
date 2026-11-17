"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Principle = { index: string; title: string; text: string };

const bars = ["top", "mid", "bottom"] as const;
const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function MarkBar({ kind }: { kind: (typeof bars)[number] }) {
  const className = "block h-5 w-full sm:h-6";
  if (kind === "mid") {
    return (
      <span className={`relative ${className}`} aria-hidden="true">
        <span
          className="absolute inset-y-0 left-0 bg-orange"
          style={{
            width: "58%",
            clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
          }}
        />
        <span
          className="absolute inset-y-0 right-0 bg-orange"
          style={{
            width: "calc(42% - 14px)",
            clipPath: "polygon(12px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </span>
    );
  }
  if (kind === "bottom") {
    return (
      <span
        className={`${className} bg-ivory`}
        style={{ clipPath: "polygon(14px 0, calc(100% - 18px) 0, calc(100% - 32px) 100%, 0 100%)" }}
        aria-hidden="true"
      />
    );
  }
  return <span className={`${className} bg-ivory`} aria-hidden="true" />;
}

export function PrincipleMark({ principles, rtl }: { principles: Principle[]; rtl: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setOpen(true);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || open) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setOpen(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [open]);

  return (
    <div ref={rootRef} className="bg-ink px-5 py-8 text-ivory sm:px-8 md:px-12 md:py-12" dir="ltr">
      <ol className="flex flex-col gap-2">
        {principles.map((principle, index) => {
          const kind = bars[index] ?? "top";
          const delay = open ? `${index * 120}ms` : "0ms";
          const reveal = `grid transition-[grid-template-rows,opacity] duration-1000 ${ease} ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`;
          return (
            <li key={principle.index} className="relative grid md:grid-cols-12" dir="ltr">
              <div className="min-w-0 md:col-span-7">
                <div className="w-[12.5rem] sm:w-[15.5rem]">
                  <MarkBar kind={kind} />
                </div>
                <div className={reveal} style={{ transitionDelay: delay }}>
                  <div className="overflow-hidden">
                    <h3
                      dir={rtl ? "rtl" : "ltr"}
                      className="display tight max-w-xl pb-8 pt-4 text-left text-[clamp(1.85rem,3vw,3.15rem)] leading-none md:pb-16 md:pt-5"
                    >
                      <span className="me-3 text-[0.42em] text-orange">{principle.index}</span>
                      {principle.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className={reveal} style={{ transitionDelay: delay }}>
                <div className="overflow-hidden md:overflow-visible">
                  <p
                    dir={rtl ? "rtl" : "ltr"}
                    className={`max-w-sm pb-8 text-lg leading-relaxed text-ivory/75 transition-[transform,opacity] duration-700 md:absolute md:bottom-16 md:right-0 md:w-[min(22rem,34%)] md:pb-0 ${ease} ${open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
                    style={{ transitionDelay: open ? `${index * 120 + 180}ms` : "0ms" }}
                  >
                    {principle.text}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
