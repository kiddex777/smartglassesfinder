import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "../../data/products";
import Link from "next/link";

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

  alternates: {
    canonical: `https://www.smartglassesfinder.com/reviews/${product.slug}`,
  },

  openGraph: {
    title: `${product.name} Review | Smart Glasses Finder`,
    description: `Explore the ${product.name} review, including features, specifications, pros, cons, price, and who it is best for.`,
    url: `https://www.smartglassesfinder.com/reviews/${product.slug}`,
    siteName: "SmartGlassesFinder",
    type: "article",
    images: product.image
      ? [
          {
            url: `https://www.smartglassesfinder.com${product.image}`,
            alt: product.name,
          },
        ]
      : undefined,
  },
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

   
 const reviewSummary =
  product.slug === "ray-ban-meta-gen-2"
    ? "The Ray-Ban Meta Gen 2 is built primarily for people who want everyday smart glasses that look and feel like normal eyewear. Its biggest strengths are the combination of Meta AI, hands-free photography and video, open-ear audio and a familiar Ray-Ban design. The lack of a built-in display means it is not an AR glasses replacement, but for calls, music, quick photos, AI assistance and hands-free capture, it is designed to fit naturally into everyday use."
    : product.slug === "oakley-meta-vanguard"
      ? "The Oakley Meta Vanguard is a sport-focused pair of AI smart glasses designed for people who want hands-free technology during training, outdoor activities and active everyday use. It combines a 12 MP camera, open-ear audio, Meta AI and fitness integrations with a rugged IP67-rated design. Unlike display-based AR glasses, the Vanguard focuses on camera capture, audio and AI rather than putting visual information in front of your eyes."
      : product.description;
  const relatedComparisons = [
  {
    slug: "ray-ban-meta-gen-2-vs-oakley-meta-vanguard",
    title: "Ray-Ban Meta Gen 2 vs Oakley Meta Vanguard",
    description:
      "Compare AI features, cameras, audio, battery life and everyday use.",
  },
  {
    slug: "ray-ban-meta-gen-2-vs-oakley-meta-hstn",
    title: "Ray-Ban Meta Gen 2 vs Oakley Meta HSTN",
    description:
      "Compare AI, photography, calls, music and everyday wear.",
  },
  {
    slug: "ray-ban-meta-gen-2-vs-solos-airgo-v2",
    title: "Ray-Ban Meta Gen 2 vs Solos AirGo V2",
    description:
      "Compare cameras, AI, audio, battery life, comfort and value.",
  },
  {
    slug: "xreal-one-pro-vs-xreal-one",
    title: "XREAL One Pro vs XREAL One",
    description:
      "Compare display quality, field of view, refresh rate, comfort and price.",
  },
  {
    slug: "xreal-one-pro-vs-viture-pro-2",
    title: "XREAL One Pro vs VITURE Pro 2",
    description:
      "Compare display quality, audio, comfort, refresh rate and value.",
  },
  {
    slug: "xreal-one-vs-rokid-max-2",
    title: "XREAL One vs Rokid Max 2",
    description:
      "Compare display specifications, comfort, audio, compatibility and value.",
  },
  {
    slug: "even-realities-g2-vs-ray-ban-meta-gen-2",
    title: "Even Realities G2 vs Ray-Ban Meta Gen 2",
    description:
      "Compare display, AI, camera, audio, battery and everyday use.",
  },
  {
    slug: "viture-pro-2-vs-rokid-max-2",
    title: "VITURE Pro 2 vs Rokid Max 2",
    description:
      "Compare screen quality, comfort, audio, compatibility and price.",
  },
];

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
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.smartglassesfinder.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Reviews",
          item: "https://www.smartglassesfinder.com/reviews",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: `https://www.smartglassesfinder.com/reviews/${product.slug}`,
        },
      ],
    }),
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
    <div>
      <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
        {product.rating}/10
      </span>
      <p className="mt-1 text-xs text-slate-500">
        Smart Glasses Finder editorial score
      </p>
    </div>
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

{/* Pros & Cons */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="grid gap-8 md:grid-cols-2">
    <div className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Strengths
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        What we like about the {product.name}
      </h2>

      <ul className="mt-6 space-y-4">
        {product.pros.map((pro) => (
          <li key={pro} className="flex gap-3 text-slate-600">
            <span className="font-bold text-green-600">✓</span>
            <span>{pro}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
        Limitations
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        What to consider before buying
      </h2>

      <ul className="mt-6 space-y-4">
        {product.cons.map((con) => (
          <li key={con} className="flex gap-3 text-slate-600">
            <span className="font-bold text-red-500">×</span>
            <span>{con}</span>
          </li>
        ))}
      </ul>
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
      Ray-Ban Meta Gen 2 review
    </h2>

    <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
      <p>
        The Ray-Ban Meta Gen 2 is designed primarily for people who want
        smart features without wearing glasses that look like traditional
        AR hardware. The familiar Ray-Ban styling is combined with Meta AI,
        a built-in camera, open-ear audio and hands-free controls, making the
        glasses particularly suited to everyday use.
      </p>

      <p>
        One of the biggest upgrades with Gen 2 is its camera and video
        capability. The glasses feature a 12 MP camera capable of capturing
        photos at 3024 × 4032 and recording video at up to 3K resolution.
        This makes them useful for quickly capturing photos and video from
        your point of view without reaching for your phone.
      </p>

      <p>
        Meta AI is another major part of the experience. Instead of simply
        functioning as Bluetooth audio glasses, the Ray-Ban Meta Gen 2 can
        provide hands-free AI assistance through voice interaction. This can
        make everyday tasks such as asking questions, getting information,
        and interacting with the glasses more convenient.
      </p>

      <p>
        Audio is handled through open-ear speakers, allowing you to listen to
        music, podcasts and calls without traditional earbuds. The glasses
        also use a multi-microphone system for voice interaction and calls.
        This combination makes them more practical as an everyday wearable
        rather than a device intended only for occasional use.
      </p>

      <p>
        Battery life is rated for up to 8 hours of moderate use, although
        actual battery life will depend on how frequently you use features
        such as the camera, AI and audio. The glasses charge through their
        included charging case, which also makes it easier to recharge them
        while away from a power outlet.
      </p>

      <p>
        The most important limitation is the lack of a built-in display.
        The Ray-Ban Meta Gen 2 are not AR glasses and cannot place a virtual
        screen or visual information in front of your eyes. If your main goal
        is gaming, watching movies on a large virtual display or creating a
        portable monitor, display-focused glasses such as the XREAL One Pro
        are designed for a different type of experience.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Who are the Ray-Ban Meta Gen 2 for?
        </h3>

        <p className="mt-3 text-base leading-7 text-slate-600">
          The Ray-Ban Meta Gen 2 make the most sense for people who want
          everyday smart glasses with a camera, open-ear audio, Meta AI and
          hands-free controls. They are especially relevant for users who
          want to capture moments without using their phone or who want
          connected features in a familiar-looking pair of glasses.
        </p>
      </div>

      <p>
        Overall, the Ray-Ban Meta Gen 2 are best understood as AI-powered
        everyday glasses rather than AR glasses. Their combination of
        familiar eyewear design, camera, audio, AI and hands-free controls
        makes them a very different product from display-based glasses.
        Before buying, consider whether you want an everyday AI companion or
        a virtual display, because that distinction will have a major impact
        on which type of smart glasses is appropriate for you.
      </p>
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


    {/* Related Comparisons */}
{relatedComparisons.filter((comparison) =>
 comparison.slug.split("-vs-").includes(product.slug)
).length > 0 && (
  <section className="mx-auto max-w-7xl px-6 pb-16">
    <h2 className="text-2xl font-bold">
      Related Comparisons
    </h2>

    <p className="mt-2 text-slate-600">
      Compare the {product.name} with other smart glasses to see how
      the features, specifications and value differ.
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {relatedComparisons
        .filter((comparison) =>
       comparison.slug.split("-vs-").includes(product.slug)
        )
        .map((comparison) => (
          <Link
            key={comparison.slug}
            href={`/compare/${comparison.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-semibold text-slate-900">
              {comparison.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {comparison.description}
            </p>

            <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
              Compare →
            </span>
          </Link>
        ))}
    </div>
  </section>
)}

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
  data-affiliate={product.affiliateUrl ? "true" : undefined}
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
      Ray-Ban Meta Gen 2 FAQ
    </h2>

    <div className="mt-8 space-y-4">
      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          How much do the Ray-Ban Meta Gen 2 cost?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          The listed price for the Ray-Ban Meta Gen 2 is $459 USD. Prices,
          lens options and availability can change, so check the current
          manufacturer or retailer price before purchasing.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Do the Ray-Ban Meta Gen 2 have a display?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          No. The Ray-Ban Meta Gen 2 do not have a built-in display. They are
          designed around Meta AI, a camera, open-ear audio and hands-free
          controls rather than an augmented-reality screen.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          How good is the Ray-Ban Meta Gen 2 camera?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          The glasses have a 12 MP camera capable of capturing photos at
          3024 × 4032. They can also record video at up to 3K resolution,
          making them useful for hands-free first-person photos and video.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          How long does the Ray-Ban Meta Gen 2 battery last?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Battery life is rated for up to 8 hours of moderate use. Actual
          battery life can vary depending on how frequently you use the
          camera, Meta AI, audio and other connected features.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Can Ray-Ban Meta Gen 2 record 3K video?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Yes. The Ray-Ban Meta Gen 2 support video recording at up to 3K
          resolution, giving them higher-resolution video capture than
          earlier-generation models.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Are Ray-Ban Meta Gen 2 prescription compatible?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Yes. Prescription options are available, although availability can
          depend on the frame and lens configuration you choose.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Are Ray-Ban Meta Gen 2 good for everyday use?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          They are designed as everyday smart glasses rather than dedicated
          AR glasses. Their combination of familiar eyewear styling, Meta AI,
          hands-free photography, open-ear audio and voice controls makes
          them suited to everyday connected use.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Are Ray-Ban Meta Gen 2 AR glasses?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          No. They do not have a built-in visual display, so they are not
          AR glasses. If you specifically want a virtual screen for gaming,
          movies or productivity, display-focused glasses are a different
          category to consider.
        </p>
      </details>

      <details className="rounded-2xl border border-slate-200 bg-white p-6">
        <summary className="cursor-pointer font-semibold">
          Are Ray-Ban Meta Gen 2 worth buying?
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          That depends on what you want from smart glasses. They are designed
          for users who value Meta AI, hands-free camera capture, open-ear
          audio and familiar everyday eyewear. If your priority is a built-in
          display for gaming or movies, an AR display model may be more
          appropriate.
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