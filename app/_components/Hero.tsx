import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
            <div className="text-white text-left flex flex-col justify-center items-start w-1/2 h-full pb-18 px-10">
                <h1 className="text-[64px] font-bold">Desa Wonorejo</h1>
                <p className="text-[24px]">Kecamatan Jatiyoso, Kabupaten Karanganyar</p>
                <Link href="" className="bg-[#0E6248] text-white rounded-lg pl-6 pr-4 mt-6 w-[140px] h-12 flex justify-center gap-2 items-center text-[20px] hover:shadow-xl transition-all duration-300">
                    Lihat <FontAwesomeIcon icon={faArrowRight} className="text-[5px] px-3.5" />
                </Link>
            </div>
        </div>
    );
}

export default Hero;