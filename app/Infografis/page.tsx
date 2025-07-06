import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPeopleRoof, faMale, faFemale, faF } from "@fortawesome/free-solid-svg-icons";

const Infografis = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-10">
          <h1 className="text-[64px] font-bold">Infografis</h1>
        </div>
      </div>
      <div className="flex flex-col px-21 py-20">
        <h1 className="font-bold text-[32px] text-[#0E6248]">
          BATAS WILAYAH DESA
        </h1>
        <div className="w-full flex justify-center">
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-95 h-40 shadow-lg radius-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-1/2 flex justify-center items-center">
                <span
                  className="material-symbols-outlined text-[#FF8B2D] transform -rotate-90"
                  style={{ fontSize: "90px" }}
                >
                  Navigation
                </span>
              </div>
              <div className="flex flex-col w-auto justify-center text-center">
                <h1 className="text-[#FF8B2D] font-bold text-[24px]">Barat</h1>
                <p className="">Desa Tlobo</p>
                <p>Desa Jatiyoso</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-110 flex flex-col gap-10 flex flex-col justify-center items-center ">
            <div className="h-40 w-95 shadow-lg radius-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-1/2 flex justify-center items-center">
                <span
                  className="material-symbols-outlined text-[#D41616] transform "
                  style={{ fontSize: "90px" }}
                >
                  Navigation
                </span>
              </div>
              <div className="flex flex-col w-1/3 justify-center text-center">
                <h1 className="text-[#D41616] font-bold text-[24px]">Utara</h1>
                <p className="">Desa Beruk</p>
              </div>
            </div>
            <div className="h-40 w-95 shadow-lg radius-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-1/2 flex justify-center items-center">
                <span
                  className="material-symbols-outlined text-[#0E6248] transform rotate-180"
                  style={{ fontSize: "90px" }}
                >
                  Navigation
                </span>
              </div>
              <div className="flex flex-col w-auto justify-center text-center">
                <h1 className="text-[#0E6248] font-bold text-[24px]">
                  Selatan
                </h1>
                <p className="">Desa Wonokeling</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center ">
            <div className="w-95 h-40 shadow-lg radius-lg rounded-lg flex transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col w-1/3 ml-15 justify-center text-center">
                <h1 className="text-[#0019E0] font-bold text-[24px]">Timur</h1>
                <p className="">Provinsi Jawa Timur</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <span
                  className="material-symbols-outlined text-[#0019E0] transform -rotate-270"
                  style={{ fontSize: "90px" }}
                >
                  Navigation
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-[32px] text-[#0E6248] pt-20">
          LUAS WILAYAH DESA
        </h1>
        <div className="px-10 w-full h-auto shadow-2xl my-10 rounded-lg flex">
          <div className="w-1/2 py-7 flex flex-col">
            {[
              "Pemukiman",
              "Ladang/tegalan",
              "Pertanian Sawah",
              "Hutan",
              "Rawa-rawa",
              "Perkantoran",
              "Sekolah",
              "Jalan",
              "Lapangan sepak bola",
            ].map((label, index, arr) => (
              <p
                key={index}
                className={`font-semibold text-[22px] py-2 ${
                  index !== arr.length - 1 ? "border-b border-gray-500" : ""
                }`}
              >
                {label}
              </p>
            ))}
          </div>
          <div className="w-1/2 py-7 flex flex-col">
            {[
              "20.451.750 ha",
              "135 ha",
              "7913 ha",
              "135 ha",
              "135 ha",
              "135 ha",
              "135 ha",
              "135 ha",
              "1,2 ha",
            ].map((value, index, arr) => (
              <p
                key={index}
                className={`text-[22px] py-2 ${
                  index !== arr.length - 1 ? "border-b border-gray-500" : ""
                }`}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <h1 className="font-bold text-[32px] text-[#0E6248] pt-20">
          JUMLAH PENDUDUK
        </h1>
        <div className="px-10 w-full h-auto my-10 rounded-lg flex flex-col gap-10">
          <div className="w-full h-55 flex justify-between gap-18 items-center">
            <div className="w-1/2 h-55 bg-white shadow-lg rounded-lg flex items-center">
              <div className="w-1/3 pl-10 h-full flex justify-center items-center">
              <FontAwesomeIcon icon={faUsers} className="text-[73px] text-black" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start px-15">
                <h1 className="text-[#D41616] text-[28px] font-semibold">Total Penduduk</h1>
                <p className="">7024 Jiwa</p>
              </div>
            </div>
            <div className="w-1/2 h-55 bg-white shadow-lg rounded-lg flex items-center">
              <div className="w-1/3 pl-10 h-full flex justify-center items-center">
              <FontAwesomeIcon icon={faPeopleRoof} className="text-[73px] text-black" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start px-15">
                <h1 className="text-[#D41616] text-[28px] font-semibold">Kartu Keluarga</h1>
                <p className="">1564 KK</p>
              </div>
            </div>
          </div>
          <div className="w-full h-55 flex justify-between gap-18 items-center">
            <div className="w-1/2 h-55 bg-white shadow-lg rounded-lg flex items-center">
              <div className="w-1/3 pl-10 h-full flex justify-center items-center">
              <FontAwesomeIcon icon={faMale} className="text-[73px] text-black" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start px-15">
                <h1 className="text-[#D41616] text-[28px] font-semibold">Laki-laki</h1>
                <p className="">3451 Jiwa</p>
              </div>
            </div>
            <div className="w-1/2 h-55 bg-white shadow-lg rounded-lg flex items-center">
              <div className="w-1/3 pl-10 h-full flex justify-center items-center">
              <FontAwesomeIcon icon={faFemale} className="text-[73px] text-black" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start px-15">
                <h1 className="text-[#D41616] text-[28px] font-semibold">Perempuan</h1>
                <p className="">3673 Jiwa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infografis;
