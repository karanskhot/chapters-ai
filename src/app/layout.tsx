import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Chapters",
    absolute: "Chapters",
  },
  keywords: ["Chapters", "AI", "Next.js", "React"],
  description:
    "Chapters is a platform to create and share AI-generated stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.className} min-h-screen bg-gradient-to-b from-primary/5 via-primary/10 to-primary/20 flex flex-col`}
        >
          <Navbar />
          <main className="mx-auto container px-2 md:px-0 flex-1 grow ">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
