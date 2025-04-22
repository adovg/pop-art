import "../src/styles.scss";

function switchLanguage(lang) {
  const link = document.getElementById("about-link");
  if (!link) return;

  if (lang === "ua") {
    link.href = "./mainArticleUa.html";
  } else {
    link.href = "./mainArticle.html";
  }
  localStorage.setItem("selectedLang", lang);
}
document.getElementById("lang-btn").addEventListener("click", () => {
  switchLanguage("ua");
});
window.onload = () => {
  const savedLang = localStorage.getItem("selectedLang");
  if (savedLang) {
    switchLanguage(savedLang);
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
