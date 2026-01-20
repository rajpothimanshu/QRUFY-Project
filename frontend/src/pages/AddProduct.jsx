import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/products", {
        title: form.name,
        description: form.description,
        price: Number(form.price),
        category: form.category || "General"
      });

      alert("Product added successfully");
      navigate("/products");
    } catch (err) {
      console.error("Add product error:", err);
      alert("Failed to add product");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6 space-y-4">

      <input
        placeholder="Product Name"
        className="border p-2 w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Description"
        className="border p-2 w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />

      <input
        placeholder="Price"
        type="number"
        className="border p-2 w-full"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />

      <input
        placeholder="Category"
        className="border p-2 w-full"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Add Product
      </button>
    </form>
  );
}
