"use client";
import Image from "next/image";
import Link from "next/link";

export default function HolidayTheme() {
  // ✨ Static data abhi ke liye — baad mein backend se replace kar sakte ho
  const packages = [
    {
      slug: "maldives-tour",
      title: "Maldives Tour",
      img: "/assets/destinations/maldives.jpg",
      desc: "Discover crystal-clear waters, luxurious resorts, and pristine beaches in the Maldives.",
    },
    {
      slug: "bali-holiday",
      title: "Bali Holiday",
      img: "/assets/destinations/bali.jpg",
      desc: "Experience Bali’s temples, beaches, and unique culture — a paradise like no other.",
    },
    {
      slug: "dubai-getaway",
      title: "Dubai Getaway",
      img: "/assets/destinations/dubai.jpg",
      desc: "Explore Dubai’s futuristic skyline, desert adventures, and luxury shopping experiences.",
    },
    {
      slug: "switzerland-tour",
      title: "Switzerland Tour",
      img: "/assets/destinations/switzerland.jpg",
      desc: "Snowy Alps, serene lakes, and cozy towns — Switzerland is a fairytale come to life.",
    },
    {
      slug: "thailand-trip",
      title: "Thailand Trip",
      img: "/assets/destinations/thailand.jpg",
      desc: "From Bangkok’s energy to Phuket’s beaches, Thailand offers beauty and adventure.",
    },
    {
      slug: "singapore-holiday",
      title: "Singapore Holiday",
      img: "/assets/destinations/singapore.jpg",
      desc: "A vibrant blend of culture, cuisine, and modern wonders — Singapore never disappoints.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-wide">
          OUR TOP DESTINATIONS
        </h2>
        <p className="text-gray-600 mt-2">
          Every location promises unforgettable experiences and memories.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.slice(0, 6).map((pkg) => (
          <div
            key={pkg.slug}
            className="rounded-xl shadow-xl overflow-hidden hover:scale-[1.03] transition bg-white"
          >
            {/* IMAGE */}
            <Image
              src={pkg.img}
              width={500}
              height={300}
              alt={pkg.title}
              className="w-full h-56 object-cover"
            />

            {/* RATING STRIP */}
            <div className="bg-[#d70d45] text-white flex px-4 items-center gap-1 py-2">
              <span className="text-lg">⭐⭐⭐⭐⭐</span>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{pkg.desc}</p>

              <div className="flex justify-between">
                <Link href={`/packages/${pkg.slug}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800">
                    View Details
                  </button>
                </Link>

                <button className="px-4 py-2 bg-[#d70d45] text-white rounded-md hover:bg-pink-800">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
