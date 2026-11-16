import { Button } from "@/components/button";
import { getDictionary } from "@/lib/locale";

export default async function NotFound() {
  const { t } = await getDictionary();
  return (
    <section className="flex min-h-[100svh] items-end bg-ink pb-24 pt-40 text-ivory">
      <div className="shell">
        <p className="display text-orange">{t.notFound.index}</p>
        <h1 className="display tight mt-4 text-[clamp(3.4rem,9vw,7rem)] leading-[0.9]">{t.notFound.title}</h1>
        <p className="mt-6 max-w-md text-lg text-ivory/70">{t.notFound.body}</p>
        <div className="mt-10">
          <Button href="/">{t.notFound.cta}</Button>
        </div>
      </div>
    </section>
  );
}
