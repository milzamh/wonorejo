import React from "react";
import Link from "next/link";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CardData = [
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Cthberita.svg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Berita = () => {
  return (
    <div className="flex flex-col px-4 md:px-18 pb-10 md:pb-30 pt-10 md:pt-18 items-center">
      <div className="w-full text-center md:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px] text-[#0E6248]">BERITA DESA</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-8 w-full">
        {CardData.map((item, index) => (
          <Link href="#" key={index} className="w-full">
            <Card className="w-full h-auto p-0 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 justify-center px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
                  <h2 className="text-base sm:text-lg font-semibold text-[#0E6248]">
                    {item.title}
                  </h2>
                  <CardDescription className="text-gray-700 text-sm sm:text-base line-clamp-3">
                    {item.text}
                  </CardDescription>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Link href={"#"}>
        <Button className="flex justify-center items-center w-auto bg-[#0E6248] mt-8 md:mt-10 text-sm sm:text-[14px] px-4 py-3 sm:p-5">
          Klik untuk Lebih Banyak Berita Desa
        </Button>
      </Link>
    </div>
  );
};

export default Berita;