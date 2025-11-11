export default function WhyBookWithUs() {
  const features = [
    {
      title: "Ultimate Flexibility",
      desc: "Plan your trip your way with flexible itineraries, travel dates, and experiences tailored to your preferences.",
      icon: "🧭",
    },
    {
      title: "Worldwide Coverage",
      desc: "Explore destinations across the globe with our expert guidance and seamless travel planning.",
      icon: "🌎",
    },
    {
      title: "Competitive Pricing",
      desc: "Enjoy the best travel experiences at unbeatable prices with flexible packages for every budget.",
      icon: "⚡",
    },
    {
      title: "Fast Booking",
      desc: "Book your dream trip in minutes with our quick, secure, and hassle-free online booking process.",
      icon: "💼",
    },
    {
      title: "Best Support 24/7",
      desc: "Our dedicated team is always available to assist you, ensuring a smooth and worry-free travel experience.",
      icon: "💬",
    },
    {
      title: "Expert Guides",
      desc: "Travel with our knowledgeable guides who bring destinations to life with insider tips and stories.",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
          What Defines Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
          Why Book With Yatra?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
