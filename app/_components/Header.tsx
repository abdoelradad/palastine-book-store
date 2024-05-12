"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import NavMobile from "./NavMobile";
export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        active ? "bg-white py-6 shadow-sm" : " bg-transparent py-6"
      } fixed top-0 left-0 right-0 z-50 w-full transition-all  duration-200 px-5`}
    >
      <div className="max-w-6xl mx-auto w-full h-full relative flex items-center justify-between">
        <ul className="hidden md:flex items-center md:gap-x-6 xl:gap-x-12 w-fit flex-row-reverse">
          <li>
            <Link href={"/"} className=" font-medium text-[#161A30] text-md">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href={"#articles"}
              className=" font-medium text-[#161A30]  text-md"
            >
              المقالات
            </Link>
          </li>
          <li>
            <Link
              href={"#menu"}
              className=" font-medium text-[#161A30]  text-md"
            >
              الكتب
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" font-medium text-[#161A30]  text-md">
              من نحن
            </Link>
          </li>
        </ul>

        {/* buttons family */}
        <div className="hidden md:flex items-center gap-x-1 flex-row-reverse">
          <Link
            href={"/"}
            className=" flex items-center gap-x-2 bg-primary text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-primary/90"
          >
            <FaUser />
            تسجيل الدخول
          </Link>
          <Link
            href={"/control"}
            className=" flex items-center gap-x-2 bg-transparent  text-primary border-[1px] border-primary hover:bg-primary hover:text-white px-3 py-2 rounded-lg transition-all duration-200 "
          >
            <FaChartSimple />
            لوحة التحكم
          </Link>
        </div>

        {/* logo */}
        <Image
          src={"/logo.png"}
          alt=""
          width={100}
          height={100}
          className=" object-cover absolute -top-8 left-1/2 -translate-x-1/2"
        />

        <NavMobile containerStyles={"md:hidden"} />
      </div>
    </header>
  );
}
