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
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");

// Создание точек пагинации
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("pagination-dot");
  dot.addEventListener("click", () => goToSlide(index));
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll(".pagination-dot");

function showSlide(index) {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Автопрокрутка (можно закомментировать эту часть для отключения автоплей)
let autoPlayInterval = setInterval(nextSlide, 3000); // смена каждые 3 секунды

// Если хочешь, чтобы автоплей останавливался при наведении курсора:
document
  .querySelector(".gallery-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });

document
  .querySelector(".gallery-container")
  .addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 3000);
  });

// Инициализация
showSlide(currentSlide);

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
////slider
