import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamilton & Reed LLP | Law Firm Website Demo",
  description:
    "A high-end professional law firm website demo for portfolio presentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
