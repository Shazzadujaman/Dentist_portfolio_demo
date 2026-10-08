"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { FAQS, IMG } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Any Question?
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            See All
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-soft">
              <Image
                src={IMG.doctorConsult}
                alt="Dentist answering patient questions"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 lg:col-span-8">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-primary/30 bg-primary-soft"
                      : "border-line bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-ink sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-primary-soft text-primary"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
