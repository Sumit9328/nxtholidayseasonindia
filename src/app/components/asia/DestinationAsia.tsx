"use client";
import Image from "next/image";

export default function DestinationGrid() {
  const destinations = [
    { title: "Tibet", img: "/assets/asia/tibbet.jpg", rating: 4 },
    { title: "Dubai", img: "/assets/asia/dubai.jpg", rating: 5 },
    { title: "Thailand", img: "/assets/asia/thailand.jpg", rating: 3 },
    { title: "Nepal", img: "/assets/asia/nepal.webp", rating: 4 },
    { title: "Bhutan", img: "/assets/asia/bhutan.jpg", rating: 5 },
    { title: "Sri Lanka", img: "/assets/asia/sri-lanka.jpg", rating: 4 },
  ];

  return (
    <section className="py-12">
      <h2 className="font-[500] text-[40px] font-bold text-center mb-4">View all Popular Tours</h2>
      <h2 className="font-[500] text-[16px] text-center mb-6">Popular Destinations</h2>


      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden shadow-lg group h-[260px] sm:h-[280px] md:h-[260px]"
          >

            {/* IMAGE FIXED */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* FADE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-sm block">{"⭐".repeat(item.rating)}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
