import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/Hero.svg"
          alt="Hero Wonorejo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight drop-shadow-md">
            Profile Desa Wonorejo
          </h1>
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-10 lg:px-20 py-10 md:py-20">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248]">
            SEJARAH DESA
          </h1>
          <div className="mt-5 rounded-lg shadow-lg bg-white px-6 md:px-10 py-6 md:py-8">
            <p className="indent-8 text-justify text-base md:text-lg leading-relaxed">
              Sejarah Desa Wonorejo Zaman dahulu merupakan wilayah kekuasaan
              kerajaan Majapahit dengan leluhur pendiri adalah Eyang Iro Ganti.
              Peninggalan atau lokasi petilasan beliau terdapat di Dusun Gondang
              dan telah dijadikan sebagai cagar budaya Desa Wonorejo.
            </p>
            <p className="indent-8 text-justify text-base md:text-lg leading-relaxed mt-4">
              Sejak tahun 1955 hingga 1968, Desa Wonorejo dipimpin oleh Bapak
              Sukarno. Pada masa kepemimpinannya, fokus utama pembangunan adalah
              membina kerukunan dan semangat gotong royong di tengah masyarakat.
              Kepemimpinan kemudian dilanjutkan oleh Bapak Wiryorejono pada
              tahun 1968 hingga 1988, dengan arah kebijakan pembangunan yang
              menitikberatkan pada pembangunan akses jalan desa. Beberapa
              infrastruktur penting yang dibangun saat itu antara lain Jalan
              Desa Beruk–Wonokeling dan Jalan Desa Tlobo–Wonorejo. Selanjutnya,
              pada periode 1988 hingga 2007, Desa Wonorejo dipimpin oleh Bapak
              Sumarso. Beliau memfokuskan pembangunan pada pembenahan sarana dan
              prasarana desa, termasuk program penting seperti masuknya jaringan
              listrik ke desa. Pada tahun 2007 hingga 2019, Bapak Sudrajat
              menjabat sebagai Kepala Desa dan membawa arah kebijakan
              pembangunan yang mencakup pengembangan perekonomian,
              infrastruktur, serta pemberdayaan sumber daya manusia dan sumber
              daya alam. Sejak tahun 2019 hingga sekarang, Desa Wonorejo
              dipimpin oleh Bapak Sularno. Di bawah kepemimpinannya, pemerintah
              desa berkomitmen untuk mewujudkan tata kelola yang tertib dan
              berwibawa, menyediakan sarana dan prasarana yang memadai, serta
              meningkatkan perekonomian dan kesejahteraan masyarakat Desa
              Wonorejo.
            </p>
          </div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] pt-20">
            VISI MISI
          </h1>
          <div className="mt-5 rounded-lg shadow-lg bg-white px-6 md:px-10 py-6 md:py-8">
            <p className="indent-8 text-justify text-base md:text-lg leading-relaxed">
              Demokratisasi mengandung makna bahwa penyelenggaraan pemerintahan
              dan pelaksanaan pembangunan di desa harus mampu mengakomodasi
              aspirasi masyarakat melalui Badan Permusyawaratan Desa (BPD) dan
              lembaga-lembaga kemasyarakatan sebagai mitra Pemerintah Desa.
              Kemitraan ini diharapkan dapat mendorong peran aktif masyarakat
              agar mereka merasa memiliki serta turut bertanggung jawab terhadap
              perkembangan kehidupan bersama sebagai warga desa. Dengan
              demikian, diharapkan terjadi peningkatan taraf hidup dan
              kesejahteraan masyarakat melalui penetapan kebijakan, program, dan
              kegiatan yang sesuai dengan esensi permasalahan serta prioritas
              kebutuhan masyarakat.
            </p>
            <p className="indent-8 text-justify text-base md:text-lg leading-relaxed mt-4">
              Berdasarkan pertimbangan tersebut, maka untuk jangka waktu enam
              (6) tahun ke depan, proses pembangunan desa, penyelenggaraan
              pemerintahan, pemberdayaan masyarakat, partisipasi warga,
              penghasilan tetap (siltap) Kepala Desa dan perangkat, operasional
              pemerintahan desa, tunjangan operasional BPD, serta insentif RT/RW
              diharapkan benar-benar berlandaskan pada prinsip keterbukaan dan
              partisipasi masyarakat. Dengan demikian, secara bertahap Desa
              Wonorejo dapat mengalami kemajuan yang berkelanjutan. Untuk
              mencapai tujuan tersebut, maka dirumuskan Visi dan Misi Desa.
            </p>
          </div>
        
          <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] pt-20">
            VISI
          </h1>
          <div className="mt-5 rounded-lg shadow-lg bg-white px-6 md:px-10 py-6 md:py-8">
            <p className="text-center text-lg md:text-xl font-semibold text-red-500">
              “Tercapainya Desa Wonorejo yang Makmur dan Sejahtera”
            </p>
            <p className="indent-8 text-justify text-base md:text-lg leading-relaxed mt-4">
              Rumusan visi tersebut merupakan ungkapan niat luhur untuk
              memperbaiki penyelenggaraan pemerintahan dan pembangunan di Desa
              Wonorejo, baik secara individu maupun kelembagaan, sehingga dalam
              enam tahun ke depan terjadi perubahan positif dan peningkatan
              kesejahteraan masyarakat yang dilandasi semangat kebersamaan.
            </p>
          </div>
        
          <h1 className="font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0E6248] pt-20">
            MISI
          </h1>
          <div className="mt-5 rounded-lg shadow-lg bg-white px-6 md:px-10 py-6 md:py-8">
            <ol className="list-decimal space-y-2 pl-6 text-base md:text-lg">
              <li>Mewujudkan Pemerintah Desa Wonorejo yang tertib dan berwibawa</li>
              <li>Mewujudkan sarana dan prasarana desa yang memadai</li>
              <li>Meningkatkan perekonomian dan kesejahteraan masyarakat Desa Wonorejo</li>
            </ol>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;

