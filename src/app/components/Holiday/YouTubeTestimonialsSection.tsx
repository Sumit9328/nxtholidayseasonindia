"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function YouTubeTestimonialsSection() {
  const testimonials = [
    {
      text: "Our trip was absolutely amazing! Everything was well organized and smooth. Highly recommend Holiday Season India.",
      name: "John Doe, New York",
      rating: 5,
    },
    {
      text: "Excellent planning and great hotels. The team was very helpful and quick in responding to our queries.",
      name: "Anita Sharma, Mumbai",
      rating: 4,
    },
    {
      text: "Had a wonderful family vacation! Great service and friendly staff. Will definitely book again.",
      name: "David Lee, Singapore",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { text, name, rating } = testimonials[current];

  return (
    <section className="bg-[#2b2b2b] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* LEFT SIDE: YouTube Preview */}
          <div className="flex justify-center">
           <div
  onMouseEnter={() => {
    // optional small delay (300ms) to prevent accidental hover triggers
    const timer = setTimeout(() => {
      window.open(
        "https://www.youtube.com/@holidayseasonindia/featured",
        "_blank"
      );
    }, 300);
    // if the mouse leaves before delay, cancel it
    const cancel = () => clearTimeout(timer);
    document.addEventListener("mouseleave", cancel, { once: true });
  }}
  className="bg-white p-2 rounded shadow-lg w-full max-w-lg cursor-pointer transition-transform duration-300 hover:scale-105"
>
  <Image
    src="/assets/holiday/adyt.png"
    alt="Holiday Season India YouTube"
    width={600}
    height={400}
    className="w-full rounded"
  />
</div>

          </div>

          {/* RIGHT SIDE: Testimonials */}
          <div className="bg-[#333] text-white p-8 relative rounded shadow-lg max-w-lg mx-auto">
            <div className="bg-[#005baa] inline-block px-6 py-2 rounded-t-md text-white font-bold text-lg uppercase mb-6">
              Testimonials
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 transition-opacity duration-700 ease-in-out">
              {text}
            </p>

            {/* RATING */}
            <div className="flex justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < rating ? "text-yellow-400" : "text-gray-500"
                  } mr-1`}
                />
              ))}
            </div>

            <p className="font-semibold text-sm tracking-wide uppercase text-gray-200">
              {name}
            </p>

            {/* DOTS */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#f9b500]" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
