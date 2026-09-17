import type { Metadata } from "next";
import { ThemeProvider, themeInitScript } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarush Chandra — Full-Stack developer",
  description:
    "Tarush Chandra — A full-stack developer specialized in React, Next.js, and Node.js. Building production-grade web apps with scalable architecture. Explore my portfolio and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint so the correct theme class is set with no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
