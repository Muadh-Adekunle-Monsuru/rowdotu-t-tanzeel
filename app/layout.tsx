import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rowdotu-T-Tanzeel | Tahfeez & Arabic School — Ile-Ife",
  description:
    "Rowdotu-T-Tanzeel Tahfeez & Arabic School in Ile-Ife, Osun State. Website under construction.",
  openGraph: {
    title: "Rowdotu-T-Tanzeel Tahfeez & Arabic School",
    description: "Nurturing Faith, Building Knowledge, Shaping the Future",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
