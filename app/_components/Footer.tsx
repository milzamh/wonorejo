import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0E6248] text-white pt-8 pb-6 px-4 md:pt-15 md:pb-10 md:px-20 flex flex-col md:flex-row w-full justify-between items-center md:items-start text-center md:text-left">
        <div className="flex flex-col md:items-start w-full md:w-1/2 gap-3 mb-8 md:mb-0 md:gap-5">
            <img
              src="/logo.png"
              alt="Desa Wonorejo Logo"
              className="h-10 w-10 md:h-auto md:w-auto"
            ></img>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-[20px] font-semibold">
                Pemerintah Desa Wonorejo
              </h1>
              <p className="text-sm md:text-[16px]">Kec. Jatiyoso</p>
              <p className="text-sm md:text-[16px] w-full md:w-2/3 pt-2 md:pt-4">
                Jl. Pitran - Banjarsari RT.01/RW.09, Wonorejo, Kec. Jatiyoso,
                Kab, Karanganyar, Kode Pos 57785
              </p>
            </div>
          <div className="flex gap-3 md:gap-5">
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-auto gap-3">
          <h1 className="font-bold pb-3 md:pb-6 text-lg md:text-[20px]">
            Hubungi Kami
          </h1>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="w-4 md:w-5" />
            <p className="text-sm md:text-base">(0274) 377078</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 md:w-5" />
            <p className="text-sm md:text-base">
              pemerintah.wonorejo@yahoo.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0E6248] text-white">
        <p className="text-center py-3 md:py-4 text-xs md:text-[12px]">
          © 2025 Pemerintah Desa Wonorejo
        </p>
      </div>
    </div>
  );
};

export default Footer;
