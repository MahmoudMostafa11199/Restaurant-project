'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Swiper from 'swiper/bundle';

import 'swiper/css';

function IconSlider() {
  useEffect(() => {
    new Swiper('.swiper', {
      slidesPerView: 5,
      loop: true,
      centeredSlides: true,
      speed: 5000,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <section className="featured-brands py-5">
      <div className="container text-center">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                className="swiper-logo"
                src="/images/feature-brand/logo-1.png"
                alt="Circle brand"
                width={100}
                height={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                className="swiper-logo"
                src="/images/feature-brand/logo-2.png"
                alt="Earth 2.0 brand"
                width={100}
                height={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                className="swiper-logo"
                src="/images/feature-brand/logo-3.png"
                alt="Goldline brand"
                width={100}
                height={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                className="swiper-logo"
                src="/images/feature-brand/logo-4.png"
                alt="Line AI brand"
                width={100}
                height={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                className="swiper-logo"
                src="/images/feature-brand/logo-5.png"
                alt="UTOSIA brand"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconSlider;
