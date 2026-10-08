import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASES } from "@/lib/data";

export default function CaseStudy() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Results
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Case Study
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

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CASES.map((item) => (
            <article
              key={item.patient}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:shadow-xl hover:shadow-primary/10 sm:flex-row"
            >
              <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:w-1/2">
                <Image
                  src={item.image}
                  alt={item.patient}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Patient Name
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-ink">
                  {item.patient}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  Initial Concern
                </p>
                <p className="mt-1 text-lg font-bold text-primary">{item.concern}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition hover:text-primary"
                >
                  Full Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
