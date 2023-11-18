import PropTypes from "prop-types";
import { useRef } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CustomArrowLeft = ({ handler = () => {} }) => {
  return (
    <div
      onClick={handler}
      className="absolute left-0 z-10 flex items-center hover:text-primary justify-center opacity-100 cursor-pointer top-1/2 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 transform rotate-180"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const CustomArrowRight = ({ handler = () => {} }) => {
  return (
    <div
      onClick={handler}
      className="absolute right-0 z-10 flex items-center hover:text-primary justify-center opacity-100 cursor-pointer top-1/2 -translate-y-1/2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const Gallery = ({ images = [] }) => {
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="relative custom-swiper mx-4 lg:mx-0">
      <Swiper
        ref={swiperRef}
        className="pb-8"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-contain object-center"
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 -left-8 -right-8 text-gray-400">
        <CustomArrowLeft handler={handlePrevSlide} />
        <CustomArrowRight handler={handleNextSlide} />
      </div>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
