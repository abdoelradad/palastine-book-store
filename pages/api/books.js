import { Book } from "../../models/Book";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Book.find());
  }

  if (method === "POST") {
    const { title, author, price } = req.body;
    const bookDoc = await Book.create({
      title,
      author,
      price,
    });
    res.json(bookDoc);
  }
}
