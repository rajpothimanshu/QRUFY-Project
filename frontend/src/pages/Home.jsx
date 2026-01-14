import { useNavigate } from "react-router-dom";
import Features from "../components/Features";
import CTA from "../components/CTA";
import image from "../assets/hero.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Build Faster with
              <span className="text-indigo-600"> Orufy</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Powerful solutions to scale your business.
            </p>

            {/* ✅ WORKING BUTTON */}
            <button
              onClick={() => navigate("/products")}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-lg"
            >
              Explore Now
            </button>
          </div>

          <div className="bg-indigo-100 h-80 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <Features />
      <CTA />
    </>
  );
}
