import React from "react";
import Link from "next/link";
import {
  faLandmark,
  faChartBar,
  faSeedling,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardDescription } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Jelajah = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 md:pl-20 md:py-0 xl:px-18 py-10 md:py-16 xl:py-0 items-center md:items-start">
      <div className="flex flex-col w-full md:w-1/2 pb-8 md:pb-30 pt-4 md:pt-41 md:w-1/2 text-center md:text-left items-center md:items-start md:pl-15 lg:pl-0">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[32px] text-[#0E6248]">JELAJAHI DESA</h1>
        <p className="text-black text-justify sm:text-lg md:text-xl lg:text-xl xl:text-[20px] pt-3 px-2 md:px-0 w-full md:w-3/4 max-w-xl md:max-w-none">
          Melalui website ini Anda dapat menjelajahi segala hal yang terkait
          dengan Desa. Aspek pemerintahan, penduduk, demografi, potensi Desa,
          dan juga berita tentang Desa.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 xl:gap-2 md:pt-30 w-full xl:w-1/2 justify-center items-center xl:items-start pt-8 xl:pt-0">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-11 px-0 sm:px-0 lg:px-4 xl:px-18 pb-4 md:pb-6 xl:pb-7 pt-0 xl:pt-21">
          <Link href={"/Profile"}>
            <Card className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-gray-100 shadow-lg pt-6 pb-4 sm:pt-8 sm:pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faLandmark}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-[40px] text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-xs sm:text-sm md:text-base font-semibold">Profile Desa</p>
              </CardDescription>
            </Card>
          </Link>
          <Link href={"/Infografis"}>
            <Card className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-gray-100 shadow-lg pt-6 pb-4 sm:pt-8 sm:pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faChartBar}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-[40px] text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-xs sm:text-sm md:text-base font-semibold">Infografis</p>
              </CardDescription>
            </Card>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-11 pb-10 md:pb-16 xl:pb-25 px-0 sm:px-0 lg:pl-0 xl:pl-45">
          <a href="#potensi">
            <Card className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-gray-100 shadow-lg pt-6 pb-4 sm:pt-8 sm:pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon icon={faSeedling} className="text-3xl sm:text-4xl md:text-5xl xl:text-[40px] text-black" />
              <CardDescription className="text-center">
                <p className="text-black text-xs sm:text-sm md:text-base font-semibold">Potensi Desa</p>
              </CardDescription>
            </Card>
          </a>
          <Link href={"/"}>
            <Card className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-gray-100 shadow-lg pt-6 pb-4 sm:pt-8 sm:pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-[40px] text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-xs sm:text-sm md:text-base font-semibold">Berita Desa</p>
              </CardDescription>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jelajah;