import Image from "next/image";
import { attribution } from "@/content/site";
import type { Locale } from "@/content/dictionary";

export function BakseezCredit({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <p className="kicker text-ivory/60">{locale === "ar" ? attribution.prefixAr : attribution.prefix}</p>
      <Image
        src={attribution.logo}
        alt={attribution.name}
        width={attribution.logoWidth}
        height={attribution.logoHeight}
        className="h-16 w-auto bg-white object-contain px-2 py-1 sm:h-20"
      />
    </div>
  );
}
