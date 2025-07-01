import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const data = [
  { image: "/Kopi.svg", title: "Kopi Arabica" },
  { image: "/Singkong.svg", title: "Singkong Jaraktowa" },
  { image: "/Pariwisata.png", title: "Pariwisata" },
  { image: "/Jamur.jpg", title: "Jamur Kuping" },
  { image: "/Sayur.jpg", title: "Sentral Sayur" },
  { image: "/Tembakau.jpg", title: "Tembakau"}
];

const Potensi = () => {
  return (
    <div id="potensi" className="flex flex-col px-18 pb-30 pt-[66px]">
      <h1 className="font-bold text-[32px] text-[#0E6248]">POTENSI DESA</h1>
      <Carousel className="w-full pt-20 mx-auto">
        <CarouselContent className="px-5 flex">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 w-1/2 flex justify-center"
            >
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <Link href='#'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <h3 className="text-xl font-semibold text-center text-[#0E6248]">
                  {item.title}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black p-2 ml-12" />
        <CarouselNext className="text-black p-2 mr-12" />
      </Carousel>
    </div>
  );
};

export default Potensi;
