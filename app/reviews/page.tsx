import Link from "next/link";
import type { Metadata } from "next";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Smart Glasses Reviews | Smart Glasses Finder",
  description:
    "Read smart glasses reviews, compare features, prices, pros, cons, and find the right smart glasses for your needs.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/reviews",
  },
  openGraph: {
    title: "Smart Glasses Reviews | SmartGlassesFinder",
    description:
      "Read smart glasses reviews, compare features, prices, pros, cons, and find the right pair for your needs.",
    url: "https://www.smartglassesfinder.com/reviews",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Site Header */}
      <header className="border-b border-slate-200 bg-white">
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

            <Link href="/reviews" className="text-blue-600">
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
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Smart Glasses Reviews
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Smart Glasses Reviews
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Explore our smart glasses reviews, specifications, ratings,
            pros, cons, and buying information to help you find the right
            pair.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-56 items-center justify-center bg-slate-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-6"
                  />
                ) : (
                  <span className="text-5xl">👓</span>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600">
                  {product.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold">{product.name}</h2>

                <p className="mt-2 text-sm text-slate-500">
                  {product.brand}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {product.price !== null
                      ? `$${product.price} USD`
                      : "Price unavailable"}
                  </span>

                  {product.rating !== null && (
                    <span className="text-sm font-semibold text-slate-600">
                      Editorial Score: {product.rating}/10
                    </span>
                  )}
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <Link
                  href={`/reviews/${product.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Read Full Review
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How We Review */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            How We Review Smart Glasses
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We look at the features that matter most when choosing smart
            glasses, including AI capabilities, camera performance, audio
            quality, display technology, battery life, comfort, compatibility,
            and overall value.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Features</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We examine cameras, AI, audio, displays, controls, battery
                life, connectivity, and other important specifications.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Everyday Use</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We consider how each product fits into everyday activities,
                including work, entertainment, communication, and hands-free
                use.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Value</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We compare features and pricing to help explain what you get
                at different price points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Buying Guides */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Buying Guides
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Related Smart Glasses Guides
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Looking for a specific type of smart glasses? Explore our buying
            guides to compare the options by use case and budget.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/best/smart-glasses"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Best Smart Glasses</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare the top smart glasses across AI, AR, cameras, audio,
              displays, battery life, comfort, and value.
            </p>
          </Link>

          <Link
            href="/best/ai-glasses"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Best AI Glasses</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore smart glasses focused on AI assistants, cameras, audio,
              and hands-free features.
            </p>
          </Link>

          <Link
            href="/best/ar-glasses"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Best AR Glasses</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare display-based glasses for gaming, movies, productivity,
              and immersive entertainment.
            </p>
          </Link>

          <Link
            href="/best/smart-glasses-under-300"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Smart Glasses Under $300</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Find smart glasses available at a lower price point.
            </p>
          </Link>

          <Link
            href="/best/smart-glasses-for-gaming"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Best Smart Glasses for Gaming</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare display-focused glasses for gaming and large-screen
              entertainment.
            </p>
          </Link>

          <Link
            href="/best/smart-glasses-for-work"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <h3 className="font-bold">Best Smart Glasses for Work</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore options for productivity, communication, displays,
              audio, and hands-free work.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which smart glasses are right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Use the Smart Glasses Finder to get personalized recommendations
            based on the features and use cases that matter most to you.
          </p>

          <Link
            href="/find"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Find Your Glasses
          </Link>
        </div>
      </section>
    </main>
  );
}