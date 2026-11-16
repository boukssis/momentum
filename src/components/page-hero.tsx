import { Button } from "@/components/button";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string[];
  intro?: string;
}) {
  return (
    <header className="bg-ink pt-32 pb-16 text-ivory md:pt-40 md:pb-24">
      <div className="shell grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="kicker text-orange">{eyebrow}</p>
          <h1 className="display tight mt-6 text-[clamp(3rem,7vw,6.4rem)] leading-[0.92]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
        {intro ? <p className="max-w-xl text-lg leading-relaxed text-ivory/78 lg:col-span-4 lg:col-start-9">{intro}</p> : null}
      </div>
    </header>
  );
}

export function EndCta({ title, cta }: { title: string; cta: string }) {
  return (
    <section className="bg-orange text-ink">
      <div className="shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-24">
        <h2 className="display tight max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95]">{title}</h2>
        <Button href="/contact" variant="ink">
          {cta}
        </Button>
      </div>
    </section>
  );
}
