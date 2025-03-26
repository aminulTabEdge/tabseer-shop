import MenProducts from "@/components/products/MenProducts";
import SectionBanner from "@/components/ui/SectionBanner";

const MenPage = async () => {
  const bg = "/assets/mens/mens.png";
  return (
    <>
      <SectionBanner
        className="text-white"
        backgroundImagePath={bg}
        heading="Mens"
      />
      <MenProducts />
    </>
  );
};

export default MenPage;
