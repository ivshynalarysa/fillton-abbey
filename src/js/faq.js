import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const accordionElement = document.querySelector(".faq-accordion");
  const accordion = new Accordion(accordionElement, {
    duration: 300,
    showMultiple: true,
    onOpen: function (currentElement, allElements) {
      console.log("Opened:", currentElement);
    }
  });
})
 
