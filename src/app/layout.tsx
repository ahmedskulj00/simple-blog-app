import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Simple Blog App",
  description: "Simple Blog App created with Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
