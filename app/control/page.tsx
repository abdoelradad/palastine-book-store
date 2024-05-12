"use client";
import React, { useEffect, useState } from "react";
import AdminNav from "@/app/_components/AdminNav";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import BookForm from "@/app/_components/BookForm";
import axios from "axios";
export default function Page() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <div className="flex">
      <AdminNav />

      <div className="p-5 w-[70%] mx-auto">
        {/* grid  */}
        <div className=" grid grid-cols-3 gap-5 border-b pb-5">
          <div className="flex items-center justify-between bg-[#f7f7f7] rounded-lg px-8 py-5">
            <IoStatsChartSharp className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#f7f7f7] rounded-lg px-8 py-5">
            <FaUsers className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#f7f7f7] rounded-lg px-8 py-5">
            <FaMoneyBillWave className="text-4xl text-primary" />
            <div>
              <h4 className=" text-lg text-gray-500">Total Sale</h4>
              <p className=" font-semibold">9882</p>
            </div>
          </div>
        </div>

        {/* add new book & books */}
        <div className="pt-5 flex w-full h-[70%]">
          {/* books */}
          <div className="w-[50%] border-r p-5">
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
          <div className="w-[50%] p-5">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}
