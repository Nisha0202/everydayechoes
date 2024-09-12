
// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "@/theme/Providers";
import Footer from "@/components/footer/Footer";
import FirbaseProvider from "@/FirebaseProbider/FirbaseProvider";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: {
    default: 'Everyday Echoes', 
    description: "A blog website using Next.js",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <FirbaseProvider>
          <Providers>
            <AuthProvider>
              <div className="grid min-h-[100vh] grid-rows-[auto_1fr_auto]">
                <Navbar />
                {children}
                <Footer />
              </div>
            </AuthProvider>

          </Providers>
        </FirbaseProvider>
      </body>
    </html>
  );
}
