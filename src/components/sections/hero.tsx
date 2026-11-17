import { Button } from "@/components/button";
import { HeroField } from "@/components/sections/hero-field";
import { HeroSlogan } from "@/components/sections/hero-slogan";
import type { Dictionary } from "@/content/dictionary";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="hero-stage relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory">
      <HeroField />
      <div className="shell relative z-10 flex min-h-[100svh] flex-col pb-8 pt-28 max-lg:pt-[26vh] lg:pt-32">
        <div className="flex flex-1 flex-col justify-end max-lg:justify-start">
          <div>
            <p className="kicker text-ivory/70">{t.hero.eyebrow}</p>
            <HeroSlogan lines={t.hero.lines} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ivory/85 md:text-xl">{t.hero.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">{t.hero.primary}</Button>
              <Button href="#expertise" variant="ghost-light">
                {t.hero.secondary}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-end justify-between gap-4">
          <a href="#manifesto" className="kicker inline-flex shrink-0 items-center gap-4 text-ivory/70 hover:text-ivory">
            <span className="block h-14 w-px bg-orange" aria-hidden />
            {t.hero.scroll}
          </a>
          <p className="kicker max-w-[11rem] text-end text-ivory/70 sm:max-w-none">{t.hero.meta}</p>
        </div>
      </div>
    </section>
  );
}
