"use client";
import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-lg w-full text-center p-6 bg-white bg-opacity-30 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Oops! Something Went Wrong.</h2>
        <p className="text-lg mb-6">
          {error.message ||
            "An unexpected error occurred. We’re working on it!"}
        </p>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default Error;
