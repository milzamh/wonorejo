import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Fullscreen } from "lucide-react";

const Bencana = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 shadow:lg ">
      <Image
        src="/RAWAN.jpg"
        alt="Hero Wonorejo"
        height={1600}
        width={1000}
        priority
      />
    </div>
  );
};

export default Bencana;
