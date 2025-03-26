import { IProduct, IApiResponse } from "@/types/IProduct";

const fetchProductById = async (id: string): Promise<IProduct | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const responseData: IApiResponse<IProduct> = await response.json();

    return responseData.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default fetchProductById;
