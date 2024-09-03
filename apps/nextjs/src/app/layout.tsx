import RootNavigation from "@/components/navigations/RootNavigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Dom.",
    default: "Dom.",
  },
  description: "Some random website.",
  openGraph: process.env.VERCEL
    ? {
        images: [
          {
            url: "/og.png",
          },
        ],
      }
    : undefined,
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <RootNavigation />
          <main>{children}</main>
          <footer className="flex text-neutral-500 justify-end container mx-auto p-4">
            © {new Date().getFullYear()} Dom.
          </footer>
          {modal}
          <ProgressBar className="fixed top-0 z-50 h-1 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
