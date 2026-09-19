import Link from "next/link";
import { products } from "../../data/products";

export const metadata = {
  title: "Best Smart Glasses in 2026 | Top AI & AR Glasses",
  description:
    "Discover the best smart glasses in 2026. Compare AI and AR glasses for cameras, audio, displays, battery life, comfort, value and more.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/best/smart-glasses",
  },
  openGraph: {
    title: "Best Smart Glasses in 2026 | Smart Glasses Finder",
    description:
      "Compare the best AI and AR smart glasses for cameras, audio, displays, battery life, comfort and value.",
    url: "https://www.smartglassesfinder.com/best/smart-glasses",
   siteName: "SmartGlassesFinder",
    type: "article",
  },
};

export default function BestSmartGlassesPage() {
  const featuredProducts = [...products]
    .filter((product) => product.rating !== null)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white text-gray-900">

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

      <Link href="/best/smart-glasses" className="text-blue-600">
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
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Smart Glasses Finder
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Best Smart Glasses in 2026
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Looking for the right pair of smart glasses? We compare AI,
            cameras, audio, displays, battery life, comfort and value to help
            you find the glasses that fit your needs.
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


      {/* Best Guides */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Explore Our Best Smart Glasses Guides
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Looking for smart glasses for a specific purpose or budget? Explore
            our specialized guides to find the right options for your needs.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/best/ai-glasses"
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Best AI Glasses</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Explore AI-powered glasses with cameras, voice assistants,
              open-ear audio and hands-free features.
            </p>
            <span className="mt-4 inline-block font-semibold text-blue-600">
              Explore AI Glasses →
            </span>
          </Link>

          <Link
            href="/best/ar-glasses"
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Best AR Glasses</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Compare display-focused glasses for gaming, movies,
              entertainment and productivity.
            </p>
            <span className="mt-4 inline-block font-semibold text-blue-600">
              Explore AR Glasses →
            </span>
          </Link>

          <Link
            href="/best/smart-glasses-under-300"
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Best Smart Glasses Under $300</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Find smart glasses that offer useful features while staying
              within a $300 budget.
            </p>
            <span className="mt-4 inline-block font-semibold text-blue-600">
              Explore Under $300 →
            </span>
          </Link>

          <Link
            href="/best/smart-glasses-for-gaming"
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Best Smart Glasses for Gaming</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Compare display glasses for gaming, large virtual screens,
              high refresh rates and immersive entertainment.
            </p>
            <span className="mt-4 inline-block font-semibold text-blue-600">
              Explore Gaming Glasses →
            </span>
          </Link>

          <Link
            href="/best/smart-glasses-for-work"
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Best Smart Glasses for Work</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Discover glasses suited to productivity, virtual displays,
              communication and extended use.
            </p>
            <span className="mt-4 inline-block font-semibold text-blue-600">
              Explore Work Glasses →
            </span>
          </Link>
        </div>
      </section>

          {/* Top Picks */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            Our Top Smart Glasses Picks
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We look at the features that matter most when choosing smart
            glasses, including AI capabilities, camera quality, audio,
            displays, battery life, comfort and overall value.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {[
            {
              rank: 1,
              slug: "ray-ban-meta-gen-2",
              title: "Best Smart Glasses Overall",
              reason:
                "A strong all-around option for everyday use, combining Meta AI, a high-quality camera, open-ear audio, hands-free controls and long battery life.",
            },
            {
              rank: 2,
              slug: "oakley-meta-vanguard",
              title: "Best Smart Glasses for Sports",
              reason:
                "Built around an active lifestyle, with Meta AI, a 12 MP camera, open-ear audio, fitness integrations and a rugged design.",
            },
            {
              rank: 3,
              slug: "xreal-one-pro",
              title: "Best Smart Glasses for AR & Displays",
              reason:
                "Designed for users who want a large virtual display, with a 120Hz micro-OLED display and built-in 3DoF spatial features.",
            },
            {
              rank: 4,
              slug: "even-realities-g2",
              title: "Best Smart Glasses for Productivity",
              reason:
                "A lightweight display-focused option designed to put useful information directly in your field of view while keeping a conventional glasses form factor.",
            },
          ].map((pick) => {
            const product = products.find(
              (item) => item.slug === pick.slug
            );

            if (!product) return null;

            return (
              <article
                key={pick.slug}
                className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[180px_1fr]"
              >
                <div className="flex h-40 items-center justify-center rounded-xl bg-gray-50 p-4">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-5xl">👓</span>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
                      #{pick.rank}
                    </span>

                    <span className="text-sm font-semibold text-blue-600">
                      {pick.title}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {pick.reason}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="font-semibold">
                      Finder Score: {product.rating ?? "—"}/10
                    </span>

                    {product.price !== null && (
                      <span className="font-semibold">
                        From ${product.price}
                      </span>
                    )}

                    <Link
                      href={`/reviews/${product.slug}`}
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      Read Full Review →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

            {/* Quick Comparison */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Best Smart Glasses at a Glance
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Compare some of the most important features before choosing your
              smart glasses.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold">Smart Glasses</th>
                  <th className="px-5 py-4 font-semibold">Price</th>
                  <th className="px-5 py-4 font-semibold">AI</th>
                  <th className="px-5 py-4 font-semibold">Camera</th>
                  <th className="px-5 py-4 font-semibold">Display</th>
                  <th className="px-5 py-4 font-semibold">Battery</th>
                  <th className="px-5 py-4 font-semibold">Score</th>
                </tr>
              </thead>

              <tbody>
                {[
                  "ray-ban-meta-gen-2",
                  "oakley-meta-vanguard",
                  "oakley-meta-hstn",
                  "xreal-one-pro",
                  "even-realities-g2",
                  "xreal-one",
                ].map((slug) => {
                  const product = products.find(
                    (item) => item.slug === slug
                  );

                  if (!product) return null;

                  return (
                    <tr
                      key={product.slug}
                      className="border-b last:border-b-0"
                    >
                      <td className="px-5 py-4">
                        <Link
                          href={`/reviews/${product.slug}`}
                          className="font-semibold text-blue-600 hover:underline"
                        >
                          {product.name}
                        </Link>
                      </td>

                      <td className="px-5 py-4">
                        {product.price !== null
                          ? `$${product.price}`
                          : "—"}
                      </td>

                      <td className="px-5 py-4">
                        {product.scores?.ai ?? "—"}/10
                      </td>

                      <td className="px-5 py-4">
                        {product.scores?.camera ?? "—"}/10
                      </td>

                      <td className="px-5 py-4">
                        {product.scores?.display ?? "—"}/10
                      </td>

                      <td className="px-5 py-4">
                        {product.scores?.battery ?? "—"}/10
                      </td>

                      <td className="px-5 py-4 font-bold">
                        {product.rating ?? "—"}/10
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/compare"
              className="font-semibold text-blue-600 hover:underline"
            >
              Compare More Smart Glasses →
            </Link>
          </div>
        </div>
      </section>

              {/* How We Choose */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            How We Choose the Best Smart Glasses
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Smart glasses can be very different from one another, so we look
            beyond the price tag. Our comparisons consider the features and
            characteristics that have the biggest impact on the everyday
            experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">🤖</div>
            <h3 className="mt-4 text-xl font-bold">AI Capabilities</h3>
            <p className="mt-3 leading-6 text-gray-600">
              We look at the AI features available, how they fit into everyday
              use, and whether AI is a central part of the glasses experience.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">📷</div>
            <h3 className="mt-4 text-xl font-bold">Camera</h3>
            <p className="mt-3 leading-6 text-gray-600">
              For glasses with cameras, we consider image quality, video
              capabilities and how useful hands-free capture can be.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">🖥️</div>
            <h3 className="mt-4 text-xl font-bold">Display</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Display glasses are evaluated by factors such as resolution,
              field of view, refresh rate and the type of experience they are
              designed to provide.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">🔊</div>
            <h3 className="mt-4 text-xl font-bold">Audio</h3>
            <p className="mt-3 leading-6 text-gray-600">
              We consider speaker quality, microphones, calls, music and how
              well audio integrates into everyday use.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">🔋</div>
            <h3 className="mt-4 text-xl font-bold">Battery Life</h3>
            <p className="mt-3 leading-6 text-gray-600">
              Battery life can make a major difference, so we consider
              advertised operating time and charging options when comparing
              products.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-2xl">💰</div>
            <h3 className="mt-4 text-xl font-bold">Value</h3>
            <p className="mt-3 leading-6 text-gray-600">
              We consider the features provided relative to the current listed
              price so readers can understand what they are getting for their
              money.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gray-50 p-6">
          <p className="leading-7 text-gray-600">
            <strong className="text-gray-900">A note about our scores:</strong>{" "}
            Smart Glasses Finder scores are editorial scores based on the
            product information and criteria used throughout our comparisons.
            They are not customer ratings or manufacturer ratings.
          </p>
        </div>
      </section>

              {/* Which Glasses Are Right for You? */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Which Smart Glasses Are Right for You?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The best smart glasses depend on what you want them to do.
              Here's how the main types compare for different needs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                AI & Everyday Assistance
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                If you want glasses that can help with questions, voice
                assistance, photos, calls and hands-free everyday tasks, look
                for glasses with strong AI capabilities, microphones, speakers
                and a capable camera.
              </p>

              <Link
                href="/ai-glasses"
                className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
              >
                Explore AI Glasses →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Gaming & Entertainment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                If your priority is gaming, movies or a large virtual screen,
                display-focused glasses may be a better fit than camera and
                AI-focused models.
              </p>

              <Link
                href="/ar-glasses"
                className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
              >
                Explore AR & Display Glasses →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Work & Productivity
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                For productivity, consider display quality, comfort, battery
                life and how easily the glasses connect to your computer,
                phone or other devices.
              </p>

              <Link
                href="/compare"
                className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
              >
                Compare Display Glasses →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Sports & Outdoor Use
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                For active use, look at durability, comfort, battery life,
                camera performance and hands-free controls. Water and dust
                resistance can also be important depending on the activity.
              </p>

              <Link
                href="/find"
                className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
              >
                Find Glasses for Your Needs →
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-black p-8 text-center text-white">
            <h3 className="text-2xl font-bold">
              Not Sure Which Type You Need?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
              Tell us about your budget, how you'll use your glasses and which
              features matter most. Our quiz will match you with three
              recommendations from our database.
            </p>

            <Link
              href="/find"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Take the Smart Glasses Finder Quiz →
            </Link>
          </div>
        </div>
      </section>

               {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions About Smart Glasses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Here are some of the most common questions to consider before
            buying smart glasses.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              What are smart glasses?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Smart glasses are wearable devices that combine a traditional
              glasses form factor with technologies such as cameras,
              microphones, speakers, AI assistants, sensors or built-in
              displays. Different models focus on different features.
            </p>
          </details>

          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              What is the difference between AI glasses and AR glasses?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              AI glasses generally focus on features such as voice assistants,
              cameras, audio and hands-free interactions. AR and display
              glasses add visual information or virtual screens through
              built-in displays. Some products combine features from both
              categories.
            </p>
          </details>

          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              Do smart glasses need a phone?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Many smart glasses rely on a connected smartphone for features
              such as setup, apps, internet connectivity, AI services or
              additional controls. Requirements vary between products, so
              compatibility should be checked before buying.
            </p>
          </details>

          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              Can smart glasses take photos and videos?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Some smart glasses include built-in cameras that can capture
              photos and video. Camera capabilities vary considerably between
              models, so resolution, video modes and storage should be checked
              when comparing products.
            </p>
          </details>

          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              Do smart glasses have displays?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Not all smart glasses have displays. Some models are designed
              primarily around cameras, audio and AI, while AR glasses use
              displays to provide virtual screens or visual information.
            </p>
          </details>

          <details className="group rounded-2xl border border-gray-200 p-6">
            <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
              Are smart glasses worth buying?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Whether smart glasses are worthwhile depends on what you want
              from them. AI and camera-focused glasses can be useful for
              hands-free assistance and content capture, while display-focused
              models can be useful for gaming, entertainment and productivity.
              Comparing the features that matter most to you is the best way
              to narrow down your options.
            </p>
          </details>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            Different Types of Smart Glasses
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/ai-glasses"
              className="rounded-2xl border bg-white p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold">AI Glasses</h3>
              <p className="mt-3 leading-6 text-gray-600">
                Smart glasses focused on AI assistants, cameras, hands-free
                controls and everyday assistance.
              </p>
              <span className="mt-4 inline-block font-semibold text-blue-600">
                Explore AI Glasses →
              </span>
            </Link>

            <Link
              href="/ar-glasses"
              className="rounded-2xl border bg-white p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold">AR & Display Glasses</h3>
              <p className="mt-3 leading-6 text-gray-600">
                Glasses with built-in displays for gaming, entertainment,
                productivity and virtual screens.
              </p>
              <span className="mt-4 inline-block font-semibold text-blue-600">
                Explore AR Glasses →
              </span>
            </Link>

            <Link
              href="/find"
              className="rounded-2xl border bg-white p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold">Not Sure What You Need?</h3>
              <p className="mt-3 leading-6 text-gray-600">
                Answer a few questions and our Smart Glasses Finder will
                recommend glasses based on your priorities.
              </p>
              <span className="mt-4 inline-block font-semibold text-blue-600">
                Take the Quiz →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Buying Advice */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            What Should You Look For in Smart Glasses?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Before buying smart glasses, think about the features that matter
            most to you. A great pair for recording photos and interacting with
            an AI assistant may be very different from glasses designed for
            gaming or watching movies.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "AI Features",
              "Consider how capable the glasses are at voice assistance, visual questions, translation and other AI tasks.",
            ],
            [
              "Camera",
              "Camera quality matters if you want to capture photos or hands-free video while going about your day.",
            ],
            [
              "Display",
              "Display glasses can provide a large virtual screen for gaming, movies and productivity.",
            ],
            [
              "Audio",
              "Open-ear speakers can let you listen to music, calls and notifications while remaining aware of your surroundings.",
            ],
            [
              "Battery Life",
              "Think about how long the glasses can operate between charges and whether the charging case provides additional power.",
            ],
            [
              "Comfort",
              "Smart glasses need to be comfortable enough to wear for extended periods, especially for everyday use.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Still Not Sure Which Smart Glasses Are Right for You?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Use our Smart Glasses Finder quiz to get personalized
            recommendations based on your budget, priorities and intended use.
          </p>

          <Link
            href="/find"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Find My Smart Glasses →
          </Link>
        </div>
      </section>
    </main>
  );
}