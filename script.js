const slider = document.querySelector(".images-container");
const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector(".slider-button-left");
const arrowRight = document.querySelector(".slider-button-right");
let counter = 1;
const totalSlides = sliderImages.length;
const size = sliderImages[0].clientWidth;
slider.style = "transform:translateX(" + -size * counter + "px)";
arrowRight.addEventListener("click", () => {
  if (counter >= totalSlides) return;
  slider.style = "transition:transform 250ms ease-in-out";
  counter++;
  slider.style = "transform:translateX(" + -size * counter + "px)";
  if (counter >= totalSlides) {
    counter = 0;
  }

  console.log("clicked");
  console.log(size);
  console.log(counter);
  console.log(slider);
  console.log(totalSlides);
});
arrowLeft.addEventListener("click", () => {
  slider.style = "transition:transform 250ms ease-in-out";
  counter--;
  slider.style = "transform:translateX(" + -size * counter + "px)";
  //   if (counter >= totalSlides) {
  //     counter = 6;
  //   }
  //   for (i = 0; i < sliderImages.length; i++) {
  //     counter = totalSlides - 1;
  //   }
  console.log("clicked");
  console.log(counter);
});
