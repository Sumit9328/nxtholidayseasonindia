"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const slides = [
  {
    img: "/assets/holiday/bhutantour.jpg",
    title: "Bhutan",
    subtitle: "The Land of Happiness",
    desc: "Experience the serene monasteries, untouched valleys, and spiritual charm of Bhutan — a Himalayan kingdom where peace meets purity and smiles never fade.",
  },
  {
    img: "/assets/holiday/nepaltour.webp",
    title: "Nepal",
    subtitle: "Gateway to the Himalayas",
    desc: "Explore the breathtaking peaks of Everest, ancient temples of Kathmandu, and the warm hospitality that makes Nepal an adventurer’s paradise.",
  },
  {
    img: "/assets/holiday/tibbt.jpg",
    title: "Tibet",
    subtitle: "The Roof of the World",
    desc: "Journey to the mystical land of Tibet — where sacred monasteries touch the sky and ancient traditions echo across the majestic Himalayas.",
  },
];


export default function HolidaySlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Faster auto-slide (0.5s = 500ms)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[520px] md:h-[580px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400 opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${0.8 + Math.random() * 0.6})`,
            }}
            size={20 + Math.random() * 10}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-2 animate-fadeInUp">
          {slides[index].title}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 animate-fadeInUp delay-200">
          {slides[index].subtitle}
        </h2>
        <p className="max-w-2xl text-base md:text-lg text-gray-200 mb-8 animate-fadeInUp delay-400">
          {slides[index].desc}
        </p>
        <button className="bg-[#c31d4a] hover:bg-[#a91940] px-8 py-3 rounded-lg font-medium shadow-lg transition animate-fadeInUp delay-600">
          Book a Trip
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black backdrop-blur p-2 rounded-full z-10 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black backdrop-blur p-2 rounded-full z-10 transition"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
