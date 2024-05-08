import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

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
              <div className="slide-content z-50">
                {slide.content && (
                  <>
                    <h2>{slide.content.header}</h2>
                    <p>{slide.content.paragraph}</p>
                    <a href={slide.content.button?.uri}>Learn More</a>
                  </>
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
