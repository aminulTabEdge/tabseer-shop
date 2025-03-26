import fetchProducts from "@/utils/fetchProducts";
import React from "react";
import Title from "../ui/Title";
import ProductCard from "../common/ProductCard";

const SimilarProduct = async ({ category }: { category: string }) => {
  const products = await fetchProducts({ category: category });
  console.log(products);

  return (
    <div>
      <Title title="Similar Product" />
      <ProductCard products={products} />
    </div>
  );
};

export default SimilarProduct;
