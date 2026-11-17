import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { ServicesIndex } from "@/components/sections/services-index";
import { Differentiator } from "@/components/sections/differentiator";
import { Interlude } from "@/components/sections/interlude";
import { Leadership } from "@/components/sections/leadership";
import { Approach } from "@/components/sections/approach";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { getDictionary } from "@/lib/locale";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { company } from "@/content/site";

export default async function HomePage() {
  const { locale, t } = await getDictionary();
  const previews = services.map((service) => ({
    slug: service.slug,
    href: `/services/${service.slug}`,
    index: service.index,
    title: service[locale].title,
    summary: service[locale].summary,
    image: service.image,
    imageAlt: service[locale].imageAlt,
  }));

  return (
    <>
      <Hero t={t} />
      <Manifesto t={t} />
      <section id="expertise" className="bg-ink py-24 text-ivory md:py-36">
        <div className="shell">
          <Reveal>
            <div className="mb-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="kicker text-orange">{t.servicesHome.index}</p>
                <h2 className="display tight mt-6 text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.94]">
                  {t.servicesHome.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </div>
              <div className="flex flex-col items-start justify-end gap-6 lg:col-span-4 lg:col-start-9">
                <p className="text-lg leading-relaxed text-ivory/75">{t.servicesHome.intro}</p>
                <Button href="/services" variant="ghost-light">
                  {t.servicesHome.all}
                </Button>
              </div>
            </div>
          </Reveal>
          <ServicesIndex items={previews} locale={locale} caption={t.servicesHome.illustrative} />
        </div>
      </section>
      <Differentiator t={t} locale={locale} />
      <Interlude t={t} />
      <Leadership t={t} locale={locale} />
      <Approach
        index={t.approach.index}
        label={t.approach.label}
        title={t.approach.title}
        note={t.approach.note}
        stages={t.approach.stages}
      />
      <section id="insights" className="bg-ivory py-24 text-ink md:py-36">
        <div className="shell">
          <Reveal>
            <p className="kicker">
              <span>{t.insightsHome.index}</span>
              <span className="ms-3 text-quiet">{t.insightsHome.label}</span>
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-12">
              <h2 className="display tight text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.96] lg:col-span-7">{t.insightsHome.title}</h2>
              <p className="self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">{t.insightsHome.intro}</p>
            </div>
          </Reveal>
          <div className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
            {insights.map((insight) => {
              const copy = insight[locale];
              return (
                <article key={insight.slug} className="grid gap-4 py-8 md:grid-cols-12 md:items-end md:py-10">
                  <p className="display text-ink/35 md:col-span-1">{insight.index}</p>
                  <div className="md:col-span-7">
                    <h3 className="display text-[clamp(1.8rem,3vw,2.8rem)] leading-none">
                      <Link href={`/insights/${insight.slug}`} className="link-line">
                        {copy.title}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-xl text-ink/70">{copy.dek}</p>
                  </div>
                  <div className="md:col-span-4 md:text-end">
                    <Link href={`/insights/${insight.slug}`} className="kicker link-line text-ink">
                      {t.insightsHome.read}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="link-line mt-8 inline-flex text-sm font-semibold">
            {t.insightsHome.linkedin}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
        </div>
      </section>
      <ClosingCta t={t} />
    </>
  );
}
