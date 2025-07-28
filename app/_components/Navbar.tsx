'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isInformasiPublikMobileOpen, setIsInformasiPublikMobileOpen] = useState(false);
    const [isLayananMobileOpen, setIsLayananMobileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setIsInformasiPublikMobileOpen(false);
            setIsLayananMobileOpen(false);
        }
    };

    const toggleInformasiPublikMobile = () => {
        setIsInformasiPublikMobileOpen(!isInformasiPublikMobileOpen);
        setIsLayananMobileOpen(false);
    };

    const toggleLayananMobile = () => {
        setIsLayananMobileOpen(!isLayananMobileOpen);
        setIsInformasiPublikMobileOpen(false);
    };

    return (
        <nav className="bg-white h-[80px] md:h-[100px] flex justify-center items-center mx-auto shadow-md relative z-50">
            <div className="container flex justify-between items-center px-4">
                <div className="flex items-center gap-2 md:gap-5 flex-shrink-0">
                    <img src="/logo.svg" alt="Desa Wonorejo Logo" className="h-8 w-8 md:h-auto md:w-auto" />
                    <Link href="/" className="text-black text-base md:text-[20px] font-semibold flex flex-col leading-tight">
                        Desa Wonorejo
                        <p className="text-xs md:text-[16px] font-thin">Kecamatan Jatiyoso</p>
                    </Link>
                </div>

                <div className="hidden lg:flex flex-grow justify-end items-center gap-2 lg:gap-5">
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span className="text-black hover:text-[#0E6248] cursor-pointer px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                                Informasi Publik
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mt-4">
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="https://forms.gle/XbvTjjxoLnN8pq2j8" className="block w-full h-full p-2 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                                    RABDes
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="https://forms.gle/ssUDuomrST6UmvDG6" className="block w-full h-full p-2 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                                    Peta Administrasi Desa
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="/Bencana" className="block w-full h-full p-2 hover:bg-gray-100">
                                    Lokasi Rawan Longsor
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <p className="text-black text-sm md:text-base">|</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span className="text-black hover:text-[#0E6248] cursor-pointer px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                                Layanan
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mt-4">
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="https://forms.gle/XbvTjjxoLnN8pq2j8" className="block w-full h-full p-2 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                                    Pengajuan Persuratan
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="https://forms.gle/ssUDuomrST6UmvDG6" className="block w-full h-full p-2 hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
                                    Layanan Pengaduan Masyarakat
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <p className="text-black text-sm md:text-base">|</p>
                    
                    <Link href="/Kontak" className="text-black hover:text-[#0E6248] px-1 lg:px-2 text-sm md:text-base whitespace-nowrap">
                        Kontak
                    </Link>
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-black text-2xl focus:outline-none">
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 animate-fade-in-down">
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
                    
                    <div className="w-full">
                        <button
                            onClick={toggleInformasiPublikMobile}
                            className="flex justify-center items-center text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200"
                        >
                            <span>Informasi Publik</span>
                            <FontAwesomeIcon icon={isInformasiPublikMobileOpen ? faChevronUp : faChevronDown} className="ml-2" />
                        </button>
                        {isInformasiPublikMobileOpen && (
                            <div className="flex flex-col w-full bg-gray-50">
                                <Link href="https://forms.gle/XbvTjjxoLnN8pq2j8" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-6 py-1 text-base w-full text-center" target="_blank" rel="noopener noreferrer">
                                    RABDes
                                </Link>
                                <Link href="https://forms.gle/ssUDuomrST6UmvDG6" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-6 py-1 text-base w-full text-center" target="_blank" rel="noopener noreferrer">
                                    Peta Administrasi Desa
                                </Link>
                                <Link href="/Bencana" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-6 py-1 text-base w-full text-center border-b border-gray-200">
                                    Lokasi Rawan Longsor
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="w-full">
                        <button
                            onClick={toggleLayananMobile}
                            className="flex justify-center items-center text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center border-b border-gray-200"
                        >
                            <span>Layanan</span>
                            <FontAwesomeIcon icon={isLayananMobileOpen ? faChevronUp : faChevronDown} className="ml-2" />
                        </button>
                        {isLayananMobileOpen && (
                            <div className="flex flex-col w-full bg-gray-50">
                                <Link href="https://forms.gle/XbvTjjxoLnN8pq2j8" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-6 py-1 text-base w-full text-center" target="_blank" rel="noopener noreferrer">
                                    Pengajuan Persuratan
                                </Link>
                                <Link href="https://forms.gle/ssUDuomrST6UmvDG6" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-6 py-1 text-base w-full text-center border-b border-gray-200">
                                    Layanan Pengaduan Masyarakat
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/Kontak" onClick={toggleMobileMenu} className="text-black hover:text-[#0E6248] px-3 py-2 text-lg w-full text-center">
                        Kontak
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
