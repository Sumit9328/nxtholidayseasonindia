"use client";

import { useRef, useEffect } from "react";

export default function ExpertGuides() {
  const guides = [
    { name: "Prithvi", role: "Guide", img: "/assets/international/em1.jpg" },
    { name: "Sneha", role: "Guide", img: "/assets/international/em2.jpg" },
    { name: "Shonam", role: "Guide", img: "/assets/international/em3.jpg" },
    { name: "Meena", role: "Guide", img: "/assets/international/em4.jpg" },
    { name: "Khushi", role: "Guide", img: "/assets/international/em5.jpg" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const animate = () => {
      scrollAmount += 2; // speed, adjust as needed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // reset to create infinite loop
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Duplicate guides for seamless loop
  const loopedGuides = [...guides, ...guides];

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
          Meet Our Guide
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Our Expert Guides
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our expert guides bring each destination to life with insider knowledge, local insights, and unforgettable stories.
        </p>

        {/* Smooth Infinite Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-hidden gap-4 scrollbar-hide"
        >
          {loopedGuides.map((g, i) => (
            <div key={i} className="flex-shrink-0 w-1/4">
              <div className="bg-white rounded-2xl shadow overflow-hidden">
                <img
                  src={g.img}
                  alt={g.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-blue-900">{g.name}</h3>
                  <p className="text-gray-500 text-sm">{g.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
