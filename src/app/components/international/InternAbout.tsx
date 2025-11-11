"use client";
import Image from "next/image";

export default function InternAbout() {
  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h3 className="text-[#c31d4a] mb-2 font-semibold tracking-wider">
            ABOUT US
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            GET TO KNOW ABOUT THE JOURNEY OF HOLIDAYSEASONINDIA!
          </h2>

          {/* Mission & Customer Focus Links */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a
              href="#"
              className="text-[#c31d4a] font-semibold hover:text-[#a91940] transition"
            >
              Mission and Vision
            </a>
            <a
              href="#"
              className="text-[#c31d4a] font-semibold hover:text-[#a91940] transition"
            >
              Customer Focus
            </a>
          </div>

          {/* Story Text */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Our Story
            </h4>
            <p className="text-gray-600 leading-7">
              Discover more about us — we believe in creating meaningful
              connections and fostering growth through purpose and innovation.
              Our journey is built on passion, creativity, and a commitment to
              excellence. With every step, we strive to bring ideas to life,
              inspire change, and make a lasting impact.
            </p>
          </div>

          <button className="mt-6 bg-[#c31d4a] hover:bg-[#a91940] text-white px-6 py-3 rounded-lg font-medium transition">
            More About Us
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "/assets/international/cus1.jpeg",
            "/assets/international/cus2.jpeg",
            "/assets/international/cus3.jpeg",
            "/assets/international/cus4.jpeg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[180px] md:h-[220px] overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={`About image ${i + 1}`}
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
