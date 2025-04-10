import '../src/styles.scss';



window.onload = () => {
  console.log('hello world')
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

 
};
