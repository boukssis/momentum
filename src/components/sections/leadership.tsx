import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { company, founderName, founderRole } from "@/content/site";
import type { Dictionary, Locale } from "@/content/dictionary";

export function Leadership({ t, locale }: { t: Dictionary; locale: Locale }) {
  const copy = t.leadership;
  return (
    <section className="bg-ivory text-ink">
      <div className="shell py-24 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative pe-6 pt-6 sm:pe-10 sm:pt-10">
                <div className="absolute end-0 top-0 h-[78%] w-[78%] bg-orange" aria-hidden />
                <ImageReveal className="relative aspect-square bg-ink">
                  <Image
                    src={company.founder.photo}
                    alt={copy.photoAlt}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-[center_18%]"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                </ImageReveal>
              </div>
              <figcaption className="mt-5 text-sm text-quiet">
                {founderName(locale)} · {founderRole(locale)}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="kicker">
              <span>{copy.index}</span>
              <span className="ms-3 text-quiet">{copy.label}</span>
            </p>
            <h2 className="display tight mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.98]">{copy.title}</h2>
            <p className="mt-6 text-sm font-semibold tracking-wide text-ink">
              {founderName(locale)}
              <span className="mt-1 block font-normal text-quiet">{founderRole(locale)}</span>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{copy.bio}</p>
            <div className="mt-8">
              <Button href={company.founder.linkedin} variant="ink" newTabLabel={t.a11y.newTab}>
                {copy.connect}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
