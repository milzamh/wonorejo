import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types"; // Import Document
import type {
  Entry,
  EntryCollection,
  EntrySkeletonType,
  Asset,
  EntriesQueries, // Import EntriesQueries
  AssetFile, // Import AssetFile
  AssetDetails, // Import AssetDetails
  AssetFields // Import AssetFields
} from "contentful";
import { client } from "../../contentful/client";

// Helper interfaces for safer asset field access
interface ContentfulImageDetails {
  width: number;
  height: number;
}

interface ContentfulFileDetails {
  image?: ContentfulImageDetails;
}

interface ContentfulAssetFile {
  url: string;
  details?: ContentfulFileDetails;
  fileName?: string;
  contentType?: string;
}


interface IPotensiFields {
  judulPotensi: string;
  gambarPotensi: Asset; // Keep as Asset, handle fields access safely
  slug: string;
  deskripsiPotensi: any; // Contentful Rich Text field type, will validate at runtime
  kategoriPotensi: "SDA" | "Pariwisata";
  displayType: "items" | "category_overview";
}

interface CustomAssetFields {
  title?: string;
  description?: string;
  file?: ContentfulAssetFile;
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
      const asset = node.data.target as Asset;
      const assetFields = asset.fields as CustomAssetFields | undefined; // Safely cast fields
      const assetFile = assetFields?.file as ContentfulAssetFile | undefined;
      const imageUrl = assetFile?.url;

      let altText = "";
      if (typeof assetFields?.description === 'string') {
        altText = assetFields.description;
      } else if (typeof assetFields?.title === 'string') {
        altText = assetFields.title;
      } else {
        altText = "Gambar Tersemat";
      }

      const imageDetails = assetFile?.details?.image as ContentfulImageDetails | undefined;
      const width = imageDetails?.width || 0;
      const height = imageDetails?.height || 0;

      if (!imageUrl) return null;

      return (
        <div className="my-4 flex justify-center">
          <Image
            src={`https:${imageUrl}`}
            alt={altText}
            width={width}
            height={height}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      );
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

  const query: Record<string, any> = {
    content_type: "potensiDesa",
    "fields.displayType": "items",
    };

const entries: EntryCollection<PotensiSkeleton> =
  await client.getEntries<PotensiSkeleton>(query);

  return entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));
}

const PotensiDetailPage: React.FC<PotensiDetailPageProps> = async ({
  params,
}) => {
  const { slug } = params;

  // Use a flexible query object and assert to EntriesQueries
  const query: Record<string, any> = {
    content_type: "potensiDesa",
    "fields.slug": slug,
    "fields.displayType": "items",
    limit: 1,
  };

  const entries: EntryCollection<PotensiSkeleton> =
    await client.getEntries<PotensiSkeleton>(
      query as EntriesQueries<PotensiSkeleton, undefined>
    );

  const potensi = entries.items[0];

  if (!potensi) {
    notFound();
  }

  // Safely access image properties for the main potensi image
  const gambarPotensiFields = potensi.fields.gambarPotensi?.fields as CustomAssetFields | undefined;
  const gambarPotensiFile = gambarPotensiFields?.file as ContentfulAssetFile | undefined;
  const gambarPotensiImageDetails = gambarPotensiFile?.details?.image as ContentfulImageDetails | undefined;

  const imageUrl = gambarPotensiFile?.url
    ? `https:${gambarPotensiFile.url}`
    : "/placeholder.svg";

  // Ensure width and height are numbers for getResponsiveImageSize
  const originalWidth = gambarPotensiImageDetails?.width || 800;
  const originalHeight = gambarPotensiImageDetails?.height || 600;
  const imageSize = getResponsiveImageSize(originalWidth, originalHeight);

  // Safely get judulPotensi
  const judulPotensiText = typeof potensi.fields.judulPotensi === 'string'
    ? potensi.fields.judulPotensi
    : 'Judul Potensi Tidak Tersedia';

  // Safely get alt text for the main image
  let imageAlt = "";
  if (typeof gambarPotensiFields?.description === 'string') {
    imageAlt = gambarPotensiFields.description;
  } else if (typeof gambarPotensiFields?.title === 'string') {
    imageAlt = gambarPotensiFields.title;
  } else if (typeof potensi.fields.judulPotensi === 'string') {
    imageAlt = potensi.fields.judulPotensi;
  } else {
    imageAlt = "Gambar Potensi Desa";
  }

  // Safely handle deskripsiPotensi (Rich Text)
  const deskripsiPotensiContent = potensi.fields.deskripsiPotensi;
  const isDeskripsiValid = deskripsiPotensiContent &&
                           typeof deskripsiPotensiContent === 'object' &&
                           'nodeType' in deskripsiPotensiContent &&
                           (deskripsiPotensiContent as Document).nodeType === BLOCKS.DOCUMENT &&
                           Array.isArray((deskripsiPotensiContent as Document).content);

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
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md pl-12">
            Potensi Desa
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E6248] text-center mb-8">
          {judulPotensiText}
        </h1>
        <div className="w-full flex justify-center mb-8">
          <Image
            src={imageUrl}
            alt={imageAlt}
            {...imageSize}
            style={{ objectFit: "contain" }}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="prose prose-lg max-w-none mx-auto text-gray-800 pt-8 text-justify">
          {isDeskripsiValid ? (
            documentToReactComponents(
              deskripsiPotensiContent as unknown as Document, // Assert to unknown first
              richTextRenderOptions
            )
          ) : (
            <p className="text-gray-600">Deskripsi potensi tidak tersedia atau tidak valid.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PotensiDetailPage;
