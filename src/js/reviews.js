import Swiper from "swiper";
import { Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


let swiperInstance = null;
function initSwiperReviews() {
  const isMobile = window.innerWidth <= 767;
  if (isMobile && !swiperInstance) {
    swiperInstance = new Swiper('.swiperReviews', {
    modules: [Navigation],
      speed: 600,
      
      
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
      });
  }
  else {
    if (!isMobile && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
  
    }

document.addEventListener ('DOMContentLoaded', () => {
    initSwiperReviews ();
});
window.addEventListener('resize', () => {
  initSwiperReviews()
})
