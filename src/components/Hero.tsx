import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import GlassTooth from "@/components/GlassTooth";
import { IMG } from "@/lib/data";

const AVATARS = [IMG.woman, IMG.man, IMG.woman2];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#e5eefc] to-[#edf4fc]"
    >
      {/* Background stylized typography "James" */}
      <div className="pointer-events-none absolute inset-x-0 top-4 sm:top-8 lg:top-8 z-0 flex justify-center overflow-hidden">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-[18vw] sm:text-[16vw] font-black leading-none tracking-tight text-primary/15"
        >
          James
        </p>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-between px-4 pb-10 pt-4 sm:px-6 sm:pb-12 lg:px-8">
        {/* Main 3-column hero layout */}
        <div className="grid flex-1 items-end gap-6 pt-4 lg:grid-cols-12 lg:gap-4">
          {/* Left Column: Doctor Cutout */}
          <div className="relative z-10 mx-auto flex w-full max-w-[280px] sm:max-w-[340px] flex-col items-center justify-end lg:col-span-4 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none">
              <Image
                src="/doctor-hero-cutout.png"
                alt="Dr. James, DDS"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 420px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Center Column: Text & CTA */}
          <div className="relative z-20 flex flex-col items-center pb-4 text-center sm:pb-6 lg:col-span-4 lg:items-start lg:pb-12 lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-ink-soft">
              Hey This is
            </p>
            <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Dr. James
            </h1>
            <p className="mt-2 sm:mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base lg:text-lg">
              DDS — Cosmetic &amp; Family
              <br />
              Dentistry Expert
            </p>
            <a
              href="#contact"
              className="mt-5 sm:mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-primary/30 transition hover:bg-primary-dark hover:shadow-primary/40"
            >
              Book An Appointment
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column: Floating Crystal Glass Tooth */}
          <div className="relative z-10 mx-auto flex w-full max-w-[240px] sm:max-w-[280px] items-center justify-center lg:col-span-4 lg:mx-0 lg:max-w-none lg:justify-end">
            <GlassTooth className="w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[380px]" />
          </div>
        </div>

        {/* Bottom Bar: 4.9 rating on left, 10k+ on right */}
        <div className="relative z-20 mt-6 grid gap-4 sm:mt-0 sm:grid-cols-2 sm:items-end">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold text-primary">4.9</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-ink-soft">
              Recommended by leading clinics and patients alike.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border-2 border-white bg-primary-soft shadow-xs"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm sm:text-base font-extrabold leading-none text-ink">10k+</p>
              <p className="mt-1 text-[11px] sm:text-xs font-medium text-muted">
                Satisfied Patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
