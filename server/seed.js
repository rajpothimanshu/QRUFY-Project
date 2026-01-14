import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Product.insertMany([
  {
    title: "Orufy Starter",
    description: "Best for beginners",
    price: 999,
  },
  {
    title: "Orufy Pro",
    description: "For professionals",
    price: 2999,
  },
]);

console.log("Data seeded");
process.exit();
