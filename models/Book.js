const { Schema, model, models } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
});

export const Book = models.Book || model("Book", BookSchema);
