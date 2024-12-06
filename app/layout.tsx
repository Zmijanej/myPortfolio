import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins, Cinzel,Cinzel_Decorative } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

const cinzel_Deco = Cinzel_Decorative({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-cinzel-deco'
})

const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-cinzel'
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
    
    <html lang="en" className={`${cinzel.className} ${cinzel_Deco.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body 
      className="bg-black/70 text-[#f4ede5] "
      >
        
        <Navbar/>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

