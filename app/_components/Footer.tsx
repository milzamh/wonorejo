import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-[#0E6248] text-white py-10 px-20 flex w-full justify-between items-start">
      <div className="flex w-1/2 items-start gap-5">
        <img src="/logo.svg"></img>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-semibold">
            Pemerintah Desa Wonorejo
          </h1>
          <p className="text-[16px]">Kec. Jatiyoso</p>
          <p className="text-[16px] w-2/3 pt-4">
            Jl. Pitran - Banjarsari RT.01/RW.09, Wonorejo, Kec. Jatiyoso, Kab,
            Karanganyar, Kode Pos 57785
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start w-auto gap-3">
        <h1 className="font-bold pb-6 text-[20px]">Hubungi Kami</h1>
        <div className="flex items-center  gap-2">
          <FontAwesomeIcon icon={faPhone} className="w-5" />
          <p>(0274) 377078</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="w-5" />
          <p>pemerintah.wonorejo@yahoo.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
