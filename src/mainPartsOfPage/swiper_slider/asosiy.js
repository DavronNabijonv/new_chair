import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./asosiy.scss";
import { images_info } from "../../db/showCase_slider";
import { InnerWidthContext } from "../../App";

export default function AsosiySwiper() {
  const innerWidthAsosiySwiper = useContext(InnerWidthContext);

  return (
    <div className="asosiy">
      <Swiper
        spaceBetween={innerWidthAsosiySwiper > 370 ? 8 : 8} // Adjust for 25% visibility on mobile
        centeredSlides={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: innerWidthAsosiySwiper> 370? 3000 : 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={innerWidthAsosiySwiper > 670 ? 1 : 1.2} // 1.5 to show 25% of the adjacent slides
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images_info.map((r) => (
          <SwiperSlide key={r.img_url}>
            <img src={r.img_url} className="asosiy_slider_img" alt="Slide Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
