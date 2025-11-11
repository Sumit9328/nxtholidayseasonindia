"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function HeroBanner() {
  return (
<div className="w-full h-[65vh] relative">

  <Splide
    options={{
      type: "fade",
      rewind: true,
      autoplay: true,
      interval: 500,
      speed: 700,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    }}
  >

    <SplideSlide>
      <div
        className="w-full h-[65vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/assets/india/global.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            DISCOVER INDIA, ONE JOURNEY AT A TIME
          </h1>
          <p className="mt-3 text-lg md:text-xl font-light">
            Exciting Schemes Just A Click Away
          </p>
        </div>
      </div>
    </SplideSlide>

    {/* baaki slides me bhi h-[65vh] kar dena ok */}

  </Splide>
</div>

  );
}
