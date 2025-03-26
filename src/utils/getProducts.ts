// types/Product.ts
export interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  details: string;
  stock: number;
  menu: string;
  image: string;
}

// utils/getWomenItems.ts
const getProducts = async ({
  menuName,
}: {
  menuName: string;
}): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?menu=${menuName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
