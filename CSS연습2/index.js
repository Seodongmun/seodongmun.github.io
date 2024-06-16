const toggleIcon = document.querySelector(".toggle__icon");
const toggleSideBar = document.querySelector(".toggle__SideBar")

toggleIcon.addEventListener('click', () => {
  toggleSideBar.classList.toggle("active");
  toggleIcon.classList.toggle("active");
});



















let imgText = document.querySelector("#RevsYourHeart")

window.addEventListener('scroll', function () {
  let scrollY__Value = window.scrollY
  console.log("scrollY",scrollY__Value);
  if (scrollY__Value > 550) {
    imgText.style.animation = "disappear 1s ease-out forwards";
  } else {
    imgText.style.animation = "textSlide 1s ease-out"
  }
});