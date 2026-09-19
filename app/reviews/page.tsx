import { products } from "../data/products";
import Link from "next/link";
import type { Metadata } from "next";

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
      {/* Header */}
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
                  <span className="text-7xl">👓</span>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {product.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.bestFor}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    {product.price !== null
                      ? `$${product.price} ${product.currency}`
                      : "See price"}
                  </span>

                  {product.rating !== null && (
                    <span className="font-semibold text-blue-600">
                      {product.rating}/10
                    </span>
                  )}
                </div>

             <Link
  href={`/reviews/${product.slug}`}
  className="mt-5 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
>
  Read Full Review →
</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

        {/* How We Review */}
<section className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-4xl px-6 py-16">
    <h2 className="text-3xl font-bold">
      How We Review Smart Glasses
    </h2>

    <p className="mt-4 text-lg leading-8 text-slate-600">
      Our smart glasses reviews look at the features that matter most when
      choosing a pair, including AI capabilities, camera quality, audio,
      displays, battery life, comfort, compatibility, and overall value.
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["AI", "AI assistants, voice features, and hands-free capabilities."],
        ["Camera", "Photo and video capabilities for everyday capture."],
        ["Audio", "Speaker quality, microphones, and open-ear listening."],
        ["Display", "Resolution, refresh rate, field of view, and display type."],
        ["Battery", "Battery life and charging considerations."],
        ["Value", "How the features compare with the price."],
      ].map(([title, description]) => (
        <div
          key={title}
          className="rounded-xl border border-slate-200 bg-slate-50 p-5"
        >
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

            {/* Related Buying Guides */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Buying Guides
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              More Smart Glasses Guides
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Looking beyond individual reviews? Explore our buying guides to
              compare smart glasses by category, budget, gaming, productivity,
              and overall use.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Best Smart Glasses",
                "/best/smart-glasses",
                "Compare the best smart glasses across AI, AR, cameras, audio, battery life and value.",
              ],
              [
                "Best AI Glasses",
                "/best/ai-glasses",
                "Explore smart glasses focused on AI assistants, cameras, audio and hands-free features.",
              ],
              [
                "Best AR Glasses",
                "/best/ar-glasses",
                "Compare display-focused glasses for gaming, movies, productivity and portable screens.",
              ],
              [
                "Smart Glasses Under $300",
                "/best/smart-glasses-under-300",
                "Find smart glasses that offer useful features without a higher price tag.",
              ],
              [
                "Best Smart Glasses for Gaming",
                "/best/smart-glasses-for-gaming",
                "Compare display glasses for gaming, large-screen viewing and portable setups.",
              ],
              [
                "Best Smart Glasses for Work",
                "/best/smart-glasses-for-work",
                "Explore glasses for productivity, meetings, multitasking and hands-free use.",
              ],
            ].map(([title, href, description]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                  Explore Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Not sure which smart glasses are right for you?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Compare the most important features and find the glasses
            that fit your needs.
          </p>

          <a
            href="/compare"
            className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Compare Smart Glasses →
          </a>
        </div>
      </section>
    </main>
  );
}