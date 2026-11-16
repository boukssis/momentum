import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/lib/locale";
import { addressLines, company } from "@/content/site";
import { services } from "@/content/services";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.nav.contact,
    description: t.contact.intro,
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage() {
  const { locale, t } = await getDictionary();
  const lines = addressLines(locale);
  const options = [
    ...services.map((service) => ({ id: service.slug, label: service[locale].title })),
    { id: "unsure", label: t.unsure },
  ];

  return (
    <section className="lg:grid lg:min-h-[100svh] lg:grid-cols-2">
      <div className="bg-ink px-6 py-32 text-ivory sm:px-10 md:py-40 lg:px-14 xl:px-20">
        <p className="kicker text-orange">{t.contact.eyebrow}</p>
        <h1 className="display tight mt-6 max-w-xl text-[clamp(3rem,6vw,5.4rem)] leading-[0.94]">{t.contact.title}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/78">{t.contact.intro}</p>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/75">{t.contact.honest}</p>
        <div className="mt-12">
          <p className="kicker text-ivory/70">{t.contact.address}</p>
          <address className="mt-3 text-lg not-italic leading-relaxed">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3">
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="link-line font-semibold">
            {t.contact.linkedin}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
          <a href={company.founder.linkedin} target="_blank" rel="noopener noreferrer" className="link-line text-ivory/75">
            {t.contact.founder}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
        </div>
      </div>
      <div className="bg-ivory px-6 py-16 text-ink sm:px-10 md:py-28 lg:px-14 lg:py-40 xl:px-20">
        <ContactForm t={t} options={options} />
      </div>
    </section>
  );
}
