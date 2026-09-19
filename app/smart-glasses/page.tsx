import Link from "next/link";
import type { Metadata } from "next";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Smart Glasses | Compare AI & AR Glasses | SmartGlassesFinder",
  description:
    "Browse and compare smart glasses by price, camera, AI features, audio, display, battery life, comfort, and value.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/smart-glasses",
  },
  openGraph: {
    title: "Smart Glasses | SmartGlassesFinder",
    description:
      "Browse and compare smart glasses by price, camera, AI features, audio, displays, battery life, comfort, and value.",
    url: "https://www.smartglassesfinder.com/smart-glasses",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function SmartGlassesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SmartGlasses<span className="text-blue-600">Finder</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/smart-glasses" className="text-blue-600">
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
            Smart Glasses
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Compare Smart Glasses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore smart glasses across AI, cameras, audio, displays,
            battery life, comfort, compatibility, and value.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-glasses"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-blue-300 hover:text-blue-600"
            >
              AI Glasses
            </Link>

            <Link
              href="/ar-glasses"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-blue-300 hover:text-blue-600"
            >
              AR & Display Glasses
            </Link>

            <Link
              href="/find"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Find Your Glasses
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Browse
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Smart Glasses Available
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Compare the current smart glasses in our database and open a
            detailed review for specifications, features, pros, cons, and
            buying considerations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-64 items-center justify-center bg-slate-50 p-6">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-5xl">👓</div>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-blue-600">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {product.name}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {product.price !== null && (
                    <span className="text-lg font-bold text-slate-900">
                      ${product.price} {product.currency}
                    </span>
                  )}

                  {product.rating !== null && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                      {product.rating}/10
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-900">
                      Camera
                    </span>
                    <p className="mt-1 text-slate-600">
                      {product.camera}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900">
                      Battery
                    </span>
                    <p className="mt-1 text-slate-600">
                      {product.battery}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/reviews/${product.slug}`}
                  className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read Full Review →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Types */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Understand the Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What type of smart glasses are you looking for?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Smart glasses can serve very different purposes. Understanding
              the main categories makes it easier to narrow down the options.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/ai-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">AI Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Focused on AI assistants, cameras, voice interaction, calls,
                music, and hands-free features.
              </p>
              <span className="mt-5 inline-block font-semibold text-blue-600">
                Explore AI Glasses →
              </span>
            </Link>

            <Link
              href="/ar-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">AR & Display Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Built around wearable displays for gaming, movies,
                entertainment, and productivity.
              </p>
              <span className="mt-5 inline-block font-semibold text-blue-600">
                Explore AR Glasses →
              </span>
            </Link>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold">Hybrid Smart Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Combine capabilities from multiple smart-glasses categories,
                giving users a broader set of features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guides */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Buying Guides
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Continue your research
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use our guides to narrow down smart glasses by category, budget,
            gaming, productivity, and overall use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Best Smart Glasses", "/best/smart-glasses"],
            ["Best AI Glasses", "/best/ai-glasses"],
            ["Best AR Glasses", "/best/ar-glasses"],
            ["Smart Glasses Under $300", "/best/smart-glasses-under-300"],
            ["Best Smart Glasses for Gaming", "/best/smart-glasses-for-gaming"],
            ["Best Smart Glasses for Work", "/best/smart-glasses-for-work"],
          ].map(([title, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-md"
            >
              {title}
              <span className="mt-2 block text-sm font-semibold text-blue-600">
                Explore Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Finder CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which smart glasses are right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Answer a few questions about how you plan to use smart glasses and
            get personalized recommendations.
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