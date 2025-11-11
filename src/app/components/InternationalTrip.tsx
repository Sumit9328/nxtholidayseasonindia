"use client";
import React from "react";
import Image from "next/image";
import { Diamond } from "lucide-react";

export default function InternationalTrip() {
  const trips = [
    {
      title: "EUROPEAN PANORAMA",
      img: "/assets/home/eupano.jpg",
    },
    {
      title: "POPULAR ASIA TOURS",
      img: "/assets/home/asiapop.jpg",
    },
    {
      title: "EASTERN EUROPE TOUR",
      img: "/assets/home/easteurope.jpg",
    },
    {
      title: "CENTRAL EUROPE CHARM",
      img: "/assets/home/centeurope.jpg",
    },
    {
      title: "WESTERN EUROPE WONDERS",
      img: "/assets/home/westeurope.jpg",
    },
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-[500] tracking-wide text-gray-800">
          INTERNATIONAL TRIP
        </h2>

        {/* Divider + Icon */}
        <div className="flex justify-center items-center mt-3 mb-2">
          <span className="w-16 h-[1px] bg-gray-400"></span>
          <Diamond className="mx-2 text-sky-600" size={18} />
          <span className="w-16 h-[1px] bg-gray-400"></span>
        </div>

        <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base">
          A journey beyond borders to explore new cultures, cuisines, and landscapes,
          creating memories that last a lifetime.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-3 px-4 md:px-0">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {trips.slice(0, 1).map((trip, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold tracking-wide text-center px-3">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}

          {trips.slice(3, 4).map((trip, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold tracking-wide text-center px-3">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className="relative group overflow-hidden rounded-lg shadow-md h-[530px]">
          <Image
            src={trips[1].img}
            alt={trips[1].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold tracking-wide text-center px-3">
              {trips[1].title}
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {trips.slice(2, 3).map((trip, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold tracking-wide text-center px-3">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}

          {trips.slice(4, 5).map((trip, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold tracking-wide text-center px-3">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
