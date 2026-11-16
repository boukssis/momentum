import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/content/dictionary";

export function Manifesto({ t }: { t: Dictionary }) {
  const copy = t.manifesto;
  return (
    <section id="manifesto" className="bg-ivory text-ink">
      <div className="shell section-pad py-24 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="kicker">
              <span>{copy.index}</span>
              <span className="ms-3 text-quiet">{copy.label}</span>
            </p>
            <h2 className="display tight mt-8 text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.96]">
              <span className="block">{copy.lines[0]}</span>
              <span className="editorial mt-2 block ps-[0.12em] text-[0.92em]">{copy.lines[1]}</span>
              <span className="mt-2 block">{copy.lines[2]}</span>
            </h2>
          </Reveal>
          <Reveal className="flex flex-col justify-end lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/80">{copy.body}</p>
            <ul className="mt-10 border-t border-ink/15">
              {copy.pillars.map((pillar) => (
                <li key={pillar.title} className="grid gap-2 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline">
                  <span className="display text-lg">{pillar.title}</span>
                  <span className="text-quiet">{pillar.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
