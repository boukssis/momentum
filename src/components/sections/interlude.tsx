import { InView } from "@/components/in-view";
import type { Dictionary } from "@/content/dictionary";

export function Interlude({ t }: { t: Dictionary }) {
  return (
    <InView className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory">
      <div className="shell py-28">
        <p className="kicker text-orange">{t.interlude.eyebrow}</p>
        <h2 className="display tight mt-8 text-[clamp(3rem,8.4vw,7.4rem)] leading-[0.9]">
          <span className="editorial block text-[0.78em] text-ivory/80">{t.interlude.line1}</span>
          <span className="mt-3 block uppercase">{t.interlude.line2}</span>
          <span className="interlude-bars hero-bars mt-6" aria-hidden>
            <i />
            <i />
          </span>
        </h2>
      </div>
    </InView>
  );
}
