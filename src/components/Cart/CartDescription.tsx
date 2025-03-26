/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useCart from "@/hooks/useCart";
import EmptyCart from "./EmptyCart";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { TbCurrencyTaka } from "react-icons/tb";
import ProductOrder from "../products/ProductOrder";
import { Button } from "../ui/button";
import { getUserInfo } from "@/services/authServices";

const CartDescription = () => {
  const { cart } = useCart();
  console.log("cart Details=>", cart);
  const userInfo = getUserInfo();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    () => {
      const initialQuantities: { [key: string]: number } = {};
      cart?.products?.forEach((item: any) => {
        initialQuantities[item?.product?._id] = 1;
      });
      return initialQuantities;
    }
  );

  if (!cart?.products?.length) return <EmptyCart />;

  const handleUpdateQuantity = async (
    productId: string,
    newQuantity: number
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/update-quantity`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userInfo?._id, // Replace with actual user ID
            productId: productId,
            quantity: newQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      setQuantities((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
    } catch (error: any) {
      toast.error("Could not update quantity. Please try again.");
    }
  };

  const handleIncrease = (productId: string) => {
    const newQuantity = (quantities[productId] || 1) + 1;
    handleUpdateQuantity(productId, newQuantity);
  };

  const handleDecrease = (productId: string) => {
    if (quantities[productId] <= 1) {
      toast("Quantity can't be less than 1");
      return;
    }
    const newQuantity = quantities[productId] - 1;
    handleUpdateQuantity(productId, newQuantity);
  };

  return (
    <div className="flex flex-col justify-between mt-4 border-b pb-4">
      {cart?.products?.map((item: any, i: string) => (
        <div key={item?.product?._id || i}>
          {/* Product image */}
          <div className="flex gap-3 items-center justify-between">
            <div>
              <Image
                src={item?.product?.images[0] || "/assets/logos/basket.svg"}
                width={65}
                height={25}
                alt="Product"
              />
            </div>

            <div>
              <p>{item?.product?.name || "Product Name"}</p>
              {/* Quantity Manage container */}
              <div className="flex gap-3 text-[#133e87] items-center justify-between mt-2">
                <p className="text-red-500">
                  {item?.product?.price * item?.quantity}
                </p>
                <button className="font-bold p-2 rounded-full hover:cursor-pointer text-red-500">
                  <Trash2 size={20} />
                </button>
                {/* Decrease Button */}
                <button
                  onClick={() => handleDecrease(item?.product?._id)}
                  className="font-bold shadow-lg p-2 rounded-full hover:cursor-pointer"
                >
                  <Minus size={20} />
                </button>
                <p className="text-red-500">{item?.quantity}</p>
                {/* Increase Button */}
                <button
                  onClick={() => handleIncrease(item?.product?._id)}
                  className="font-bold shadow-lg p-2 rounded-full hover:cursor-pointer"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Button container */}
      <div className="flex gap-2 justify-between items-center absolute bottom-4 ">
        <Button className=" bg-amber-400 w-full text-black ">
          Total : <TbCurrencyTaka className="text-xl" />
          <span className="font-semibold">{cart?.totalPrice}</span>
        </Button>
        <div className="w-full">
          <ProductOrder />
        </div>
      </div>
    </div>
  );
};

export default CartDescription;
