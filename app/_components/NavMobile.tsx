"use client";
import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { FaBars, FaChartSimple } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope, FaUser } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";

import Image from "next/image";
import Link from "next/link";

const NavMobile = ({ containerStyles }: { containerStyles: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${containerStyles}`}>
      {/* trigger button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="outline-none cursor-pointer"
      >
        <FaBars className="text-3xl text-black transition-all duration-200 font-extralight " />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-white fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-300`}
      >
        <div className="flex flex-col items-center justify-around h-full">
          {/* nav close */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute flex items-center justify-center w-10 h-10 text-4xl text-black cursor-pointer bg-green left-4 top-5"
          >
            {/* <IoCloseOutLine /> */}
            <IoClose />
          </div>
          {/* logo */}
          <Link href={"/"}>
            <Image src={"/logo.png"} width={110} height={36} alt="" />
          </Link>

          <div>
            <ul className="flex flex-col items-center gap-y-5 w-fit">
              <li>
                <Link
                  href={"/"}
                  className=" font-medium text-[#161A30] text-xl"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href={"#articles"}
                  className=" font-medium text-[#161A30]  text-xl"
                >
                  المقالات
                </Link>
              </li>
              <li>
                <Link
                  href={"#menu"}
                  className=" font-medium text-[#161A30]  text-xl"
                >
                  الكتب
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className=" font-medium text-[#161A30]  text-xl"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-y-2 flex-col">
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
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
