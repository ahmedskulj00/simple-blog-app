import type { Metadata } from "next";
import "../styles/globals.css";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Simple Blog App",
  description: "Simple Blog App created with Next.js",
};

const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
