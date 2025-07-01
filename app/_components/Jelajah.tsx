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
    <div className="flex w-full">
      <div className="flex flex-col w-1/2 px-18 pb-30 pt-41">
        <h1 className="font-bold text-[32px] text-[#0E6248]">JELAJAHI DESA</h1>
        <p className="text-black text-[20px] pt-3">
          Melalui website ini Anda dapat menjelajahi segala hal yang terkait
          dengan Desa. Aspek pemerintahan, penduduk, demografi, potensi Desa,
          dan juga berita tentang Desa.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-18 pb-7 pt-21 flex gap-11">
          <Link href={"/Profile"}>
            <Card className="w-40 h-40 text-gray-100 shadow-lg pt-8 pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faLandmark}
                className="text-10 text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-semibold">Profile Desa</p>
              </CardDescription>
            </Card>
          </Link>
          <Link href={"/Infografis"}>
            <Card className="w-40 h-40 text-gray-100 shadow-lg pt-8 pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faChartBar}
                className="text-10 text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-semibold">Infografis</p>
              </CardDescription>
            </Card>
          </Link>
        </div>
        <div className="pl-45 pb-25 flex gap-11">
          <a href="#potensi">
            <Card className="w-40 h-40 text-gray-100 shadow-lg pt-8 pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon icon={faSeedling} className="text-10 text-black" />
              <CardDescription className="text-center">
                <p className="text-black text-semibold">Potensi Desa</p>
              </CardDescription>
            </Card>
          </a>
          <Link href={"/"}>
            <Card className="w-40 h-40 text-gray-100 shadow-lg pt-8 pb-5 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-10 text-black"
              />
              <CardDescription className="text-center">
                <p className="text-black text-semibold">Berita Desa</p>
              </CardDescription>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jelajah;
