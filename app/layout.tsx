import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ui/progress-bar";


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
    <html lang="en">
      <body className="border">
        <Navbar/>
        <ProgressBar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
