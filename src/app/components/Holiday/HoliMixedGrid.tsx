"use client";
import Image from "next/image";

export default function HoliMixedGrid() {
  return (
    <section className="py-6 px-0 md:px-0 overflow-hidden">
<div className="flex flex-col md:flex-row h-[400px] md:h-[400px]">

  {/* LEFT — 50% Screen */}
  <div className="w-full md:w-1/2 relative">
    <Image
      src="/assets/asia/thailand.jpg"
      fill
      className="object-cover"
      alt="Thailand"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <h3 className="absolute bottom-5 left-5 text-white font-bold text-2xl">
      Thailand
    </h3>
  </div>

  {/* RIGHT — 50% Screen - 2x2 Grid */}
  <div className="w-full md:w-1/2 grid grid-cols-2">

    <div className="relative">
      <Image src="/assets/asia/sri-lanka.jpg" fill className="object-cover" alt="Sri Lanka" />
      <div className="absolute inset-0 bg-black/30" />
      <h3 className="absolute bottom-2 left-2 text-white font-semibold">Sri Lanka</h3>
    </div>

    <div className="relative">
      <Image src="/assets/asia/bhutan.jpg" fill className="object-cover" alt="Bhutan" />
      <div className="absolute inset-0 bg-black/30" />
      <h3 className="absolute bottom-2 left-2 text-white font-semibold">Bhutan</h3>
    </div>

    <div className="relative">
      <Image src="/assets/asia/phuket.avif" fill className="object-cover" alt="Phuket" />
      <div className="absolute inset-0 bg-black/30" />
      <h3 className="absolute bottom-2 left-2 text-white font-semibold">Phuket</h3>
    </div>

    <div className="relative">
      <Image src="/assets/asia/nepal.webp" fill className="object-cover" alt="Nepal" />
      <div className="absolute inset-0 bg-black/30" />
      <h3 className="absolute bottom-2 left-2 text-white font-semibold">Nepal</h3>
    </div>

  </div>

</div>

    </section>
  );
}
