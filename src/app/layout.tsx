import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuzCerta — Calculadora de Energia Amigável",
  description:
    "Descubra de forma simples quais aparelhos podem estar deixando sua conta de luz mais cara. Sem termos técnicos, sem complicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 font-sans">
        {children}
      </body>
    </html>
  );
}
