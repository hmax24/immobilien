import { Product } from "@/common/types/Product";
import ProductCard from "@/components/product-card";
import next from "next";

async function fetcjProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 },
    cache: "force-cache", //default
  });
  return res.json();
}

export default async function ProductPage() {
  const products = await fetcjProducts();
  return (
    <section>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <li key={p.id}><ProductCard {...p} /></li>
        ))}
      </ul>
    </section>
  );
}
