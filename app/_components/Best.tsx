"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Best() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <section id="best" className=" bg-white">
      <div className="bg-bgBest object-cover bg-center h-[600px] w-full">
        <div className="max-w-6xl mx-auto px-5">
          {/* title */}
          <h3 className="text-center text-3xl md:text-5xl text-white font-semibold py-10 md:py-16">
            ..الكتب الاكثر مبيعاً
          </h3>
          {/* best books grid */}
          <div className=" grid grid-cols-2 w-full md:w-fit mx-auto gap-4 md:grid-cols-3 xl:grid-cols-4 overflow-hidden">
            {books.map((book, index) => {
              return (
                <div
                  key={index}
                  className="bg-white w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-xl shadow-md text-center flex flex-col items-center justify-around px-5"
                >
                  <h2 className="text-sm md:text-xl text-primary font-semibold">
                    {book.title}
                  </h2>

                  <p className="text-base text-gray-600">{book.author}</p>
                  <span className="text-xl font-semibold">{book.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
