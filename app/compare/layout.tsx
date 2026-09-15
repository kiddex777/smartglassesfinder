import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Smart Glasses — Features, Prices & Ratings",
  description:
    "Compare smart glasses side by side. See prices, cameras, audio, AI, displays, battery life, comfort, and overall ratings to find the right pair.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Compare Smart Glasses — Features, Prices & Ratings",
    description:
      "Compare smart glasses side by side across features, prices, ratings, AI, cameras, displays, battery life, and more.",
    url: "/compare",
    siteName: "Smart Glasses Finder",
    type: "website",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}