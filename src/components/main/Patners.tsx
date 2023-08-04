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
    <div
      className="hero py-20 bg-base-200"
      style={{ backgroundImage: 'url(/images/6_partner.png' }}
      id="partners"
    >
      <div className="hero-content text-center flex-col px-0 max-w-screen-2xl overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-20">Partners</h1>
        <div className="w-screen mx-auto">
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
              425: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            loop
            speed={5000}
            className="swiper-wrapper"
          >
            {Array.from({ length: 27 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="mx-auto btn btn-neutral h-28 flex items-center justify-center mb-10">
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
              425: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            loop
            speed={5000}
            className="swiper-wrapper"
          >
            {Array.from({ length: 27 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="mx-auto btn btn-neutral h-28 flex items-center justify-center">
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
        <div className="hero overflow-hidden">
          {/* <div className="hero-content text-center flex-col px-4 sm:px-0"> */}
          <div className="w-full py-20 px-5">
            <h1
              className="text-3xl md:text-5xl font-bold text-center"
              data-aos="fade-up"
            >
              Metaverse Alliance
            </h1>
            <div className="mt-5">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10 items-center justify-center"
                data-aos="fade-up"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`Alliance_${i}`}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={`/images/alliance/alliance-${i + 1}.jpg`}
                      alt="themepark"
                      className="rounded-xl w-28 md:w-40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
