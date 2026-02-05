import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Learning Adventure - K-12 Reading & Writing",
  description: "Interactive English reading and writing tutorial app for K-12 students, designed for ADHD and Autism learners with visual and audio support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
