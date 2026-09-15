import { products } from "../data/products";

export const metadata = {
  title: "Smart Glasses Reviews | Smart Glasses Finder",
  description:
    "Read our smart glasses reviews, compare features, prices, pros, cons, and find the right smart glasses for your needs.",
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

                <a
                  href={`/reviews/${product.slug}`}
                  className="mt-5 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Read Full Review →
                </a>
              </div>
            </article>
          ))}
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