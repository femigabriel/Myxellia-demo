import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Myxellia Test App",
  description: "Myxellia Junior Frontend Developer Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/euclid-circular-b"
          rel="stylesheet"
        />
      </head>

      <body className="">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
