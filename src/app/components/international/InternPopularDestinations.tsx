"use client";
import Image from "next/image";

const placesTop = [
  { name: "Europe", trips: "20+ Trips", img: "/assets/international/europe.jpg" },
  { name: "Singapore", trips: "15+ Trips", img: "/assets/international/singapore.webp" },
  { name: "Dubai", trips: "10+ Trips", img: "/assets/international/dubai1.jpg" },
  { name: "Thailand", trips: "20+ Trips", img: "/assets/international/thailand.webp" },
];

const placesBottom = [
  { name: "Malaysia", trips: "10+ Trips", img: "/assets/international/malaysia.avif" },
  { name: "Vietnam", trips: "20+ Trips", img: "/assets/international/vietnam1.jpg" },
  { name: "Bali", trips: "15+ Trips", img: "/assets/international/bali1.jpg" },
  { name: "Nepal", trips: "10+ Trips", img: "/assets/international/nepal.jpg" },
  { name: "Baku", trips: "20+ Trips", img: "/assets/international/baku.jpg" },
];

export default function TopDestinations() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#f7f2f2]">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* LEFT TEXT SECTION (30%) */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-[#c31d4a] font-semibold">TOP DESTINATIONS</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            OUR POPULAR DESTINATIONS
          </h2>
          <p className="text-gray-600 leading-7">
            Discover the most loved destinations handpicked for unforgettable
            experiences. Whether it’s Europe’s charm, Dubai’s skyline, or
            Thailand’s beauty — your perfect getaway awaits.
          </p>
          <button className="bg-[#c31d4a] hover:bg-[#a91940] text-white px-6 py-3 rounded-lg font-medium transition">
            See All Destinations
          </button>
        </div>

        {/* RIGHT IMAGE GRID (70%) */}
        <div className="md:col-span-2 space-y-8">
          {/* TOP ROW - 4 IMAGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placesTop.map((p, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-2 hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="mt-3 font-semibold text-center text-gray-800">{p.name}</h4>
                <p className="text-gray-500 text-sm text-center">{p.trips}</p>
              </div>
            ))}
          </div>

          {/* BOTTOM ROW - 5 IMAGES */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {placesBottom.map((p, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-2 hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="mt-3 font-semibold text-center text-gray-800">{p.name}</h4>
                <p className="text-gray-500 text-sm text-center">{p.trips}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
