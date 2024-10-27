import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/containers/Provider/Provider";



export const metadata: Metadata = {
  title: "Studybot",
  description: "Studybot Chat bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-7 px-3 md:py-5 md:px-8 h-screen">
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
