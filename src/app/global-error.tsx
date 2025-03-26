"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || "An unexpected error occurred"}
        </p>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default GlobalError;
