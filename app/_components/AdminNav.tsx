import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgHashtag } from "react-icons/cg";
import { FaLaptop } from "react-icons/fa";
import { RiWalletLine } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
export default function AdminNav() {
  return (
    <aside className="flex flex-col md:w-[300px]  bg-[#f7f7f7] h-screen shadow-md p-5">
      <div>
        {/* header */}
        <div className="flex gap-x-3 border-b py-2">
          {/* img */}
          <div className="w-[50px] h-[50px] rounded-full">
            <Image
              src={
                "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
              }
              width={300}
              height={300}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* title */}
          <div>
            <h2 className="text-lg font-bold">Michel Smith</h2>
            <p className="text-md font-light">Owner</p>
          </div>
        </div>
        {/* links */}
        <div className="pt-5">
          <ul className="flex items-start flex-col gap-y-5">
            <li className="border-b p-2 w-full">
              <Link
                href={"/"}
                className="text-md flex items-center text-gray-800 gap-x-2 hover:text-primary transition-all duration-200 font-semibold"
              >
                <FaLaptop className=" text-primary text-xl" />
                Dashboard
              </Link>
            </li>
            <li className="border-b p-2 w-full">
              <Link
                href={"/"}
                className="text-md flex items-center text-gray-800 gap-x-2 hover:text-primary transition-all duration-200 font-semibold"
              >
                <CgHashtag className=" text-primary text-xl" />
                Statics
              </Link>
            </li>
            <li className="border-b p-2 w-full">
              <Link
                href={"/"}
                className="text-md flex items-center text-gray-800 gap-x-2 hover:text-primary transition-all duration-200 font-semibold"
              >
                <RiWalletLine className=" text-primary text-xl" />
                Wallet
              </Link>
            </li>
            <li className="border-b p-2 w-full">
              <Link
                href={"/"}
                className="text-md flex items-center text-gray-800 gap-x-2 hover:text-primary transition-all duration-200 font-semibold"
              >
                <BiBarChartSquare className=" text-primary text-xl" />
                Charts
              </Link>
            </li>
            <li className="border-b p-2 w-full">
              <Link
                href={"/"}
                className="text-md flex items-center text-gray-800 gap-x-2 hover:text-primary transition-all duration-200 font-semibold"
              >
                <BiShare className=" text-primary text-xl" /> Front
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
