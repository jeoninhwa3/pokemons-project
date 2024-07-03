import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나만의 몬스터 도감!",
  description: "나만의 몬스터 도감입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black max-w-7xl mx-auto my-0">
        <header className="py-8 text-center">
          <h1 className="text-3xl text-white font-bold">포켓몬 도감</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
