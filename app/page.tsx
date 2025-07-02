import Image from "next/image";
import Navbar from "./_components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Hero from "./_components/Hero";
import Jelajah from "./_components/Jelajah";
import Berita from "./_components/Berita";
import Potensi from "./_components/Potensi";

const STRAPI_API_URL = 'http://localhost:1338';

export default function Home() {
  return (
    <main className="flex flex-col color-bg">
      <Hero />
      <Jelajah />
      <Potensi  />
      <Berita />
    </main>
  );
}
