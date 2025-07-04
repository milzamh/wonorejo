import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="bg-[url('/Hero.svg')] bg-cover bg-center flex items-center justify-center md:justify-start min-h-[550px] md:h-[550px] w-full px-4 lg:px-12 xl:px-10">
            <div className="text-white text-center md:text-left md:px-15 flex flex-col justify-center items-center md:items-start w-full md:w-1/2 h-full py-10 lg:pb-18 lg:px-10">
                <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-[64px] font-bold leading-tight md:leading-normal">Desa Wonorejo</h1>
                <p className="text-lg sm:text-xl md:text-xl xl:text-[24px] mt-2 md:mt-0">Kecamatan Jatiyoso, Kabupaten Karanganyar</p>
                <Link href="#" className="bg-[#0E6248] text-white rounded-lg pl-6 pr-4 mt-6 w-[140px] h-12 flex justify-center gap-2 items-center text-[20px] hover:shadow-xl transition-all duration-300">
                    Lihat <FontAwesomeIcon icon={faArrowRight} className="text-base" />
                </Link>
            </div>
        </div>
    );
}

export default Hero;