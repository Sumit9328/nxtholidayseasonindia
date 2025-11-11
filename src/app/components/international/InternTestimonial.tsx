"use client";

export default function InternTestimonial() {
  const testimonials = [
    {
      name: "Alex Browns",
      role: "CEO",
      title: "An Unforgettable Journey",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod.",
      rating: 5,
    },
    {
      name: "John White",
      role: "Trekker",
      title: "A Life-Changing Adventure",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod.",
      rating: 5,
    },
    {
      name: "Alessa Keys",
      role: "Developer",
      title: "A Perfect Relaxation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Travelers Say About Us
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, minus eaque vero voluptatibus
          consectetur minus eaque vero.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/20 transition"
            >
              <div className="text-yellow-400 mb-4">
                {"★".repeat(t.rating)}
              </div>
              <h3 className="text-lg font-semibold mb-3">{t.title}</h3>
              <p className="text-gray-400 mb-6">{t.text}</p>
              <p className="text-pink-400 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
