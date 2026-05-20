import type { Metadata } from "next";
import "./globals.css";
import Html from "./StoreProvider";

export const metadata: Metadata = {
  title: "Spend 100 Billion Dolars",
  description: "Patika Intermediate Frontend Web Development Path Certification Task",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      {children}
    </Html>
  );
}

export default  RootLayout;
