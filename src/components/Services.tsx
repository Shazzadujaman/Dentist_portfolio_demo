import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-dark">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Our goal for every patient is to create a beautiful smile that can be
            enjoyed for a lifetime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-center text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition group-hover:bg-primary-dark"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
