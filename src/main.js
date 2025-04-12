import "../src/styles.scss";

window.onload = () => {
  console.log("hello world");
  // const burgerBtn = document.querySelector(".burger__btn");
  // const menuMobile = document.querySelector(".menu-mobile");
  // const accordion = document.getElementsByClassName("tab");

  // burgerBtn.onclick = function () {
  //   burgerBtn.classList.toggle("active");
  //   hideMenu();
  // };

  // menuMobile.onclick = function () {
  //   hideMenu();
  //   burgerBtn.classList.remove("active");
  // };

  // function hideMenu() {
  //   const menuMobile = document.querySelector(".menu-mobile");
  //   menuMobile.classList.toggle("hidden");
  // }
};

///slider
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");

  let slideIndex = 0;
  const slides = Array.from(sliderContainer.querySelectorAll(".slide"));
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    showSlide(slideIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  showSlide(slideIndex);
});

////slider
