import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import type {
  Entry,
  EntryCollection,
  EntrySkeletonType,
  Asset,
  EntriesQueries,
  AssetFile,
  AssetDetails,
  AssetFields, // Import AssetFields here
} from "contentful";
import { client } from "../../contentful/client";

interface IBeritaFields {
  judul: string;
  deskripsi: Document;
  gambar: Asset;
  tanggalPublikasi: string;
  beritaId: string;
}

type BeritaSkeleton = EntrySkeletonType<IBeritaFields, "beritaWonorejo">;
type BeritaEntry = Entry<BeritaSkeleton>;

export async function generateStaticParams() {
  const entries = await client.getEntries<BeritaSkeleton>({
    content_type: "beritaWonorejo",
    select: ["fields.beritaId"],
    limit: 1000,
  });

  return entries.items.map((entry) => ({
    slug: entry.fields.beritaId,
  }));
}

const detailRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 text-base leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold my-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-semibold my-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold my-4">{children}</h3>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as Asset;

      // Safely access asset fields and cast to AssetFields
      const assetFields = asset.fields as AssetFields | undefined;

      const assetFile = assetFields?.file as AssetFile | undefined;
      const imageUrl = assetFile?.url;

      let altText = "";
      if (typeof assetFields?.description === "string") {
        altText = assetFields.description;
      } else if (typeof assetFields?.title === "string") {
        altText = assetFields.title;
      } else {
        altText = "Gambar Tersemat";
      }

      let descriptionForDisplay = "";
      if (typeof assetFields?.description === "string") {
        descriptionForDisplay = assetFields.description;
      } else if (typeof assetFields?.title === "string") {
        descriptionForDisplay = assetFields.title;
      }

      const imageDetails = assetFile?.details?.image as
        | { width: number; height: number }
        | undefined;
      const width = imageDetails?.width || 0;
      const height = imageDetails?.height || 0;

      if (!imageUrl) return null;

      return (
        <div className="my-6 text-center">
          <Image
            src={`https:${imageUrl}`}
            alt={altText}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
            className="rounded-lg shadow-md max-w-full h-auto mx-auto"
          />
          {descriptionForDisplay && (
            <p className="text-sm text-gray-500 mt-2">
              {descriptionForDisplay}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function BeritaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  
  const query: Record<string, any> = {
    content_type: "beritaWonorejo",
    "fields.beritaId": slug,
    limit: 1,
  };

  const entries: EntryCollection<BeritaSkeleton> =
    await client.getEntries<BeritaSkeleton>(
      query as EntriesQueries<BeritaSkeleton, undefined>
    );

  const article: BeritaEntry | undefined = entries.items[0];

  if (!article) {
    notFound();
  }

  // Safely access article.fields.gambar.fields
  const articleGambarFields = article.fields.gambar?.fields as
    | AssetFields
    | undefined;
  const articleAssetFile = articleGambarFields?.file as AssetFile | undefined;

  const imageUrl = articleAssetFile?.url
    ? `https:${articleAssetFile.url}`
    : "/Cthberita.svg";

  let imageAlt = "";
  if (typeof articleGambarFields?.description === "string") {
    imageAlt = articleGambarFields.description;
  } else if (typeof articleGambarFields?.title === "string") {
    imageAlt = articleGambarFields.title;
  } else if (typeof article.fields.judul === "string") {
    imageAlt = article.fields.judul;
  } else {
    imageAlt = "Gambar Artikel";
  }

  let publishedDate = "Tanggal tidak tersedia";
  const tanggalPublikasi = article.fields.tanggalPublikasi;
  if (
    typeof tanggalPublikasi === "string" &&
    tanggalPublikasi &&
    (tanggalPublikasi as string).trim() !== ""
  ) {
    const dateObj = new Date(tanggalPublikasi);
    if (!isNaN(dateObj.getTime())) {
      publishedDate = dateObj.toLocaleDateString("id-ID");
    }
  }

  const judulText =
    typeof article.fields.judul === "string"
      ? article.fields.judul
      : "Judul Tidak Tersedia";
  const deskripsiContent = article.fields.deskripsi;


  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Berita"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md pl-12">
            Berita Desa
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-20 py-10 md:py-15">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] mb-4">
          {judulText}
        </h1>
        <p className="text-gray-600 text-sm mb-6">{publishedDate}</p>
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
              priority
              className="rounded-lg"
            />
          </div>
          <div className="prose prose-lg max-w-none text-gray-800 pt-10 text-justify">
            {deskripsiContent &&
              documentToReactComponents(
                deskripsiContent as unknown as Document,
                detailRichTextOptions
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
