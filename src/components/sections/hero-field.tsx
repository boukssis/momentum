"use client";

import { useEffect, useRef } from "react";
import { TrajectoryArt } from "@/components/trajectory-art";

export function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;

    const onScroll = () => {
      const next = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
      node.style.setProperty("--scroll", next.toFixed(3));
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      if (event.clientY < rect.top - 80 || event.clientY > rect.bottom) return;
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--px", x.toFixed(3));
        node.style.setProperty("--py", y.toFixed(3));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="hero-field" aria-hidden="true">
      <div className="hero-layer hero-layer-a">
        <div className="hero-drift">
          <TrajectoryArt variant="hero" part="back" />
        </div>
      </div>
      <div className="hero-layer hero-layer-b">
        <TrajectoryArt variant="hero" part="front" />
      </div>
    </div>
  );
}
