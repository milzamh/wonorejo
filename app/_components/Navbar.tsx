import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"

const Navbar = () => {
  return (
    <nav className="bg-white h-[100px] flex justify-center items-center mx-auto">
      <div className="container flex justify-between items-center">
        <div className="flex w-1/4 items-center gap-5">
            <img src="/logo.svg"></img>
            <Link href="/" className="text-black text-[20px] font-semibold">
            Desa Wonorejo
            <p className="text-[16px] font-thin">
                Kecamatan Jatiyoso </p>
            </Link>
        </div>
        <div className="flex w-3/4 justify-end rm-0 gap-5">
          <Link href="/about" className="text-black hover:text-[#0E6248] px-3 text-4">
            Profile Desa
          </Link>
          <p className="text-black">|</p>
          <Link href="/contact" className="text-black hover:text-[#0E6248] px-3 text-4">
            Infografis
          </Link>
          <p className="text-black">|</p>
          <Link href="/contact" className="text-black hover:text-[#0E6248] px-3 text-4">
            Potensi Desa
          </Link>
          <p className="text-black">|</p>
          <Link href="/contact" className="text-black hover:text-[#0E6248] px-3 text-4">
            Berita
          </Link>
          <p className="text-black">|</p>
          <Link href="/contact" className="text-black hover:text-[#0E6248] px-3 text-4">
            Layanan
          </Link>
          <p className="text-black">|</p>
          <Link href="/contact" className="text-black hover:text-[#0E6248] px-3 text-4">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;