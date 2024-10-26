import type { Metadata } from "next";
import "./globals.css";



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
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
