import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SmartGlassesFinder",
  description:
    "Contact SmartGlassesFinder with questions, corrections, feedback, partnership inquiries, or smart-glasses recommendations.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/contact",
  },
  openGraph: {
    title: "Contact SmartGlassesFinder",
    description:
      "Get in touch with SmartGlassesFinder for questions, feedback, corrections, and partnership inquiries.",
    url: "https://www.smartglassesfinder.com/contact",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SmartGlasses<span className="text-blue-600">Finder</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/smart-glasses" className="hover:text-blue-600">
              Smart Glasses
            </Link>
            <Link href="/compare" className="hover:text-blue-600">
              Compare
            </Link>
            <Link href="/best/smart-glasses" className="hover:text-blue-600">
              Best
            </Link>
            <Link href="/reviews" className="hover:text-blue-600">
              Reviews
            </Link>
            <Link href="/guides" className="hover:text-blue-600">
              Guides
            </Link>
          </nav>

          <Link
            href="/find"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Find Your Glasses
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question, correction, suggestion, or partnership inquiry?
            We&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-3xl">💬</div>

            <h2 className="mt-5 text-2xl font-bold">Questions & Feedback</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Have a question about smart glasses or something you noticed on
              the site? Send us your feedback and we&apos;ll take a look.
            </p>

            <p className="mt-6 text-sm font-semibold text-slate-900">
              Email: 
            </p>

            <p className="mt-1 text-slate-600">
                 jason17982@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-3xl">🤝</div>

            <h2 className="mt-5 text-2xl font-bold">
              Partnerships & Affiliate Inquiries
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Brands, retailers, and companies interested in working with
              SmartGlassesFinder can contact us about partnerships, product
              information, or affiliate opportunities.
            </p>

            <p className="mt-6 text-sm font-semibold text-slate-900">
              Email: jason17982@gmail.com
            </p>

            <p className="mt-1 text-slate-600">
          
            </p>
          </div>
        </div>
      </section>

      {/* Corrections */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Corrections
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Spotted an error?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Product specifications, pricing, availability, and software
            features can change over time. If you notice information that
            appears outdated or incorrect, please contact us with the relevant
            page and details so we can review it.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            When possible, include a link to the manufacturer or another
            reliable source supporting the correction.
          </p>
        </div>
      </section>

      {/* Finder CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Looking for smart glasses?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            You can also use our Smart Glasses Finder to narrow down your
            options based on your needs and priorities.
          </p>

          <Link
            href="/find"
            className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Find My Smart Glasses →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 SmartGlassesFinder. All rights reserved.</p>

            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}