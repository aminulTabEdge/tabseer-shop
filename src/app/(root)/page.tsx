import AddToCart from "@/components/Cart/AddToCart";
import HeroSlider from "@/components/Home/HeroSlider";
import ServicesInfo from "@/components/Home/ServicesInfo";
import MenProducts from "@/components/products/MenProducts";
import OrganicProducts from "@/components/products/OrganicProducts";
import WomenProduct from "@/components/products/WomenProduct";
import Title from "@/components/ui/Title";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesInfo />
      {/* <DemoProducts /> */}
      <Title title="Mens Items" />
      <MenProducts />
      <Title title="Women Items" />
      <WomenProduct />
      <Title title="Organic Products" />
      <OrganicProducts />
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50">
        <AddToCart />
      </div>
    </div>
  );
};

export default HomePage;
