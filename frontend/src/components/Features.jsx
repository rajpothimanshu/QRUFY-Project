export default function Features() {
  const features = [
    {
      title: "Fast Performance",
      desc: "Optimized solutions with blazing fast speed.",
    },
    {
      title: "Secure Platform",
      desc: "Enterprise-grade security for your data.",
    },
    {
      title: "Scalable Design",
      desc: "Built to grow with your business needs.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Orufy
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
