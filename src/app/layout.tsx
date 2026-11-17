import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { Grain } from "@/components/common/grain";
import { profileData } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — ${profileData.headline}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio[0],
  keywords: [
    "Abraham Pelumi",
    "Web3",
    "Ecosystem Development",
    "Community Growth",
    "Strategic Partnerships",
    "Program Management",
    "Web3 Education",
    "Product Coordination",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Grain />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
