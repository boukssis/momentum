import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { TrajectoryArt } from "@/components/trajectory-art";
import type { Dictionary } from "@/content/dictionary";

export function ClosingCta({ t }: { t: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-orange text-ink">
      <div className="closing-field">
        <TrajectoryArt variant="close" />
      </div>
      <div className="shell relative z-10 py-20 md:py-28">
        <Reveal>
          <h2 className="display tight max-w-5xl text-[clamp(3.3rem,10vw,8.2rem)] leading-[0.86]">
            {t.closing.lines.map((line, index) => (
              <span key={line} className="block" style={{ marginInlineStart: `${index * 0.06}em` }}>
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-8 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
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
