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
  const [potensiDataForLanding, setPotensiDataForLanding] = useState<PotensiEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries: EntryCollection<PotensiSkeleton> = await client.getEntries<PotensiSkeleton>({
          content_type: 'potensiDesa',
          limit: 100,
        });

        const allItems = entries.items;

        const filteredForLanding = allItems.filter(item => {
            const isSdaItem = item.fields.displayType === 'items' && item.fields.kategoriPotensi === 'SDA';
            const isPariwisataOverview = item.fields.displayType === 'category_overview' && item.fields.kategoriPotensi === 'Pariwisata';

            return isSdaItem || isPariwisataOverview;
        });

        const sortedForLanding = filteredForLanding.sort((a, b) => {
            if (a.fields.displayType === 'category_overview' && b.fields.displayType === 'items') return -1;
            if (a.fields.displayType === 'items' && b.fields.displayType === 'category_overview') return 1;
            return a.fields.judulPotensi.localeCompare(b.fields.judulPotensi);
        });


        setPotensiDataForLanding(sortedForLanding);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data potensi untuk landing page:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="potensi" className="flex flex-col px-4 md:px-18 pb-10 md:pb-30 pt-10 md:pt-[66px] items-center md:items-start">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px] text-[#0E6248] text-center md:text-left w-full">POTENSI DESA</h1>
      
      {loading ? (
        <p className="w-full text-center mt-20 text-gray-600">Memuat potensi...</p>
      ) : potensiDataForLanding.length > 0 ? (
        <Carousel className="w-full pt-8 md:pt-20 mx-auto">
          <CarouselContent className="px-2 md:px-5 flex">
            {potensiDataForLanding.map((item, index) => {
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
      ) : (
        <p className="w-full text-center mt-20 text-gray-600">Tidak ada potensi desa yang tersedia saat ini.</p>
      )}
    </div>
  );
};

export default Potensi;