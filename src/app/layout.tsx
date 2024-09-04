import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-raleway",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Rosina Pissaco",
  description: "Senior Product Designer based in Bristol, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${playfairDisplay.variable} antialiased grid grid-cols-12 sm:gap-4 px-4 lg:px-16 2xl:max-w-fit`}
      >
        {children}
      </body>
    </html>
  );
}
