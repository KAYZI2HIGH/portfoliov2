'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";

const ImageSlider = ({images}) => {
  return (
    <Swiper
      modules={[EffectCube, Navigation]}
      slidesPerView={1}
      navigation
      effect="card"
      className="absolute w-full h-full"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={`/images/${image}.png`}
              alt={image}
              fill
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
