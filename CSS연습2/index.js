const toggle__menu = document.querySelector(".toggle__menu");
const toogle__sideBar = document.querySelector(".toogle__sideBar")

function toggleSidebar() {
  toggle__menu.classList.toggle("active");
  toogle__sideBar.classList.toggle("active");
}
