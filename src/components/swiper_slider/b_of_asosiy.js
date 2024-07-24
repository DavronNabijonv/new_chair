import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

// import required modules
import { Autoplay } from "swiper/modules";

import "./b_of_asosiy.scss";
import { images_info } from "../../db/showCase_slider";

export default function PastkiSlider() {
  const [innerWidthPastkiSlider, setInnerWidthPastkiSlider] = useState(window.innerWidth);
  
  
  const handleResize = useCallback(() => {
    setInnerWidthPastkiSlider(window.innerWidth);
  },[innerWidthPastkiSlider])
    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <>
      <div className="asosiy">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={innerWidthPastkiSlider>680?7:4}
          modules={[ Autoplay]}
          className="mySwiperPastki"
        >
          {images_info.map((r) => (
            <SwiperSlide key={r.img_url}>
              <img src={`${r.img_url}`} alt="Slide Image"  style={{borderRadius:"25px"}}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
