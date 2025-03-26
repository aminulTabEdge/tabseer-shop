import Image from "next/image";
import React from "react";

const EmptyCart = () => {
  return (
    <div>
      {/* If there is no item in cart then show the basket */}
      <div className="h-screen flex flex-col justify-center items-center">
        <Image
          src="/assets/logos/basket.svg"
          width={250}
          height={250}
          alt="Tabseershop basket logo for shopping cart"
        />
        <p className="text-center">
          Looks like Your cart is empty. Start shopping
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
