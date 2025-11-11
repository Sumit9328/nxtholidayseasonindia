"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

import React from "react";
import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaStar } from "react-icons/fa";

export default function AsiaPackages() {
const packages = [
  {
    title: "Tibet Tour Packages",
    img: "/assets/home/tibbt.jpg",
    rating: 3,
    slug: "tibet-tour",
    desc: "From Himalayan monasteries..."
  },
  {
    title: "Thailand Tour Packages",
    img: "/assets/home/thai.jpg",
    rating: 3,
    slug: "thailand-tour",
    desc: "From Himalayan monasteries..."
  },
  {
    title: "Sri Lanka Tour Packages",
    img: "/assets/home/sril.jpg",
    rating: 3,
    slug: "sri-lanka-tour",
    desc: "From Himalayan monasteries..."
  },
  {
    title: "Nepal Tourism",
    img: "/assets/home/nep.jpg",
    rating: 4,
    slug: "nepal-tourism",
    desc: "Unwind in Sri Lanka..."
  },
  {
    title: "Magical Maldives Trip",
    img: "/assets/home/magl.jpg",
    rating: 4,
    slug: "maldives-trip",
    desc: "Turn your dream holiday..."
  },
  {
    title: "Bhutan Trip",
    img: "/assets/home/bhut.jpg",
    rating: 4,
    slug: "bhutan-trip",
    desc: "Turn your dream holiday..."
  },
  {
    title: "Discover Baku Trip",
    img: "/assets/home/disbaku.jpg",
    rating: 4,
    slug: "baku-trip",
    desc: "Turn your dream holiday..."
  },
  {
    title: "Feel the Future only - Dubai",
    img: "/assets/home/ftf.jpg",
    rating: 4,
    slug: "dubai-trip",
    desc: "Turn your dream holiday..."
  },
];


  return (
    <section className="bg-[#3a3a3a] py-16 text-white">
      {/* ==== Heading ==== */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-[500] uppercase">
          Discover Asia - Where Tradition Meets Adventure
        </h2>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-[1px] w-16 bg-gray-400"></div>
          <span>💎</span>
          <div className="h-[1px] w-16 bg-gray-400"></div>
        </div>
        <p className="text-gray-300 text-sm md:text-base mt-4 max-w-3xl mx-auto leading-relaxed">
          From ancient temples to tropical beaches, discover vibrant cultures, stunning
          landscapes, and unforgettable experiences across Asia. Your adventure begins
          here.
        </p>
      </div>

      {/* ==== Slider ==== */}
      <div className="w-[90%] mx-auto">
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            arrows: true,
            pagination: false,
            autoplay: true,
            rewind: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {packages.map((pkg, i) => (
            <SplideSlide key={i}>
              <div className="relative bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition">
                {/* Tilted background layers */}
                <div className="absolute -top-2 -left-2 w-full h-full bg-white rotate-[-3deg] rounded-lg -z-10"></div>
                <div className="absolute -top-1 -right-2 w-full h-full bg-white rotate-[2deg] rounded-lg -z-10"></div>

                <div className="relative w-full h-52">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#ff9800] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    EMIs
                  </div>
                </div>

                <div className="p-5 text-center">
                  {/* Rating */}
                  <div className="flex justify-center text-yellow-400 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={idx < pkg.rating ? "opacity-100" : "opacity-30"}
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-[500] mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{pkg.desc}</p>

                  <div className="flex justify-between items-center gap-2">
                    <Link
                      href={`/enquiry?package=${pkg.slug}`}
                      className="bg-[#db1145] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#c30f3e] transition"
                    >
                      Enquire Now
                    </Link>

                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="bg-[#db1145] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#c30f3e] transition"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
