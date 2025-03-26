"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group "
      style={
        {
          "--normal-bg": "#133e87", // Changed background to red
          "--normal-text": "white",
          "--normal-border": "none",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
