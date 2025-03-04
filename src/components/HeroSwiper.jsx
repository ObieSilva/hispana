import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

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
            <SwiperSlide
              key={`${slide.id || ""}${slide.content?.header || ""}${index}`}
              style={backgroundStyles}
            >
              <div className="slide-content flex items-center h-full p-4">
                {slide.content && (
                  <div className="container max-w-lg mx-auto text-left">
                    <p className="text-white uppercase tracking-widest pb-2 font-medium">
                      {slide.content.tag}
                    </p>
                    <h2 className="text-white text-6xl uppercase font-black tracking-wide mb-4">
                      {slide.content.header}
                    </h2>
                    <p className="text-white w-9/12 mb-2">
                      {slide.content.paragraph}
                    </p>
                    {slide.content.button?.uri && (
                      <Button
                        component={Link}
                        to={slide.content.button.uri}
                        variant="outlined"
                        sx={{
                          color: "white",
                          borderColor: "white",
                          "&:hover": {
                            borderColor: "white",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        {slide.content.button.text || "Ver más información"}
                      </Button>
                    )}
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

HeroSwiper.propTypes = {
  heroSlides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        sourceUrl: PropTypes.string,
      }),
      imageTools: PropTypes.shape({
        position: PropTypes.string,
        gradient: PropTypes.number,
      }),
      content: PropTypes.shape({
        tag: PropTypes.string,
        header: PropTypes.string,
        paragraph: PropTypes.string,
        button: PropTypes.shape({
          uri: PropTypes.string,
          text: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
};

export default HeroSwiper;
