"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { LanguageSwitch } from "@/components/language-switch";
import type { Dictionary, Locale } from "@/content/dictionary";

const links = [
  { href: "/", key: "home" },
  { href: "/services", key: "expertise" },
  { href: "/about", key: "about" },
  { href: "/insights", key: "insights" },
  { href: "/contact", key: "contact" },
] as const;

function active(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) {
      if (restoreFocus.current) menuRef.current?.focus();
      restoreFocus.current = false;
      return;
    }
    const main = document.getElementById("content");
    const footer = document.querySelector("footer");
    headerRef.current?.setAttribute("inert", "");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      headerRef.current?.removeAttribute("inert");
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onDarkHero = pathname === "/" && !scrolled && !open;

  function onPanelKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "Tab" || !panelRef.current) return;
    const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"));
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-40 transition-[height,background-color,border-color] duration-300 ${onDarkHero ? "border-b border-transparent bg-transparent" : "border-b border-white/10 bg-ink/95 backdrop-blur-xl"}`}>
      <div className={`shell flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? "h-16" : "h-[4.75rem]"}`}>
        <Link href="/" aria-label={t.nav.home} className="shrink-0">
          <Logo className={scrolled ? "h-8 w-auto" : "h-11 w-auto"} />
        </Link>
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden items-center gap-6 lg:flex" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary"}>
            {links.map((link) => {
              const on = active(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={on ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center gap-2 text-[0.95rem] transition-colors ${on ? "text-ivory" : "text-ivory/65 hover:text-ivory"}`}
                >
                  {on ? <span className="h-1.5 w-1.5 bg-orange" aria-hidden /> : null}
                  {t.nav[link.key]}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitch locale={locale} label={t.a11y.language} />
          <Button href="/contact" className="hidden lg:inline-flex">
            {t.nav.talk}
          </Button>
          <button
            ref={menuRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.close : t.a11y.menu}
            onClick={() => {
              restoreFocus.current = open;
              setOpen((value) => !value);
            }}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>

      {open && typeof document !== "undefined"
        ? createPortal(
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.a11y.menu}
          onKeyDown={onPanelKeyDown}
          className="menu-open fixed inset-0 z-[70] flex h-dvh flex-col bg-ink text-ivory lg:hidden"
        >
          <div className="shell flex h-[4.75rem] items-center justify-between">
            <Link href="/" aria-label={t.nav.home}>
              <Logo className="h-11 w-auto" />
            </Link>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center"
              onClick={() => {
                restoreFocus.current = true;
                setOpen(false);
              }}
              aria-label={t.a11y.close}
            >
              <X aria-hidden />
            </button>
          </div>
          <nav className="shell flex flex-1 flex-col justify-center gap-2 pb-16">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="menu-link display tight text-[clamp(2.6rem,10vw,4.2rem)] leading-none"
                style={{ animationDelay: `${index * 0.06}s` }}
                aria-current={active(pathname, link.href) ? "page" : undefined}
              >
                <span className="me-4 text-[0.4em] text-orange">{String(index + 1).padStart(2, "0")}</span>
                {t.nav[link.key]}
              </Link>
            ))}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact">{t.nav.talk}</Button>
              <LanguageSwitch locale={locale} label={t.a11y.language} />
            </div>
          </nav>
        </div>,
        document.body,
      )
        : null}
    </header>
  );
}

export function HeaderFallback() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 h-[4.75rem]">
      <div className="shell flex h-full items-center">
        <Logo className="h-11 w-auto" />
      </div>
    </div>
  );
}
