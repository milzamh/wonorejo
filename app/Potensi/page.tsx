'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { client } from "../contentful/client";
import type { Entry, Asset, EntryCollection, EntrySkeletonType } from "contentful";

interface IPotensiFields {
  judulPotensi: string;
  gambarPotensi: Asset;
  slug: string;
  deskripsiPotensi: any;
  kategoriPotensi: 'SDA' | 'Pariwisata';
  displayType: 'items' | 'category_overview';
}

type PotensiSkeleton = EntrySkeletonType<IPotensiFields, 'potensiDesa'>;
type PotensiEntry = Entry<PotensiSkeleton>;

const Potensi = () => {
  const [loading, setLoading] = useState(true);
  const [sdaItems, setSdaItems] = useState<PotensiEntry[]>([]);
  const [pariwisataItems, setPariwisataItems] = useState<PotensiEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries: EntryCollection<PotensiSkeleton> = await client.getEntries<PotensiSkeleton>({
          content_type: 'potensiDesa',
          limit: 100,
        });

        const sda = entries.items.filter(item => 
          item.fields.displayType === 'items' && item.fields.kategoriPotensi === 'SDA'
        );
        const pariwisata = entries.items.filter(item => 
          item.fields.displayType === 'items' && item.fields.kategoriPotensi === 'Pariwisata'
        );

        setSdaItems(sda);
        setPariwisataItems(pariwisata);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data potensi:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderCarouselSection = (title: string, data: PotensiEntry[], categorySlug: string) => {
    if (loading) {
      return <p className="w-full text-center mt-20 text-gray-600">Memuat {title.toLowerCase()}...</p>;
    }

    if (data.length === 0) {
      return <p className="w-full text-center mt-20 text-gray-600">Tidak ada data {title.toLowerCase()} yang tersedia saat ini.</p>;
    }

    return (
      <div id={categorySlug} className="flex flex-col px-4 md:px-18 pb-10 md:pb-30 pt-10 md:pt-[66px]">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px] text-[#0E6248] text-center md:text-left w-full">
          {title}
        </h1>
        <Carousel className="w-full pt-8 md:pt-20 mx-auto">
          <CarouselContent className="px-2 md:px-5 flex">
            {data.map((item, index) => {
              const imageUrl = item.fields.gambarPotensi?.fields?.file?.url ? `https:${item.fields.gambarPotensi.fields.file.url}` : '/placeholder.svg';
              const titleText = item.fields.judulPotensi || 'Nama Potensi';
              const uniqueKey = item.sys?.id || `potensi-${index}`;

              let linkHref = '#';
              if (item.fields.displayType === 'category_overview') {
                linkHref = '/Potensi'; 
              } else {
                linkHref = `/Potensi/${item.fields.slug}`;
              }

              return (
                <CarouselItem
                  key={uniqueKey}
                  className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
                >
                  <div className="flex flex-col justify-center items-center space-y-2 sm:space-y-4">
                    <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
                      <Link href={linkHref}>
                        <Image
                          src={imageUrl}
                          alt={titleText}
                          fill
                          className="object-cover"
                        />
                      </Link>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-center text-[#0E6248]">
                      {titleText}
                    </h3>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-black p-1 ml-4 md:ml-12" />
          <CarouselNext className="text-black p-1 mr-4 md:mr-12" />
        </Carousel>
      </div>
    );
  };

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

      {renderCarouselSection("SUMBER DAYA ALAM", sdaItems, "sda")}

      {renderCarouselSection("PARIWISATA", pariwisataItems, "pariwisata")}
    </div>
  );
};

export default Potensi;