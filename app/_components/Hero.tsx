import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className=" pt-32">
      <div className=" bg-bgHero bg-cover h-[400px] w-full flex items-center justify-center">
        {/* text */}
        <div className="text-center flex items-center flex-col gap-3  md:gap-5">
          <h1 className="text-5xl xl:text-7xl text-white font-bold">
            مكتبة فلسطين
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            جميع الكتب فى مكان واحد
          </p>
          <Link
            href={"/"}
            className=" bg-primary text-white px-5 py-2 text-xl rounded-lg font-semibold  outline-none hover:bg-primary/90"
          >
            الكتب
          </Link>
        </div>
      </div>
    </div>
  );
}
