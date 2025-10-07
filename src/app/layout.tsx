import type { Metadata } from "next";
import { Roboto, Edu_VIC_WA_NT_Beginner } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Provider/Provider/Provider";

// ✅ Roboto font configuration
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
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
    <Providers>
      <html lang="en">
        <body
          className={`${roboto.variable} ${eduFont.variable} antialiased `}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
