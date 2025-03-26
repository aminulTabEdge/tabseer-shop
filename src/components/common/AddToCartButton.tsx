"use client";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

type TCart = {
  productId: string;
  quantity: number;
};

const AddToCartButton = ({ productId, quantity }: TCart) => {
  const handleAddToCart = async () => {
    try {
      const userId = "67de4c2803206c8724a660c2";

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/add-to-cart`,
        {
          user: userId,
          products: [
            {
              product: productId,
              quantity: quantity,
            },
          ],
        }
      );

      console.log("Added to cart:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleAddToCart}
        className="mt-auto flex items-center gap-2 w-full"
      >
        <ShoppingCart /> Add to cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
