import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./reduxStore/StoreProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
  title: "Health & Fitness Blog",
  description: "Developed by Rafiha Siddiqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="pk_test_YW1hemluZy1rb2RpYWstOTYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <html lang="en">
        <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}    
      >
        
       
            <StoreProvider>
              <Header/>
              {children}
             <Footer/>
            </StoreProvider>
   
        </body  >
      </html>
    </ClerkProvider>
  );
}
