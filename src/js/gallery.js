import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

let swiperInstance = null;
const viewAllBtn = document.querySelector('.gallery-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const step = 4;
let visibleCount = step;
let isExpanded = false; //чи розгорнута галерея
console.log(galleryItems);


function initSwiperIfMobile() {
const isMobile = window.innerWidth <= 767;
if (isMobile && !swiperInstance) {
  swiperInstance = new Swiper('.swiperGallery', {
    modules: [Pagination],
      spaceBetween: 20,
      speed: 400,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,},
    slidesPerView: 1,
    loop: true,
      });
      galleryItems.forEach(item => item.classList.remove('hidden'));
      viewAllBtn.style.display = 'none';}
      else
        if (!isMobile && swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
        }
        console.log (galleryItems);
    }

function showImages() {
  if (window.innerWidth > 767) {
       galleryItems.forEach((item, index) => {
       if 
       (index < visibleCount) { 
        item.classList.remove('hidden');
        console.log (galleryItems)
       }
       else {
        item.classList.add('hidden');
       }
      });

      if (visibleCount >= galleryItems.length) {
        viewAllBtn.textContent = 'Show less'
        isExpanded = true;
      }
      else {
        viewAllBtn.textContent = 'View all';
        isExpanded = false;
      }
      viewAllBtn.style.display = 'block';
  }
  
}

function handleButtonClick() {
  if (!isExpanded) {
    visibleCount += step;
    if (visibleCount >= galleryItems.length) {
      visibleCount = galleryItems.length;
    }
    else { //Якщо розгорнуто – повертаємо до 4 фото
      visibleCount = step;
    }
    showImages();
  }
}




document.addEventListener ('DOMContentLoaded', () => {
    initSwiperIfMobile ();
    showImages ();
    viewAllBtn.addEventListener('click', handleButtonClick)
});

window.addEventListener('resize', () => {
    initSwiperIfMobile();
    if (!swiperInstance) {
      showImages();
    }
})
   