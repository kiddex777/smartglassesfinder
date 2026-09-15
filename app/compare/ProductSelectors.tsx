"use client";

import { SmartGlassesProduct } from "../data/products";

type ProductSelectorsProps = {
  products: SmartGlassesProduct[];
  firstSlug: string;
  secondSlug: string;
};

export default function ProductSelectors({
  products,
  firstSlug,
  secondSlug,
}: ProductSelectorsProps) {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-2">
      <div>
        <label
          htmlFor="product-one"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Compare Product 1
        </label>

        <select
          id="product-one"
          value={firstSlug}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
          onChange={(event) => {
            window.location.href = `/compare?first=${event.target.value}&second=${secondSlug}`;
          }}
        >
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="product-two"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Compare Product 2
        </label>

        <select
          id="product-two"
          value={secondSlug}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
          onChange={(event) => {
            window.location.href = `/compare?first=${firstSlug}&second=${event.target.value}`;
          }}
        >
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}