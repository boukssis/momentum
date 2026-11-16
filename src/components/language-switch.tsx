"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions";
import type { Locale } from "@/content/dictionary";

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function choose(next: Locale) {
    if (next === locale || pending) return;
    setPending(true);
    await setLocale(next);
    router.refresh();
    setPending(false);
  }

  return (
    <div role="group" aria-label={label} className={`flex items-center gap-1 text-sm ${pending ? "opacity-60" : ""}`}>
      {(["en", "ar"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => choose(code)}
            aria-pressed={active}
            className={`min-h-11 min-w-11 px-2 font-semibold uppercase tracking-wide ${active ? "text-orange" : "text-ivory/60 hover:text-ivory"}`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
