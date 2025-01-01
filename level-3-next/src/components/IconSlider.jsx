'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const logos = [
  { src: '/images/feature-brand/logo-1.png', alt: 'Circle brand' },
  { src: '/images/feature-brand/logo-2.png', alt: 'Earth 2.0 brand' },
  { src: '/images/feature-brand/logo-3.png', alt: 'Goldline brand' },
  { src: '/images/feature-brand/logo-4.png', alt: 'Line AI brand' },
  { src: '/images/feature-brand/logo-5.png', alt: 'UTOSIA brand' },
];

function IconSlider() {
  useEffect(() => {
    new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 5,
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: 1,
      },
      // breakpoints: {
      //   1024: {
      //     perPage: 3,
      //   },
      //   768: {
      //     perPage: 2,
      //   },
      //   576: {
      //     perPage: 3,
      //   },
      // },
    }).mount({ AutoScroll });
  }, []);

  return (
    <section className="featured-brands py-5">
      <div className="container text-center">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {logos.map((logo, index) => (
                <li key={index} className="splide__slide">
                  <Image
                    className="splide-logo"
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={100}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconSlider;

/* 'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Swiper from 'swiper/bundle';

const logos = [
  { src: '/images/feature-brand/logo-1.png', alt: 'Circle brand' },
  { src: '/images/feature-brand/logo-2.png', alt: 'Earth 2.0 brand' },
  { src: '/images/feature-brand/logo-3.png', alt: 'Goldline brand' },
  { src: '/images/feature-brand/logo-4.png', alt: 'Line AI brand' },
  { src: '/images/feature-brand/logo-5.png', alt: 'UTOSIA brand' },
];

function IconSlider() {
  useEffect(() => {
    new Swiper('.swiper', {
      slidesPerView: 5,
      loop: true,
      centeredSlides: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: true,
    });
  }, []);

  return (
    <section className="featured-brands py-5">
      <div className="container text-center">
        <div className="swiper">
          <div className="swiper-wrapper">
            {logos.map((logo, index) => (
              <div key={index} className="swiper-slide">
                <Image
                  className="swiper-logo"
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconSlider;

// <div className="swiper-slide">
//   <Image
//     className="swiper-logo"
//     src="/images/feature-brand/logo-1.png"
//     alt="Circle brand"
//     width={100}
//     height={100}
//   />
// </div>
// <div className="swiper-slide">
//   <Image
//     className="swiper-logo"
//     src="/images/feature-brand/logo-2.png"
//     alt="Earth 2.0 brand"
//     width={100}
//     height={100}
//   />
// </div>
// <div className="swiper-slide">
//   <Image
//     className="swiper-logo"
//     src="/images/feature-brand/logo-3.png"
//     alt="Goldline brand"
//     width={100}
//     height={100}
//   />
// </div>
// <div className="swiper-slide">
//   <Image
//     className="swiper-logo"
//     src="/images/feature-brand/logo-4.png"
//     alt="Line AI brand"
//     width={100}
//     height={100}
//   />
// </div>
// <div className="swiper-slide">
//   <Image
//     className="swiper-logo"
//     src="/images/feature-brand/logo-5.png"
//     alt="UTOSIA brand"
//     width={100}
//     height={100}
//   />
// </div>
 */
