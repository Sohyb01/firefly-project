import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Nunito } from "next/font/google";
import Footer from "./components/Footer";
// import AuthProvider from "./context/AuthProvider";
// Wrap this around the return if you wish to use Session data in client components

const nunito = Nunito({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firefly",
  description: "Hikes and Camping Trips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
