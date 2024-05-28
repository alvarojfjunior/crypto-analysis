import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Crypto Market Analysis",
  description: "Get crypto marketing data in real time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
