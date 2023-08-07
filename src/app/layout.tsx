import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Nunito } from "next/font/google";
// import AuthProvider from "./context/AuthProvider";
// Wrap this around the return if you wish to use Session data in client components

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
