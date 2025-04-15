import "../src/styles.scss";

window.onload = () => {
  console.log("hello world");
  /////////////////////////////////////////////////////////////////////////////    BURGER MENU
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
  /////////////////////////////////////////////////////////////////////////////    BURGER MENU
};

document.addEventListener("DOMContentLoaded", function () {
  /////////////////////////////////////////////////////////////////////////////    изменение языка
  // Получаем элементы
  const link = document.getElementById("about-link");
  const button = document.getElementById("toggle-button");

  // Проверяем, что элементы существуют
  if (!link || !button) {
    console.error("Ошибка: не найдены необходимые элементы!");
    return;
  }

  // Функция переключения
  function toggleLink() {
    // Проверяем текущий href
    const currentHref = link.getAttribute("href");

    if (currentHref === "mainArticleUa.html") {
      // link.textContent = "Text (Ua)";
      link.setAttribute("href", "mainArticleUa.html");
    } else {
      // link.textContent = "Text";
      link.setAttribute("href", "mainArticleUa.html");
    }
  }

  // Назначаем обработчик
  button.addEventListener("click", toggleLink);

  console.log("Скрипт успешно загружен!");
  /////////////////////////////////////////////////////////////////////////////    изменение языка

  ///////////////////////////////////////////////////////////////////////////////   Slider
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const pagination = document.querySelector(".slider-pagination");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  let currentIndex = 0;
  let autoScrollInterval;
  const intervalTime = 5000;

  // Инициализация слайдера
  function initSlider() {
    createPagination();
    updateSlider();
    startAutoScroll();
    setupEventListeners();
  }

  // Создание пагинации
  function createPagination() {
    pagination.innerHTML = "";

    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => goToSlide(index));
      pagination.appendChild(dot);
    });
  }

  // Обновление положения слайдера
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
  }

  // Обновление активной точки пагинации
  function updatePagination() {
    const dots = pagination.querySelectorAll("span");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Переход к конкретному слайду
  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    updateSlider();
    resetAutoScroll();
  }

  // Следующий слайд
  function nextSlide() {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
    resetAutoScroll();
  }

  // Предыдущий слайд
  function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider();
    resetAutoScroll();
  }

  // Автопрокрутка
  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
  }

  // Обработчики событий
  function setupEventListeners() {
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Пауза при наведении
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    // Ресайз окна
    window.addEventListener("resize", updateSlider);
  }

  // Запуск слайдера
  initSlider();
});
