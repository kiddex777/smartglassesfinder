import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/app/data/products";



type ComparisonPageProps = {
  params: Promise<{
    comparison: string;
  }>;
};

function getProductFromSlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

function parseComparison(comparison: string) {
  const match = comparison.match(/^(.+)-vs-(.+)$/);

  if (!match) {
    return null;
  }

  return {
    firstSlug: match[1],
    secondSlug: match[2],
  };
}

export async function generateMetadata({
  params,
}: ComparisonPageProps): Promise<Metadata> {
  const { comparison } = await params;

  const parsed = parseComparison(comparison);

  if (!parsed) {
    return {};
  }

  const firstProduct = getProductFromSlug(parsed.firstSlug);
  const secondProduct = getProductFromSlug(parsed.secondSlug);

  if (!firstProduct || !secondProduct) {
    return {};
  }

  const title = `${firstProduct.name} vs ${secondProduct.name}: Which Is Better?`;

  const description =
    `Compare ${firstProduct.name} vs ${secondProduct.name} across price, camera, AI, audio, battery life, comfort, features, and more.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/compare/${comparison}`,
    },
    openGraph: {
      title,
      description,
      url: `/compare/${comparison}`,
      siteName: "SmartGlassesFinder",
      type: "article",
    },
  };
}


export default async function ComparisonPage({
  params,
}: ComparisonPageProps) {
  const { comparison } = await params;

  const parsed = parseComparison(comparison);

  if (!parsed) {
    notFound();
  }

  const firstProduct = getProductFromSlug(parsed.firstSlug);
  const secondProduct = getProductFromSlug(parsed.secondSlug);

  if (!firstProduct || !secondProduct) {
    notFound();
  }

  const firstOverall = firstProduct.scores?.overall ?? 0;
  const secondOverall = secondProduct.scores?.overall ?? 0;

  const overallWinner =
    firstOverall > secondOverall
      ? firstProduct
      : secondOverall > firstOverall
        ? secondProduct
        : null;

  const categories = [
    { key: "ai", label: "AI" },
    { key: "camera", label: "Camera" },
    { key: "audio", label: "Audio" },
    { key: "display", label: "Display" },
    { key: "battery", label: "Battery" },
    { key: "comfort", label: "Comfort" },
    { key: "value", label: "Value" },
  ] as const;

  const specifications = [
    {
      label: "Price",
      first:
        firstProduct.price !== null
          ? `$${firstProduct.price} ${firstProduct.currency}`
          : "Not specified",
      second:
        secondProduct.price !== null
          ? `$${secondProduct.price} ${secondProduct.currency}`
          : "Not specified",
    },
    {
      label: "Overall Score",
      first: `${firstOverall}/10`,
      second: `${secondOverall}/10`,
    },
    {
      label: "Camera",
      first: firstProduct.camera,
      second: secondProduct.camera,
    },
    {
      label: "Video",
      first: firstProduct.videoResolution ?? "Not specified",
      second: secondProduct.videoResolution ?? "Not specified",
    },
    {
      label: "Audio",
      first: firstProduct.audio,
      second: secondProduct.audio,
    },
    {
      label: "AI",
      first: firstProduct.ai,
      second: secondProduct.ai,
    },
    {
      label: "Display",
      first: firstProduct.display,
      second: secondProduct.display,
    },
    {
      label: "Battery",
      first: firstProduct.battery,
      second: secondProduct.battery,
    },
    {
      label: "Weight",
      first: firstProduct.weight,
      second: secondProduct.weight,
    },
    {
      label: "Prescription",
      first: firstProduct.prescription,
      second: secondProduct.prescription,
    },
    {
      label: "Compatibility",
      first: firstProduct.compatibility,
      second: secondProduct.compatibility,
    },
    {
      label: "Bluetooth",
      first: firstProduct.bluetooth ?? "Not specified",
      second: secondProduct.bluetooth ?? "Not specified",
    },
    {
      label: "Wi-Fi",
      first: firstProduct.wifi ?? "Not specified",
      second: secondProduct.wifi ?? "Not specified",
    },
    {
      label: "Water Resistance",
      first: firstProduct.waterResistance ?? "Not specified",
      second: secondProduct.waterResistance ?? "Not specified",
    },
    {
      label: "Storage",
      first: firstProduct.storage ?? "Not specified",
      second: secondProduct.storage ?? "Not specified",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/compare"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Smart Glasses Comparisons
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Smart Glasses Comparison
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              {firstProduct.name} vs {secondProduct.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Compare {firstProduct.name} and {secondProduct.name} across
              price, camera, AI, audio, battery life, comfort, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {[firstProduct, secondProduct].map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex min-h-[280px] items-center justify-center rounded-xl bg-gray-50 p-6">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-64 w-full object-contain"
                  />
                ) : (
                  <div className="text-6xl">👓</div>
                )}
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500">
                  {product.brand}
                </p>

                <h2 className="mt-1 text-2xl font-bold">{product.name}</h2>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl font-bold">
                    {product.price !== null
                      ? `$${product.price}`
                      : "Price unavailable"}
                  </span>

                  {product.rating !== null && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                      {product.rating}/10
                    </span>
                  )}
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {product.description}
                </p>

                <Link
                  href={`/reviews/${product.slug}`}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                >
                  Read full review →
                </Link>

                {product.affiliateUrl && (
               <a
  href={product.affiliateUrl}
  target="_blank"
  rel="nofollow sponsored noopener"
  data-affiliate="true"
  className="mt-5 block rounded-xl bg-black px-5 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
>
  Check Price →
</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl bg-gray-900 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Quick Verdict
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {overallWinner
              ? `${overallWinner.name} wins overall`
              : "It's a tie overall"}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-300">
            {overallWinner
              ? `${overallWinner.name} has the higher Smart Glasses Finder editorial overall score in this comparison. However, the better choice depends on which features matter most to you.`
              : `${firstProduct.name} and ${secondProduct.name} have the same Smart Glasses Finder editorial overall score. Your choice should come down to the features and use cases that matter most to you.`}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">
          {firstProduct.name} vs {secondProduct.name} Specs
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold">
            <div>Feature</div>
            <div>{firstProduct.name}</div>
            <div>{secondProduct.name}</div>
          </div>

          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="grid grid-cols-3 border-t border-gray-200 p-4"
            >
              <div className="font-medium text-gray-700">{spec.label}</div>

              <div className="pr-4 text-gray-600">{spec.first}</div>

              <div className="text-gray-600">{spec.second}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ratings */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">Ratings Breakdown</h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            These are Smart Glasses Finder editorial scores based on the
            product's feature set and intended use. They are not customer
            review ratings.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold">
              <div>Category</div>
              <div>{firstProduct.name}</div>
              <div>{secondProduct.name}</div>
            </div>

            {categories.map((category) => {
              const firstScore = firstProduct.scores?.[category.key] ?? 0;
              const secondScore = secondProduct.scores?.[category.key] ?? 0;

              return (
                <div
                  key={category.key}
                  className="grid grid-cols-3 border-t border-gray-200 p-4"
                >
                  <div className="font-medium">{category.label}</div>

                  <div className="font-semibold">
                    {firstScore}/10
                    {firstScore > secondScore && (
                      <span className="ml-2 text-sm text-green-600">Winner</span>
                    )}
                    {firstScore === secondScore && (
                      <span className="ml-2 text-sm text-gray-400">Tie</span>
                    )}
                  </div>

                  <div className="font-semibold">
                    {secondScore}/10
                    {secondScore > firstScore && (
                      <span className="ml-2 text-sm text-green-600">Winner</span>
                    )}
                    {firstScore === secondScore && (
                      <span className="ml-2 text-sm text-gray-400">Tie</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Camera */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Camera & Capture</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">{firstProduct.name}</h3>
            <p className="mt-3 text-gray-600">{firstProduct.camera}</p>
            <p className="mt-2 text-gray-600">
              {firstProduct.videoResolution ?? "Video specification not specified"}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold">{secondProduct.name}</h3>
            <p className="mt-3 text-gray-600">{secondProduct.camera}</p>
            <p className="mt-2 text-gray-600">
              {secondProduct.videoResolution ?? "Video specification not specified"}
            </p>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">AI Features</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">{firstProduct.name}</h3>
              <p className="mt-3 text-gray-600">{firstProduct.ai}</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">{secondProduct.name}</h3>
              <p className="mt-3 text-gray-600">{secondProduct.ai}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Buy */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Who Should Buy Each One?</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-2xl font-bold">{firstProduct.name}</h3>

            <ul className="mt-5 space-y-3">
              {firstProduct.pros.slice(0, 5).map((pro) => (
                <li key={pro} className="flex gap-2 text-gray-700">
                  <span className="font-bold text-green-600">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-2xl font-bold">{secondProduct.name}</h3>

            <ul className="mt-5 space-y-3">
              {secondProduct.pros.slice(0, 5).map((pro) => (
                <li key={pro} className="flex gap-2 text-gray-700">
                  <span className="font-bold text-green-600">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Final Verdict
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {overallWinner
              ? `${overallWinner.name} is the overall winner`
              : "Both glasses are evenly matched"}
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            {overallWinner
              ? `For most buyers, ${overallWinner.name} is the stronger overall option based on our editorial scoring. That said, ${firstProduct.name} and ${secondProduct.name} are designed for different priorities, so the right choice depends on how you plan to use your smart glasses.`
              : `There is no clear overall winner between ${firstProduct.name} and ${secondProduct.name}. Compare the individual categories above to decide which model better matches your needs.`}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/reviews/${firstProduct.slug}`}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-100"
            >
              Review: {firstProduct.name}
            </Link>

            <Link
              href={`/reviews/${secondProduct.slug}`}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-100"
            >
              Review: {secondProduct.name}
            </Link>

            <Link
              href="/find"
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Find Your Smart Glasses →
            </Link>
          </div>
        </div>
      </section>

            {/* Related Comparisons */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Related Comparisons
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              More Smart Glasses Comparisons
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore more side-by-side comparisons to find the smart glasses
              that best match your needs, budget and priorities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                slug: "ray-ban-meta-gen-2-vs-oakley-meta-vanguard",
                title: "Ray-Ban Meta Gen 2 vs Oakley Meta Vanguard",
              },
              {
                slug: "ray-ban-meta-gen-2-vs-oakley-meta-hstn",
                title: "Ray-Ban Meta Gen 2 vs Oakley Meta HSTN",
              },
              {
                slug: "ray-ban-meta-gen-2-vs-solos-airgo-v2",
                title: "Ray-Ban Meta Gen 2 vs Solos AirGo V2",
              },
              {
                slug: "xreal-one-pro-vs-xreal-one",
                title: "XREAL One Pro vs XREAL One",
              },
              {
                slug: "xreal-one-pro-vs-viture-pro-2",
                title: "XREAL One Pro vs VITURE Pro 2",
              },
              {
                slug: "xreal-one-vs-rokid-max-2",
                title: "XREAL One vs Rokid Max 2",
              },
              {
                slug: "even-realities-g2-vs-ray-ban-meta-gen-2",
                title: "Even Realities G2 vs Ray-Ban Meta Gen 2",
              },
              {
                slug: "viture-pro-2-vs-rokid-max-2",
                title: "VITURE Pro 2 vs Rokid Max 2",
              },
            ]
              .filter(
                (relatedComparison) =>
                  relatedComparison.slug !== comparison
              )
              .map((relatedComparison) => (
                <Link
                  key={relatedComparison.slug}
                  href={`/compare/${relatedComparison.slug}`}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {relatedComparison.title}
                  </h3>

                  <span className="mt-4 inline-block font-semibold text-blue-600">
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