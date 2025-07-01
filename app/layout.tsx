import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const popppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]});

export const metadata: Metadata = {
  title: "Website Desa Wonorejo",
  description: "Website resmi Pemerintah Desa Wonorejo, Kecamatan Jatiyoso, Kabupaten Karanganyar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className= {popppins.className}
      >
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
