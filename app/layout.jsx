import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "EyePune",
  description: "Digital marketing agency in Pune. We help businesses grow.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${font.className} w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-x-hidden`}
      >
        <Analytics />
        <Navbar />
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          <Spotlight
            className="hidden md:flex md:-top-80 left-80"
            fill="white"
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
