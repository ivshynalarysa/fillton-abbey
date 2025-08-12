import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';



function initSwiperReviews() {


  const swiperReviews = new Swiper('.swiperReviews', {
    modules: [Navigation],

        slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
      });
    }

document.addEventListener ('DOMContentLoaded', () => {
    initSwiperReviews ();
});
