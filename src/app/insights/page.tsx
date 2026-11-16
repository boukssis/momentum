import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, EndCta } from "@/components/page-hero";
import { getDictionary } from "@/lib/locale";
import { insights } from "@/content/insights";
import { company } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.nav.insights,
    description: t.insightsPage.intro,
    alternates: { canonical: "/insights" },
  };
}

export default async function InsightsPage() {
  const { locale, t } = await getDictionary();

  return (
    <>
      <PageHero eyebrow={t.insightsPage.eyebrow} title={t.insightsPage.title} intro={t.insightsPage.intro} />
      <section className="bg-ivory text-ink">
        <div className="shell py-16 md:py-24">
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {insights.map((insight) => {
              const copy = insight[locale];
              return (
                <article key={insight.slug} className="grid gap-6 py-12 md:grid-cols-12 md:py-16">
                  <p className="display text-6xl text-ink/25 md:col-span-2">{insight.index}</p>
                  <div className="md:col-span-8">
                    <p className="kicker text-quiet">{t.insightsPage.byline}</p>
                    <h2 className="display tight mt-4 text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">
                      <Link href={`/insights/${insight.slug}`} className="link-line">
                        {copy.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{copy.dek}</p>
                    <Link href={`/insights/${insight.slug}`} className="link-line mt-6 inline-flex font-semibold text-ink">
                      {t.insightsPage.read}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <a href={company.linkedin} className="mt-10 inline-flex font-semibold" target="_blank" rel="noopener noreferrer">
            {t.insightsPage.linkedin}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
        </div>
      </section>
      <EndCta title={t.insightsPage.end} cta={t.closing.cta} />
    </>
  );
}
