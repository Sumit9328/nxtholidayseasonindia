"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { FaStar, FaRegClock } from "react-icons/fa";

export default function IndiaPackages() {
  const packages = [
    {
      title: "West India Tours",
      days: "03 to 14 days",
      tag: "Special Offers",
      img: "/assets/home/west.jpg",
      desc: "Flash Sale on West India Packages – Limited Slots Available on EMI!",
      slug: "west-india-tours",
    },
    {
      title: "North East - Sikkim",
      days: "04 to 12 days",
      tag: "Unbeatable Deals",
      img: "/assets/home/nest.jpg",
      desc: "Travel More, Pay Less – Your Dream Vacation, Now on Sale! Book Now",
      slug: "north-east-sikkim",
    },
    {
      title: "Andaman Awaits",
      days: "05 to 10 days",
      tag: "Steal the Deal",
      img: "/assets/home/andman.jpg",
      desc: "Unbeatable Deals on Andaman Trips. Limited Time Only!",
      slug: "andaman-awaits",
    },
    {
      title: "North India",
      days: "06 to 15 days",
      tag: "Hot Picks",
      img: "/assets/home/north.jpg",
      desc: "Discover Royal Heritage and Desert Charm – Book Now & Save!",
      slug: "north-india-classics",
    },
      {
      title: "Lakshwadweep India",
      days: "06 to 15 days",
      tag: "Hot Picks",
      img: "/assets/home/laksh.jpg",
      desc: "Discover Royal Heritage and Desert Charm – Book Now & Save!",
      slug: "lakshadweep-escape",
    },
      {
      title: "South India",
      days: "06 to 15 days",
      tag: "Hot Picks",
      img: "/assets/home/south.jpg",
      desc: "Discover Royal Heritage and Desert Charm – Book Now & Save!",
      slug: "south-india-escape",
    },
  ];

  return (
    <section className="py-14 bg-white">
      {/* ==== Heading ==== */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
          India Travel Packages
        </h2>
        <div className="w-16 h-[2px] bg-gray-300 mx-auto mt-2 mb-4" />
        <p className="text-[#db1145] font-medium mb-3 flex items-center justify-center gap-2">
          <span>💎</span> Explore Incredible India with Our Tailored Travel Packages
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Discover the beauty, diversity, and culture of India with our handpicked travel
          packages designed to offer unforgettable experiences across every corner of this
          incredible country. From the snow-capped peaks of the Himalayas to the
          sun-kissed beaches of Goa and the serene backwaters of Kerala — India has
          something magical for every traveler.
        </p>
      </div>

      {/* ==== Packages Slider ==== */}
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          rewind: true,
          autoplay: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        className="w-[90%] mx-auto"
      >
        {packages.map((pkg, i) => (
          <SplideSlide key={i}>
            <div className="bg-white shadow-md rounded overflow-hidden border border-gray-200 hover:shadow-lg transition">
              <div className="relative w-full h-52">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#db1145] text-white px-4 py-2 font-semibold text-sm flex items-center justify-between">
                <span>{pkg.tag}</span>
                <div className="flex text-yellow-400 text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-sm text-[#db1145] mt-1 mb-2">
                  <FaRegClock className="mr-2" /> {pkg.days}
                </div>

                <p className="text-gray-600 text-sm mb-4">{pkg.desc}</p>

                <div className="flex justify-between gap-2">
                  <Link
                    href={`/enquiry?package=${pkg.slug}`}
                    className="bg-[#db1145] text-white text-sm px-5 py-2 rounded hover:bg-[#c30f3e] transition"
                  >
                    Enquire Now
                  </Link>

                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="bg-[#477acd] text-white text-sm px-5 py-2 rounded hover:bg-[#c30f3e] transition inline-block"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
