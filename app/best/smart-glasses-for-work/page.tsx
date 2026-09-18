import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best Smart Glasses for Work in 2026 | Productivity Glasses",
  description:
    "Discover the best smart glasses for work in 2026. Compare display glasses and AI glasses for productivity, virtual screens, calls, comfort, battery life and more.",
  alternates: {
    canonical:
      "https://www.smartglassesfinder.com/best/smart-glasses-for-work",
  },
  openGraph: {
    title: "Best Smart Glasses for Work in 2026",
    description:
      "Compare smart glasses for productivity, virtual displays, calls, AI assistance, comfort and everyday work.",
    url: "https://www.smartglassesfinder.com/best/smart-glasses-for-work",
    siteName: "Smart Glasses Finder",
    type: "article",
  },
};

export default function BestSmartGlassesForWorkPage() {
  const workProducts = products
    .filter((product) => product.rating !== null)
    .sort((a, b) => {
      const aWorkScore =
        (a.scores?.display ?? 0) +
        (a.scores?.comfort ?? 0) +
        (a.scores?.battery ?? 0) +
        (a.scores?.audio ?? 0) +
        (a.scores?.ai ?? 0);

      const bWorkScore =
        (b.scores?.display ?? 0) +
        (b.scores?.comfort ?? 0) +
        (b.scores?.battery ?? 0) +
        (b.scores?.audio ?? 0) +
        (b.scores?.ai ?? 0);

      return bWorkScore - aWorkScore;
    });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Smart Glasses Finder
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Best Smart Glasses for Work in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Looking for smart glasses that can help with productivity? We
            compare display glasses and AI glasses for virtual screens, calls,
            AI assistance, comfort, battery life and everyday work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/find"
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Find Your Glasses
            </Link>

            <Link
              href="/compare"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              Compare Smart Glasses
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Smart Glasses for Work Picks
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Smart glasses can take several different approaches to
            productivity. Display glasses can provide a portable virtual
            screen, while AI-focused glasses can provide hands-free
            assistance, audio, cameras and voice interaction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workProducts.slice(0, 6).map((product, index) => (
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
                    <span className="block text-gray-500">Comfort</span>
                    <span className="font-semibold">
                      {product.scores?.comfort ?? "—"}/10
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">Audio</span>
                    <span className="font-semibold">
                      {product.scores?.audio ?? "—"}/10
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500">Battery</span>
                    <span className="font-semibold">
                      {product.scores?.battery ?? "—"}/10
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

      {/* Two Approaches */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Two Ways Smart Glasses Can Help at Work
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-2xl font-bold">
                Display-Focused Glasses
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Display glasses can provide a large virtual screen that can be
                useful when working from a laptop, handheld device or other
                compatible hardware.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                When evaluating these products, pay particular attention to
                resolution, field of view, refresh rate, connectivity and
                comfort.
              </p>

              <Link
                href="/best/ar-glasses"
                className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
              >
                See the Best AR Glasses →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-2xl font-bold">
                AI-Focused Glasses
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                AI glasses can be useful for hands-free voice assistance,
                calls, audio, reminders, photography and other tasks that
                normally require reaching for a phone.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                For these products, consider AI capabilities, microphones,
                audio quality, camera performance, battery life and phone
                compatibility.
              </p>

              <Link
                href="/best/ai-glasses"
                className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
              >
                See the Best AI Glasses →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Features */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            What to Look For in Work Smart Glasses
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            The most useful features depend on how you plan to use your
            glasses during the workday.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Virtual Displays</h3>
            <p className="mt-3 leading-6 text-gray-600">
              A virtual display can provide a large screen without requiring a
              traditional physical monitor.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">AI Assistance</h3>
            <p className="mt-3 leading-6 text-gray-600">
              AI features can provide hands-free assistance for questions,
              information and other supported tasks.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Calls & Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Built-in microphones and speakers can make calls and audio
              communication more convenient.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-6 text-gray-600">
              If you're wearing smart glasses for several hours, frame weight
              and overall comfort become especially important.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Battery Life</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Consider how long the glasses can operate and how they are
              recharged during the workday.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Compatibility</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Make sure the glasses work with your computer, phone and other
              devices before buying.
            </p>
          </div>
        </div>
      </section>

      {/* Work Scenarios */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Smart Glasses for Different Work Situations
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Remote Work</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Display glasses can provide another way to create a portable
                screen, while AI glasses can provide hands-free calls and
                assistance.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Traveling for Work</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Compact smart glasses can be useful when you want to reduce the
                amount of equipment you carry while traveling.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Hands-Free Tasks</h3>

              <p className="mt-3 leading-7 text-gray-600">
                AI glasses with microphones, cameras and speakers can provide
                hands-free access to supported features while you're moving
                around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold">
          Things to Consider Before Buying
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          Smart glasses are not a universal replacement for a computer,
          monitor, phone or traditional headphones. Their usefulness depends
          heavily on the hardware and software ecosystem they connect to.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          Before buying, check the manufacturer's compatibility requirements,
          connection method, battery specifications and supported features. If
          you need prescription lenses, also check whether your preferred
          configuration supports them.
        </p>

        <Link
          href="/compare"
          className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
        >
          Compare Smart Glasses →
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
                Can smart glasses be used for work?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Yes. Depending on the model, smart glasses can provide virtual
                displays, AI assistance, audio, calls, cameras and other
                features that may be useful during work.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Are AR glasses good for productivity?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Display glasses can be useful for productivity when connected
                to compatible devices because they can provide a large virtual
                screen in a compact form factor.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Can smart glasses replace a monitor?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Some display glasses can provide a virtual screen that may work
                as an alternative to a physical monitor in certain situations.
                The experience depends on the glasses, source device and
                connection.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Are AI glasses useful for work?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                AI glasses can provide hands-free access to supported AI
                assistants, calls, audio, cameras and other features. Their
                usefulness depends on the specific model and software it
                supports.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                What are the best smart glasses for remote work?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                The best option depends on whether your priority is a virtual
                display, AI assistance, calls, audio, portability or comfort.
                Compare the features that matter most to your workflow before
                choosing a model.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find Smart Glasses for Your Workflow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Tell us what you want from your smart glasses and our Finder quiz
            will recommend products based on your priorities.
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