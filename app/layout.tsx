import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ui/progress-bar";
import { Poppins } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
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
    <html lang="en" className={poppins.className}>
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

