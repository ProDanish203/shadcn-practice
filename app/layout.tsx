import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { ThemeProvider } from "@/store/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Practice",
  description: "Practice website for shadcn practice",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
