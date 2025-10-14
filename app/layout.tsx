import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OctaveDB - TypeScript-first JSON database",
  description: "A simple, TypeScript-first JSON file database for local development and prototyping. Zero configuration, type-safe, and lightweight.",
  keywords: ["json database", "typescript", "local database", "prototyping", "development tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}