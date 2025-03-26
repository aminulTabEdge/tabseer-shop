import fetchProducts from "@/utils/fetchProducts";
import Container from "../ui/Container";
import ProductCard from "../common/ProductCard";
import NoProductFound from "../common/NoProductFound";

const WomenProduct = async () => {
  const products = await fetchProducts({ menu: "women" });
  console.log(products);
  if (products?.data?.length === 0) return <NoProductFound />;
  return (
    <Container container="container">
      <ProductCard products={products} />
    </Container>
  );
};

export default WomenProduct;
