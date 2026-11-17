import { Reveal } from "@/components/reveal";
import { PrincipleMark } from "@/components/sections/principle-mark";
import type { Dictionary, Locale } from "@/content/dictionary";

export function Differentiator({ t, locale }: { t: Dictionary; locale: Locale }) {
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
        <div className="mt-16 md:mt-24">
          <PrincipleMark principles={copy.principles} rtl={locale === "ar"} />
        </div>
      </div>
    </section>
  );
}
