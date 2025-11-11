"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const partners = [
  { img: "/assets/home/partner1.png" },
  { img: "/assets/home/partner2.png" },
  { img: "/assets/home/partner3.png" },
  { img: "/assets/home/partner4.png" },
  { img: "/assets/home/partner5.png" },
  { img: "/assets/home/partner6.png" },
  { img: "/assets/home/partners7.png" },
  { img: "/assets/home/partners8.png" },
  { img: "/assets/home/partners9.png" },
  { img: "/assets/home/partners10.png" },
  { img: "/assets/home/partners11.png" },
  { img: "/assets/home/partners12.png" },
  { img: "/assets/home/partners13.png" },
  { img: "/assets/home/partners14.png" },
  { img: "/assets/home/partners15.png" },


];

export default function PartnersSlider() {
  return (
    <section className="bg-[#1e242c] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-10 px-6">
        {/* Left Title */}
        <div className="text-white text-center md:text-left md:w-1/4">
          <p className="text-[25px] font-[400] tracking-wide">OUR</p>
          <p className="text-[40px] font-[500] mt-1">PARTNERS</p>
        </div>

        {/* Right Slider */}
        <div className="md:w-3/4 w-full">
          <Splide
  options={{
    type: "loop",
    autoplay: true,
    perPage: 5,     // show 5 at a time
    perMove: 1,     // move only 1 image per slide
    gap: "1rem",
    pagination: false,
    arrows: false,
    speed: 1000,
    interval: 2000,
    drag: true,
    autoWidth: false,
    pauseOnHover: false,
    breakpoints: {
      1024: { perPage: 4 },
      768: { perPage: 3 },
      480: { perPage: 2 },
    },
  }}
>

            {partners.map((p, i) => (
              <SplideSlide key={i}>
                <div className="w-25 h-25 flex items-center justify-center shadow-md">
                  <img
                    src={p.img}
                    alt={`Partner ${i + 1}`}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Optional Bottom Line */}
      <div className="border-b border-pink-900 mt-6"></div>
    </section>
  );
}
