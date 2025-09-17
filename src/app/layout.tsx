import type { Metadata } from "next";
import { Rubik, Barriecito } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/Navbar";
import Providers from "./providers";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const barriecito = Barriecito({
  variable: "--font-barriecito",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComicVerse",
  description: "Marvel inspired comic web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${barriecito.variable} antialiased dark`}
      >
        <Providers>
          <NavbarMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
