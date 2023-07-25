import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const Partners = (): JSX.Element => {
  const sliderOpts = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="hero py-20 bg-primary-content overflow-hidden"
      id="partners"
    >
      <div className="hero-content text-center flex-col">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-20">Partners</h1>
          <Slider {...sliderOpts}>
            {Array.from({ length: 27 }).map((_, i) => (
              <div
                key={i}
                className="mx-auto px-4 btn btn-neutral h-auto flex items-center justify-center"
              >
                <img
                  src={`/images/partners/partner-${i + 1}.png`}
                  alt="..."
                  className="w-full h-20 cursor-pointer transform hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-screen mt-40">
          <h1 className="text-5xl font-bold">Metaverse Alliance</h1>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5 py-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`Alliance_${i}`}>
                  <img
                    src={`/images/alliance/alliance-${i + 1}.jpg`}
                    alt="themepark"
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-screen mt-40">
          <h1 className="text-5xl font-bold">Investment & Market Making</h1>
          <div className="mt-5 flex justify-center py-10 ">
            <div className="btn btn-neutral w-40 h-20">
              <img src="/images/dwf.png" alt="dwf" className="w-full h-auto" />{' '}
            </div>
          </div>
        </div>
        <div className="w-screen mt-40 max-w-6xl" id="exchanges">
          <h1 className="text-5xl font-bold">Exchanges</h1>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5 py-10">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`Alliance_${i}`} className="btn btn-neutral h-20">
                  <img
                    src={`/images/exchanges/exchange-${i + 1}.png`}
                    alt="themepark"
                    // className="rounded-xl"
                    style={{ width: 160, height: 60 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
