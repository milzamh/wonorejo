'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client } from "../contentful/client";
import type { Entry, Asset, EntryCollection, EntrySkeletonType } from "contentful";
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


interface IBeritaFields {
  gambar: Asset;
  judul: string;
  deskripsiSingkat: string;
  tanggalPublikasi: string;
}

type BeritaSkeleton = EntrySkeletonType<IBeritaFields, 'beritaWonorejo'>;
type BeritaEntry = Entry<BeritaSkeleton>;

// --- PERUBAHAN UTAMA DI SINI: Tambahkan props `limitCount` ---
interface BeritaProps {
  limitCount?: number; // Prop opsional untuk membatasi jumlah berita
  hideButton?: boolean; // Prop opsional untuk menyembunyikan tombol "Lihat Lebih Banyak"
}

// Ubah fungsi Berita menjadi menerima props
const Berita = ({ limitCount, hideButton }: BeritaProps) => {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState<BeritaEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryOptions: { content_type: string; order: string; limit?: number } = {
          content_type: 'beritaWonorejo',
          order: '-fields.tanggalPublikasi',
        };

        // Jika limitCount diberikan, tambahkan ke query options
        if (typeof limitCount === 'number' && limitCount > 0) {
          queryOptions.limit = limitCount;
        }

        const entries: EntryCollection<BeritaSkeleton> = await client.getEntries<BeritaSkeleton>(queryOptions);
        setBerita(entries.items);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data dari Contentful:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [limitCount]); // <-- Tambahkan limitCount ke dependency array agar fetch ulang jika limit berubah

  const renderRichTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-1 text-sm">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-xl font-bold">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-lg font-semibold">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} className="text-blue-600 hover:underline">{children}</a>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => null, // Mengembalikan null agar gambar tersemat tidak dirender
    },
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
                <Link href="#" key={uniqueKey} className="w-full">
                  <Card className="w-full h-[410px] p-0 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col flex-grow gap-3 sm:gap-4">
                      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px]">
                        <Image
                          src={imageUrl}
                          alt={titleText}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="flex flex-col flex-1 gap-1 sm:gap-2 justify-center px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
                        <h2 className="text-base sm:text-lg font-semibold text-[#0E6248]">
                          {titleText}
                        </h2>
                        <CardDescription className="text-gray-700 text-sm sm:text-base line-clamp-3 mt-2">
                          {descriptionText}
                        </CardDescription>
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
      {/* Tombol hanya akan muncul jika hideButton tidak true */}
      {!hideButton && (
        <Link href={"/berita"}>
          <Button className="flex justify-center items-center w-auto bg-[#0E6248] mt-8 md:mt-10 text-sm sm:text-[14px] px-4 py-3 sm:p-5">
            Klik untuk Lebih Banyak Berita Desa
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Berita;