import SideImage from "@/components/auth/login/SideImage";
import RegisterForm from "@/components/auth/register/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SideImage />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
