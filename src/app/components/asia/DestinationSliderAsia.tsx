"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

export default function DestinationSliderAsia() {
  const destinations = [
    { title: "Dubai", img: "/assets/asia/dubai.jpg" },
    { title: "Bali", img: "/assets/asia/bali.jpg" },
    { title: "Nepal", img: "/assets/asia/nepal.webp" },
    { title: "Bhutan", img: "/assets/asia/bhutan.jpg" },
  ];

  return (
    <section className="pt-0">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          spaceBetween={0}
          autoplay={{
            delay: 1000, // 👈 1 second per slide
            disableOnInteraction: false,
          }}
          speed={800} // 👈 smooth transition speed
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={true}
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group cursor-pointer w-full h-[420px]">
                {/* IMAGE */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* ✅ DARK FADE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* TEXT */}
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg capitalize z-10">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
