import "./globals.css";
import "instantsearch.css/themes/satellite-min.css";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
