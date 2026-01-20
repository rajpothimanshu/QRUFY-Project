import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/api/products")
      .then(res => setItems(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/api/products/${id}`);
      setItems(items.filter(p => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Our Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map(item => (
          <Card
            key={item._id}
            item={item}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </section>
  );
}
