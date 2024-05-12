import clientPromise from "../../../lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
});
