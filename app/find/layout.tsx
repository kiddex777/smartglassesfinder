import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Glasses Finder — Find the Best Smart Glasses for You",
  description:
    "Answer a few quick questions to find the smart glasses that best match your needs, budget, and priorities.",
  alternates: {
    canonical: "/find",
  },
  openGraph: {
    title: "Smart Glasses Finder — Find the Best Smart Glasses for You",
    description:
      "Find the smart glasses that best match your needs, budget, and priorities with the Smart Glasses Finder.",
    url: "/find",
    siteName: "Smart Glasses Finder",
    type: "website",
  },
};

export default function FindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}