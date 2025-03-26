"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import GoogleLogin from "../GoogleLogin";
import { getUser } from "@/utils/userInfo";
type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const [user, setUser] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        console.log("Fetched user data:", userData);

        // Ensure compatibility with user being null or undefined
        setUser(userData || null);

        // If user is logged in and email exists, call the external registration function
        
      } catch (error) {
        console.error("Error fetching or registering user:", error);
      }
    };

    fetchUser();
  }, []);
  console.log({user})

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-lg   p-6 rounded-lg  bg-white">
      <h1 className="text-4xl text-center font-bold py-6">Login </h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="mt-2 p-3 w-full border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="mt-2 p-3 w-full border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Log in
        </Button>
      </form>
      <p className="py-3 text-center">
        You have not an account? Please
        <Link
          href="/register"
          className="text-blue-500 hover:underline ml-2 font-semi"
        >
          Register
        </Link>
      </p>
      <GoogleLogin />
    </div>
  );
};

export default LoginForm;
