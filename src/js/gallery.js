document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const viewAllButton = document.querySelector(".gallery-btn");
    let visibleCount = 4;
    const itemsPerClick = 4;
    let isExpanded = false;
    galleryImages.forEach((img, index) => {
        if (index >= visibleCount) {
            img.classList.add("hidden");
        }
    });

 
});
