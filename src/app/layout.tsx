import type { Metadata } from "next";
import Html from "./Html";

export const metadata: Metadata = {
  title: "Spend 100 Billion Dolars",
  icons: {
    icon: '/dollar-sign-solid.svg',
  },
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
