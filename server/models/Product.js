import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: String,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
