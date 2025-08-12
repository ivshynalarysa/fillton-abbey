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


document.addEventListener ('DOMContentLoaded', () => {
    initSwiperIfMobile ();
});
window.addEventListener('resize', () => {
    initSwiperIfMobile();
})
   // });
//}

  
    
    
    
    
    
    
    

//document.addEventListener("DOMContentLoaded", function () {
//function galleryDesktop() {
 //   const isDesktop = window.innerWidth >= 768;
 //if (isDesktop) {
//const viewAll = document.querySelector('.gallery-btn');
//const galleryItems = Array.from(document.querySelectorAll('.gallery-list .gallery-item'));
//const initialVisibleCount = 4;
//let isExpanded = false;
//console.log(galleryItems);

// }

//}
   // 

   // function updateGallery() {
       // galleryItems.forEach((item, index) => {
        //    if (isExpanded || index < initialVisibleCount) {
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
//function showImages() {
   // galleryItems.forEach((item, index) => {
   //     if 
   //     (index >= countView)
   //     item.classList.add('hidden');
   //     console.log (galleryItems)
   // });
   // console.log (galleryItems)
//}
//showImages ()
//const count = 5;
//console.log (count)


