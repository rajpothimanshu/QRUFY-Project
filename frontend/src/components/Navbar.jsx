import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-indigo-600">
          Orufy
        </h1>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/products" className="hover:text-indigo-600">Products</Link>
          <Link to="/add-product" className="hover:text-indigo-600">Add</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>

        <Link
          to="/products"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}
