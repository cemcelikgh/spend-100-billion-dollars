'use client';

import { useEffect, useRef, useState } from "react";
import ToogleTheme from "../utils/ToogleTheme";
import { Provider } from 'react-redux';
import { AppStore, makeStore } from "@/lib/store";

function Html({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [theme, setTheme] = useState('system-theme');
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setTheme(mediaQuery.matches ? 'light-theme' : 'dark-theme');
  }, []);

  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  };

  return (
    <html lang="en" className={theme}
      style={{colorScheme: theme === 'system-theme' ? undefined
        : theme === 'light-theme' ? 'light'
        : 'dark'
      }}
    >
      <body>
        <ToogleTheme theme={theme} setTheme={setTheme} />
        <Provider store={storeRef.current}>
          {children}
        </Provider>
      </body>
    </html>
  );

}

export default Html;
