const navbar = document.querySelector(".nav-bar");
const menuItems = document.querySelectorAll(".menu-item");
const burgerMenu = document.querySelector(".burger-menu");

navbar.addEventListener("click", (e) => {
  const menuItem = e.target.closest(".menu-item");
  menuItems.forEach((el) => el.classList.remove("active"));
  menuItem.classList.add("active");
  navbar.classList.remove("open");
});

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
