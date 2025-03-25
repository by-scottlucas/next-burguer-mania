import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burguer Mania - O melhor hambúrguer da cidade!",
  description: "Descubra os melhores hambúrgueres na Burguer Mania!",
  keywords: ["hambúrguer", "comida", "fast food", "Burguer Mania"],
  authors: [{ name: "Lucas Santos Silva", url: "https://github.com/by-scottlucas" }],
  generator: "Next.js 15",
  icons: {
    icon: "/visual_identity/icon.png",
  },
  openGraph: {
    type: "website",
    title: "Burguer Mania - O melhor hambúrguer da cidade!",
    description: "Descubra os melhores hambúrgueres na Burguer Mania!",
    images: [{
      url: "/visual_identity/og-image.jpg",
      width: 600,
      height: 600,
      alt: "Burguer Mania",
    }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
