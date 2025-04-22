import "../src/styles.scss";
import translations from "./lang.js";

function applyLanguage(lang) {
  const link = document.getElementById("about-link");
  const langBtn = document.getElementById("lang-btn");

  // Смена ссылки
  if (link) {
    link.href = lang === "ua" ? "./mainArticleUa.html" : "./mainArticle.html";
  }

  // Смена текста на кнопке
  if (langBtn) {
    langBtn.textContent = lang === "ua" ? "EN" : "UA";
  }

  // Перевод всех элементов с data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translatedText =
      translations[lang]?.[key] || translations["default"][key] || key;
    el.textContent = translatedText;
  });

  // Сохраняем язык
  localStorage.setItem("selectedLang", lang);
}
window.onload = () => {
  const savedLang = localStorage.getItem("selectedLang") || "default";
  applyLanguage(savedLang);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const currentLang = localStorage.getItem("selectedLang") || "default";
      const newLang = currentLang === "ua" ? "default" : "ua";
      applyLanguage(newLang);
    });
  }
  ///////////////////////////////////////////////////////////////////////////    BURGER MENU
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");

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
