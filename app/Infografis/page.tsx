import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPeopleRoof,
  faMale,
  faFemale,
  faF,
} from "@fortawesome/free-solid-svg-icons";

const Infografis = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Infografis"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md">
            Infografis
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-10 lg:px-20 py-10 md:py-20">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248]">
          BATAS WILAYAH DESA
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Barat */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[300px] h-40 shadow-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-1/2 flex justify-center items-center">
              <span
                className="material-symbols-outlined text-[#FF8B2D] transform -rotate-90"
                style={{ fontSize: "90px" }}
              >
                Navigation
              </span>
            </div>
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-[#FF8B2D] font-bold text-[24px]">Barat</h1>
              <p>Desa Tlobo</p>
              <p>Desa Jatiyoso</p>
            </div>
          </div>
        </div>

        {/* Utara & Selatan */}
        <div className="flex flex-col gap-6 items-center">
          {/* Utara */}
          <div className="w-full max-w-[300px] h-40 shadow-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-1/2 flex justify-center items-center">
              <span
                className="material-symbols-outlined text-[#D41616]"
                style={{ fontSize: "90px" }}
              >
                Navigation
              </span>
            </div>
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-[#D41616] font-bold text-[24px]">Utara</h1>
              <p>Desa Beruk</p>
            </div>
          </div>

          {/* Selatan */}
          <div className="w-full max-w-[300px] h-40 shadow-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-1/2 flex justify-center items-center">
              <span
                className="material-symbols-outlined text-[#0E6248] rotate-180"
                style={{ fontSize: "90px" }}
              >
                Navigation
              </span>
            </div>
            <div className="w-1/2 flex flex-col justify-center text-center -ml-8">
              <h1 className="text-[#0E6248] font-bold text-[24px]">Selatan</h1>
              <p>Desa Wonokeling</p>
            </div>
          </div>
        </div>


        {/* Timur */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[300px] h-40 shadow-lg rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col justify-center text-center pl-4">
              <h1 className="text-[#0019E0] font-bold text-[24px]">Timur</h1>
              <p>Provinsi Jawa Timur</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <span
                className="material-symbols-outlined text-[#0019E0] -rotate-270"
                style={{ fontSize: "90px" }}
              >
                Navigation
              </span>
            </div>
          </div>
        </div>
      </div>


        <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] pt-20">
          LUAS WILAYAH DESA
        </h1>
        <div className="w-full shadow-2xl my-10 rounded-lg flex flex-col md:flex-row px-6 py-6 gap-6">
          <div className="w-full md:w-1/2 flex flex-col">
            {["Pemukiman", "Ladang/tegalan", "Pertanian Sawah", "Hutan", "Rawa-rawa", "Perkantoran", "Sekolah", "Jalan", "Lapangan sepak bola"].map((label, index, arr) => (
              <p
                key={index}
                className={`font-semibold text-lg md:text-[22px] py-2 ${index !== arr.length - 1 ? "border-b border-gray-500" : ""}`}
              >
                {label}
              </p>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            {["20.451.750 ha", "135 ha", "7913 ha", "135 ha", "135 ha", "135 ha", "135 ha", "135 ha", "1,2 ha"].map((value, index, arr) => (
              <p
                key={index}
                className={`text-lg md:text-[22px] py-2 ${index !== arr.length - 1 ? "border-b border-gray-500" : ""}`}
              >
                {value}
              </p>
            ))}
          </div>
        </div>

        <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] pt-20">
          JUMLAH PENDUDUK
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[{ icon: faUsers, label: "Total Penduduk", value: "7024 Jiwa" }, { icon: faPeopleRoof, label: "Kartu Keluarga", value: "1564 KK" }, { icon: faMale, label: "Laki-laki", value: "3451 Jiwa" }, { icon: faFemale, label: "Perempuan", value: "3673 Jiwa" }].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg flex items-center p-4"
            >
              <div className="w-1/3 flex justify-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[40px] md:text-[73px] text-black"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center pl-4">
                <h1 className="text-[#D41616] text-xl md:text-[28px] font-semibold">
                  {item.label}
                </h1>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infografis;