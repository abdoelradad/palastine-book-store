"use client";
import React, { useEffect, useState } from "react";
import AdminNav from "@/app/_components/AdminNav";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import BookForm from "@/app/_components/BookForm";
import { TiArrowBack } from "react-icons/ti";
import axios from "axios";
import Link from "next/link";
export default function Page() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <Link
        href="/"
        className="md:hidden inline-flex border-b border-primary w-fit items-center gap-1 m-5"
      >
        <TiArrowBack />
        Back to the front
      </Link>
      <AdminNav />

      <div className="p-5 w-full md:w-[70%] mx-auto">
        {/* grid  */}
        <div className=" grid grid-cols-3 gap-5 border-b pb-5">
          <div className="flex items-center justify-between md:flex-row flex-col bg-[#f7f7f7] rounded-lg px-2  md:px-8 py-5">
            <IoStatsChartSharp className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
          <div className="flex items-center justify-between md:flex-row flex-col bg-[#f7f7f7] rounded-lg px-2  md:px-8 py-5">
            <FaUsers className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
          <div className="flex items-center justify-between md:flex-row flex-col bg-[#f7f7f7] rounded-lg px-2  md:px-8 py-5">
            <FaMoneyBillWave className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
        </div>

        {/* add new book & books */}
        <div className="pt-5 flex md:flex-row flex-col-reverse w-full h-[70%]">
          {/* books */}
          <div className="w-full md:w-[50%] border-r p-5">
            <table>
              <thead>
                <tr>
                  <td>title</td>
                  <td>author</td>
                  <td>price</td>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => {
                  return (
                    <tr key={index}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* form */}
          <div className="w-full md:w-[50%] p-5 md:mt-0 mt-10">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}
