import { Button } from "@/components/button";
import type { Dictionary } from "@/content/dictionary";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory">
      <div className="shell relative flex flex-1 flex-col pb-8 pt-32 md:pt-36">
        <div className="grid flex-1 items-end gap-10 lg:grid-cols-12">
          <h1 className="display hero-type lg:col-span-8">
            {t.hero.lines.map((line, index) => {
              const last = index === t.hero.lines.length - 1;
              return (
                <span key={line} className="line-mask" style={{ marginInlineStart: `${index * 0.08}em` }}>
                  <span className="line-rise" style={{ animationDelay: `${0.08 + index * 0.12}s` }}>
                    {line}
                    {last ? (
                      <span className="hero-bars" aria-hidden>
                        <i />
                        <i />
                      </span>
                    ) : null}
                  </span>
                </span>
              );
            })}
          </h1>
          <div className="flex max-w-md flex-col gap-8 lg:col-span-4 lg:col-start-9 lg:pb-4">
            <p className="kicker text-ivory/70">{t.hero.eyebrow}</p>
            <p className="text-lg leading-relaxed text-ivory/85 md:text-xl">{t.hero.support}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">{t.hero.primary}</Button>
              <Button href="#expertise" variant="ghost-light">
                {t.hero.secondary}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-end justify-between gap-6">
          <a href="#manifesto" className="kicker inline-flex items-center gap-4 text-ivory/70 hover:text-ivory">
            <span className="block h-14 w-px bg-orange" aria-hidden />
            {t.hero.scroll}
          </a>
          <p className="kicker text-end text-ivory/70">{t.hero.meta}</p>
        </div>
      </div>
    </section>
  );
}
