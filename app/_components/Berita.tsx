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
    <div className="flex flex-col px-18 pb-30 pt-18 items-center">
      <div className="w-full">
        <h1 className="font-bold text-[32px] text-[#0E6248]">BERITA DESA</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
        {CardData.map((item, index) => (
          <Link href="#" key={index}>
            <Card className="w-full h-auto p-0 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="h-1/3 w-auto rounded-t-lg"
                />
                <div className="flex flex-col gap-2 justify-center px-4 pt-3 pb-4">
                  <h2 className="text-lg font-semibold text-[#0E6248]">
                    {item.title}
                  </h2>
                  <CardDescription className="text-gray-700">
                    {item.text}
                  </CardDescription>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Link href={""}>
        <Button className="flex justify-center items-center w-auto bg-[#0E6248] mt-10 text-[14px] p-5">
          Klik untuk Lebih Banyak Berita Desa
        </Button>
      </Link>
    </div>
  );
};

export default Berita;
