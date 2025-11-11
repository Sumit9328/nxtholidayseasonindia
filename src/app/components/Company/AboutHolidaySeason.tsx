"use client";

import Image from "next/image";
import React from "react";

export default function AboutHolidaySeason() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* ===== Top Section ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side content */}
        <div className="w-full md:w-1/2">
          <h5 className="text-[#b30c32] font-semibold mb-3 uppercase tracking-wide flex items-center gap-2">
            About Holiday Season India <span>✈️</span>
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            WHERE EVERY TRIP FEELS LIKE A HOLIDAY SEASON
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Holiday Season India was founded to make travel simple, soulful, and
            reliably joyful. For the past 14 years, we’ve specialised in creating
            tailored holidays that reflect each traveller’s interests — whether
            that’s relaxed beach time, immersive cultural discovery, adrenaline-filled
            adventure, or hassle-free family vacations.
          </p>
        </div>

        {/* Right side image + rotating SVG */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-[90%] md:w-[80%] flex items-center justify-center">
            {/* Image */}
            <Image
              src="/assets/holiday/discountedprice.jpeg"
              alt="Holiday Season India"
              width={200}
              height={200}
              className="rounded-2xl shadow-lg object-cover h-auto z-10"
            />
            {/* Badge */}
            <div className="absolute top-4 left-[-20px] bg-[#b30c32] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md z-20">
              100+ Destinations
            </div>

            {/* Rotating SVG */}
<div className="relative w-[115px] left-[80px] h-[115px]">
  <a
    href="https://www.youtube.com/@holidayseasonindia" // ← apna YouTube link yahan daalo
    target="_blank"
    rel="noopener noreferrer"
    className="block relative w-full h-full"
  >
    {/* Rotating circular text */}
    <svg
      viewBox="0 0 200 200"
      width="115"
      height="115"
      className="absolute top-0 left-0 animate-spin-slow cursor-pointer"
    >
      <defs>
        <path
          id="circle"
          d="
          M 100, 100
          m -75, 0
          a 75, 75 0 1, 0 150, 0
          a 75, 75 0 1, 0 -150, 0
        "
        ></path>
      </defs>
      <text>
        <textPath
          alignmentBaseline="hanging"
          xlinkHref="#circle"
          className="text-gray-800 font-[300] text-[24px]"
        >
          See What Our Happy Client's Say....
        </textPath>
      </text>
    </svg>

    {/* Red triangle rotated toward right */}
   <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 
  w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] 
  border-l-transparent border-r-transparent cursor-pointer transition-transform duration-300 hover:scale-110"
  style={{ borderBottomColor: "#d60d45" }}
></div>

  </a>
</div>


          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-16 gap-10">
        {/* ===== Left Content ===== */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe great travel begins with listening. Every itinerary
              we design is built around what you want to see and how you want
              to feel — with trusted local partners, comfortable accommodations,
              and logistics handled end-to-end. Our strength is blending genuine
              local experiences with professional planning so your trip runs
              smoothly and feels authentic.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Founder & Leadership
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Holiday Season India is led by{" "}
              <strong>Ms. Shalini Bejwal</strong>, whose vision for thoughtful,
              service-first travel guides our team. With over a decade of
              experience in the travel industry, Ms. Bejwal focuses on quality,
              transparency, and creating trips that leave lasting memories.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Mission & Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to inspire curiosity and make meaningful travel
              accessible and worry-free. We value honesty, personalized service,
              sustainability in local communities, and continuous improvement —
              always refining our offerings based on guest feedback.
            </p>
          </div>
        </div>

        {/* ===== Right Images ===== */}
        <div className="w-full md:w-1/2 flex justify-center gap-8">
          <div className="text-center">
            <Image
              src="/assets/holiday/shalinibejwal.jpg"
              alt="Shalini Bejwal"
              width={260}
              height={320}
              className="rounded-2xl shadow-md object-cover w-[260px] h-[320px]"
            />
            <h4 className="font-semibold mt-3 text-lg">Mrs. Shalini Bejwal</h4>
            <p className="text-sm text-gray-500">CEO & COO</p>
          </div>

          <div className="text-center">
            <Image
              src="/assets/holiday/rajchaudhary.jpg"
              alt="Raj Chaudhary"
              width={260}
              height={320}
              className="rounded-2xl shadow-md object-cover w-[260px] h-[320px]"
            />
            <h4 className="font-semibold mt-3 text-lg">Mr. Raj Chaudhary</h4>
            <p className="text-sm text-gray-500">Executive Director</p>
          </div>
        </div>
      </div>


    </section>
  );
}
