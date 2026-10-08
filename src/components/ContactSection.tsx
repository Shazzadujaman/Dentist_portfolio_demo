"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/SocialIcons";
import { IMG } from "@/lib/data";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate realistic fast booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-primary-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column: Contact info & image */}
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Contact Info
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                I&apos;m here to help with any questions or feedback about me.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {[XIcon, InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary transition hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={IMG.patientCare}
                alt="Dentist consulting with a patient"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Book An Appointment Form or Success Card */}
          <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            {isSuccess ? (
              <div className="flex flex-1 flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                  <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-xs">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20">
                  Request Received
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Appointment Booked Successfully!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {formData.name ? (
                    <>
                      Thank you, <strong className="text-ink">{formData.name}</strong>!
                    </>
                  ) : (
                    "Thank you!"
                  )}{" "}
                  Your appointment request
                  {formData.service ? (
                    <>
                      {" "}for <span className="font-semibold text-primary">{formData.service}</span>
                    </>
                  ) : null}{" "}
                  has been sent. Dr. James&apos; clinic team will contact you shortly to confirm your date and time.
                </p>

                <div className="mt-6 w-full max-w-sm rounded-2xl border border-line bg-cream p-4 text-left text-xs text-muted">
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-ink">Estimated Response:</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between border-t border-line/60 py-1">
                    <span className="font-semibold text-ink">Direct Hotline:</span>
                    <span className="text-primary font-semibold">+1 (555) 234-5678</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-2.5 text-xs font-semibold text-ink shadow-xs transition hover:border-primary hover:bg-primary-soft hover:text-primary"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-ink">
                  Book An Appointment
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Share a few details and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@you.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full appearance-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white"
                    >
                      <option value="" disabled>
                        Select Your Service
                      </option>
                      <option>General Check-ups</option>
                      <option>Scaling And Polishing</option>
                      <option>Dental Implants</option>
                      <option>Oral Surgery</option>
                      <option>Root Canal</option>
                      <option>Wisdom Teeth Surgery</option>
                      <option>Dental Crowns</option>
                      <option>Pediatric Dentistry</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Hi there, I'd like to know more about your services here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Booking Appointment...</span>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Book An Appointment</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
