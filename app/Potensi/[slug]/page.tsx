import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { Entry, Asset, EntrySkeletonType, EntryCollection } from "contentful";
import { client } from "../../contentful/client";

interface IPotensiFields {
  judulPotensi: string;
  gambarPotensi: Asset;
  slug: string;
  deskripsiPotensi: any;
  kategoriPotensi: "SDA" | "Pariwisata";
  displayType: "items" | "category_overview";
}

type PotensiSkeleton = EntrySkeletonType<IPotensiFields, "potensiDesa">;
type PotensiEntry = Entry<PotensiSkeleton>;

const richTextRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        className="text-[#0E6248] underline hover:no-underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { data } = node;
      const { target } = data;
      const { fields } = target;

      if (fields && fields.file && fields.title) {
        const { url, details } = fields.file;
        const { width, height } = details.image;
        const alt = fields.title;

        return (
          <div className="my-4 flex justify-center">
            <Image
              src={`https:${url}`}
              alt={alt}
              width={width}
              height={height}
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        );
      }
      return null;
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-3xl font-bold mt-6 mb-4 text-[#0E6248]">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-2xl font-bold mt-5 mb-3 text-[#0E6248]">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-xl font-bold mt-4 mb-2 text-[#0E6248]">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc pl-5 mb-4 text-gray-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal pl-5 mb-4 text-gray-700">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="mb-2">{children}</li>
    ),
  },
};

// 🔧 Fungsi untuk menghitung ukuran responsif berdasarkan orientasi gambar
function getResponsiveImageSize(width: number, height: number) {
  const isPortrait = height > width;

  if (isPortrait) {
    return {
      height: 500,
      width: Math.round((width / height) * 500),
    };
  } else {
    return {
      width: 1000,
      height: Math.round((height / width) * 1000),
    };
  }
}

interface PotensiDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const entries: EntryCollection<PotensiSkeleton> =
    await client.getEntries<PotensiSkeleton>({
      content_type: "potensiDesa",
      "fields.displayType": "items",
      select: ["fields.slug"],
      limit: 100,
    });

  return entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));
}

const PotensiDetailPage: React.FC<PotensiDetailPageProps> = async ({
  params,
}) => {
  const { slug } = params;

  const entries: EntryCollection<PotensiSkeleton> =
    await client.getEntries<PotensiSkeleton>({
      content_type: "potensiDesa",
      "fields.slug": slug,
      "fields.displayType": "items",
      limit: 1,
    });

  const potensi = entries.items[0];

  if (!potensi) {
    notFound();
  }

  const imageUrl = potensi.fields.gambarPotensi?.fields?.file?.url
    ? `https:${potensi.fields.gambarPotensi.fields.file.url}`
    : "/placeholder.svg";

  const imageDetails = potensi.fields.gambarPotensi?.fields?.file?.details?.image;
  const { width: originalWidth, height: originalHeight } = imageDetails || {
    width: 800,
    height: 600,
  };
  const imageSize = getResponsiveImageSize(originalWidth, originalHeight);

  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-4 md:px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-4 md:px-10">
          <h1 className="text-[48px] md:text-[64px] font-bold">Potensi Desa</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E6248] text-center mb-8">
          {potensi.fields.judulPotensi}
        </h1>
        <div className="w-full flex justify-center mb-8">
          <Image
            src={imageUrl}
            alt={potensi.fields.judulPotensi || "Gambar Potensi Desa"}
            {...imageSize}
            style={{ objectFit: "contain" }}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="prose prose-lg max-w-none mx-auto text-gray-800 pt-8 text-justify">
          {potensi.fields.deskripsiPotensi &&
            documentToReactComponents(
              potensi.fields.deskripsiPotensi,
              richTextRenderOptions
            )}
        </div>
      </div>
    </div>
  );
};

export default PotensiDetailPage;
