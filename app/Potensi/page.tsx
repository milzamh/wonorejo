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

const sda = [
  { image: "/Kopi.svg", title: "Kopi Arabica" },
  { image: "/Singkong.svg", title: "Singkong Jarak Towo" },
  { image: "/Jamur.jpg", title: "Jamur Kuping" },
  { image: "/Sayur.jpg", title: "Sentral Sayur" },
  { image: "/Tembakau.jpg", title: "Tembakau" },
];

const pariwisata = [
  { image: "/Jokolangan.svg", title: "Cafe Jokolangan" },
  { image: "/Banyuanyep.svg", title: "Cafe Banyu Anyep" },
  { image: "/Lawu.png", title: "Lawu Coffee Beans" },
  { image: "/Wonomakmur.png", title: "Cafe Wonomakmur" },
  { image: "/Hope.png", title: "Cafe Hope Van Java" }
];

const Potensi = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Potensi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md">
            Potensi Desa
          </h1>
        </div>
      </div>

      {/* SDA Section */}
      <div className="flex flex-col px-4 md:px-20 pb-16 pt-12 md:pt-24">
        <h1 className="font-bold text-2xl md:text-[32px] text-[#0E6248]">SUMBER DAYA ALAM</h1>
        <Carousel className="w-full pt-10 md:pt-20 mx-auto">
          <CarouselContent className="px-2 md:px-5 flex">
            {sda.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-5/6 sm:basis-1/2 md:basis-1/3 flex justify-center"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <Link href="#">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-center text-[#0E6248]">
                    {item.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black p-2 ml-4 md:ml-12" />
          <CarouselNext className="text-black p-2 mr-4 md:mr-12" />
        </Carousel>
      </div>

      {/* Pariwisata Section */}
      <div className="flex flex-col px-4 md:px-20 pb-16 pt-12 md:pt-24">
        <h1 className="font-bold text-2xl md:text-[32px] text-[#0E6248]">PARIWISATA</h1>
        <Carousel className="w-full pt-10 md:pt-20 mx-auto">
          <CarouselContent className="px-2 md:px-5 flex">
            {pariwisata.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-5/6 sm:basis-1/2 md:basis-1/3 flex justify-center"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <Link href={`/potensi/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, "-"))}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-center text-[#0E6248]">
                    {item.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black p-2 ml-4 md:ml-12" />
          <CarouselNext className="text-black p-2 mr-4 md:mr-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default Potensi;
