import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "DevCommunity",
    template: "%s | DevCommunity",
  },
  description: "A full-stack developer community platform for sharing technical blogs, joining communities, and managing developer profiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#407BFF",
          colorBackground: "#FFFFFF",
          borderRadius: "0.625rem",
        },
        elements: {
          footerActionLink: "text-[#407BFF] hover:text-[#2d5acc]",
        },
      }}
    >
      <html lang="en">
        <body className={cn("font-inter antialiased", inter.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
