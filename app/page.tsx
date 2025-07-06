import Image from "next/image";
import Navbar from "./_components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Hero from "./_components/Hero";
import Jelajah from "./_components/Jelajah";
import BeritaList from "./_components/BeritaList";
import Potensi from "./_components/Potensi";
import { client } from "./contentful/client";


export default function Home() {
  console.log(client)
  return (
    <main className="flex flex-col color-bg">
      <Hero />
      <Jelajah />
      <Potensi  />
      <BeritaList displayLimit={6}/>
    </main>
  );
}
