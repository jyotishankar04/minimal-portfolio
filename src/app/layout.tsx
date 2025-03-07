import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={` ${geistMono.className} antialiased w-full h-screen overflow-auto `}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
