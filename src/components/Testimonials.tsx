"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = TESTIMONIALS;

  const prev = () => setIndex((i) => (i - 1 + visible.length) % visible.length);
  const next = () => setIndex((i) => (i + 1) % visible.length);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Professional Care,
              <br />
              Patient-Backed Trust
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {visible.map((item, i) => {
            const active = i === index;
            return (
              <figure
                key={item.name}
                className={`flex h-full flex-col justify-between rounded-3xl border p-6 transition ${
                  active
                    ? "border-primary/30 bg-primary-soft shadow-lg shadow-primary/10"
                    : "border-line bg-white"
                }`}
              >
                <blockquote className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-primary-soft">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
