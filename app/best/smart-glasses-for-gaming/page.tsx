import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best Smart Glasses for Gaming in 2026 | Gaming Glasses",
  description:
    "Discover the best smart glasses for gaming in 2026. Compare AR and display glasses for screen size, resolution, refresh rate, audio, comfort and compatibility.",
  alternates: {
    canonical:
      "https://www.smartglassesfinder.com/best/smart-glasses-for-gaming",
  },
  openGraph: {
    title: "Best Smart Glasses for Gaming in 2026",
    description:
      "Compare display-focused smart glasses for gaming, handheld consoles, PC gaming, screen size, refresh rate and comfort.",
    url: "https://www.smartglassesfinder.com/best/smart-glasses-for-gaming",
    siteName: "SmartGlassesFinder",
    type: "article",
  },
};

export default function BestSmartGlassesForGamingPage() {
  const gamingProducts = products
    .filter(
      (product) =>
        product.category === "AR & Display Glasses" &&
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
            Best Smart Glasses for Gaming in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Looking for gaming glasses that give you a large virtual screen?
            We compare display resolution, field of view, refresh rate, audio,
            comfort and device compatibility.
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

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Gaming Smart Glasses Picks
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Display-focused smart glasses can provide a large virtual screen
            without requiring a traditional monitor or television. They can be
            particularly interesting for portable gaming, handheld consoles
            and other devices with compatible video output.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gamingProducts.map((product, index) => (
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

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500">
                      Resolution
                    </span>
                    <span className="font-semibold">
                      {product.displayResolution ?? "—"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">
                      Refresh Rate
                    </span>
                    <span className="font-semibold">
                      {product.refreshRate ?? "—"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">
                      Field of View
                    </span>
                    <span className="font-semibold">
                      {product.fieldOfView ?? "—"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">
                      Weight
                    </span>
                    <span className="font-semibold">
                      {product.weight}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    {product.price !== null && (
                      <div className="font-bold">
                        From ${product.price}
                      </div>
                    )}

                    <div className="mt-1 text-sm font-semibold">
                      Finder Score: {product.rating ?? "—"}/10
                    </div>
                  </div>

                  <Link
                    href={`/reviews/${product.slug}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Review →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Gaming Glasses */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            Why Use Smart Glasses for Gaming?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Gaming-focused smart glasses can create a large virtual display
            while keeping the physical hardware relatively compact. This can
            make them interesting for handheld gaming, travel and situations
            where you don't have access to a traditional monitor.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            The glasses themselves generally act as the display, while the
            gaming device provides the game. Depending on the product and
            device, you may need a compatible USB-C connection, adapter or
            other accessory.
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            What to Look For in Gaming Glasses
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Display specifications and device compatibility can have a major
            effect on your gaming experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Resolution</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Higher display resolution can provide a sharper image and make
              game text and fine details easier to see.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Refresh Rate</h3>
            <p className="mt-3 leading-6 text-gray-600">
              A higher refresh rate can make movement appear smoother,
              particularly in games with fast motion.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Field of View</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Field of view affects the apparent size of the virtual screen and
              how much of the display you can see at once.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Gaming sessions can last a long time, so weight and frame comfort
              are important considerations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Connectivity</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Check whether your gaming device supports the connection required
              by the glasses and whether additional hardware is necessary.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Built-in audio can simplify your gaming setup, although dedicated
              headphones may still be preferred by some players.
            </p>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Gaming Devices to Consider
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Compatibility varies by product. Before buying, check the
              manufacturer's requirements for your specific gaming hardware.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Handheld Gaming</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Display glasses can be particularly interesting for portable
                gaming devices when they support the required video connection.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">PC Gaming</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Compatible display glasses can provide a portable virtual
                screen for a gaming laptop or desktop setup.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Console Gaming</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Consoles may require adapters or additional accessories,
                depending on the connection supported by the glasses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming vs VR */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold">
          Gaming Glasses vs VR Headsets
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          Display glasses and VR headsets provide different experiences.
          Display glasses can be much more compact and are often designed to
          act as a large virtual screen connected to another device.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          VR headsets are designed around immersive virtual environments and
          typically include additional tracking and interaction hardware. If
          your main goal is simply having a large portable gaming screen,
          display glasses may offer a different approach.
        </p>

        <Link
          href="/ar-glasses"
          className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
        >
          Compare More AR Glasses →
        </Link>
      </section>

      {/* FAQ */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Are smart glasses good for gaming?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Display-focused smart glasses can be useful for gaming because
                they can provide a large virtual screen in a compact form
                factor. The experience depends on the display specifications,
                connection and gaming device.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Can you use AR glasses with a Steam Deck?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Some display glasses can work with compatible handheld gaming
                devices. Check the specific glasses and handheld's connection
                requirements before buying.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Can you use smart glasses with a gaming PC?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Some display glasses can connect to computers and provide a
                virtual screen. Compatibility depends on the connection and
                hardware supported by the glasses.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do gaming glasses need a battery?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Battery requirements vary. Some display glasses draw power from
                the connected device through their cable rather than using a
                built-in battery.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Are AR glasses better than a gaming monitor?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                They serve different purposes. A monitor provides a physical
                display, while display glasses can provide a large virtual
                screen in a portable form factor. The better fit depends on
                where and how you play.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find the Right Gaming Glasses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Compare your gaming needs, budget and preferred features with the
            products in our database.
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