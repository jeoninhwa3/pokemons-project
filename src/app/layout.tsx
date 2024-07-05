import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/images/img_logo.png";
import Provider from "../app/Provider";

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
      <body className="bg-main">
        <Provider>
          <header className="relative h-44">
            <h1 className="absolute top-2 left-5">
              <Image src={logo} width={300} height={100} alt="pokemon" />
            </h1>
          </header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
