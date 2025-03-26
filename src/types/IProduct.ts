export interface IProduct {
  _id: string;
  name: string;
  description: string;
  menu: string;
  category: string;
  price: number;
  quantity: number;
  averageRating: number;
  bestSellingCount: number;
  colorVariants: string[];
  size: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
