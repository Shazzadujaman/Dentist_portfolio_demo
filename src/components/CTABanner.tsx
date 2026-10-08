"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { IMG } from "@/lib/data";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-soft">
          <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-1/2 opacity-90 sm:block">
            <Image
              src={IMG.heroPortrait}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-soft via-primary-soft/40 to-transparent" />
          </div>

          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                Get in touch with me for Appointment
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Ready for a healthier, brighter smile? Join the newsletter or
                reach out directly — I&apos;ll help you take the next step.
              </p>
            </div>

            <div className="flex items-center lg:justify-end">
              {isSuccess ? (
                <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900 shadow-sm animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="text-sm font-bold">Successfully Connected!</p>
                      <p className="text-xs text-emerald-700">
                        We sent confirmation details to <span className="font-semibold">{email}</span>.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setEmail("");
                    }}
                    className="shrink-0 text-xs font-semibold text-emerald-700 underline transition hover:text-emerald-900"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="w-full rounded-full border border-line bg-white px-5 py-3.5 text-sm text-ink outline-none transition focus:border-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
