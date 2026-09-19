import Link from "next/link";
import type { Metadata } from "next";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Best AI Smart Glasses | Compare AI Glasses | SmartGlassesFinder",
  description:
    "Compare AI smart glasses by price, camera, AI features, audio, battery life, comfort, and value. Find the right AI glasses for your needs.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/ai-glasses",
  },
  openGraph: {
    title: "AI Smart Glasses | SmartGlassesFinder",
    description:
      "Compare AI smart glasses by price, camera, AI features, audio, battery life, comfort, and value.",
    url: "https://www.smartglassesfinder.com/ai-glasses",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};
export default function AIGlassesPage() {
  const aiProducts = products.filter(
    (product) =>
      product.category === "AI Glasses" ||
      product.category === "Hybrid Smart Glasses"
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
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
            AI Smart Glasses
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Compare AI Glasses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore AI-powered smart glasses with cameras, open-ear audio,
            voice assistants, hands-free controls, and other connected
            features.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/smart-glasses"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-blue-300 hover:text-blue-600"
            >
              All Smart Glasses
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

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Browse AI Glasses
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            AI Glasses in Our Database
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Compare AI-focused smart glasses by camera capabilities, AI
            features, audio, battery life, comfort, compatibility, price, and
            overall value.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProducts.map((product) => (
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

                <div className="mt-5 space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-900">AI</span>
                    <p className="mt-1 text-slate-600">{product.ai}</p>
                  </div>

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

      {/* What Are AI Glasses */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Understand AI Glasses
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            What are AI glasses?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            AI glasses are wearable smart glasses that use cameras,
            microphones, speakers, connected apps, and artificial intelligence
            to provide hands-free features. Depending on the model, they can
            help with questions, photography, video recording, calls, music,
            translation, and other voice-controlled tasks.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Unlike display-based AR glasses, many AI glasses do not place
            information directly in front of your eyes. Instead, they rely on
            audio, voice interaction, cameras, and connected devices.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            What to Look For
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Important AI glasses features
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "AI Assistant",
              "Look at what AI features are available and how you interact with them.",
            ],
            [
              "Camera",
              "Camera resolution and video capabilities matter for hands-free capture.",
            ],
            [
              "Audio",
              "Open-ear speakers and microphones affect calls, music, and voice interaction.",
            ],
            [
              "Battery Life",
              "Consider how long the glasses can operate between charges.",
            ],
            [
              "Comfort",
              "Weight, frame design, fit, and prescription options can affect everyday wear.",
            ],
            [
              "Compatibility",
              "Check supported phones, operating systems, apps, and connected services.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI vs AR */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              AI vs AR
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              AI glasses vs AR glasses
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The biggest difference is how the glasses deliver information
              and what they are designed to do.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r">
                <h3 className="text-xl font-bold">AI Glasses</h3>

                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>• AI assistants and voice interaction</li>
                  <li>• Cameras for photos and video</li>
                  <li>• Open-ear audio</li>
                  <li>• Hands-free calls and controls</li>
                  <li>• Usually no built-in visual display</li>
                </ul>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold">AR & Display Glasses</h3>

                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>• Wearable visual displays</li>
                  <li>• Gaming and entertainment</li>
                  <li>• Large virtual screens</li>
                  <li>• Productivity and multitasking</li>
                  <li>• Often connected to another device</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/ar-glasses"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore AR & Display Glasses →
            </Link>
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
            Explore more resources to help narrow down your smart-glasses
            options.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Best AI Glasses", "/best/ai-glasses"],
            ["Best Smart Glasses", "/best/smart-glasses"],
            ["Smart Glasses Under $300", "/best/smart-glasses-under-300"],
            ["Best Smart Glasses for Work", "/best/smart-glasses-for-work"],
            ["Best Smart Glasses for Gaming", "/best/smart-glasses-for-gaming"],
            ["Compare Smart Glasses", "/compare"],
          ].map(([title, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-md"
            >
              {title}
              <span className="mt-2 block text-sm font-semibold text-blue-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Finder CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which AI glasses are right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Answer a few questions about your priorities and get personalized
            smart-glasses recommendations.
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