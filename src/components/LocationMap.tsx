import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function LocationMap() {
  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal-dark">
              Contact Us
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              We&apos;re here to help with any questions. Reach out, and we&apos;ll
              respond as soon as we can. Your journey to a perfect smile starts
              here.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal/25">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">Our Address</h3>
                  <p className="mt-1 font-semibold text-ink-soft">
                    {CONTACT.address.clinic}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {CONTACT.address.line1}
                    <br />
                    {CONTACT.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal/25">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">Call Us</h3>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-muted transition hover:text-teal-dark"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal/25">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">Email Us</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block text-sm text-muted transition hover:text-teal-dark"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-cream shadow-xl">
            <div className="absolute left-3 right-3 top-3 z-10 rounded-2xl bg-white/95 p-3.5 shadow-lg backdrop-blur sm:left-4 sm:right-4 sm:top-4 sm:p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-ink">
                    {CONTACT.address.clinic}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {CONTACT.address.line1}
                    <br />
                    {CONTACT.address.line2}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-500">
                    5.0 <span className="text-muted">★ (17)</span>
                  </div>
                </div>
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition hover:bg-primary hover:text-white"
                  aria-label="Open in Google Maps"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <iframe
              title="Clinic location map"
              src={CONTACT.mapEmbed}
              className="h-[360px] w-full border-0 sm:h-[440px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
