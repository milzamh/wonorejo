import React from "react";
import Link from "next/link";
import Image from "next/image";

const Kontak = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-10">
          <h1 className="text-[64px] font-bold">Kontak Kami</h1>
        </div>
      </div>
      <div className="flex flex-col px-18 pb-20 pt-30">
        <h1 className="font-bold text-[32px] text-[#0E6248]">KONTAK KAMI</h1>
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
