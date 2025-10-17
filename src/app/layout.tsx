import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dmytro Halahan | Portfolio – Software Developer",
  description: "Explore the portfolio of Dmytro Halahan, a software developer building responsive and interactive web applications.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Dmytro Halahan | Portfolio",
    description: "A showcase of projects developed by Dmytro Halahan, software developer.",
    url: "https://dimmig.me",
    siteName: "Dmytro Halahan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmytro Halahan | Portfolio",
    description: "Portfolio of Dmytro Halahan, software developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
