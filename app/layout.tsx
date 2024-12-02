import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ui/progress-bar";
import { Pirata_One, Poppins } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-poppins'
})

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-pirata'
})

export const metadata: Metadata = {
  title: "Brend's Portfolio",
  description: "Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${pirata.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className="">
        <ProgressBar/> 
        <Navbar/>
        {children}
        <Footer/>
        <SpeedInsights />
      </body>
    </html>
  );
}

