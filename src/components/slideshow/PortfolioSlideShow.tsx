"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Image as ImageInterface } from "@/interfaces";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.scss";

interface Props {
  images: ImageInterface[];
}

export const PortfolioSlideShow = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image.documentId}>
            <Image
              src={image.url}
              alt={"Gallery Image"}
              width={1024}
              height={800}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.documentId}>
            <Image
              src={image.url}
              alt={"Thumbnail Image"}
              width={300}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
