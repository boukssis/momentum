import Link from "next/link";
import { Logo } from "@/components/logo";
import { VelocityCut } from "@/components/velocity-cut";
import { BakseezCredit } from "@/components/bakseez-credit";
import { addressLines, company } from "@/content/site";
import { services } from "@/content/services";
import type { Dictionary, Locale } from "@/content/dictionary";

export function SiteFooter({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = new Date().getFullYear();
  const lines = addressLines(locale);

  return (
    <footer className="border-t border-white/10 bg-ink text-ivory">
      <div className="shell py-16 md:py-24">
        <div className="flex items-center justify-between gap-6">
          <Logo className="h-16 w-auto md:h-20" />
          <VelocityCut className="h-3.5 w-auto text-orange" />
        </div>
        <p className="display tight mt-10 max-w-5xl text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92]">{t.footer.slogan}</p>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <p className="kicker text-orange">{t.footer.services}</p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="link-line text-lg text-ivory/85 hover:text-ivory">
                    {service[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-orange">{t.footer.company}</p>
            <ul className="mt-5 space-y-3 text-lg">
              <li>
                <Link href="/about" className="link-line text-ivory/85 hover:text-ivory">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="link-line text-ivory/85 hover:text-ivory">
                  {t.nav.insights}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-line text-ivory/85 hover:text-ivory">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker text-orange">{t.footer.visit}</p>
            <address className="mt-5 space-y-1 text-lg not-italic leading-relaxed text-ivory/85">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line mt-5 inline-flex text-lg text-ivory hover:text-orange"
            >
              {t.footer.linkedin}
              <span className="sr-only"> {t.a11y.newTab}</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <BakseezCredit locale={locale} />
          <p className="text-sm text-ivory/70">
            © {year} {company.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
