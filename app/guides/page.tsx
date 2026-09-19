import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Glasses Guides | Buying Advice & How-To Guides",
  description:
    "Explore SmartGlassesFinder guides covering AI glasses, AR glasses, displays, cameras, battery life, compatibility, gaming, productivity, and more.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/guides",
  },
  openGraph: {
    title: "Smart Glasses Guides | SmartGlassesFinder",
    description:
      "Helpful guides covering smart glasses, AI glasses, AR displays, features, buying advice, and more.",
    url: "https://www.smartglassesfinder.com/guides",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

const guides = [
  {
    title: "Best Smart Glasses",
    description:
      "Compare the best smart glasses across AI, cameras, audio, displays, battery life, comfort, and value.",
    href: "/best/smart-glasses",
    icon: "🏆",
  },
  {
    title: "Best AI Glasses",
    description:
      "Explore AI-powered glasses with cameras, voice assistants, open-ear audio, and hands-free features.",
    href: "/best/ai-glasses",
    icon: "🤖",
  },
  {
    title: "Best AR Glasses",
    description:
      "Compare display-focused glasses for gaming, movies, productivity, and immersive visual experiences.",
    href: "/best/ar-glasses",
    icon: "🥽",
  },
  {
    title: "Smart Glasses Under $300",
    description:
      "Find smart glasses that offer useful features while staying within a $300 budget.",
    href: "/best/smart-glasses-under-300",
    icon: "💰",
  },
  {
    title: "Best Smart Glasses for Gaming",
    description:
      "Compare display glasses based on resolution, refresh rate, field of view, and comfort.",
    href: "/best/smart-glasses-for-gaming",
    icon: "🎮",
  },
  {
    title: "Best Smart Glasses for Work",
    description:
      "Explore glasses for productivity, including display quality, comfort, battery life, audio, and AI.",
    href: "/best/smart-glasses-for-work",
    icon: "💼",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
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

      <Link href="/reviews" className="hover:text-blue-600">
        Reviews
      </Link>

      <Link href="/guides" className="text-blue-600">
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
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Smart Glasses Guides
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Smart Glasses Guides & Buying Advice
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Learn about smart glasses, compare different types, understand
              important features, and find the right glasses for your needs.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/find"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Find My Smart Glasses →
              </Link>

              <Link
                href="/compare"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Compare Glasses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guides */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Buying Guides
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Find the Right Smart Glasses
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Start with a guide based on your budget, interests, or the way you
            plan to use your glasses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-5 text-4xl">{guide.icon}</div>

              <h3 className="text-xl font-bold group-hover:text-blue-600">
                {guide.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {guide.description}
              </p>

              <span className="mt-5 block font-semibold text-blue-600">
                Explore guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Learn About Smart Glasses */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Understanding Smart Glasses
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Smart glasses can combine cameras, microphones, speakers,
              artificial intelligence, and displays in a wearable form.
              Different models focus on very different features, so
              understanding the technology can make comparing them easier.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/ai-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">AI Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Learn about camera-based AI glasses, voice assistants,
                open-ear audio, calls, and hands-free features.
              </p>
              <span className="mt-5 block font-semibold text-blue-600">
                Explore AI glasses →
              </span>
            </Link>

            <Link
              href="/ar-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">AR & Display Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Learn about wearable displays, virtual screens, gaming,
                movies, productivity, and visual experiences.
              </p>
              <span className="mt-5 block font-semibold text-blue-600">
                Explore AR glasses →
              </span>
            </Link>

            <Link
              href="/smart-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Smart Glasses</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Browse the wider smart-glasses market and compare the features
                that matter most.
              </p>
              <span className="mt-5 block font-semibold text-blue-600">
                Browse smart glasses →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Reviews
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Want to Go Deeper?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Read detailed product reviews to examine individual smart
              glasses and see how their features compare.
            </p>
          </div>

          <Link
            href="/reviews"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View all reviews →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Still not sure which glasses are right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Tell us what matters most to you and use the Smart Glasses Finder
            to narrow down your options.
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