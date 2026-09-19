import Link from "next/link";
import { products } from "../data/products";

export const metadata = {
  title: "Best AR Glasses in 2026 | Display & Gaming Glasses",
  description:
    "Compare AR glasses with built-in displays for gaming, movies, productivity and immersive entertainment. Compare display quality, refresh rate, field of view, comfort and value.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/ar-glasses",
  },
  openGraph: {
    title: "Best AR Glasses in 2026 | Smart Glasses Finder",
    description:
      "Compare AR and display glasses for gaming, movies, productivity and immersive entertainment.",
    url: "https://www.smartglassesfinder.com/ar-glasses",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function ARGlassesPage() {
  const arGlasses = products.filter(
    (product) => product.category === "AR & Display Glasses"
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SmartGlassesFinder
          </Link>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
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
            <Link href="/find" className="hover:text-blue-600">
              Find Your Glasses
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            AR & Display Glasses
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Compare AR Glasses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore display-focused smart glasses designed for gaming, movies,
            productivity and immersive entertainment. Compare screens,
            refresh rates, field of view, comfort and price.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/best/ar-glasses"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
            >
              See the Best AR Glasses
            </Link>

            <Link
              href="/find"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800"
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
            Compare
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            AR glasses with built-in displays
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            These glasses use built-in displays to create a large virtual
            screen in front of you. They are particularly suited to gaming,
            watching movies and using larger virtual workspaces.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {arGlasses.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex h-64 items-center justify-center bg-slate-50 p-8">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-48 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-6xl">👓</span>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  {product.brand}
                </p>

                <h3 className="mt-1 text-2xl font-bold">{product.name}</h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">
                    {product.price !== null
                      ? `$${product.price.toLocaleString()} USD`
                      : "Price unavailable"}
                  </span>

                  {product.rating !== null && (
                    <div className="text-right">
                      <span className="font-bold text-blue-600">
                        {product.rating}/10
                      </span>
                      <p className="text-xs text-slate-500">
                        Editorial score
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Display</p>
                    <p className="mt-1 text-slate-600">
                      {product.displayResolution || product.display}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Refresh Rate</p>
                    <p className="mt-1 text-slate-600">
                      {product.refreshRate || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Field of View</p>
                    <p className="mt-1 text-slate-600">
                      {product.fieldOfView || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Weight</p>
                    <p className="mt-1 text-slate-600">{product.weight}</p>
                  </div>
                </div>

                <Link
                  href={`/reviews/${product.slug}`}
                  className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read Review →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What are AR glasses */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            What are AR glasses?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            AR and display glasses use miniature screens built into the
            eyewear to project digital content into your field of view. Many
            current models connect to a phone, computer, game console or other
            USB-C video source rather than operating completely independently.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Unlike camera-focused AI glasses, display glasses are primarily
            designed around visual experiences such as virtual screens,
            gaming, movies and productivity.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          What to look for
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Important AR glasses features
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Display quality</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Resolution, brightness, contrast and panel technology all affect
              how sharp and immersive the virtual screen looks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Refresh rate</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Higher refresh rates can make gaming, scrolling and motion feel
              smoother.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Field of view</h3>
            <p className="mt-3 leading-7 text-slate-600">
              A wider field of view can make the virtual display feel larger
              and more immersive.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Comfort</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Weight, nose-pad design, lens options and overall balance matter
              when wearing glasses for extended sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            What can you use AR glasses for?
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">Gaming</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Create a large virtual gaming screen without needing a
                traditional monitor or television.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Movies</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Watch movies and shows on a large virtual display from almost
                anywhere.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Productivity</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use a portable virtual screen for laptops, handheld PCs and
                other compatible devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs AR */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          AR glasses vs AI glasses
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-4 font-semibold">Feature</th>
                <th className="px-4 py-4 font-semibold">AR Glasses</th>
                <th className="px-4 py-4 font-semibold">AI Glasses</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-4 font-medium">Built-in display</td>
                <td className="px-4 py-4">Usually yes</td>
                <td className="px-4 py-4">Usually no</td>
              </tr>

              <tr className="border-b border-slate-200">
                <td className="px-4 py-4 font-medium">Main focus</td>
                <td className="px-4 py-4">
                  Visual experiences and virtual screens
                </td>
                <td className="px-4 py-4">
                  AI, camera, audio and hands-free interaction
                </td>
              </tr>

              <tr className="border-b border-slate-200">
                <td className="px-4 py-4 font-medium">Gaming</td>
                <td className="px-4 py-4">Strong use case</td>
                <td className="px-4 py-4">Limited</td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-medium">Hands-free AI</td>
                <td className="px-4 py-4">Varies by model</td>
                <td className="px-4 py-4">Core feature</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Continue exploring
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            AR glasses buying guides
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/best/ar-glasses"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <h3 className="font-bold">Best AR Glasses</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compare our display-focused picks.
              </p>
            </Link>

            <Link
              href="/best/smart-glasses-for-gaming"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <h3 className="font-bold">Best for Gaming</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore glasses designed for gaming.
              </p>
            </Link>

            <Link
              href="/best/smart-glasses-under-300"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <h3 className="font-bold">Under $300</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore lower-cost smart-glasses options.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Finder CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Not sure which glasses are right for you?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Answer a few questions about how you plan to use your glasses and
          we'll help narrow down the options.
        </p>

        <Link
          href="/find"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Find Your Glasses →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold">SmartGlassesFinder</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                Helping you compare smart glasses and find the right option
                for your needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Explore</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                <Link href="/smart-glasses">Smart Glasses</Link>
                <Link href="/compare">Compare</Link>
                <Link href="/reviews">Reviews</Link>
                <Link href="/guides">Guides</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">SmartGlassesFinder</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy</Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 SmartGlassesFinder. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
