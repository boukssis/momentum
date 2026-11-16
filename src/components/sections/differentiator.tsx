import { Reveal } from "@/components/reveal";
import { VelocityCut } from "@/components/velocity-cut";
import type { Dictionary } from "@/content/dictionary";

export function Differentiator({ t }: { t: Dictionary }) {
  const copy = t.diff;
  return (
    <section className="bg-paper text-ink">
      <div className="shell py-24 md:py-36">
        <Reveal>
          <p className="kicker">
            <span>{copy.index}</span>
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <h2 className="display tight text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.94] lg:col-span-7">
              {copy.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">{copy.intro}</p>
          </div>
        </Reveal>
        <ol className="mt-20 space-y-16 md:mt-28 md:space-y-24">
          {copy.principles.map((principle, index) => (
            <li key={principle.index}>
              <Reveal>
                <div className={index === 1 ? "lg:ps-[12vw]" : index === 2 ? "lg:ps-[5vw]" : ""}>
                  <VelocityCut className={`h-3 ${index === 1 ? "w-40 text-orange md:w-64" : "w-24 text-ink"}`} />
                  <div className="mt-6 grid items-end gap-4 lg:grid-cols-12">
                    <h3 className="display tight text-[clamp(2rem,4vw,3.5rem)] leading-none lg:col-span-6">
                      <span className="me-3 text-[0.42em]">{principle.index}</span>
                      {principle.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-8">{principle.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
