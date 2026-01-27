import { Product } from "@/common/types/Product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductCard: FC<Product> = (product) => {
  const { id, title, price, description, images } = product;
  return <div className="p-4 bg-gray-200 rounded-2xl max-w-64 min-h-100 flex flex-col gap-4 align-middle justify-center">
    <h3> <Link href={`/products/${id}`}>{title}</Link></h3>
    <Image src={images[0]} alt={title} width={300} height={400} unoptimized/>
    <p>{price}$</p>
  </div>;
};

export default ProductCard;
