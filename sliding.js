"use strict";
const prevButtProject = document.getElementById("prevProject");
const nextButtProject = document.getElementById("nextProject");

let slider1 = document.getElementById("slider");
let slider2 = document.getElementById("slider2");

const prevButtonSlideNames = document.getElementById("prevButtonSlideNames");
const nextButtonSlideNames = document.getElementById("nextButtonSlideNames");

let slider_groups = document.getElementById("slider_groups");
let slider_groups2 = document.getElementById("slider_groups2");

function slidetoTheRight(obj, obj2) {
  anime({
    targets: obj,
    keyframes: [{ translateX: 1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    obj2.style.visibility = "visible";
    obj.style.visibility = "hidden";
  }, 200);
}

function slidetoTheLeft(obj, obj2) {
  anime({
    targets: obj,
    keyframes: [{ translateX: -1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    obj2.style.visibility = "visible";
    obj.style.visibility = "hidden";
  }, 200);
}

function setTheRightSlider(carousel1, carousel2) {
  if (carousel1.style.visibility === "visible") {
    console.log(carousel1);
    slidetoTheRight(carousel1, carousel2);
  } else if (carousel2.style.visibility === "visible") {
    slidetoTheRight(carousel2, carousel1);
  }
}

nextButtProject.addEventListener("click", () => {
  setTheRightSlider(slider1, slider2);
});
prevButtProject.addEventListener("click", () => {
  setTheRightSlider(slider1, slider2);
});

prevButtonSlideNames.addEventListener("click", () => {
  setTheRightSlider(slider_groups, slider_groups2);
});
nextButtonSlideNames.addEventListener("click", () => {
  setTheRightSlider(slider_groups, slider_groups2);
});
