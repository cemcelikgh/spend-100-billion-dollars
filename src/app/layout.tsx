import type { Metadata } from "next";
import Html from "./StoreProvider";

export const metadata: Metadata = {
  title: "Spend 100 Billion Dolars",
  icons: {
    icon: '/dollar-sign-solid.svg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <Html>
      {children}
    </Html>
  );
}
