import React from "react";
import Link from "next/link";
import Image from "next/image";

const Kontak = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Kontak"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md">
            Kontak Kami
          </h1>
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-10 lg:px-20 py-10 md:py-20">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248]">KONTAK KAMI</h1>
        <p className="text-[24px] font-semibold pt-10">Alamat:</p>
        <p className="pb-5 text-[20px]">
          Jl. Pitran - Banjarsari RT.01/RW.09, Wonorejo, Kec. Jatiyoso, Kab,
          Karanganyar, Kode Pos 57785
        </p>
        <p className="text-[24px] font-semibold">Telp:</p>
        <p className="pb-5 text-[20px]">(0274) 377078</p>
        <p className="text-[24px] font-semibold">Email:</p>
        <p className="text-[20px]">pemerintah.wonorejo@yahoo.com</p>
      </div>
    </div>
  );
};

export default Kontak;
