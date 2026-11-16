import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, EndCta } from "@/components/page-hero";
import { Leadership } from "@/components/sections/leadership";
import { getDictionary } from "@/lib/locale";
import { services } from "@/content/services";
import { addressLines } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.nav.about,
    description: t.aboutPage.lead,
    alternates: { canonical: "/about" },
  };
}

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const lines = addressLines(locale);

  return (
    <>
      <PageHero eyebrow={t.aboutPage.eyebrow} title={t.aboutPage.title} intro={t.aboutPage.lead} />
      <section className="bg-ivory text-ink">
        <div className="shell grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <h2 className="display tight text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] lg:col-span-5">{t.aboutPage.philosophyTitle}</h2>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {t.aboutPage.philosophy.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="shell border-t border-ink/10 py-16 md:py-20">
          <p className="kicker text-quiet">{t.aboutPage.positionTitle}</p>
          <ul className="mt-10 grid gap-12 lg:grid-cols-3">
            {t.aboutPage.positions.map((item) => (
              <li key={item.title} className="border-t border-ink pt-5">
                <h3 className="display text-[clamp(1.7rem,2vw,2.2rem)] leading-none">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="shell py-16">
          <p className="kicker text-quiet">{t.aboutPage.disciplinesTitle}</p>
          <ul className="mt-6 border-t border-ink/15">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-ink/15">
                <Link href={`/services/${service.slug}`} className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 py-6">
                  <span className="display">{service.index}</span>
                  <span className="display text-3xl group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{service[locale].title}</span>
                  <span aria-hidden className="text-quiet rtl:scale-x-[-1]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="shell pb-8">
          <p className="kicker text-quiet">{t.contact.address}</p>
          <address className="mt-4 text-lg not-italic leading-relaxed">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </section>
      <Leadership t={t} locale={locale} />
      <EndCta title={t.aboutPage.end} cta={t.closing.cta} />
    </>
  );
}
