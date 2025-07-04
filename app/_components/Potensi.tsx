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
    <div id="potensi" className="flex flex-col px-4 md:px-18 pb-10 md:pb-30 pt-10 md:pt-[66px] items-center md:items-start">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px] text-[#0E6248] text-center md:text-left w-full">POTENSI DESA</h1>
      <Carousel className="w-full pt-8 md:pt-20 mx-auto">
        <CarouselContent className="px-2 md:px-5 flex">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
            >
              <div className="flex flex-col justify-center items-center space-y-2 sm:space-y-4">
                <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <Link href='#'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-[#0E6248]">
                  {item.title}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black p-1 ml-4 md:ml-12" />
        <CarouselNext className="text-black p-1 mr-4 md:mr-12" />
      </Carousel>
    </div>
  );
};

export default Potensi;