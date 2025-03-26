import WomenProduct from "@/components/products/WomenProduct";
import SectionBanner from "@/components/ui/SectionBanner";

const bg = "/assets/women/women.png";
const WomenPage = () => {
  return (
    <>
      <SectionBanner
        className="text-white"
        backgroundImagePath={bg}
        heading="Women"
      />
      <WomenProduct />
    </>
  );
};

export default WomenPage;
