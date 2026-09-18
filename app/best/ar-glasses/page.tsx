import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best AR Glasses in 2026 | Top Display & Gaming Glasses",
  description:
    "Discover the best AR glasses in 2026. Compare display quality, resolution, field of view, refresh rate, comfort, audio and value for gaming, movies and productivity.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/best/ar-glasses",
  },
  openGraph: {
    title: "Best AR Glasses in 2026 | Smart Glasses Finder",
    description:
      "Compare the best AR and display glasses for gaming, movies, productivity, virtual screens and everyday use.",
    url: "https://www.smartglassesfinder.com/best/ar-glasses",
    siteName: "Smart Glasses Finder",
    type: "article",
  },
};

export default function BestARGlassesPage() {
  const arProducts = products
    .filter(
      (product) =>
        product.category === "AR & Display Glasses" ||
        product.display !== "None"
    )
    .filter((product) => product.rating !== null)
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
            Best AR Glasses in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Looking for AR glasses with a great virtual display? We compare
            display quality, resolution, field of view, refresh rate, comfort,
            audio and value for gaming, movies and productivity.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/find"
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Find Your Glasses
            </Link>

            <Link
              href="/ar-glasses"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              Explore AR Glasses
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Best AR Glasses Picks
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            AR and display glasses can turn your connected device into a large
            virtual screen. They can be useful for gaming, movies,
            productivity and portable entertainment. The experience varies
            significantly between models, so display specifications and
            comfort are especially important.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {arProducts.map((product, index) => (
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

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="block text-gray-500">Display</span>
                    <span className="font-semibold">
                      {product.displayResolution ?? product.display}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">Refresh Rate</span>
                    <span className="font-semibold">
                      {product.refreshRate ?? "—"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">Field of View</span>
                    <span className="font-semibold">
                      {product.fieldOfView ?? "—"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">Weight</span>
                    <span className="font-semibold">
                      {product.weight}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-bold">
                      Finder Score: {product.rating ?? "—"}/10
                    </div>

                    {product.price !== null && (
                      <div className="mt-1 text-sm text-gray-500">
                        From ${product.price}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/reviews/${product.slug}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Read Review →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What Are AR Glasses? */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            What Are AR Glasses?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            AR glasses use displays to provide visual information or virtual
            screens while being worn like glasses. Modern display glasses can
            connect to phones, computers, handheld gaming devices and other
            compatible hardware.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            The term "AR glasses" is often used broadly. Some products are
            primarily designed to provide a large virtual display rather than
            overlaying digital objects directly onto the real world. Checking
            the specific display technology and features is therefore important
            when comparing models.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            What to Look For in AR Glasses
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Display specifications can have a major impact on the experience.
            These are some of the most important features to compare.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Display Resolution</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Higher resolution can provide a sharper virtual image, although
              the perceived result also depends on optics and field of view.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Field of View</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Field of view determines how large the virtual image appears
              within your visual field.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Refresh Rate</h3>
            <p className="mt-3 leading-6 text-gray-600">
              A higher refresh rate can make motion appear smoother, which can
              be particularly useful for gaming and video.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Weight, frame design, nose pads and adjustability can all affect
              how comfortable glasses are during longer sessions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Connectivity</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Check how the glasses connect to your phone, computer, gaming
              device or other hardware and whether additional accessories are
              required.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Built-in speakers can make display glasses more convenient for
              gaming, movies and other entertainment without requiring
              separate headphones.
            </p>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              What Are AR Glasses Best For?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Different display glasses can work well for different use cases.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Gaming</h3>

              <p className="mt-3 leading-7 text-gray-600">
                AR display glasses can provide a large virtual gaming screen
                while keeping the hardware compact and portable.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Movies & Entertainment</h3>

              <p className="mt-3 leading-7 text-gray-600">
                A virtual display can make display glasses useful for watching
                movies and other video content while travelling or relaxing.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Productivity</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Some models can provide a portable virtual workspace when
                connected to a compatible computer or mobile device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AR vs AI */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold">
          AR Glasses vs AI Glasses
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          AR glasses primarily focus on visual experiences through a display,
          while AI glasses generally emphasize artificial intelligence,
          cameras, microphones and audio. There is some overlap, and the
          categories continue to evolve.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          If your main goal is a large virtual screen for gaming, movies or
          productivity, display specifications should be a major part of your
          decision. If your priority is hands-free assistance, photography or
          voice interaction, an AI-focused model may be more appropriate.
        </p>

        <Link
          href="/ai-glasses"
          className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
        >
          Explore AI Glasses →
        </Link>
      </section>

      {/* FAQ */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions About AR Glasses
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                What are AR glasses used for?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                AR and display glasses can be used for gaming, watching movies,
                portable entertainment, productivity and other visual
                experiences depending on the model.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do AR glasses have a screen?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Display-focused AR glasses use built-in display technology to
                create a virtual image. Exact display technology, resolution
                and field of view vary between products.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Can you use AR glasses for gaming?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Yes. Display glasses can be connected to compatible gaming
                devices and can provide a large virtual screen. Compatibility
                depends on the glasses and gaming hardware.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Can you watch Netflix on AR glasses?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Some display glasses can be used to view streaming services
                through a connected phone, computer or other compatible device.
                The exact setup depends on the glasses and source device.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do AR glasses need a computer?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Not necessarily. Some models can connect directly to compatible
                phones, tablets, gaming devices or other sources. Always check
                the manufacturer's compatibility requirements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find the Right AR Glasses for You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Compare your budget and priorities with the display, comfort,
            audio and connectivity features that matter most to you.
          </p>

          <Link
            href="/find"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Take the Smart Glasses Finder Quiz →
          </Link>
        </div>
      </section>
    </main>
  );
}