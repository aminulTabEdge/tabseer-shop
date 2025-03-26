import fetchProducts from "@/utils/fetchProducts";
import Container from "../ui/Container";
import ProductCard from "../common/ProductCard";

const OrganicProducts = async () => {
  const products = await fetchProducts({ menu: "organic" });
  console.log(products);
  return (
    <Container container="container">
      <ProductCard products={products} />
    </Container>
  );
};

export default OrganicProducts;
