import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EndCta } from "@/components/page-hero";
import { getDictionary } from "@/lib/locale";
import { getInsight, insights } from "@/content/insights";
import { company } from "@/content/site";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  const { locale } = await getDictionary();
  if (!insight) return { title: "Momentum" };
  const copy = insight[locale];
  return {
    title: copy.title,
    description: copy.dek,
    alternates: { canonical: `/insights/${slug}` },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const { locale, t } = await getDictionary();
  const copy = insight[locale];
  const related = insights.filter((item) => item.slug !== insight.slug);

  return (
    <>
      <article>
        <header className="bg-ink pb-16 pt-32 text-ivory md:pb-24 md:pt-40">
          <div className="shell">
            <p className="kicker text-orange">
              {insight.index} <span className="ms-3 text-ivory/60">{t.insightsPage.byline}</span>
            </p>
            <h1 className="display tight mt-6 max-w-5xl text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.96]">{copy.title}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ivory/75">{copy.dek}</p>
          </div>
        </header>
        <div className="bg-ivory text-ink">
          <div className="shell max-w-3xl py-16 md:py-24">
            {copy.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]} className="mt-12 first:mt-0">
                {section.heading ? <h2 className="display text-3xl leading-tight">{section.heading}</h2> : null}
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed text-ink/82">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="mt-14 inline-flex font-semibold">
              {t.insightsPage.linkedin}
              <span className="sr-only"> {t.a11y.newTab}</span>
            </a>
          </div>
          <div className="shell border-t border-ink/10 py-12">
            <p className="kicker text-quiet">{t.insightsPage.related}</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/insights/${item.slug}`} className="group block">
                    <span className="text-sm">{item.index}</span>
                    <span className="display link-line mt-2 block text-2xl leading-tight">{item[locale].title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <EndCta title={t.insightsPage.end} cta={t.closing.cta} />
    </>
  );
}
