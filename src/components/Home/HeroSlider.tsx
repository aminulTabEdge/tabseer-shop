"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/assets/banner/banner1.png",
  "/assets/banner/banner2.jpg",
  "/assets/banner/banner-3.webp",
  "/assets/banner/banner-4.webp",
  "/assets/banner/banner.png",
];

export default function HeroSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      // navigation
      modules={[Pagination, Navigation, Autoplay]}
      className="container mx-auto"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Banner of Tabseershop promotional image ${index + 1}`}
            layout="responsive"
            width={1920}
            height={400}
            objectFit="cover"
            className="w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
