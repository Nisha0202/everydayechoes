
// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "@/theme/Providers";
import Footer from "@/components/footer/Footer";
import FirbaseProvider from "@/FirebaseProbider/FirbaseProvider";

const inter = Inter({ subsets: ["latin"] });

// Export metadata from a server component
export const metadata = {
  title: "Everyday Echoes",
  description: "A blog website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <FirbaseProvider>
          <Providers>
            <div className="grid min-h-[100vh] grid-rows-[auto_1fr_auto]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Providers>
        </FirbaseProvider>
      </body>
    </html>
  );
}
