import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import cs from "classnames";
import Link from "next/link";

import Providers from "@contexts";
import Navbar from "@components/navbar";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage_grotesque",
});

export const metadata: Metadata = {
  title: "3Design",
  description:
    "Impresión y diseño de piezas 3d, contamos con un gran catalogo de piezas listas para ser enviadas a todas partes de Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cs({
          [manrope.variable]: true,
          [bricolage_grotesque.variable]: true,
        })}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
      <footer className="w-full flex justify-between items-between pb-5 px-12">
        <div className="flex flex-col max-md:ml-6">
          <Link
            href="/"
            className="font-extrabold text-2xl max-md:text-4xl cursor-pointer"
          >
            3Design
          </Link>
          <p className="max-md:text-2xl pointer-events-none">
            All rights reserved © 2023
          </p>
        </div>
        <div />
      </footer>
    </html>
  );
}
