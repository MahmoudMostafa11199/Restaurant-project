import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function IconSlider() {
  return (
    <section className="featured-brands py-5">
      <div className="container text-center">
        <Swiper
          slidesPerView="5"
          loop={true}
          centeredSlides={true}
          speed={5000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper-container"
        >
          <SwiperSlide>
            <img
              className="swiper-logo"
              src="/images/icon-slider/logo-1.png"
              alt="Circle brand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-logo"
              src="/images/icon-slider/logo-2.png"
              alt="Earth 2.0 brand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-logo"
              src="/images/icon-slider/logo-3.png"
              alt="Goldline brand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-logo"
              src="/images/icon-slider/logo-4.png"
              alt="Line AI brand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-logo"
              src="/images/icon-slider/logo-5.png"
              alt="UTOSIA brand"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default IconSlider;

// <div class="swiper">
//   <div class="swiper-wrapper">
//     <div class="swiper-slide">
//       <img
//         class="swiper-logo"
//         src="/images/icon-slider/logo-1.png"
//         alt="Circle brand"
//       />
//     </div>
//     <div class="swiper-slide">
//       <img
//         class="swiper-logo"
//         src="/images/icon-slider/logo-2.png"
//         alt="Earth 2.0 brand"
//       />
//     </div>
//     <div class="swiper-slide">
//       <img
//         class="swiper-logo"
//         src="/images/icon-slider/logo-3.png"
//         alt="Goldline brand"
//       />
//     </div>
//     <div class="swiper-slide">
//       <img
//         class="swiper-logo"
//         src="/images/icon-slider/logo-4.png"
//         alt="Line AI brand"
//       />
//     </div>
//     <div class="swiper-slide">
//       <img
//         class="swiper-logo"
//         src="/images/icon-slider/logo-5.png"
//         alt="UTOSIA brand"
//       />
//     </div>
//   </div>
// </div>
