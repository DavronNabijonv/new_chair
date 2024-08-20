import React from "react";
import "./mobile_as.scss";
import { images_info } from "../../db/showCase_slider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

// import required modules
import { Autoplay } from "swiper/modules";


export default function Mobile_as() {
  return (
    <div className="mobile_as">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images_info.map((r) => (
          <SwiperSlide key={r.img_url}>
            <img
              src={`${r.img_url}`}
              className="mobile_as_img"
              alt="Slide Image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
