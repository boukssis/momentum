"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export type Stage = { index: string; title: string; text: string };

export function Approach({
  index,
  label,
  title,
  note,
  stages,
}: {
  index: string;
  label: string;
  title: string[];
  note: string;
  stages: Stage[];
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = refs.current.filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const next = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(next)) setActive(next);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.2, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [stages.length]);

  function jump(target: number) {
    refs.current[target]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }

  return (
    <section id="approach" className="bg-ink text-ivory">
      <div className="shell py-24 md:py-32">
        <p className="kicker text-orange">
          {index} <span className="ms-3 text-ivory/75">{label}</span>
        </p>
        <h2 className="display tight mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.94]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ivory/75">{note}</p>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-32">
              <div className="relative ps-5">
                <span className="absolute inset-y-0 start-0 w-px bg-white/15" aria-hidden />
                <span
                  className="absolute start-0 top-0 w-px bg-orange transition-[height] duration-500"
                  style={{ height: `${((active + 1) / stages.length) * 100}%` }}
                  aria-hidden
                />
                <ol>
                  {stages.map((stage, item) => (
                    <li key={stage.index}>
                      <button
                        type="button"
                        onClick={() => jump(item)}
                        aria-current={active === item ? "true" : undefined}
                        className={`flex min-h-12 w-full items-baseline gap-4 py-3 text-start transition-colors ${active === item ? "text-ivory" : "text-ivory/60 hover:text-ivory"}`}
                      >
                        <span className="display text-orange">{stage.index}</span>
                        <span className="display text-2xl">{stage.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {stages.map((stage, item) => (
              <article
                key={stage.index}
                id={`approach-${stage.index}`}
                data-index={item}
                ref={(node) => {
                  refs.current[item] = node;
                }}
                className="flex min-h-[48vh] flex-col justify-center border-t border-white/10 py-12 md:min-h-[58vh]"
              >
                <p className="display text-[5.5rem] leading-none text-white/10">{stage.index}</p>
                <h3 className="display tight mt-2 text-[clamp(2.4rem,4vw,3.8rem)] leading-none">{stage.title}</h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/78">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
