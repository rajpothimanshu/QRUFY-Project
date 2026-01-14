import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
  .then(res => setItem(res.data))
  .catch(err => console.error(err));

  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="page">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>₹{item.price}</h3>
    </div>
  );
}
