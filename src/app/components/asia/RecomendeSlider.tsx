"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function RecomendeSlider() {
  const destinations = [
    { title: "Bali", img: "/assets/asia/bali.jpg" },
    { title: "Bhutan", img: "/assets/asia/bhutan.jpg" },
    { title: "Columbia", img: "/assets/asia/columbia.jpg" },
    { title: "Bali", img: "/assets/asia/bali.jpg" },
    { title: "Bhutan", img: "/assets/asia/bhutan.jpg" },
    { title: "Columbia", img: "/assets/asia/columbia.jpg" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center font-bold text-[40px] mb-1">Recommended Exploration</h2>
      <p className="text-center text-[18px] mb-1">View all Exploration</p>
      <p className="text-center text-[16px] mb-8">Exploration</p>

      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={0}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group cursor-pointer shadow-lg w-full h-[360px]">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                  {item.title}
                </h3>

                <div className="absolute inset-0 bg-black/20"></div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
