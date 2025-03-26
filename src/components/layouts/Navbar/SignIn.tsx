/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import { User, X } from "lucide-react";
import Image from "next/image";
import GoogleLogin from "@/components/auth/GoogleLogin";
import { getUser } from "@/utils/userInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { loginUser } from "@/services/actions/loginUser";
import { authKey } from "@/constant/auth";
import setAccessTokenToCookies from "@/services/actions/setAccessTokenToCookie";

const SignIn = () => {
  const [user, setUser] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData || null);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handlePhoneSignUp = async () => {
    if (!phone) {
      setError("Please enter a phone number");
      return;
    }

    if (phone.startsWith("0")) {
      setError("Phone number should not start with 0. Use format: 1XXXXXXXXX");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formattedPhone = `0${phone}`; // Always prepend 0

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
        { phone: formattedPhone },
        { headers: { "Content-Type": "application/json" } }
      );
      if (data.success) {
        console.log(data?.data.token);
        toast.success("User Registered successfully");
        if (typeof window !== "undefined") {
          localStorage.setItem(authKey, data?.data?.token);
          setAccessTokenToCookies(data?.data?.token, {
            redirect: "/",
          });
        }
        
      }
      console.log("Signup response:", data);
    } catch (error: any) {
      console.log("error=>", error);
      setError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setError(null);
    console.log(user?.email);

    try {
      if (!user?.email) {
        setError("You can't sigup with google. try to phone number");
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
        {
          name: user?.name,
          email: user?.email,
          image: user?.image,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (data.success) {
        toast.success("Signup Successfully");
        if (typeof window !== "undefined") {
          localStorage.setItem(authKey, data?.data?.token);
          setAccessTokenToCookies(data?.data?.token, {
            redirect: "/",
          });
        }
      }
      console.log("Google signup response:", data);
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex space-x-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-white">
              <User size={30} />
              <span className="hidden lg:block">Sign In / Signup</span>
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/logos/logo-circle.svg"
                  alt="logo circle"
                  height={110}
                  width={110}
                />
              </div>
              <AlertDialogTitle className="text-center mt-12">
                Sign in to get the best online experience
              </AlertDialogTitle>
            </AlertDialogHeader>

            <div className="space-y-4">
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
                <div className="flex items-center px-3 border-r bg-gray-100">
                  <Image
                    src="/assets/logos/bg-flag.svg"
                    alt="Bangladesh Flag"
                    width={24}
                    height={16}
                    className="w-6 h-auto"
                  />
                  <span className="ml-2 text-gray-700">+880</span>
                </div>
                <input
                  type="tel"
                  placeholder="1XXXXXXXXX"
                  className="w-full p-3 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <Button
                className="w-full"
                onClick={handlePhoneSignUp}
                disabled={loading}
              >
                {loading ? "Processing..." : "Login"}
              </Button>
              <p className="text-center">or, sign in with</p>
              <div onClick={handleGoogleSignUp}>
                <GoogleLogin googleLoading={googleLoading} />
              </div>
            </div>

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

export default SignIn;
