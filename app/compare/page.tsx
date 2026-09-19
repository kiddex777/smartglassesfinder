import Link from "next/link";
import { products } from "../data/products";
import ProductSelectors from "./ProductSelectors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Smart Glasses | Smart Glasses Finder",
  description:
    "Compare smart glasses side by side by price, camera, AI, audio, display, battery life, comfort and value. Find the right smart glasses for your needs.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/compare",
  },
  openGraph: {
    title: "Compare Smart Glasses | SmartGlassesFinder",
    description:
      "Compare smart glasses side by side by price, camera, AI, audio, display, battery life, comfort and value.",
    url: "https://www.smartglassesfinder.com/compare",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

const popularComparisons = [
  {
    slug: "ray-ban-meta-gen-2-vs-oakley-meta-vanguard",
    title: "Ray-Ban Meta Gen 2 vs Oakley Meta Vanguard",
    description:
      "Compare two of the leading AI smart glasses for camera quality, AI features, audio, battery life and everyday use.",
  },
  {
    slug: "ray-ban-meta-gen-2-vs-oakley-meta-hstn",
    title: "Ray-Ban Meta Gen 2 vs Oakley Meta HSTN",
    description:
      "See how Ray-Ban Meta Gen 2 compares with Oakley Meta HSTN for AI, photography, calls, music and everyday wear.",
  },
  {
    slug: "ray-ban-meta-gen-2-vs-solos-airgo-v2",
    title: "Ray-Ban Meta Gen 2 vs Solos AirGo V2",
    description:
      "Compare AI capabilities, cameras, audio, battery life, comfort and value between these camera-equipped smart glasses.",
  },
  {
    slug: "xreal-one-pro-vs-xreal-one",
    title: "XREAL One Pro vs XREAL One",
    description:
      "Compare these AR display glasses across display quality, field of view, refresh rate, comfort and price.",
  },
  {
    slug: "xreal-one-pro-vs-viture-pro-2",
    title: "XREAL One Pro vs VITURE Pro 2",
    description:
      "Compare two popular display glasses for visual quality, audio, comfort, refresh rate and overall value.",
  },
  {
    slug: "xreal-one-vs-rokid-max-2",
    title: "XREAL One vs Rokid Max 2",
    description:
      "Compare display specifications, comfort, audio, compatibility and value between two AR glasses options.",
  },
  {
    slug: "even-realities-g2-vs-ray-ban-meta-gen-2",
    title: "Even Realities G2 vs Ray-Ban Meta Gen 2",
    description:
      "Compare display-equipped Even Realities G2 with Ray-Ban Meta Gen 2 for AI, camera, audio, battery and everyday use.",
  },
  {
    slug: "viture-pro-2-vs-rokid-max-2",
    title: "VITURE Pro 2 vs Rokid Max 2",
    description:
      "Compare two display glasses for screen quality, comfort, audio, compatibility and price.",
  },
];

type ComparePageProps = {
  searchParams: Promise<{
    first?: string;
    second?: string;
  }>;
};

export default async function ComparePage({
  searchParams,
}: ComparePageProps) {
  const params = await searchParams;

  const firstProduct =
    products.find((product) => product.slug === params.first) ?? products[0];

  const secondProduct =
    products.find((product) => product.slug === params.second) ?? products[1];

  const firstSlug = firstProduct.slug;
  const secondSlug = secondProduct.slug;

  const firstOverall = firstProduct.scores?.overall ?? 0;
  const secondOverall = secondProduct.scores?.overall ?? 0;

  const overallWinner =
    firstOverall > secondOverall
      ? firstProduct
      : secondOverall > firstOverall
        ? secondProduct
        : null;

  const comparisons = [
    [
      "Price",
      firstProduct.price !== null
        ? `$${firstProduct.price} ${firstProduct.currency}`
        : "N/A",
      secondProduct.price !== null
        ? `$${secondProduct.price} ${secondProduct.currency}`
        : "N/A",
    ],
    [
      "Overall Rating",
      firstProduct.rating !== null ? `${firstProduct.rating}/10` : "N/A",
      secondProduct.rating !== null ? `${secondProduct.rating}/10` : "N/A",
    ],
    ["Category", firstProduct.category, secondProduct.category],
    ["Camera", firstProduct.camera, secondProduct.camera],
    ["Audio", firstProduct.audio, secondProduct.audio],
    ["AI", firstProduct.ai, secondProduct.ai],
    ["Display", firstProduct.display, secondProduct.display],
    ["Battery", firstProduct.battery, secondProduct.battery],
    ["Weight", firstProduct.weight, secondProduct.weight],
    ["Prescription", firstProduct.prescription, secondProduct.prescription],
    ["Compatibility", firstProduct.compatibility, secondProduct.compatibility],
  ];

  const categoryScores = [
    ["AI", firstProduct.scores?.ai, secondProduct.scores?.ai],
    ["Camera", firstProduct.scores?.camera, secondProduct.scores?.camera],
    ["Audio", firstProduct.scores?.audio, secondProduct.scores?.audio],
    ["Display", firstProduct.scores?.display, secondProduct.scores?.display],
    ["Battery", firstProduct.scores?.battery, secondProduct.scores?.battery],
    ["Comfort", firstProduct.scores?.comfort, secondProduct.scores?.comfort],
    ["Value", firstProduct.scores?.value, secondProduct.scores?.value],
  ];

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

            <Link href="/compare" className="text-blue-600">
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
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Smart Glasses Comparison
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Compare smart glasses
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Compare features, capabilities, prices, and ratings to find the
            smart glasses that make the most sense for you.
          </p>
        </div>
      </section>

      {/* Product Selectors and Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProductSelectors
          products={products}
          firstSlug={firstSlug}
          secondSlug={secondSlug}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Product 1 */}
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="flex h-64 items-center justify-center bg-slate-100">
              {firstProduct.image ? (
                <img
                  src={firstProduct.image}
                  alt={firstProduct.name}
                  className="h-full w-full object-contain p-6"
                />
              ) : (
                <span className="text-7xl">👓</span>
              )}
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {firstProduct.category}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {firstProduct.name}
              </h2>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-lg font-bold text-slate-900">
                  {firstProduct.price !== null
                    ? `$${firstProduct.price} ${firstProduct.currency}`
                    : "Price unavailable"}
                </span>

                {firstProduct.rating !== null && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {firstProduct.rating}/10
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Smart Glasses Finder editorial score
              </p>

              <p className="mt-3 text-slate-600">
                {firstProduct.description}
              </p>

              <Link
                href={`/reviews/${firstProduct.slug}`}
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                Read Review →
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="flex h-64 items-center justify-center bg-slate-100">
              {secondProduct.image ? (
                <img
                  src={secondProduct.image}
                  alt={secondProduct.name}
                  className="h-full w-full object-contain p-6"
                />
              ) : (
                <span className="text-7xl">👓</span>
              )}
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {secondProduct.category}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {secondProduct.name}
              </h2>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-lg font-bold text-slate-900">
                  {secondProduct.price !== null
                    ? `$${secondProduct.price} ${secondProduct.currency}`
                    : "Price unavailable"}
                </span>

                {secondProduct.rating !== null && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {secondProduct.rating}/10
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Smart Glasses Finder editorial score
              </p>

              <p className="mt-3 text-slate-600">
                {secondProduct.description}
              </p>

              <Link
                href={`/reviews/${secondProduct.slug}`}
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                Read Review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Side by Side
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {firstProduct.name} vs {secondProduct.name}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100 px-6 py-4 text-sm font-bold">
              <span>Feature</span>
              <span>{firstProduct.name}</span>
              <span>{secondProduct.name}</span>
            </div>

            {comparisons.map(([feature, first, second]) => (
              <div
                key={feature}
                className="grid grid-cols-3 gap-4 border-b border-slate-200 px-6 py-5 text-sm last:border-b-0"
              >
                <span className="font-semibold text-slate-900">
                  {feature}
                </span>

                <span className="text-slate-600">{first}</span>

                <span className="text-slate-600">{second}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Breakdown */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Ratings Breakdown
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            How the two glasses compare
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Our scores are based on how each model performs across the key
            categories that matter most when choosing smart glasses.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100 px-6 py-4 text-sm font-bold">
            <span>Category</span>
            <span>{firstProduct.name}</span>
            <span>{secondProduct.name}</span>
          </div>

          {categoryScores.map(([category, firstScore, secondScore]) => {
            const firstIsHigher =
              firstScore !== undefined &&
              secondScore !== undefined &&
              firstScore > secondScore;

            const secondIsHigher =
              firstScore !== undefined &&
              secondScore !== undefined &&
              secondScore > firstScore;

            return (
              <div
                key={category}
                className="grid grid-cols-3 gap-4 border-b border-slate-200 px-6 py-5 text-sm last:border-b-0"
              >
                <span className="font-semibold text-slate-900">
                  {category}
                </span>

                <span
                  className={
                    firstIsHigher
                      ? "font-bold text-blue-700"
                      : "font-semibold text-slate-600"
                  }
                >
                  {firstScore !== undefined ? `${firstScore}/10` : "N/A"}
                </span>

                <span
                  className={
                    secondIsHigher
                      ? "font-bold text-blue-700"
                      : "font-semibold text-slate-600"
                  }
                >
                  {secondScore !== undefined ? `${secondScore}/10` : "N/A"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verdict */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Take
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Which one should you choose?
          </h2>

          <div className="mt-6 rounded-2xl bg-blue-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              🏆 Best Overall
            </p>

            {overallWinner ? (
              <>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  {overallWinner.name}
                </p>

                <p className="mt-1 text-slate-600">
                  Overall score:{" "}
                  {overallWinner.scores?.overall ?? overallWinner.rating}/10
                </p>

                <p className="mt-2 text-sm font-semibold text-blue-700">
                  Winner by overall score
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  It&apos;s a tie
                </p>

                <p className="mt-1 text-slate-600">
                  Both products have the same overall score.
                </p>
              </>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categoryScores.map(([category, firstScore, secondScore]) => {
              const firstValue = firstScore ?? 0;
              const secondValue = secondScore ?? 0;

              const winner =
                firstValue > secondValue
                  ? firstProduct
                  : secondValue > firstValue
                    ? secondProduct
                    : null;

              const winningScore = Math.max(
                Number(firstValue),
                Number(secondValue)
              );

              return (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {category} Winner
                  </p>

                  {winner ? (
                    <>
                      <p className="mt-2 font-bold text-slate-900">
                        {winner.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        {firstProduct.name}: {firstScore}/10 ·{" "}
                        {secondProduct.name}: {secondScore}/10
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-2 font-bold text-slate-900">
                        It&apos;s a tie
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        Both products scored {winningScore}/10.
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-8 leading-8 text-slate-600">
            The right choice depends on what you want from your smart glasses.
            We compare these two models across features, usability, price,
            design, battery life, and overall value to help you decide which
            one is the better fit for your needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/reviews/${firstProduct.slug}`}
              className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Review {firstProduct.name}
            </Link>

            <Link
              href={`/reviews/${secondProduct.slug}`}
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold hover:border-slate-400"
            >
              Review {secondProduct.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Popular Comparisons
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Compare Smart Glasses
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Compare popular smart glasses side by side to see how they differ
              in price, AI, cameras, audio, displays, battery life, comfort and
              value.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {popularComparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold group-hover:text-blue-600">
                  {comparison.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {comparison.description}
                </p>

                <span className="mt-5 inline-block font-semibold text-blue-600">
                  Compare these glasses →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}