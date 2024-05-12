"use client";
import axios from "axios";
import React, { useState } from "react";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  async function saveProduct(ev: any) {
    ev.preventDefault();

    const data = { title, author, price };

    await axios.post("/api/books", data);
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Book title</label>
      <input
        type="text"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        placeholder="Book title"
      />

      <label>Book Author</label>
      <input
        type="text"
        value={author}
        onChange={(ev) => setAuthor(ev.target.value)}
        placeholder="Book author"
      />

      <label>Book Price</label>
      <input
        type="number"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
        placeholder="book price"
      />

      <button type="submit" className="btn">
        add this book
      </button>
    </form>
  );
}
