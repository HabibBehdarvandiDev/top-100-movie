import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Top 100 Movies",
  description: "Developed by HabibDev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
