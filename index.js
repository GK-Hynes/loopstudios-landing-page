const mobileMenu = document.getElementById("mobileMenu");
const menuOpenButton = document.getElementById("menuOpenButton");
const menuCloseButton = document.getElementById("menuCloseButton");

function openMenu() {
  mobileMenu.classList.remove("closed");
  mobileMenu.classList.add("open");
  menuOpenButton.classList.remove("open");
  menuOpenButton.classList.add("closed");
  menuCloseButton.classList.add("open");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.classList.add("closed");
  menuOpenButton.classList.add("open");
  menuCloseButton.classList.remove("open");
  menuCloseButton.classList.add("closed");
}

menuOpenButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
