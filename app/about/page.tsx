import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SmartGlassesFinder | Smart Glasses Buying Guides",
  description:
    "Learn about SmartGlassesFinder, an independent resource for comparing smart glasses, AI glasses, AR glasses, features, prices, and buying options.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/about",
  },
  openGraph: {
    title: "About SmartGlassesFinder",
    description:
      "Learn about SmartGlassesFinder and how we help people research and compare smart glasses.",
    url: "https://www.smartglassesfinder.com/about",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function AboutPage() {
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
            About SmartGlassesFinder
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Making Smart Glasses Easier to Understand
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SmartGlassesFinder is an independent resource designed to help
            people research, compare, and understand the growing smart-glasses
            market.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Research before you buy
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Smart glasses can differ significantly in what they are designed
            to do. Some focus on cameras and AI assistants, while others are
            built around wearable displays for gaming, movies, and
            productivity.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            We organize those differences into product information,
            comparisons, reviews, buying guides, and recommendations so you
            can evaluate the options that fit your needs.
          </p>
        </div>
      </section>

      {/* What You Can Find */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What you can find here
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/smart-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl">👓</div>
              <h3 className="mt-5 text-xl font-bold">Smart Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Browse smart glasses and compare their features.
              </p>
            </Link>

            <Link
              href="/compare"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl">⚖️</div>
              <h3 className="mt-5 text-xl font-bold">Comparisons</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Put different glasses side-by-side and examine their
                differences.
              </p>
            </Link>

            <Link
              href="/reviews"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl">🔍</div>
              <h3 className="mt-5 text-xl font-bold">Reviews</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore detailed information about individual products.
              </p>
            </Link>

            <Link
              href="/find"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl">🎯</div>
              <h3 className="mt-5 text-xl font-bold">Finder</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Narrow down your options based on your priorities and needs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Categories
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Different glasses for different needs
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold">AI Glasses</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Glasses focused on features such as cameras, AI assistants,
              calls, music, and hands-free interaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">AR & Display Glasses</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Glasses that provide wearable displays for applications such as
              gaming, entertainment, and productivity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Hybrid Smart Glasses</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Products that combine smart-glasses capabilities across multiple
              feature categories.
            </p>
          </div>
        </div>
      </section>

            {/* Editorial Independence */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Transparency
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Independent information and affiliate relationships
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            SmartGlassesFinder is an independent website. Some links may be
            affiliate links, which means we may earn a commission if you make
            a qualifying purchase through one of those links.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Affiliate relationships help support the website, but our product
            information, comparisons, editorial scores, and buying guides are
            intended to focus on the features, specifications, pricing, and
            characteristics of the products.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Product specifications, prices, availability, and software
            features can change. We encourage readers to verify important
            details with the manufacturer or retailer before purchasing.
          </p>
        </div>
      </section>

      {/* Finder CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to find your glasses?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Explore the market or use the Smart Glasses Finder to narrow down
            your options.
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