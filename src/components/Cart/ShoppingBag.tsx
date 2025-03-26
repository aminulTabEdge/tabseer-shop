"use client";
import useCart from "@/hooks/useCart";
import Image from "next/image";

const ShoppingBag = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="relative">
      <Image
        src="/assets/logos/cart.svg"
        alt="Cart Icon of Tabseershop"
        width={85}
        height={40}
      />
      <p className="absolute top-7 left-1/2 transform -translate-x-1/2 text-white text-sm flex justify-center items-center gap-1">
        {cart?.products?.length} <span>items</span>
      </p>
      <p className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white text-sm flex justify-center items-center">
        <Image
          src="/assets/logos/bdt-white.svg"
          width={20}
          height={20}
          alt="BDT icon for tabseershop"
        />
        {cart?.totalPrice}
      </p>
    </div>
  );
};

export default ShoppingBag;
