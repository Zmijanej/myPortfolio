import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Pirata_One, Poppins, Cinzel } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Background from "./components/background";
import { ScrollProvider } from "./components/ScrollContext";

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
    
    <html lang="en" className={`${cinzel.className} ${cinzel.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body 
      className="bg-black/70"
      >
        <ScrollProvider>
        <Background/>
        <Navbar/>
        {children}
        <Footer/>
        <SpeedInsights />
        </ScrollProvider>

      </body>
    </html>
  );
}

