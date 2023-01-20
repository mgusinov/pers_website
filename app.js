const menuIcon = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("show");
  nav.classList.toggle("open");
});
