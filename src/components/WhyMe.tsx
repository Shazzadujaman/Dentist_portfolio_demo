import Image from "next/image";
import { ArrowUpRight, Cpu, Siren, ThumbsUp } from "lucide-react";
import { IMG } from "@/lib/data";

const FEATURES = [
  {
    icon: Cpu,
    title: "Advanced Dental Technology",
    text: "Experience the future of dentistry with our state-of-the-art technology and precise treatments.",
  },
  {
    icon: Siren,
    title: "Emergency Dental Support",
    text: "We are available for emergency dental care anytime, ensuring your smile is in good hands.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Happy Patients",
    text: "Join thousands of smiles transformed by our dedicated and experienced dental team.",
  },
];

export default function WhyMe() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Why Me?
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            More About Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-primary-soft p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-extrabold text-ink">Meet Dr. James</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                I am Dr. Jaman, Oral and Dental Surgeon. I completed my
                Bachelor of Dental Surgery (BDS) degree in 2020 from
                Sher-E-Bangla Medical College, Barishal, under the University
                of Dhaka.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
                  Cosmetic Dentistry
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
                  Family Care
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
                  Implants
                </span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">10k+</p>
                  <p className="mt-1 text-xs font-medium text-muted">
                    Smiling patients
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">98%</p>
                  <p className="mt-1 text-xs font-medium text-muted">
                    Patient satisfaction
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-ink">
                    Building confidence through every smile
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    From routine checkups to complete smile makeovers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl bg-white shadow-lg lg:max-w-none">
                <Image
                  src={IMG.meetDoctor}
                  alt="Dr. James with a patient"
                  fill
                  sizes="(max-width: 1024px) 280px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
