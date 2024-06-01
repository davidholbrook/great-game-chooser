import React, {useReducer} from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image';
import "./globals.css";

import { GameProvider } from './_context/context';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Game Chooser",
  description: "Pick your next great video game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GameProvider>
        <html lang="en">
          <body>
            <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
            <Image src="/img/logo.svg" alt="Great Game Chooser logo" width={460} height={50} className="mb-5" />
            <div className="w-10/12 bg-[#CCCCCC] py-5 px-20 dshadows">
              {children}
            </div>
            </div>
            </body>
        </html>
    </GameProvider>
  );
}
