import { cookies } from "next/headers";
import { dictionary, type Dictionary, type Locale } from "@/content/dictionary";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get("momentum-locale")?.value === "ar" ? "ar" : "en";
}

export async function getDictionary(): Promise<{ locale: Locale; dir: "rtl" | "ltr"; t: Dictionary }> {
  const locale = await getLocale();
  return {
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    t: dictionary[locale],
  };
}
