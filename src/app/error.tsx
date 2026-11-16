"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="flex min-h-[80svh] items-end bg-ink pb-24 pt-40 text-ivory">
      <div className="shell">
        <h1 className="display tight text-[clamp(2.8rem,7vw,5rem)] leading-[0.95]">This page did not load.</h1>
        <p className="mt-4 text-lg text-ivory/70" dir="rtl">
          تعذّر تحميل هذه الصفحة.
        </p>
        <button type="button" onClick={() => reset()} className="mt-10 inline-flex min-h-12 items-center bg-orange px-6 py-3 font-semibold text-ink">
          Try again · حاول مجدداً
        </button>
      </div>
    </section>
  );
}
