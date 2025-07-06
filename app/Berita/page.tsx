import React from "react";
import Link from "next/link";
import BeritaList from "../_components/BeritaList";

const Berita = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-10">
          <h1 className="text-[64px] font-bold">Berita Desa</h1>
        </div>
      </div>
      <BeritaList itemsPerPage={6}  />
    </div>
  );
};

export default Berita;
