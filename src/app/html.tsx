'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import ToogleTheme from "../components/ToogleTheme";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Html({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [theme, setTheme] = useState<string>('pre-col-sch');
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setTheme(mediaQuery.matches ? 'light-theme' : 'dark-theme');
  }, []);

  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {ToogleTheme(theme, setTheme)}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default Html;
