"use client";

import Image from "next/image";
import Link from "next/link";

export default function IndiaCallPackages() {
  const tours = [
    {
      title: "Wildlife, India Tour",
      price: "$659 / PER",
      desc: "Explore the wild heart of India's untamed beauty.",
      img: "/assets/india/wildlife.jpeg",
      slug: "wildlife-india-tour",
    },
    {
      title: "Goa Tours",
      price: "$659 / PER",
      desc: "Soak in the sun, sand, and spirit of Goa.",
      img: "/assets/india/goa.jpg",
      slug: "goa-tours",
    },
    {
      title: "Kerala Tour Packages",
      price: "$659 / PER",
      desc: "Experience God's Own Country in every moment.",
      img: "/assets/india/kerala.jpg",
      slug: "kerala-tour-packages",
    },
    {
      title: "Varanasi Tour Packages",
      price: "$659 / PER",
      desc: "Explore the sacred ghats and timeless culture of Varanasi.",
      img: "/assets/india/varanasi.jpg",
      slug: "varanasi-tour-packages",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-14 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">From Mountains to Beaches - India Calls</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Explore the majestic Himalayas, serene backwaters, and golden shores. Every corner of India awaits with adventure,
        beauty, and unforgettable memories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-md hover:shadow-lg duration-300"
          >
            {/* Image */}
            <div className="relative w-[250px] h-[200px] rounded-md overflow-hidden flex-shrink-0">
              <Image src={tour.img} alt={tour.title} fill className="object-cover" />
            </div>

            {/* Text + Button */}
            <div className="flex flex-col text-left w-full">
              <h3 className="font-semibold text-[18px]">{tour.title}</h3>
              <p className="text-[#db1145] font-semibold text-sm mt-1">{tour.price}</p>
              <p className="text-gray-600 text-sm mt-2">{tour.desc}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/enquiry?package=${tour.slug}`}
                  className="flex-1 rounded-full bg-[#db1145] px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Enquire Now
                </Link>
                <Link
                  href={`/packages/${tour.slug}`}
                  className="flex-1 rounded-full border border-[#db1145] px-4 py-2 text-center text-sm font-semibold text-[#db1145] transition hover:bg-[#db1145] hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
