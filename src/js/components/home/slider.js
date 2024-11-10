import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.insight__slider-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const usePartnersSlider = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (
      breakpoint,
      swiperClass,
      swiperSettings,
      callback,
    ) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      };

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener('change', checker);
      checker();
    };

    resizableSwiper('(max-width: 576px)', '.partners__slider', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      disableOnInteraction: false,
      loop: true,
      speed: 2000,
      autoplay: {
        enabled: true,
        delay: 0,
      },
    });
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 32,
    pagination: {
      el: '.hero__slider-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      576: {
        centeredSlides: false,
        slidesPerView: 'auto',
        initialSlide: 0,
      },
    },
  });
};
export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: '.team__slider-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      576: {
        centeredSlides: false,
        slidesPerView: 'auto',
      },
    },
  });
};
