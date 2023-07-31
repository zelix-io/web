import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Partners = (): JSX.Element => {
  return (
    <div className="hero py-20 bg-base-200 overflow-hidden" id="partners">
      <div className="hero-content text-center flex-col px-4 sm:px-0">
        <h1 className="text-5xl font-bold mb-20">Partners</h1>
        <div className="max-w-[300px] sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            loop
            speed={5000}
            className="swiper-wrapper"
          >
            {Array.from({ length: 27 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="mx-auto btn btn-neutral h-20 flex items-center justify-center mb-10">
                  <img
                    src={`/images/partners/partner-${i + 1}.png`}
                    alt="..."
                    className="cursor-pointer transform hover:scale-110 transition-transform max-w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            loop
            speed={5000}
            className="swiper-wrapper"
          >
            {Array.from({ length: 27 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="mx-auto btn btn-neutral h-20 flex items-center justify-center">
                  <img
                    src={`/images/partners/partner-${i + 1}.png`}
                    alt="..."
                    className="cursor-pointer transform hover:scale-110 transition-transform max-w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
