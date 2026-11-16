import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, EndCta } from "@/components/page-hero";
import { Button } from "@/components/button";
import { getDictionary } from "@/lib/locale";
import { services } from "@/content/services";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.nav.expertise,
    description: t.servicesPage.intro,
    alternates: { canonical: "/services" },
  };
}

export default async function ServicesPage() {
  const { locale, t } = await getDictionary();

  return (
    <>
      <PageHero eyebrow={t.servicesPage.eyebrow} title={t.servicesPage.title} intro={t.servicesPage.intro} />
      <div className="bg-ivory text-ink">
        {services.map((service, index) => {
          const copy = service[locale];
          const flipped = index % 2 === 1;
          return (
            <article key={service.slug} className="border-t border-ink/10">
              <div className="shell grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
                <div className={flipped ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className="absolute -top-3 start-0 h-1 w-20 bg-orange" aria-hidden />
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image src={service.image} alt={copy.imageAlt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className={flipped ? "lg:order-1" : ""}>
                  <p className="display text-5xl">{service.index}</p>
                  <h2 className="display tight mt-3 text-[clamp(2.4rem,4vw,4rem)] leading-none">{copy.title}</h2>
                  <p className="editorial mt-6 text-2xl leading-snug text-ink/80 md:text-3xl">{copy.proposition}</p>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">{copy.summary}</p>
                  <div className="mt-8">
                    <Button href={`/services/${service.slug}`} variant="ink">
                      {t.servicesPage.view}
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <p className="shell pb-12 text-sm text-quiet">{t.servicePage.illustrative}</p>
      </div>
      <EndCta title={t.servicesPage.end} cta={t.closing.cta} />
    </>
  );
}
