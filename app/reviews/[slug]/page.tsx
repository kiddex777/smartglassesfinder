import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Smart Glasses Review | Smart Glasses Finder",
      description:
        "Read our smart glasses reviews, specifications, pros, cons, and buying information.",
    };
  }

  return {
    title: `${product.name} Review: Is It Worth Buying? | Smart Glasses Finder`,
    description: `Read our ${product.name} review, including price, specifications, features, pros, cons, and who these smart glasses are best for.`,
  };
}
export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  image: product.image ? [product.image] : [],
  description: product.description,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  offers:
    product.price !== null
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency,
          availability: "https://schema.org/InStock",
          url: product.affiliateUrl || product.officialUrl,
        }
      : undefined,
};

  return (
    <main className="min-h-screen bg-white text-slate-900">
       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(productSchema),
  }}
/>


      {/* Breadcrumb */}
      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="text-sm text-slate-500">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/reviews" className="hover:text-blue-600">
              Reviews
            </a>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{product.name}</span>
          </nav>
        </div>
      </div>

     {/* Product Header */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      
      {/* Image */}
      <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-slate-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[380px] w-full object-contain p-8"
          />
        ) : (
          <div className="text-8xl">👓</div>
        )}
      </div>

      {/* Information */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {product.category}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {product.name}
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          {product.description}
        </p>

        {/* Price and Rating */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {product.price !== null && (
            <span className="text-3xl font-bold text-slate-900">
              ${product.price} {product.currency}
            </span>
          )}

          {product.rating !== null && (
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              {product.rating}/10
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
            {product.brand}
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={product.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Check Current Price →
          </a>

          <a
            href="/compare"
            className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-center font-semibold transition hover:border-slate-400"
          >
            Compare
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

   {/* Our Verdict */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="grid gap-8 lg:grid-cols-3">
    <div className="rounded-3xl bg-slate-950 p-8 text-white lg:col-span-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Our Verdict
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Is the {product.name} worth buying?
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        The {product.name} are a strong option for{" "}
        <strong className="text-white">{product.bestFor}</strong>.
        They stand out for their combination of hardware, software,
        portability, and everyday usability.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-300">
        Whether they are right for you depends on the features you
        value most. Consider the specifications, strengths, and
        limitations below before making your decision.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        At a Glance
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-slate-500">Price</p>
          <p className="mt-1 text-xl font-bold">
            {product.price !== null
              ? `$${product.price} ${product.currency}`
              : "See current price"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Best For</p>
          <p className="mt-1 font-semibold text-slate-900">
            {product.bestFor}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Category</p>
          <p className="mt-1 font-semibold text-slate-900">
            {product.category}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Our Rating</p>
          <p className="mt-1 text-xl font-bold text-blue-600">
            {product.rating !== null ? `${product.rating}/10` : "Not rated"}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Specifications */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Specifications
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {product.name} specifications
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="divide-y divide-slate-200">
              {[
  ["Camera", product.camera],
  ["Camera Resolution", product.cameraResolution],
  ["Video", product.videoResolution],
  ["Audio", product.audio],
  ["Microphones", product.microphones],
  ["AI", product.ai],
  ["Display", product.display],
  ["Display Type", product.displayType],
  ["Display Resolution", product.displayResolution],
  ["Field of View", product.fieldOfView],
  ["Refresh Rate", product.refreshRate],
  ["Battery", product.battery],
  ["Charging", product.charging],
  ["Weight", product.weight],
  ["Prescription", product.prescription],
  ["Compatibility", product.compatibility],
  ["App", product.app],
  ["Bluetooth", product.bluetooth],
  ["Wi-Fi", product.wifi],
  ["Water Resistance", product.waterResistance],
  ["Controls", product.controls],
  ["Storage", product.storage],
  
]  
 .filter(([, value]) => value)
.map(([label, value]) => (

                <div
                  key={label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-3"
                >
                  <span className="font-semibold text-slate-900">
                    {label}
                  </span>

                  <span className="text-slate-600 sm:col-span-2">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Review */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-4xl px-6 py-16">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
      Our Review
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      {product.name} review
    </h2>

    <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
      <p>
        The {product.name} are designed for{" "}
        <strong className="text-slate-900">{product.bestFor}</strong>.
        Their combination of {product.ai.toLowerCase()} and{" "}
        {product.audio.toLowerCase()} makes them an interesting option
        for people looking to add smart features without carrying
        another traditional device.
      </p>

      <p>
        One of the biggest things to consider is the hardware itself.
        The glasses include {product.camera.toLowerCase()} and{" "}
        {product.display.toLowerCase()}. Battery life is rated at{" "}
        {product.battery.toLowerCase()}, while the glasses weigh{" "}
        {product.weight.toLowerCase()}.
      </p>

      <p>
        Compatibility is another important consideration. The{" "}
        {product.name} support {product.compatibility.toLowerCase()},
        making them suitable for users who already have compatible
        devices in their everyday setup.
      </p>

      <p>
        Overall, the {product.name} are worth considering if their
        particular combination of features matches what you're looking
        for. Before buying, compare them with other smart glasses to
        make sure you're getting the features that matter most to you.
      </p>
    </div>
  </div>
</section>

      {/* Pros and Cons */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold">What We Like</h2>

            <ul className="mt-6 space-y-4">
              {product.pros.map((pro) => (
                <li key={pro} className="flex gap-3 text-slate-700">
                  <span className="font-bold text-green-600">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold">What to Consider</h2>

            <ul className="mt-6 space-y-4">
              {product.cons.map((con) => (
                <li key={con} className="flex gap-3 text-slate-700">
                  <span className="font-bold text-orange-500">!</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

            {/* Best Alternatives */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-8">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
      Compare Your Options
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      Best alternatives to the {product.name}
    </h2>

    <p className="mt-3 max-w-2xl text-lg text-slate-600">
      Not sure the {product.name} are right for you? Compare them with
      other smart glasses in our database.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
   {products
  .filter(
    (item) =>
      item.slug !== product.slug &&
      item.category === product.category
  )
  .slice(0, 3)
  .map((alternative) => (
        <div
          key={alternative.slug}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-48 items-center justify-center bg-slate-100">
            {alternative.image ? (
              <img
                src={alternative.image}
                alt={alternative.name}
                className="h-full w-full object-contain p-6"
              />
            ) : (
              <span className="text-6xl">👓</span>
            )}
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              {alternative.category}
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {alternative.name}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {alternative.bestFor}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold">
                {alternative.price !== null
                  ? `$${alternative.price} ${alternative.currency}`
                  : "See price"}
              </span>

              {alternative.rating !== null && (
                <span className="text-sm font-semibold text-blue-600">
                  {alternative.rating}/10
                </span>
              )}
            </div>

            <a
              href={`/reviews/${alternative.slug}`}
              className="mt-5 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Read Review →
            </a>
          </div>
        </div>
      ))}
  </div>
</section>


{/* Where to Buy */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
    <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
      <div className="lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Where to Buy
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Check the current price for the {product.name}
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Prices and availability can change, so check the retailer or
          manufacturer for the latest offer before buying.
        </p>
      </div>

      <div className="text-center lg:text-right">
        {product.price !== null && (
          <p className="mb-4 text-2xl font-bold text-slate-900">
            ${product.price} {product.currency}
          </p>
        )}

        <a
          href={product.affiliateUrl || product.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Check Current Price →
        </a>

        <p className="mt-3 text-xs text-slate-500">
          We may earn a commission if you purchase through our links.
        </p>
      </div>
    </div>
  </div>
</section>

       {/* Frequently Asked Questions */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-4xl px-6 py-16">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
      Frequently Asked Questions
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      {product.name} FAQ
    </h2>

    <div className="mt-8 space-y-4">
      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          How much do the {product.name} cost?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          The listed price is{" "}
          {product.price !== null
            ? `$${product.price} ${product.currency}`
            : "not currently listed"}.
          Prices and availability can change, so check the current
          retailer or manufacturer price before purchasing.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Who are the {product.name} best for?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          The {product.name} are particularly well suited for{" "}
          {product.bestFor.toLowerCase()}.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Do the {product.name} have a camera?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          {product.camera}
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Do the {product.name} have a display?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          {product.display}
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          How long does the battery last?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          {product.battery}
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Are the {product.name} prescription compatible?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          {product.prescription}
        </p>
      </details>
    </div>
  </div>
</section>


      {/* Bottom CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to compare your options?
          </h2>

          <p className="mt-4 text-slate-300">
            See how the {product.name} compare with other popular smart
            glasses.
          </p>

          <a
            href="/compare"
            className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-700"
          >
            Compare Smart Glasses →
          </a>
        </div>
      </section>
    </main>
  );
}