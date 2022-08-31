const navbar = document.querySelector(".nav-bar");
const menuItems = document.querySelectorAll(".menu-item");

navbar.addEventListener("click", (e) => {
  const menuItem = e.target.closest(".menu-item");
  menuItems.forEach((el) => el.classList.remove("active"));
  menuItem.classList.add("active");
  console.log(navbar.offsetHeight);
});

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
