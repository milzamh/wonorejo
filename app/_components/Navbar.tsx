'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white h-[80px] md:h-[100px] flex justify-center items-center mx-auto shadow-md relative z-50">
            <div className="container flex justify-between items-center px-4"> {/* px-4 untuk semua ukuran, container akan membatasi lebar */}
                <div className="flex items-center gap-2 md:gap-5 flex-shrink-0"> {/* flex-shrink-0 agar logo tidak mengecil */}
                    <img src="/logo.svg" alt="Desa Wonorejo Logo" className="h-8 w-8 md:h-auto md:w-auto"></img>
                    <Link href="/" className="text-black text-base md:text-[20px] font-semibold flex flex-col leading-tight"> {/* leading-tight untuk mengurangi spasi antar baris */}
                        Desa Wonorejo
                        <p className="text-xs md:text-[16px] font-thin">Kecamatan Jatiyoso</p>
                    </Link>
                </div>

                <div className="hidden md:flex flex-grow justify-end items-center gap-2 lg:gap-5"> {/* flex-grow agar mengambil sisa ruang, gap disesuaikan */}
                    <Link href="/Profile" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Profile Desa
                    </Link>
                    <p className="text-black text-sm md:text-base">|</p>
                    <Link href="/Infografis" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Infografis
                    </Link>
                    <p className="text-black text-sm md:text-base">|</p>
                    <Link href="/Potensi" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Potensi Desa
                    </Link>
                    <p className="text-black text-sm md:text-base">|</p>
                    <Link href="/Berita" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Berita
                    </Link>
                    <p className="text-black text-sm md:text-base">|</p>
                    <div className="relative group">
                        <button className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                            Layanan ▾
                        </button>
                        <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg border rounded-md z-50 w-64">
                            <a
                            href="https://link-google-form-A.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                            Formulir Layanan Masyarakat
                            </a>
                            <a
                            href="https://link-google-form-B.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                            Formulir Pengajuan Persuratan
                            </a>
                        </div>
                    </div>
                    <p className="text-black text-sm md:text-base">|</p>
                    <Link href="/Kontak" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Kontak
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-black text-2xl focus:outline-none">
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 animate-fade-in-down">
                    <Link href="/Profile" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200">
                        Profile Desa
                    </Link>
                    <Link href="/Infografis" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200">
                        Infografis
                    </Link>
                    <Link href="/Potensi" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200">
                        Potensi Desa
                    </Link>
                    <Link href="/Berita" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200">
                        Berita
                    </Link>
                    <Link href="/Layanan" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200">
                        Layanan
                    </Link>
                    <Link href="/Kontak" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center">
                        Kontak
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;