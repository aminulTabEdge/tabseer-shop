"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { getUserInfo } from "@/services/authServices";

type Inputs = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

const ProductOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const userInfo = getUserInfo()
  console.log({userInfo})

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <div className="flex space-x-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full">Order</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              {/* Centered Logo */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/logos/logo-circle.svg"
                  alt="logo circle"
                  height={110}
                  width={110}
                />
              </div>

              {/* Title */}
              <AlertDialogTitle className="text-center mt-12">
                Provide Your Information to Place an Order
              </AlertDialogTitle>
            </AlertDialogHeader>

            {/* Form Section */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <AlertDialogDescription></AlertDialogDescription>

              {/* Name Field */}
              <div>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <Textarea
                  {...register("address", { required: "Address is required" })}
                  placeholder="Delivery Address"
                  className="h-20"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid phone number (10-15 digits)",
                    },
                  })}
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </form>

            <AlertDialogFooter>
              <AlertDialogCancel className="w-12 text-[#133E87] absolute top-0 right-0 hover:text-white">
                <X />
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default ProductOrder;
