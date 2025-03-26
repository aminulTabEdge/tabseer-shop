import { IProduct } from "@/types/IProduct";

export type TQueriesProduct = {
  menu?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
};

interface IApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IProduct[];
}

const fetchProducts = async ({
  menu,
  category,
  minPrice,
  maxPrice,
  page,
  limit,
}: TQueriesProduct): Promise<IApiResponse | null> => {
  try {
    if (!menu) {
      throw new Error("Menu parameter is required");
    }

    // Construct query parameters dynamically, removing undefined values
    const queryParams = new URLSearchParams({
      menu: menu.toLowerCase(), // Ensured `menu` is always present
      ...(category && { category: category.toLowerCase() }),
      ...(minPrice !== undefined && { minPrice: minPrice.toString() }),
      ...(maxPrice !== undefined && { maxPrice: maxPrice.toString() }),
      ...(page !== undefined && { page: page.toString() }),
      ...(limit !== undefined && { limit: limit.toString() }),
      sortOrder: "desc",
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product?${queryParams}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data: IApiResponse = await res.json();
    return data?.success ? data : null; // Ensure it returns the whole API response if successful
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // Return null if an error occurs
  }
};

export default fetchProducts;
