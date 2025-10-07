import type { Metadata } from "next";
import { Geist, Geist_Mono, Edu_VIC_WA_NT_Beginner } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eduFont = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-edu",
});

export const metadata: Metadata = {
  title: "Suvrodeb Howlader",
  description: "Welcome to Suvrodeb Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eduFont.variable} antialiased `}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
