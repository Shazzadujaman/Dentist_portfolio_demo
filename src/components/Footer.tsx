import { Mail, MapPin, Phone } from "lucide-react";
import ToothIcon from "@/components/ToothIcon";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/SocialIcons";
import { CONTACT } from "@/lib/data";

const EXPLORE = [
  { label: "Home", href: "#home" },
  { label: "Blog & Insights", href: "#articles" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#contact" },
];

const QUICK = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Case Study", href: "#contact" },
  { label: "Appointments", href: "#contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#contact" },
  { label: "Terms", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 lg:grid-cols-12">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-primary to-primary-dark text-white shadow-md shadow-primary/25 ring-1 ring-white/20">
                <ToothIcon className="h-6 w-6" />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-bold">{CONTACT.name}</p>
                <p className="text-[11px] font-medium text-white/60">{CONTACT.role}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Cosmetic and family dentistry with a modern clinic experience —
              built around comfort, clarity, and long-term oral health.
            </p>
            <div className="mt-6 flex gap-3">
              {[XIcon, InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:col-span-5">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5">
                {EXPLORE.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {QUICK.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {LEGAL.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Direct Clinic Contact (no form) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {CONTACT.address.clinic}, {CONTACT.address.line1}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>Copyright © 2026 Dr. James. All Rights Reserved.</p>
          <p>Demo portfolio — Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
