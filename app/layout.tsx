import type { Metadata } from "next";
import { ThemeProvider, themeInitScript } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarush Chandra — Software Engineer",
  description:
    "A software engineer specialized in React, Next.js, and Node.js. Building production-grade web apps with scalable architecture. Explore my portfolio and projects.",
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
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
