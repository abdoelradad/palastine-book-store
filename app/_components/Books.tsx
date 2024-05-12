import Image from "next/image";
import React from "react";
import { PiBooksBold } from "react-icons/pi";
export default function Books() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-5 pt-16">
        {/* header */}
        <div className="shadow-md grid grid-cols-3 bg-white">
          <div className="group py-2 px-1 md:p-3  flex items-center justify-center flex-col">
            <PiBooksBold className="text-4xl text-primary mb-1" />
            <h3 className="text-md text-gray-500 group-hover:text-primary transition-all duration-300">
              الاكثر شهرة
            </h3>
          </div>
          <div className="group py-2 px-1 md:p-3 flex items-center justify-center flex-col">
            <PiBooksBold className="text-4xl text-primary mb-1" />
            <h3 className="text-md text-gray-500 group-hover:text-primary transition-all duration-300">
              الاحدث اليوم
            </h3>
          </div>
          <div className="group py-2 px-1 md:p-3 flex items-center justify-center flex-col">
            <PiBooksBold className="text-4xl text-primary mb-1" />
            <h3 className="text-md text-gray-500 group-hover:text-primary transition-all duration-300">
              الأكثر رواجاً{" "}
            </h3>
          </div>
        </div>

        {/* books */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 md:px-20 py-16 gap-5">
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book2.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book1.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book3.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book1.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book3.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book1.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book2.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl text-center p-1 md:w-[200px] md:mx-auto h-[300px] shadow-md flex items-center justify-between flex-col overflow-hidden">
            <div className="h-[80%]">
              <Image
                src={"/book3.webp"}
                width={180}
                height={200}
                className="max-h-[100%] rounded-lg"
                alt=""
              />
            </div>

            <div className=" p-2">
              <h3 className="text-sm mb-1">كتاب رسائل من القرآن</h3>
              <p className="text-sm text-primary">مصطفى محمود</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
