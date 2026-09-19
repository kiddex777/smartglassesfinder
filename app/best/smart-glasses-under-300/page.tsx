import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best Smart Glasses Under $300 in 2026 | Smart Glasses Finder",
  description:
    "Find the best smart glasses under $300 in 2026. Compare AI glasses, AR glasses, cameras, audio, displays, battery life, comfort and value.",
  alternates: {
    canonical:
      "https://www.smartglassesfinder.com/best/smart-glasses-under-300",
  },
  openGraph: {
    title: "Best Smart Glasses Under $300 in 2026",
    description:
      "Compare smart glasses under $300 for AI, cameras, audio, displays, battery life, comfort and value.",
    url: "https://www.smartglassesfinder.com/best/smart-glasses-under-300",
    siteName: "SmartGlassesFinder",
    type: "article",
  },
};

export default function BestSmartGlassesUnder300Page() {
  const affordableProducts = products
    .filter(
      (product) =>
        product.price !== null &&
        product.price < 300 &&
        product.rating !== null
    )
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Smart Glasses Finder
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Best Smart Glasses Under $300 in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            You don't have to spend hundreds of dollars more to get useful
            smart-glasses features. Here are the models in our database priced
            below $300, compared across AI, audio, displays, cameras, battery
            life and value.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/find"
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Find Your Glasses
            </Link>

            <Link
              href="/best/smart-glasses"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              See All Best Smart Glasses
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Picks Under $300
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            These products currently have a listed price below $300 in our
            product database. Prices can change, so check the product page
            before purchasing.
          </p>
        </div>

        {affordableProducts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {affordableProducts.map((product, index) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
                  <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
                    #{index + 1}
                  </span>

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-6xl">👓</span>
                  )}
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {product.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">
                      ${product.price}
                    </span>

                    <span className="font-semibold">
                      {product.rating ?? "—"}/10
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <Link
                    href={`/reviews/${product.slug}`}
                    className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                  >
                    Read Full Review →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-gray-200 p-8 text-center">
            <p className="text-gray-600">
              We don't currently have any products listed below $300.
            </p>
          </div>
        )}
      </section>

      {/* What You Get */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            What Can You Get for Under $300?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            The sub-$300 smart-glasses category includes several different
            types of products. Some focus on audio and AI features, while
            others concentrate on providing a virtual display for gaming and
            entertainment.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            The most important thing is to compare the features rather than
            assuming that a lower price automatically means a worse product.
            A display-focused pair may be a better fit for one person, while
            an AI or audio-focused pair may be more useful for someone else.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Features to Consider
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            When shopping for affordable smart glasses, these features can make
            a major difference.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">AI</h3>
            <p className="mt-3 leading-6 text-gray-600">
              If AI assistance is important to you, check what assistant
              features the glasses actually support and how they connect to
              your phone or other services.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Camera</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Camera-equipped glasses can provide hands-free photography and
              video, but camera capabilities vary considerably between models.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Display</h3>
            <p className="mt-3 leading-6 text-gray-600">
              If you want gaming or entertainment, check whether the glasses
              include a display and compare resolution, field of view and
              refresh rate.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Built-in speakers can make smart glasses useful for music, calls,
              gaming and other everyday audio.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-6 text-gray-600">
              A lower price isn't much of a bargain if the glasses are
              uncomfortable. Weight and frame design are worth considering.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Compatibility</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Check whether the glasses work with your phone, computer or
              gaming device before buying.
            </p>
          </div>
        </div>
      </section>

      {/* Under $300 vs More Expensive */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            Should You Spend More Than $300?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Spending more can give you access to additional features, different
            frame designs, higher-end cameras, more advanced AI capabilities or
            more sophisticated display hardware. However, the right choice
            depends on what you actually need.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            If you're mainly interested in trying smart glasses, listening to
            audio or getting a large virtual display, a model below $300 may
            already provide the features you're looking for.
          </p>

          <Link
            href="/best/smart-glasses"
            className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
          >
            Compare All Smart Glasses →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          <details className="rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none text-lg font-bold">
              What are the best smart glasses under $300?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              The answer depends on your priorities. Some products under $300
              focus on virtual displays, while others focus on audio, cameras
              or smart features. Compare the products above based on the
              features that matter most to you.
            </p>
          </details>

          <details className="rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none text-lg font-bold">
              Can you get AI glasses for under $300?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Yes, some smart glasses with AI-related features are available
              below $300. Features and AI capabilities vary by product, so
              check the individual specifications before buying.
            </p>
          </details>

          <details className="rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none text-lg font-bold">
              Can you get AR glasses for under $300?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Yes. Some display-focused glasses are available below $300.
              Compatibility, display resolution, field of view and refresh rate
              are important specifications to compare.
            </p>
          </details>

          <details className="rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none text-lg font-bold">
              Are cheap smart glasses worth it?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              It depends on what you expect from them. A less expensive model
              may be a good fit if it provides the features you actually need,
              while users looking for more advanced cameras, AI or displays may
              want to consider higher-priced options.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find Your Smart Glasses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Tell us your budget and priorities and our Smart Glasses Finder
            quiz will recommend products from our database.
          </p>

          <Link
            href="/find"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Take the Quiz →
          </Link>
        </div>
      </section>
    </main>
  );
}