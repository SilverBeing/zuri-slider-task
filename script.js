const slider = document.querySelector(".images-container");
const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector(".slider-button-left");
const arrowRight = document.querySelector(".slider-button-right");

// this checks the position of each slide
let counter = 1;

const totalSlides = sliderImages.length;

// Size of each slide
const size = sliderImages[0].clientWidth;

// the next button
arrowRight.addEventListener("click", () => {
  if (counter == totalSlides - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slider.style = "transform:translateX(" + -size * counter + "px)";
});
// the previous button
arrowLeft.addEventListener("click", () => {
  if (counter == 0) {
    counter = 5;
  } else {
    counter--;
  }
  slider.style = "transform:translateX(" + -size * counter + "px)";
});
