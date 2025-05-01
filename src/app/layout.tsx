import "@/app/globals.css";

import { PrismicPreview } from "@prismicio/next";
import localFont from "next/font/local";

import Header from "@/components/header";
import ViewCanvas from "@/components/view-canvas";
import { repositoryName } from "@/prismicio";

const alpino = localFont({
  src: "../assets/fonts/Alpino-Variable.woff2",
  variable: "--font-alpino",
  display: "swap",
});

const switzer = localFont({
  src: "../assets/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alpino.variable} ${switzer.variable}`}>
      <body className="overflow-x-hidden bg-yellow-300/80">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
