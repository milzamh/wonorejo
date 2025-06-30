import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/Hero.svg')] flex h-[550px] w-full px-12">
        <div className="text-white text-left flex flex-col justify-center items-start w-full h-full px-10">
          <h1 className="text-[64px] font-bold">Profile Desa Wonorejo</h1>
        </div>
      </div>
      <div className="flex flex-col px-20 py-20">
        <h1 className="font-bold text-[32px] text-[#0E6248]">SEJARAH DESA</h1>
        <div className="w-full shadow-lg h-auto mt-5 px-10 py-7 rounded-lg">
          <p className="indent-10 text-justify text-[20px]">
            Sejarah Desa Wonorejo Zaman dahulu merupakan wilayah kekuasaan
            kerajaan majapahit dengan leluhur pendiri adalah Eyang Iro Ganti.
            Peninggalan atau lokasi petilasan beliau terdapat di Dusun Gondang
            dan telah dijadikan sebagai cagar budaya Desa Wonorejo.
          </p>
          <br></br>
          <p className="indent-10 text-justify text-[20px]">
            Sejak tahun 1955 hingga 1968, Desa Wonorejo dipimpin oleh Bapak
            Sukarno. Pada masa kepemimpinannya, fokus utama pembangunan adalah
            membina kerukunan dan semangat gotong royong di tengah masyarakat.
            Kepemimpinan kemudian dilanjutkan oleh Bapak Wiryorejono pada tahun
            1968 hingga 1988, dengan arah kebijakan pembangunan yang
            menitikberatkan pada pembangunan akses jalan desa. Beberapa
            infrastruktur penting yang dibangun saat itu antara lain Jalan Desa
            Beruk–Wonokeling dan Jalan Desa Tlobo–Wonorejo. Selanjutnya, pada
            periode 1988 hingga 2007, Desa Wonorejo dipimpin oleh Bapak Sumarso.
            Beliau memfokuskan pembangunan pada pembenahan sarana dan prasarana
            desa, termasuk program penting seperti masuknya jaringan listrik ke
            desa. Pada tahun 2007 hingga 2019, Bapak Sudrajat menjabat sebagai
            Kepala Desa dan membawa arah kebijakan pembangunan yang mencakup
            pengembangan perekonomian, infrastruktur, serta pemberdayaan sumber
            daya manusia dan sumber daya alam. Sejak tahun 2019 hingga sekarang,
            Desa Wonorejo dipimpin oleh Bapak Sularno. Di bawah kepemimpinannya,
            pemerintah desa berkomitmen untuk mewujudkan tata kelola yang tertib
            dan berwibawa, menyediakan sarana dan prasarana yang memadai, serta
            meningkatkan perekonomian dan kesejahteraan masyarakat Desa
            Wonorejo.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-20 py-15">
        <h1 className="font-bold text-[32px] text-[#0E6248]">VISI MISI</h1>
        <div className="w-full shadow-lg h-auto mt-5 px-10 py-7 rounded-lg">
          <p className="indent-10 text-justify text-[20px]">
            Demokratisasi mengandung makna bahwa penyelenggaraan pemerintahan
            dan pelaksanaan pembangunan di desa harus mampu mengakomodasi
            aspirasi masyarakat melalui Badan Permusyawaratan Desa (BPD) dan
            lembaga-lembaga kemasyarakatan sebagai mitra Pemerintah Desa.
            Kemitraan ini diharapkan dapat mendorong peran aktif masyarakat agar
            mereka merasa memiliki serta turut bertanggung jawab terhadap
            perkembangan kehidupan bersama sebagai warga desa. Dengan demikian,
            diharapkan terjadi peningkatan taraf hidup dan kesejahteraan
            masyarakat melalui penetapan kebijakan, program, dan kegiatan yang
            sesuai dengan esensi permasalahan serta prioritas kebutuhan
            masyarakat.
          </p>
          <br />
          <p className="indent-10 text-justify text-[20px]">
            {" "}
            Berdasarkan pertimbangan tersebut, maka untuk jangka waktu enam (6)
            tahun ke depan, proses pembangunan desa, penyelenggaraan
            pemerintahan, pemberdayaan masyarakat, partisipasi warga,
            penghasilan tetap (siltap) Kepala Desa dan perangkat, operasional
            pemerintahan desa, tunjangan operasional BPD, serta insentif RT/RW
            diharapkan benar-benar berlandaskan pada prinsip keterbukaan dan
            partisipasi masyarakat. Dengan demikian, secara bertahap Desa
            Wonorejo dapat mengalami kemajuan yang berkelanjutan. Untuk mencapai
            tujuan tersebut, maka dirumuskan Visi dan Misi Desa.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-20 py-15">
        <h1 className="font-bold text-[32px] text-[#0E6248]">VISI</h1>
        <div className="w-full shadow-lg h-auto mt-5 px-10 py-7 rounded-lg">
          <p className="text-center text-[20px] text-red-500 font-semibold">
            “Tercapainya Desa Wonorejo yang Makmur dan Sejahtera”
          </p>
          <br></br>
          <p className="indent-10 text-justify text-[20px]">
            Rumusan Visi tersebut merupakan suatu ungkapan dari suatu niat yang
            luhur untuk memperbaiki dalam Penyelenggaraan Pemerintahan dan
            Pelaksanaan Pembangunan di Desa Wonorejo baik secara individu maupun
            kelembagaan sehingga 6 ( enam ) tahun ke depan Desa Wonorejo
            mengalami suatu perubahan yang lebih baik dan peningkatan
            kesejahteraan masyarakat dilihat dari segi ekonomi dengan dilandasi
            semangat kebersamaan dalam Penyelenggaraan Pemerintahan dan
            Pelaksanaan Pembangunan.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-20 py-15">
        <h1 className="font-bold text-[32px] text-[#0E6248]">MISI</h1>
        <div className="w-full shadow-lg h-auto mt-5 px-10 py-7 rounded-lg">
          <ol className="list-decimal pl-10 space-y-2 text-red-500 font-semibold text-[20px]">
            <li>
              Mewujudkan Pemerintah Desa Wonorejo yang tertib dan Berwibawa
            </li>
            <li> Mewujudkan Sarana dan Prasarana Desa yang Memadai</li>
            <li>
              Mewujudkan dan meningkatkan Perekonomian dan Kesejahteraan
              Masyarakat Desa Wonorejo
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
