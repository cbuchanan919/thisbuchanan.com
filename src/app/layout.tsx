import type { Metadata } from "next";
import NavBar from "./nav";
import Footer from "./footer";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ThisBuchanan.com",
  description: "This Buchanan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
          <div className="min-h-screen h-vh w-full max-w-screen-xl m-auto bg-slate-900 p-10">
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  );
}
