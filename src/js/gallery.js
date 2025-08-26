import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

let swiperInstance = null;
const viewAllBtn = document.querySelector('.gallery-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery-list .gallery-item'));
const step = 2;
let visibleCount = step;
let isExpanded = false; //чи розгорнута галерея
console.log(galleryItems);


function initSwiperIfMobile() {
const isMobile = window.innerWidth <= 767;
if (isMobile && !swiperInstance) {
  swiperInstance = new Swiper('.swiperGallery', {
    modules: [Pagination, EffectFade],
      effect: "fade",
      fadeEffect: {
      crossFade: true,
      },
      pagination: {
      el: ".swiper-pagination",
      clickable: true,},
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
         // Поява фото по черзі від першого
          if (item.classList.contains('hidden')) {
              setTimeout(() => {
              item.classList.remove('hidden');
              },
        (index % step) * 150);
        console.log (galleryItems)
       }
      }
      else {
         // Зникнення фото по черзі з кінця
          if (!item.classList.contains('hidden')) {
              const delayIndex = (galleryItems.length - 1 - index) % step;
              setTimeout(() => {
              item.classList.add('hidden');
              }, 
              delayIndex * 150);
       }
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
    const previousVisibleCount = visibleCount;
    visibleCount += step;
    if (visibleCount >= galleryItems.length) {
      visibleCount = galleryItems.length;
    }

    showImages();

    // Прокрутка до першого нового відкритого фото
    const firstNewItem = galleryItems[visibleCount];
    if (firstNewItem) {
      const itemTop = firstNewItem.getBoundingClientRect().top + window.pageYOffset;
      const offset = 160;

      window.scrollTo({
        top: itemTop - offset,
        behavior: 'smooth'
      });
    }
  } else {
    visibleCount = step;

    // Прокрутка до першого фото при "Показати менше"
    const firstItem = galleryItems[0];
    const itemTop = firstItem.getBoundingClientRect().top + window.pageYOffset;
    const offset = 120;

    window.scrollTo({
      top: itemTop - offset,
      behavior: 'smooth'
    });

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
   