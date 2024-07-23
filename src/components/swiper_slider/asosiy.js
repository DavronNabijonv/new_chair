import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./asosiy.scss";
import { images_info } from "../../db/showCase_slider";

export default function AsosiySwiper() {
  return (
    <>
      <div className="asosiy">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {images_info.map((r) => (
            <SwiperSlide key={r.img_url}>
              <img src={`${r.img_url}`} alt="Slide Image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
