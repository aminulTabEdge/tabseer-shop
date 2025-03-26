"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useCart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/67de4c2803206c8724a660c2`
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
