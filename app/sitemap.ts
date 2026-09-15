import type { MetadataRoute } from "next";
import { products } from "./data/products";

const baseUrl = "https://www.smartglassesfinder.com";

const comparisons = [
  "ray-ban-meta-gen-2-vs-oakley-meta-vanguard",
  "ray-ban-meta-gen-2-vs-oakley-meta-hstn",
  "ray-ban-meta-gen-2-vs-solos-airgo-v2",
  "xreal-one-pro-vs-xreal-one",
  "xreal-one-pro-vs-viture-pro-2",
  "xreal-one-vs-rokid-max-2",
  "even-realities-g2-vs-ray-ban-meta-gen-2",
  "viture-pro-2-vs-rokid-max-2",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/find`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/smart-glasses`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-glasses`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ar-glasses`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...comparisonPages];
}