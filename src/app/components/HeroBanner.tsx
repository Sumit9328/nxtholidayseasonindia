"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function HeroBanner() {
  return (
  <section className="relative w-full">
      {/* ==== Slider ==== */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: false,
        }}
        className="h-[85vh]"
      >
        <SplideSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/home/ban1.jpg"
              alt="India Gate"
              fill
              className=""
              priority
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative w-full h-[85vh]">
            <Image
              src="/assets/home/ban2.jpg"
              alt="Colosseum"
              fill
              className="object-cover"
            />
          </div>
        </SplideSlide>
      </Splide>

      {/* ==== Overlay Text ==== */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/30">
        <h3 className="text-sm md:text-lg tracking-widest font-medium">
          EXPLORE FAVORITE DESTINATIONS OF THE WORLD!
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
          PLAN YOUR TRAVEL NOW!
        </h1>
        <button className="bg-transparent border border-white text-white px-5 py-2 text-sm md:text-base hover:bg-white hover:text-black transition">
          View Our Tour
        </button>
      </div>

      {/* ==== Search Box ==== */}
<div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] flex flex-col md:flex-row justify-center items-stretch shadow-lg mx-auto">
  {/* Left Red Section */}
  <div className="bg-[#db1145] text-white flex items-center justify-center px-10 py-6 md:w-1/4">
    <div className="text-center md:text-left">
      <p className="text-sm uppercase">Find Your</p>
      <h3 className="text-2xl font-bold flex items-center gap-2">
        Holiday <FaUmbrellaBeach className="text-xl" />
      </h3>
    </div>
  </div>

  {/* Right White Section */}
  <div className="bg-white flex-1 flex flex-wrap items-center justify-between px-4 py-4 gap-3">
    <select className="border border-gray-300 text-gray-600 px-3 py-2 rounded w-full md:w-[180px] text-sm">
      <option>Destination</option>
      <option>India</option>
      <option>Bali</option>
      <option>Thailand</option>
    </select>

    <select className="border border-gray-300 text-gray-600 px-3 py-2 rounded w-full md:w-[160px] text-sm">
      <option>Type</option>
      <option>Family</option>
      <option>Adventure</option>
      <option>Honeymoon</option>
    </select>

    <input
      type="date"
      className="border border-gray-300 px-3 py-2 rounded w-full md:w-[150px] text-sm text-gray-600"
    />
    <input
      type="date"
      className="border border-gray-300 px-3 py-2 rounded w-full md:w-[150px] text-sm text-gray-600"
    />

    <div className="flex flex-col w-full md:w-[220px] text-gray-600">
      <label htmlFor="range" className="text-xs mb-1">
        Price Range
      </label>
      <input
        id="range"
        type="range"
        min="0"
        max="20000"
        className="accent-[#db1145]"
      />
    </div>

    <button className="bg-[#db1145] text-white text-sm font-semibold px-6 py-2 rounded hover:bg-[#c30f3e] transition w-full md:w-auto">
      SEARCH
    </button>
  </div>
</div>

    </section>
  );
}
