import ResponsiveFooter from "@/components/layouts/Footer/Footer";
import Navbar2 from "@/components/layouts/Navbar/Navbar2";
import Navbar3 from "@/components/layouts/Navbar/Navbar3";
import { ChildrenType } from "@/types/types";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <div className="fixed z-20 w-full">
        <Navbar2 />
        <Navbar3 />
      </div>
      <div className="pt-[105px]">{children}</div>
      <ResponsiveFooter />
    </>
  );
};

export default MainLayout;
