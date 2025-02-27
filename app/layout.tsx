import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
//import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";
const cn = clsx;

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"]});
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald"});
const PixelFont = localFont({
  src: "../public/assets/fonts/vhs-gothic.ttf",
  variable: "--font-pixel",
});

//Metadata
export const metadata: Metadata = {
  title: "TRENTON BUTLER",
  description: "Trenton Davis Butler official portfiolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(MainFont.className, OswaldFont.variable, PixelFont.variable)}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
