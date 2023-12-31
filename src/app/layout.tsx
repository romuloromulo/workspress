import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
// console.log(db);

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workspress",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className={twMerge("bg-background", inter.className)}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
