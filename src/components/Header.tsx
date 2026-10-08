"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ToothIcon from "@/components/ToothIcon";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#articles" },
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <p className="text-xl font-bold tracking-tight text-ink">
            Dr. James
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                item.label === "About"
                  ? "font-bold text-ink"
                  : "font-semibold text-ink-soft/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary-dark"
          >
            Contact Me
            <span aria-hidden>&gt;</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-primary-soft hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
