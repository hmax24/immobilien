import { Category } from "@/common/types/Category";

const fetchCategoryBySlug = async (slug: string): Promise<Category> => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/slug/${slug}`,
  );
  return res.json();
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);
  return <div>{category.name}</div>;
}