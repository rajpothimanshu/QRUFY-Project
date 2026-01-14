import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddProduct() {
  const navigate = useNavigate(); 
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: ""
  });

 const submit = async (e) => {
  e.preventDefault();

  await api.post("/products", form);

  alert("Product added successfully");

  navigate("/products");
};

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto p-6 space-y-4"
    >
      <input
        placeholder="Title"
        className="border p-2 w-full"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        required
      />

      <input
        placeholder="Description"
        className="border p-2 w-full"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        required
      />

      <input
        placeholder="Price"
        type="number"
        className="border p-2 w-full"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
        required
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
