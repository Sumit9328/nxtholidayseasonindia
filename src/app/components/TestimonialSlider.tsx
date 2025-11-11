"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import { Diamond } from "lucide-react";

const testimonials = [
  {
    text: "I booked my Europe 2025 holiday during the festive season in India, and it turned out to be the best decision! The itinerary was perfectly crafted — from the snowy charm of Switzerland to the romantic streets of Paris, every detail was taken care of.",
    name: "Chauhan, Bangalore",
    rating: 4,
    img: "/assets/home/google.jpg",
  },
  {
    text: "Amazing experience with Holiday Season! Everything was well planned and the support team was quick to help. Truly memorable.",
    name: "Aditi, Mumbai",
    rating: 5,
    img: "/assets/home/tripadvisor.jpg",
  },
  {
    text: "Had a wonderful trip! The packages were very affordable and luxurious at the same time. Highly recommend!",
    name: "Rohan, Delhi",
    rating: 4,
    img: "/assets/home/trustpilot.jpg",
  },
  {
    text: "Loved how every little detail was handled smoothly. Definitely booking again with them for my next vacation.",
    name: "Simran, Pune",
    rating: 5,
    img: "/assets/home/mouthshut.jpg",
  },
  {
    text: "Exceptional planning, seamless travel, and excellent communication. My go-to agency for every trip now!",
    name: "Rahul, Jaipur",
    rating: 4,
    img: "/assets/home/quora.jpg",
  },
];

export default function TestimonialsSlider() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
        Your Next Holiday, Reviewed & Approved - Holiday Season
      </h2>

      {/* Divider */}
      <div className="flex justify-center items-center mt-3 mb-6">
        <span className="w-16 h-[1px] bg-gray-400"></span>
        <Diamond className="mx-2 text-sky-600" size={18} />
        <span className="w-16 h-[1px] bg-gray-400"></span>
      </div>

      {/* Top Text Slider */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: false,
          speed: 800,
        }}
        onMove={(_splide: SplideInstance, newIndex: number) =>
          setActive(newIndex)
        }
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SplideSlide key={i}>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-gray-600 italic text-sm md:text-base leading-relaxed px-4">
                “{t.text}”
              </p>
              <div className="flex justify-center">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sky-700 font-semibold">{t.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Bottom Circle Logos Slider */}
{/* Bottom Circle Logos Slider */}
<Splide
  options={{
    perPage: 5,
    focus: "center",
    gap: "0rem", // gap kam kar diya
    pagination: false,
    arrows: false,
    rewind: true,
    isNavigation: true,
    autoplay: true,
    interval: 4000,
    breakpoints: {
      768: { perPage: 3 },
    },
  }}
  onMove={(_splide: SplideInstance, newIndex: number) =>
    setActive(newIndex)
  }
  className="mt-8 max-w-4xl mx-auto"
>
  {testimonials.map((t, i) => (
    <SplideSlide key={i}>
      <div
        className={`mx-auto w-26 h-26 rounded-full overflow-hidden transition-all duration-500${
          active === i
            ? "scale-110 shadow-md"
            : "opacity-60 scale-95"
        }`}
        tabIndex={-1} // 👈 removes focus rectangle
      >
        <img
          src={t.img}
          alt={t.name}
          className="w-full h-full object-cover"
        />
      </div>
    </SplideSlide>
  ))}
</Splide>

    </section>
  );
}
