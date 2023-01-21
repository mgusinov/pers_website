const toggleButton = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector("#navmenu");

toggleButton.addEventListener("click", () => {
  navbarNav.classList.toggle("collapse");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleButton.click();
  });
});
