'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

import CartDescription from "./CartDescription";
import ShoppingBag from "./ShoppingBag";
import useCart from "@/hooks/useCart";

const AddToCart = () => {
  const {cart}=useCart()
  return (
    <Sheet>
      <SheetTrigger className="hover:cursor-pointer">
       <ShoppingBag/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart /> {cart?.products?.length} items
          </SheetTitle>

          {/* Cart Information */}
          <CartDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddToCart;
