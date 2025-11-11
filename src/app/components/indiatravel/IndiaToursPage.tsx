"use client";

import Image from "next/image";
import Link from "next/link";

export default function IndiaToursPage() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">EXPERIENCE THE HEART OF INDIA</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Dive into the vibrant colors, rich traditions, and breathtaking landscapes of India.
        Let every journey bring you closer to the soul of this incredible land.
      </p>

{/* First Row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

  {/* Left Image */}
  <Link
    href="/MainPages/north-india"
    className="relative group h-[360px] w-full overflow-hidden"
  >
    <Image
      src="/assets/india/north.jpeg"
      alt="North India Tours"
      fill
      className="object-cover group-hover:scale-105 duration-300"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
      North India Tours
    </div>
  </Link>

  {/* Right Two Images */}
  <div className="grid grid-cols-2 gap-4">
    <Link
      href="/MainPages/south-india"
      className="relative group h-[360px] w-full overflow-hidden"
    >
      <Image
        src="/assets/india/south.jpeg"
        alt="South India Tours"
        fill
        className="object-cover group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
        South India Tours
      </div>
    </Link>

    <Link
      href="/MainPages/west-india"
      className="relative group h-[360px] w-full overflow-hidden"
    >
      <Image
        src="/assets/india/west.jpeg"
        alt="West India Tours"
        fill
        className="object-cover group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
        West India Tours
      </div>
    </Link>
  </div>
</div>

{/* Second Row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

  {/* Left Two Images */}
  <div className="grid grid-cols-2 gap-4">
    <Link
      href="/MainPages/northeast"
      className="relative group h-[360px] w-full overflow-hidden"
    >
      <Image
        src="/assets/india/nest.jpeg"
        alt="North East India Tours"
        fill
        className="object-cover group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
        North East & Sikkim
      </div>
    </Link>

    <Link
      href="/MainPages/andaman"
      className="relative group h-[360px] w-full overflow-hidden"
    >
      <Image
        src="/assets/india/andman.jpeg"
        alt="Andaman Tours"
        fill
        className="object-cover group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
        Andaman
      </div>
    </Link>
  </div>

  {/* Right Large Image */}
  <Link
    href="/MainPages/lakshwadweep"
    className="relative group h-[360px] w-full overflow-hidden"
  >
    <Image
      src="/assets/india/lakshwadweep.jpeg"
      alt="Lakshadweep Tours"
      fill
      className="object-cover group-hover:scale-105 duration-300"
    />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
      Lakshadweep Tours
    </div>
  </Link>
</div>

    </section>
  );
}
