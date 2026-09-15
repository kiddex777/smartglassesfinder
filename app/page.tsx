import { products } from "./data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">
            SmartGlasses<span className="text-blue-600">Finder</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/smart-glasses" className="hover:text-blue-600">
              Smart Glasses
            </a>
            <a href="/compare" className="hover:text-blue-600">
              Compare
            </a>
            <a href="/best" className="hover:text-blue-600">
              Best
            </a>
            <a href="/reviews" className="hover:text-blue-600">
              Reviews
            </a>
            <a href="/guides" className="hover:text-blue-600">
              Guides
            </a>
          </nav>

          <a
            href="/find"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Find Your Glasses
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Smart Glasses Made Simple
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Find the smart glasses that are right for you.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Compare smart glasses, explore detailed reviews, and find the
              right pair based on what matters most to you.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/find"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Find My Smart Glasses →
              </a>

              <a
                href="/compare"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Compare Glasses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Smart Glasses */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-8 flex items-end justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Popular Picks
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
        Popular Smart Glasses
      </h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        Explore some of the most interesting smart glasses available today.
      </p>
    </div>

    <a
      href="/smart-glasses"
      className="hidden font-semibold text-blue-600 hover:text-blue-700 sm:block"
    >
      View all glasses →
    </a>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {products.slice(0, 8).map((product) => (
      <article
        key={product.id}
        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
       <div className="flex h-52 items-center justify-center bg-gray-100">
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
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {product.category}
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {product.brand}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              {product.price !== null
                ? `$${product.price.toLocaleString()} ${product.currency}`
                : "Price unavailable"}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {product.bestFor}
          </p>

          <a
            href={`/reviews/${product.slug}`}
            className="mt-5 block rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Review →
          </a>
        </div>
      </article>
    ))}
  </div>

  <div className="mt-8 text-center sm:hidden">
    <a
      href="/smart-glasses"
      className="font-semibold text-blue-600 hover:text-blue-700"
    >
      View all glasses →
    </a>
  </div>
</section>


      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            What kind of smart glasses are you looking for?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Different smart glasses are built for different jobs. Start with
            the category that matches what you want to do.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/ai-glasses"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-5 text-4xl">🤖</div>
            <h3 className="text-xl font-bold group-hover:text-blue-600">
              AI Glasses
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Camera, AI assistants, calls, music, translation, and
              hands-free everyday features.
            </p>
          </a>

          <a
            href="/ar-glasses"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-5 text-4xl">🥽</div>
            <h3 className="text-xl font-bold group-hover:text-blue-600">
              AR & Display Glasses
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Virtual displays, gaming, movies, productivity, and immersive
              visual experiences.
            </p>
          </a>

          <a
            href="/smart-glasses"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-5 text-4xl">👓</div>
            <h3 className="text-xl font-bold group-hover:text-blue-600">
              Smart Glasses
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Browse the wider smart-glasses market and compare the features
              that matter most.
            </p>
          </a>
        </div>
      </section>

      {/* Why SmartGlassesFinder */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why SmartGlassesFinder?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Stop guessing which glasses are worth buying.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We break down the features, strengths, weaknesses, and real-world
              differences between today's smart glasses so you can make a
              smarter buying decision.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-2xl">⚖️</div>
              <h3 className="mt-4 text-lg font-bold">Compare</h3>
              <p className="mt-2 leading-7 text-slate-400">
                Put competing glasses side-by-side and see how they differ.
              </p>
            </div>

            <div>
              <div className="text-2xl">🔍</div>
              <h3 className="mt-4 text-lg font-bold">Research</h3>
              <p className="mt-2 leading-7 text-slate-400">
                Read detailed reviews and buying guides before you spend your
                money.
              </p>
            </div>

            <div>
              <div className="text-2xl">🎯</div>
              <h3 className="mt-4 text-lg font-bold">Find Your Match</h3>
              <p className="mt-2 leading-7 text-slate-400">
                Tell us what you need and we'll help narrow down your options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Not sure which smart glasses to buy?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Take our finder and discover which glasses best match your needs,
          budget, and priorities.
        </p>

        <a
          href="/find"
          className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Find My Smart Glasses →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SmartGlassesFinder. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-slate-900">
              About
            </a>
            <a href="/contact" className="hover:text-slate-900">
              Contact
            </a>
            <a href="/privacy" className="hover:text-slate-900">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}