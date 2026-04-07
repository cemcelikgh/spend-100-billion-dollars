'use client';

import "./globals.css";
import { useEffect, useState } from "react";
import ToogleTheme from "../utils/ToogleTheme";
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

function Html({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const [theme, setTheme] = useState<string>('system-theme');
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setTheme(mediaQuery.matches ? 'light-theme' : 'dark-theme');
  }, []);

  return (
    <html lang="en" className={theme}>
      <body>
        <ToogleTheme theme={theme} setTheme={setTheme} />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default Html;
