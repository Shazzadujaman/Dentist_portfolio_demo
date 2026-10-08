import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/lib/data";

export default function Articles() {
  return (
    <section id="articles" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Insights
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Read Articles
            </h2>
          </div>
          <a
            href="#articles"
            className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            See All
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-primary shadow-sm">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold leading-snug text-ink sm:text-lg">
                  {article.title}
                </h3>
                <a
                  href="#articles"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-white"
                >
                  Read More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
