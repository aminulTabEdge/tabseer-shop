import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/IProduct";
import AddToCartButton from "./AddToCartButton";

type ProductsType = {
  data: IProduct[];
} | null;

interface ProductCardProps {
  products: ProductsType;
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
      {products?.data.map((product) => (
        <Card
          key={product._id}
          className="flex flex-col justify-between h-full"
        >
          <Link href={`/product-details/${product._id}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
            />
          </Link>
          <div className="text-center flex flex-col gap-1 justify-between flex-grow">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-red-600 md:text-lg flex justify-center items-center font-semibold">
              <Image
                src="/assets/logos/bdt.svg"
                width={25}
                height={25}
                alt="BDT icon for tabseershop"
              />
              {product.price}
            </p>
          </div>
          {/* Add to cart button */}
          <AddToCartButton productId={product._id} quantity={1} />
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
