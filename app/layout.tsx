import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "Aniedo Richard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="no-scrollbar lg:text-[58%] md:text-[56.25%] text-[50%]"
      lang="en"
    >
      <ChakraProvider>
        <body className={`${lato.className}  antialiased`}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
