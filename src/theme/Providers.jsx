"use client"; 

import { ThemeProvider } from "next-themes"; 

export function Providers({ children }) { 
  return ( 
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark"  // Set defaultTheme to "dark"
      enableSystem
    >
      {children}
    </ThemeProvider> 
  );
}

