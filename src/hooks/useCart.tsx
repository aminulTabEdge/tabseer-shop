"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUserInfo } from "@/services/authServices";

const useCart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<any>(null);
  console.log(cart);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const userInfo = getUserInfo();
  console.log(userInfo?._id);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/${userInfo?._id}`
        );
        setCart(response.data.data);
      } catch (err) {
        setError("Failed to fetch cart.");
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return { cart, loading, error };
};

export default useCart;
