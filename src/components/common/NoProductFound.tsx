import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const NoProductFound = () => {
  return (
    <Container container="container">
      <div className="w-full flex flex-col justify-center items-center h-[600px] 2xl:h-[800px]">
        <Image
          src="/assets/logos/no-product-found.svg"
          width={250}
          height={250}
          alt="Tabseershop basket logo for shopping cart"
        />
        <h1 className="text-4xl font-bold ">No Product Found</h1>
        <p className="py-2">You can try our different products.</p>
      </div>
    </Container>
  );
};

export default NoProductFound;
