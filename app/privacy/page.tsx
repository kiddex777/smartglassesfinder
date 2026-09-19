import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SmartGlassesFinder",
  description:
    "Privacy Policy for SmartGlassesFinder and information about how the website handles visitor information and analytics.",
  alternates: {
    canonical: "https://www.smartglassesfinder.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | SmartGlassesFinder",
    description:
      "Learn how SmartGlassesFinder handles visitor information, analytics, and website data.",
    url: "https://www.smartglassesfinder.com/privacy",
    siteName: "SmartGlassesFinder",
    type: "website",
  },
};

export default function PrivacyPage() {
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
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-slate-600">
            Last updated: September 18, 2026
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold">1. Overview</h2>

            <p className="mt-4 leading-8 text-slate-600">
              SmartGlassesFinder is an independent website that provides
              information, comparisons, reviews, and buying guides about smart
              glasses and related products.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This Privacy Policy explains what information may be collected
              when you use the website and how that information may be used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>

            <p className="mt-4 leading-8 text-slate-600">
              SmartGlassesFinder does not require visitors to create an account
              to browse the website.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Like many websites, certain technical information may be
              collected automatically when you visit, such as browser type,
              device information, pages visited, approximate location derived
              from network information, and general usage information.
            </p>
          </section>

        <section>
  <h2 className="text-2xl font-bold">3. Analytics</h2>

  <p className="mt-4 leading-8 text-slate-600">
    SmartGlassesFinder uses Google Analytics to understand how visitors use
    the website and to improve its content, navigation, and functionality.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    Analytics data may include information such as pages viewed, traffic
    sources, device and browser information, approximate geographic
    information, and interactions with the website. SmartGlassesFinder may
    also measure clicks on affiliate links to understand which products and
    links generate referrals.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    Google Analytics is provided by Google and may use cookies or similar
    technologies to collect and process this information. You can learn more
    about how Google handles data through Google&apos;s own privacy
    documentation and controls.
  </p>
</section>
        <section>
  <h2 className="text-2xl font-bold">4. Affiliate Links</h2>

  <p className="mt-4 leading-8 text-slate-600">
    Some links on SmartGlassesFinder may be affiliate links. If you click an
    affiliate link and make a qualifying purchase, the website may receive a
    commission at no additional cost to you.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    Affiliate commissions may come from manufacturers, retailers, or affiliate
    networks. These relationships help support the operation and development
    of SmartGlassesFinder.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    Our product information, comparisons, editorial scores, and recommendations
    are intended to reflect the features, specifications, price, and overall
    characteristics of the products rather than the amount of commission that
    may be available from an affiliate relationship.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    Affiliate links do not increase the price you pay unless a retailer or
    manufacturer separately provides a discount or promotional offer.
  </p>
</section>

        <section>
  <h2 className="text-2xl font-bold">
    6. Cookies and Similar Technologies
  </h2>

  <p className="mt-4 leading-8 text-slate-600">
    SmartGlassesFinder and third-party services used by the website may use
    cookies or similar technologies to support website functionality, measure
    traffic, understand usage, and maintain affiliate referral attribution.
  </p>

  <p className="mt-4 leading-8 text-slate-600">
    The use of cookies and similar technologies may vary depending on the
    services and affiliate programs connected to the website. Third-party
    services may have their own privacy policies and cookie controls.
  </p>
</section>

          <section>
            <h2 className="text-2xl font-bold">7. How Information May Be Used</h2>

            <p className="mt-4 leading-8 text-slate-600">
              Information collected through the website may be used to operate
              and maintain SmartGlassesFinder, understand website traffic,
              improve content and functionality, measure affiliate referrals,
              and respond to communications sent to the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Data Security</h2>

            <p className="mt-4 leading-8 text-slate-600">
              Reasonable measures are used to help protect information
              associated with the website. However, no internet transmission or
              storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>

            <p className="mt-4 leading-8 text-slate-600">
              This Privacy Policy may be updated from time to time to reflect
              changes to the website, analytics services, affiliate
              relationships, or applicable requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Contact</h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have questions about this Privacy Policy or the website,
              please visit our contact page.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Contact SmartGlassesFinder →
            </Link>
          </section>
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