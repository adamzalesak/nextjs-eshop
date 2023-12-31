import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-violet-50"}>
        <Providers />

        <header className="bg-violet-200 p-4 flex">
          <h1 className="font-bold text-2xl">Eshop</h1>
          <Button className="ml-auto">Cart</Button>
        </header>

        <Breadcrumbs />

        <div className="max-w-[900px] mx-auto">{children}</div>

        <footer className="bg-violet-200 p-4 mt-6 text-center">
          <p>© 2023 Eshop</p>
        </footer>
      </body>
    </html>
  );
}
