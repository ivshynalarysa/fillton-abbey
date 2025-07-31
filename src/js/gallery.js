//document.addEventListener("DOMContentLoaded", function () {
   // const viewAll = document.querySelector('.gallery-btn');
    //const galleryItems = Array.from(document.querySelectorAll('.gallery-list .gallery-item'));
    //const initialVisibleCount = 4;
    //let isExpanded = false;
   // console.log(galleryItems);

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
const galleryItems = document.querySelectorAll('.gallery-item');
console.log (galleryItems)
let countView = 4;
console.log (countView)
function showImages() {
    galleryItems.forEach((item, index) => {
        if 
        (index >= countView)
        item.classList.add('hidden');
        console.log (galleryItems)
    });
    console.log (galleryItems)
}
showImages ()
const count = 5;
console.log (count)


