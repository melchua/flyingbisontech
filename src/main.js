import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/section.css";
import "../styles/components/hamburger-menu.css";
import "../styles/utils.css";

// menu interaction
const hamburger = document.querySelector(".header__bars");
const menu = document.querySelector(".hamburger-menu");
const close = document.querySelector(".hamburger-menu__header_close");
const menuItems = document.querySelectorAll(".hamburger-menu__menu-item");

function toggleMenu() {
  if (menu.classList.contains("hamburger-menu-show")) {
    menu.classList.remove("hamburger-menu-show");
  } else {
    menu.classList.add("hamburger-menu-show");
    console.log("add");
  }
}

hamburger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
