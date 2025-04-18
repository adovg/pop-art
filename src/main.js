import "../src/styles.scss";

window.onload = () => {
  console.log("hello world");
  ///////////////////////////////////////////////////////////////////////////    BURGER MENU
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");
  const accordion = document.getElementsByClassName("tab");

  burgerBtn.onclick = function () {
    burgerBtn.classList.toggle("active");
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
    burgerBtn.classList.remove("active");
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("hidden");
  }
  ///////////////////////////////////////////////////////////////////////////    BURGER MENU
};

document.addEventListener("DOMContentLoaded", function () {
  ///////////////////////////////////////////////////////////////////////////    изменение языка
  // // Получаем элементы
  // const link = document.getElementById("about-link");
  // const button = document.getElementById("toggle-button");
  // // Проверяем, что элементы существуют
  // if (!link || !button) {
  //   console.error("Ошибка: не найдены необходимые элементы!");
  //   return;
  // }
  // // Функция переключения
  // function toggleLink() {
  //   // Проверяем текущий href
  //   const currentHref = link.getAttribute("href");
  //   if (currentHref === "mainArticleUa.html") {
  //     // link.textContent = "Text (Ua)";
  //     link.setAttribute("href", "mainArticleUa.html");
  //   } else {
  //     // link.textContent = "Text";
  //     link.setAttribute("href", "mainArticleUa.html");
  //   }
  // }
  // // Назначаем обработчик
  // button.addEventListener("click", toggleLink);
  // console.log("Скрипт успешно загружен!");
  ///////////////////////////////////////////////////////////////////////////    изменение языка
});
