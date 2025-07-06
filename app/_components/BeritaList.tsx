'use client';

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client } from "../contentful/client";
import type { Entry, Asset, EntryCollection, EntrySkeletonType } from "contentful";

interface IBeritaFields {
  gambar: Asset;
  judul: string;
  deskripsiSingkat: string;
  tanggalPublikasi: string;
  beritaId: Number;
}

type BeritaSkeleton = EntrySkeletonType<IBeritaFields, 'beritaWonorejo'>;
type BeritaEntry = Entry<BeritaSkeleton>;

interface BeritaListProps {
  displayLimit?: number;
  itemsPerPage?: number;
}

const BeritaList = ({ displayLimit, itemsPerPage }: BeritaListProps) => {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState<BeritaEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);

  const isLandingPage = typeof displayLimit === 'number';

  const apiLimit = isLandingPage ? displayLimit : (itemsPerPage || 6);

  const apiSkip = isLandingPage ? 0 : (currentPage - 1) * apiLimit;


  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const queryOptions: { content_type: string; order: string; limit?: number; skip?: number } = {
        content_type: 'beritaWonorejo',
        order: '-fields.tanggalPublikasi',
        limit: apiLimit,
        skip: apiSkip,
      };

      const entries: EntryCollection<BeritaSkeleton> = await client.getEntries<BeritaSkeleton>(queryOptions);
      setBerita(entries.items);
      setTotalEntries(entries.total);
      setLoading(false);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data dari Contentful:", error);
      setLoading(false);
    }
  }, [currentPage, apiLimit, apiSkip]);

  useEffect(() => {
    fetchData();

  }, [fetchData, isLandingPage]);

  const totalPages = isLandingPage ? 1 : Math.ceil(totalEntries / apiLimit);


  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    const maxButtonsToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
        startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      pageButtons.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className={`px-3 py-1 mx-1 rounded-md border text-sm ${currentPage === 1 ? 'bg-[#0E6248] text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageButtons.push(<span key="dots-start" className="px-3 py-1 mx-1 text-gray-700">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 mx-1 rounded-md border text-sm ${currentPage === i ? 'bg-[#0E6248] text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<span key="dots-end" className="px-3 py-1 mx-1 text-gray-700">...</span>);
      }
      pageButtons.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-1 mx-1 rounded-md border text-sm ${currentPage === totalPages ? 'bg-[#0E6248] text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          &lt;
        </button>
        {pageButtons}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col px-4 md:px-18 pb-10 md:pb-30 pt-10 md:pt-18 items-center">
      <div className="w-full text-center md:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px] text-[#0E6248]">BERITA DESA</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-8 w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-600">Memuat berita...</p>
        ) : (
          berita.length > 0 ? (
            berita.map((item, index) => {
              const uniqueKey = item.sys?.id || `berita-${index}`;
              const imageUrl = item.fields.gambar?.fields?.file?.url ? `https:${item.fields.gambar.fields.file.url}` : '/placeholder.svg';
              const titleText = item.fields.judul || 'Judul Tidak Tersedia';
              const descriptionText = item.fields.deskripsiSingkat || 'Deskripsi tidak tersedia.';
              const publishedDate = item.fields.tanggalPublikasi ? new Date(item.fields.tanggalPublikasi).toLocaleDateString('id-ID') : 'Tanggal tidak tersedia';

              return (
                <Link href={`/Berita/${item.fields.beritaId}`} key={uniqueKey} className="w-full">
                  <Card className="w-full h-[410px] p-0 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px]">
                        <Image
                          src={imageUrl}
                          alt='Gambar Tidak Tersedia'
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="flex flex-col flex-grow px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
                        <div className="flex-1">
                          <h2 className="text-base sm:text-lg font-semibold text-[#0E6248]">
                            {titleText}
                          </h2>
                          <CardDescription className="text-gray-700 text-sm sm:text-base line-clamp-3 mt-2">
                            {descriptionText}
                          </CardDescription>
                        </div>
                        <p className="text-gray-500 text-xs mt-auto">
                          Dipublikasikan: {publishedDate}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-600">Tidak ada berita yang tersedia saat ini.</p>
          )
        )}
      </div>

      {isLandingPage && (
        <Link href={"/Berita"}>
          <Button className="flex justify-center items-center w-auto bg-[#0E6248] mt-8 md:mt-10 text-sm sm:text-[14px] px-4 py-3 sm:p-5">
            Klik untuk Lebih Banyak Berita Desa
          </Button>
        </Link>
      )}

      {!isLandingPage && totalPages > 1 && renderPaginationButtons()}
    </div>
  );
};

export default BeritaList;