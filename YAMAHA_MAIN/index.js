/*== left toggle bar ==*/
const toggleIcon = document.querySelector(".toggle__icon");
const toggleSideBar = document.querySelector(".toggle__sideBar");

toggleIcon.addEventListener("click", () => {
  toggleSideBar.classList.toggle("active");
  toggleIcon.classList.toggle("active");
});

/*== main drop down bar ==*/

/*== img1 text ==*/
let imgText = document.querySelector("#RevsYourHeart");
window.addEventListener("scroll", function () {
  let scrollY__Value = window.scrollY;
  console.log("scrollY", scrollY__Value);
  if (scrollY__Value > 300) {
    imgText.style.animation = "textSlide__disappear 1s ease-out forwards";
  } else {
    imgText.style.animation = "textSlide 1s ease-out";
  }
});
