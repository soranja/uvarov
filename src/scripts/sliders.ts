import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#hersones-splide", {
    perPage: 1,
    perMove: 1,
    pagination: false,
  }).mount();
});
