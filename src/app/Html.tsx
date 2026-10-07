'use client';

import { Theme } from "@/types/types";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";

function Html({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  return (
    <html
      lang="en"
      className={theme}
      style={{ colorScheme: theme }}
    >
      <body>
        <main className='container'>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          {children}
        </main>
      </body>
    </html>
  );

}

export default Html;
