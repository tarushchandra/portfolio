import type { Metadata } from "next";
import { ThemeProvider, themeInitScript } from "@/context/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarush Chandra — Frontend-focused full-stack engineer",
  description:
    "Tarush Chandra is a frontend-focused full-stack software engineer who moved from Electrical Engineering into software through roughly 3.5 years of rigorous, self-directed practice.",
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
      </body>
    </html>
  );
}
