import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/content/dictionary";

export function ClosingCta({ t }: { t: Dictionary }) {
  return (
    <section className="bg-orange text-ink">
      <div className="shell py-24 md:py-36">
        <Reveal>
          <h2 className="display tight text-[clamp(3.3rem,10vw,8.2rem)] leading-[0.86]">
            {t.closing.lines.map((line, index) => (
              <span key={line} className="block" style={{ marginInlineStart: `${index * 0.06}em` }}>
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:mt-16 md:flex-row md:items-end">
            <p className="max-w-md text-lg leading-relaxed md:text-xl">{t.closing.support}</p>
            <Button href="/contact" variant="ink">
              {t.closing.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
