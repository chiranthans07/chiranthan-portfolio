import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Chiranthan S — Information Science Engineer",
  description: "Personal portfolio of Chiranthan S — an Information Science engineer exploring software development, data analytics, AI/ML, and intelligent technology solutions.",
  keywords: ["Chiranthan S", "Information Science", "Software Engineer", "Data Analytics", "AI/ML", "Portfolio"],
  authors: [{ name: "Chiranthan S" }],
  openGraph: {
    title: "Chiranthan S — Information Science Engineer",
    description: "An Information Science engineer exploring software development, data analytics, AI/ML, and intelligent technology solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiranthan S — Information Science Engineer",
    description: "An Information Science engineer exploring software development, data analytics, AI/ML, and intelligent technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
