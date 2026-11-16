"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Arrow } from "@/components/button";
import type { Locale } from "@/content/dictionary";

export type ServicePreview = {
  slug: string;
  href: string;
  index: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export function ServicesIndex({
  items,
  locale,
  caption,
}: {
  items: ServicePreview[];
  locale: Locale;
  caption: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = items[active] ?? items[0];
  const clip = locale === "ar" ? "polygon(0 0, 86% 0, 100% 100%, 0 100%)" : "polygon(14% 0, 100% 0, 100% 100%, 0 100%)";
  const direction = locale === "ar" ? -1 : 1;

  if (!current) return null;

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
        <ul className="lg:col-span-7">
          {items.map((item, index) => {
            const on = index === active;
            return (
              <li key={item.slug} className="border-t border-white/15 last:border-b">
                <Link
                  href={item.href}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-8"
                >
                  <span className="display text-xl text-orange">{item.index}</span>
                  <span className={`display text-[clamp(2rem,3vw,3.3rem)] leading-none transition-transform duration-300 ${on ? "translate-x-2 text-ivory rtl:-translate-x-2" : "text-ivory/55"}`}>
                    {item.title}
                  </span>
                  <span className={on ? "text-orange" : "text-ivory/70"}>
                    <Arrow />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft" style={{ clipPath: clip }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, x: 24 * direction, scale: 1.05 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, x: -16 * direction }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={current.image} alt={current.imageAlt} fill sizes="40vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory/80">{current.summary}</p>
          </div>
        </div>
        <p className="col-span-12 mt-8 text-sm text-ivory/70">{caption}</p>
      </div>

      <div className="flex flex-col gap-12 lg:hidden">
        {items.map((item) => (
          <Link key={item.slug} href={item.href} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
              <Image src={item.image} alt={item.imageAlt} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="display text-[clamp(2rem,8vw,2.8rem)] leading-none">{item.title}</h3>
              <span className="display text-orange">{item.index}</span>
            </div>
            <p className="mt-3 text-ivory/75">{item.summary}</p>
          </Link>
        ))}
        <p className="text-sm text-ivory/70">{caption}</p>
      </div>
    </div>
  );
}
