import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EndCta } from "@/components/page-hero";
import { Button } from "@/components/button";
import { getDictionary } from "@/lib/locale";
import { getService, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  const { locale } = await getDictionary();
  if (!service) return { title: "Momentum" };
  const copy = service[locale];
  return {
    title: copy.title,
    description: copy.proposition,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { locale, t } = await getDictionary();
  const copy = service[locale];
  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <header className="bg-ink pb-16 pt-32 text-ivory md:pb-24 md:pt-40">
        <div className="shell">
          <p className="kicker text-orange">
            {service.index} <span className="ms-3 text-ivory/60">{t.nav.expertise}</span>
          </p>
          <h1 className="display tight mt-6 max-w-5xl text-[clamp(3rem,7.5vw,6.8rem)] leading-[0.9]">{copy.title}</h1>
          <p className="editorial mt-8 max-w-3xl text-3xl leading-snug text-ivory/85 md:text-4xl">{copy.proposition}</p>
        </div>
      </header>

      <section className="bg-ivory text-ink">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            {copy.story.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <div className="absolute -top-3 start-0 h-1 w-20 bg-orange" aria-hidden />
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image src={service.image} alt={copy.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        {service.secondaryImage && copy.secondaryAlt ? (
          <div className="shell pb-8 md:pb-4">
            <div className="relative ms-auto aspect-[16/8] max-w-4xl overflow-hidden bg-ink">
              <Image src={service.secondaryImage} alt={copy.secondaryAlt} fill sizes="(min-width: 1024px) 56rem, 100vw" className="object-cover" />
            </div>
          </div>
        ) : null}

        <p className="shell pb-2 text-sm text-quiet">{t.servicePage.illustrative}</p>

        <div className="shell grid gap-14 py-12 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="kicker text-quiet">{t.servicePage.capabilities}</h2>
            <ol className="mt-6 border-t border-ink/15">
              {copy.capabilities.map((item, index) => (
                <li key={item} className="grid grid-cols-[3.25rem_1fr] items-baseline gap-4 border-b border-ink/15 py-5">
                  <span className="display">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xl">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="kicker text-quiet">{t.servicePage.thinking}</p>
            <p className="editorial mt-5 text-3xl leading-snug">{copy.note}</p>
            <div className="mt-8">
              <Button href="/contact" variant="ink">
                {t.closing.cta}
              </Button>
            </div>
          </aside>
        </div>

        <div className="shell border-t border-ink/10 py-12">
          <p className="kicker text-quiet">{t.servicePage.related}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="group block border-t border-ink/15 py-4">
                  <span className="text-sm">{item.index}</span>
                  <span className="display link-line mt-2 block text-2xl">{item[locale].title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EndCta title={t.servicePage.end} cta={t.closing.cta} />
    </>
  );
}
