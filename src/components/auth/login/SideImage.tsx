import Image from "next/image";
import React from "react";

const SideImage = () => {
  return (
    <div>
      <Image
        src="/assets/auth/login.svg"
        width={400}
        height={400}
        priority
        alt="Login image of Tabseer Shop"
      />
    </div>
  );
};

export default SideImage;
