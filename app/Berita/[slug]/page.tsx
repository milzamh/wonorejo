import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "../../contentful/client";
import type {
  Entry,
  EntryCollection,
  EntrySkeletonType,
  Asset,
} from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";

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
  const entries = await client.getEntries<IBeritaFields>({
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
      const imageUrl = asset.fields.file?.url;
      const altText = asset.fields.description || asset.fields.title || "";
      const { width, height } = asset.fields.file?.details?.image || {
        width: 0,
        height: 0,
      };

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
          {asset.fields.description && (
            <p className="text-sm text-gray-500 mt-2">
              {asset.fields.description}
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

  const entries: EntryCollection<BeritaSkeleton> =
    await client.getEntries<BeritaSkeleton>({
      content_type: "beritaWonorejo",
      "fields.beritaId": slug,
      limit: 1,
    });

  const article: BeritaEntry | undefined = entries.items[0];

  if (!article) {
    notFound();
  }

  const imageUrl = article.fields.gambar?.fields?.file?.url
    ? `https:${article.fields.gambar.fields.file.url}`
    : "/Cthberita.svg";

  const publishedDate = article.fields.tanggalPublikasi
    ? new Date(article.fields.tanggalPublikasi).toLocaleDateString("id-ID")
    : "Tanggal tidak tersedia";

  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-10">
          <h1 className="text-[64px] font-bold">Berita Desa</h1>
        </div>
      </div>
      <div className="flex flex-col px-21 py-15">
        <h1 className="flex font-bold text-[32px] text-[#0E6248] ">
          {article.fields.judul}
        </h1>
        <p className="text-gray-600 text-sm mb-6">{publishedDate}</p>
        <div className="flex flex-col justify-center items-center w-full">
          <Image
            src={imageUrl}
            alt={article.fields.judul || "Gambar Artikel"}
            width={1200}
            height={600}
            className="object-cover flex rounded-lg justify-center items-center"
            priority
          />
          <div className=" pt-10 text-gray-800">
            {documentToReactComponents(
              article.fields.deskripsi,
              detailRichTextOptions
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
