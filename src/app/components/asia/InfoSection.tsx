"use client";
import Image from "next/image";

export default function InfoSection() {
  const data = [
    {
      title: "Beautiful Places",
      desc: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
      img: "/assets/asia/location.webp",
    },
    {
      title: "Diverse Destinations",
      desc: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
      img: "/assets/asia/build.jpg",
    },
    {
      title: "Value for Money",
      desc: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
      img: "/assets/asia/bag.jpg",
    },
  ];

  return (
    <section className="py-14 px-6">

      {/* ✅ TOP HEADING */}
      <div className="text-center mb-6">
        <h2 className="text-[38px] font-bold mb-2">Search Your Best Tours</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* ✅ SEARCH BAR */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 bg-white p-3 md:p-2 w-fit mx-auto mb-10">

        <input
          type="text"
          placeholder="Destination"
          className="border px-4 py-2 rounded-md outline-none w-full md:w-44"
        />

        <select className="border px-4 py-2 rounded-md outline-none w-full md:w-40">
          <option>Type</option>
          <option>Adventure</option>
          <option>Family</option>
          <option>Honeymoon</option>
        </select>

        <input
          type="date"
          className="border px-4 py-2 rounded-md outline-none w-full md:w-40"
        />

        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 w-full md:w-auto">
          Search
        </button>

      </div>

      {/* ✅ 3 COLUMN INFO SECTION (unchanged design) */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Circular Image */}
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="rounded-full object-cover border-2 border-gray-200"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-[500] mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed px-2">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
