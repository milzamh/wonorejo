import React from "react";
import Link from "next/link";
import BeritaList from "../_components/BeritaList";
import Image from "next/image";

const Berita = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Berita"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md">
            Berita Desa Wonorejo
          </h1>
        </div>
      </div>
      <BeritaList itemsPerPage={6}  />
    </div>
  );
};

export default Berita;
