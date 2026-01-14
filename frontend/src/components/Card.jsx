export default function Card({ item, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
      <p className="font-bold mt-2">₹{item.price}</p>

      <button
        onClick={() => onDelete(item._id)}
        className="mt-4 text-sm text-red-600 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
