import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best AI Glasses in 2026 | Top AI Smart Glasses",
  description:
    "Discover the best AI glasses in 2026. Compare smart glasses with AI assistants, cameras, audio, battery life, comfort and more.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/best/ai-glasses",
  },
  openGraph: {
    title: "Best AI Glasses in 2026 | Smart Glasses Finder",
    description:
      "Compare the best AI smart glasses for voice assistance, cameras, audio, battery life, comfort and everyday use.",
    url: "https://www.smartglassesfinder.com/best/ai-glasses",
    siteName: "Smart Glasses Finder",
    type: "article",
  },
};

export default function BestAIGlassesPage() {
  const aiProducts = products
    .filter(
      (product) =>
        product.category === "AI Glasses" ||
        product.category === "Hybrid Smart Glasses"
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
            Best AI Glasses in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Looking for smart glasses with AI? We compare the leading AI
            glasses for voice assistance, cameras, audio, battery life,
            comfort and everyday use.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/find"
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Find Your Glasses
            </Link>

            <Link
              href="/ai-glasses"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              Explore AI Glasses
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Best AI Glasses Picks
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            AI glasses can combine voice assistants, cameras, microphones,
            open-ear audio and hands-free controls in a glasses-sized device.
            The right choice depends on which features matter most to you.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiProducts.map((product, index) => (
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

      {/* What Are AI Glasses? */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            What Are AI Glasses?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            AI glasses are wearable devices that bring artificial intelligence
            features into a glasses form factor. Depending on the model, they
            can provide voice assistance, answer questions, recognize or
            describe what the camera sees, capture photos and video, play
            audio, handle calls and provide hands-free controls.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            AI glasses can look similar to conventional eyewear, but the
            technology inside can vary considerably. Some models focus heavily
            on cameras and AI, while others combine AI capabilities with
            displays or other smart features.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            What to Look For in AI Glasses
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            These are some of the most important features to consider when
            comparing AI smart glasses.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">AI Assistant</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Look at what AI features are available and how naturally you can
              interact with the assistant using voice or other controls.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Camera Quality</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Camera resolution and video capabilities matter if you want to
              capture moments from a first-person perspective.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Open-ear speakers can provide music, calls and assistant
              responses while allowing you to remain aware of your surroundings.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Microphones</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Microphone quality affects calls, voice commands and interactions
              with AI assistants.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Battery Life</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Consider both the glasses' operating time and whether a charging
              case provides additional power when you're away from an outlet.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-6 text-gray-600">
              AI glasses are designed for frequent use, so weight, frame
              design, fit and prescription options can all matter.
            </p>
          </div>
        </div>
      </section>

      {/* AI vs AR */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            AI Glasses vs AR Glasses
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            AI glasses and AR glasses are related but serve different primary
            purposes. AI glasses often emphasize cameras, audio, voice
            assistants and hands-free interaction. AR glasses use displays to
            place visual information or virtual screens in your field of view.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Some smart glasses combine elements of both categories. Before
            buying, consider whether you primarily want an AI assistant and
            camera or a visual display for gaming, entertainment and
            productivity.
          </p>

          <Link
            href="/ar-glasses"
            className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
          >
            Explore AR & Display Glasses →
          </Link>
        </div>
      </section>

      {/* Who Should Buy */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Who Should Consider AI Glasses?
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">
              People Who Want Hands-Free Assistance
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              AI glasses can be useful if you want to interact with an
              assistant without reaching for your phone.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">
              People Who Capture Photos & Video
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Camera-equipped glasses can provide a convenient way to capture
              hands-free photos and video from your perspective.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">
              People Who Want Open-Ear Audio
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Open-ear audio can provide music, calls and assistant responses
              without covering your ears like traditional headphones.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">
              People Who Want Familiar-Looking Eyewear
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Many AI glasses are designed to resemble conventional eyewear,
              making them suitable for people who want smart features without
              a headset-style design.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions About AI Glasses
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                What can AI glasses do?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Depending on the model, AI glasses can provide voice
                assistance, answer questions, capture photos and video, play
                audio, handle calls and provide hands-free controls.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do AI glasses have cameras?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Many AI glasses include cameras, but not every smart-glasses
                product does. Camera resolution and video capabilities vary
                between models.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do AI glasses have displays?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Some AI glasses have displays, but many camera and AI-focused
                models do not. Display-focused products are generally designed
                around visual information and virtual screens.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Do AI glasses need a phone?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Many AI glasses use a connected smartphone for setup, apps,
                internet connectivity or additional features. Compatibility
                requirements depend on the specific product.
              </p>
            </details>

            <details className="rounded-2xl border border-gray-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Are AI glasses the same as AR glasses?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                No. AI glasses generally focus on artificial intelligence,
                cameras and audio, while AR glasses use displays to provide
                visual information or virtual screens. Some products combine
                features from both categories.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find the Right AI Glasses for You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Not sure which pair fits your needs? Use our Smart Glasses Finder
            quiz to compare your budget, priorities and intended use against
            the products in our database.
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