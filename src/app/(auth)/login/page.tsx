import LoginForm from "@/components/auth/login/LoginForm";
import SideImage from "@/components/auth/login/SideImage";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SideImage />
      <LoginForm />
    </div>
  );
};

export default page;
