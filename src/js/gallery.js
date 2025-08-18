import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

let swiperInstance = null;
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
    }


}

const isDesktop = window.innerWidth > 768;
 
const viewAll = document.querySelector('.gallery-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const countView = 4;
let isExpanded = false;
console.log(galleryItems);

function showImages() {
   galleryItems.forEach((item, index) => {
       if 
       (index >= countView)
        item.classList.add('hidden');
        console.log (galleryItems)
    });
    
}




document.addEventListener ('DOMContentLoaded', () => {
    initSwiperIfMobile ();
    showImages ();
});
window.addEventListener('resize', () => {
    initSwiperIfMobile();
})
   // });
//}

  
    
    
    
    
    
    
    









   // function updateGallery() {
       // galleryItems.forEach((item, index) => {
        //    if ( isDesktop || isExpanded || index < initialVisibleCount) {
        //        item.classList.add('show');
         //       item.classList.remove('hidden');
         //   } else {
         //       item.classList.add('hidden');
          //      item.classList.remove('show');
         //   }
       // });

        //viewAll.textContent = isExpanded ? "Show Less" : "View All";
   // }

    //viewAll.addEventListener('click', () => {
     //   isExpanded = !isExpanded;
     //   updateGallery();
    //});

    //updateGallery(); // Initial render
//});
//const galleryItems = document.querySelectorAll('.gallery-item');
//console.log (galleryItems)
//let countView = 4;
//console.log (countView)
//
//showImages ()
//const count = 5;
//console.log (count)


