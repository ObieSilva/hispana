import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSwiper = ({ heroSlides }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="h-[60VH]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ type: "progressbar" }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroSlides.map((slide, index) => {
          const position = slide.imageTools?.position || "center center";
          const gradient = slide.imageTools?.gradient;
          const gradientStyle = `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) ${gradient}%)`;

          const backgroundStyles = {
            background: slide.image
              ? `${gradientStyle}, url(${slide.image.sourceUrl}) no-repeat ${position}` 
              : "none",
            backgroundSize: "cover",
          };

          return (
            <SwiperSlide key={index} style={backgroundStyles}>
              <div className="slide-content flex items-center h-full p-4">
                {slide.content && (
                  <div className="container max-w-lg mx-auto text-left">
                    <p className="text-white uppercase tracking-widest pb-2">{slide.content.tag}</p>
                    <h2 className="text-white text-[52px] uppercase font-semibold tracking-wide mb-4">{slide.content.header}</h2>
                    <p className="text-white w-9/12 text-[15px] mb-6">{slide.content.paragraph}</p>
                    <Link to={slide.content.button?.uri} className="text-white border border-white p-4 rounded-md hover:bg-white hover:text-black opacity-100 transition-opacity duration-300 ease-in-out">Learn More</Link>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
