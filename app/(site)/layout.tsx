"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const pathname = usePathname();

  const isSalesPage = pathname.includes("/sales");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider

          enableSystem={false}
          attribute="class"
          defaultTheme={isSalesPage ? "light" : "dark"}
        >
          { 
            !isSalesPage && (
              <>
                <Lines />
                <Header />
                <ToasterContext />
              </>
            )
          }


            {children}
          {
            !isSalesPage && (
              <>
                <Footer />
                <ScrollToTop />
              </>
            )
          }
        </ThemeProvider>

      </body>
    </html>
  );
}
