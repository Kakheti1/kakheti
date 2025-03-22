document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navList = document.querySelector(".nav-list");
  const menuOverlay = document.getElementById("menu-overlay");

  function toggleMenu() {
    navList.classList.toggle("show");
    burgerMenu.classList.toggle("open");
    menuOverlay.classList.toggle("show");
  }

  burgerMenu.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);
});
