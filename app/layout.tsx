import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.waiyan.dev"),
  title: "Sc3p73r | Portfolio",
  description:
    "Htet Oo Wai Yan — Cloud & DevOps engineer. SysOps, Linux, containers, Kubernetes, and cloud-native infrastructure.",
  keywords: [
    "Sc3p73r",
    "DevOps",
    "Kubernetes",
    "Cloud",
    "System Engineer",
    "portfolio",
  ],
  authors: [{ name: "Sc3p73r" }],
  openGraph: {
    title: "Sc3p73r | Portfolio",
    description: "Cloud & DevOps engineer — you build it, you run it.",
    images: ["/src/webp/howy.png"],
    type: "website",
  },
  icons: { icon: "/src/png/Linux.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <ThemeRegistry>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
