import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Background3D } from "@/components/3d/Background3D";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dima Galagan - Software Developer",
  description: "Portfolio website showcasing my work as a software developer",
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
          <Background3D />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
