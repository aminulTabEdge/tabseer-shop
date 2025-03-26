import NoProductFound from "@/components/common/NoProductFound";
import fetchProducts from "@/utils/fetchProducts";
import React from "react";
import Container from "../ui/Container";
import ProductCard from "../common/ProductCard";

const MenProducts = async () => {
  const products = await fetchProducts({ menu: "men" });
  console.log(products);

  // If there is no product then show it
  if (products?.data.length === 0) {
    return <NoProductFound />;
  }

  // If there is products then show this
  return (
    <Container container="container">
      <ProductCard products={products} />
    </Container>
  );
};

export default MenProducts;
