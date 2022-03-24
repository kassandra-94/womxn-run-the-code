"use strict";
let prevButtProject = document.getElementById("prevProject");
let nextButtProject = document.getElementById("nextProject");

let slider1 = document.getElementById("slider");

let slider2 = document.getElementById("slider2");

// sx
function slidingLeftSlider1() {
  anime({
    targets: slider1,
    keyframes: [{ translateX: -1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider2.style.visibility = "visible";
    slider1.style.visibility = "hidden";
  }, 200);
}

function slidingLeftSlider2() {
  anime({
    targets: slider2,
    keyframes: [{ translateX: -1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider1.style.visibility = "visible";
    slider2.style.visibility = "hidden";
  }, 200);
}

//dx
function slidingRightSlider1() {
  anime({
    targets: slider1,
    keyframes: [{ translateX: 1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider2.style.visibility = "visible";
    slider1.style.visibility = "hidden";
  }, 200);

  return;
}
function slidingRightSlider2() {
  anime({
    targets: slider2,
    keyframes: [{ translateX: 1500 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider1.style.visibility = "visible";
    slider2.style.visibility = "hidden";
  }, 200);

  return;
}
// da accorpare
function show() {
  if (slider1.style.visibility === "visible") {
    slidingLeftSlider1();
  } else if (slider2.style.visibility === "visible") {
    slidingLeftSlider2();
  }
}

function showRight() {
  if (slider1.style.visibility === "visible") {
    slidingRightSlider1();
  } else if (slider2.style.visibility === "visible") {
    slidingRightSlider2();
  }
}

prevButtProject.addEventListener("click", show);
nextButtProject.addEventListener("click", showRight);

//const proof = document.getElementById("proof");
//proof.style.transform = "translateY(" + 0 + "px)";

// NAME SLIDING
const prevButtonSlideNames = document.getElementById("prevButtonSlideNames");
const nextButtonSlideNames = document.getElementById("nextButtonSlideNames");

let slider_groups = document.getElementById("slider_groups");
let slider_groups2 = document.getElementById("slider_groups2");

// sx
function slide_groupsLeft1() {
  anime({
    targets: slider_groups,
    keyframes: [{ translateX: -2000 }, { translateX: 0 }],
    duration: 1000,
    easing: "linear",
  });
  setTimeout(() => {
    slider_groups2.style.visibility = "visible";
    slider_groups.style.visibility = "hidden";
  }, 200);

  return;
}
function slide_groupsLeft2() {
  anime({
    targets: slider_groups2,
    keyframes: [{ translateX: -2000 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider_groups.style.visibility = "visible";
    slider_groups2.style.visibility = "hidden";
  }, 200);

  return;
}
//dx
function slide_groupsLeft1() {
  anime({
    targets: slider_groups,
    keyframes: [{ translateX: 2000 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider_groups2.style.visibility = "visible";
    slider_groups.style.visibility = "hidden";
  }, 200);

  return;
}
function slide_groupsLeft2() {
  anime({
    targets: slider_groups2,
    keyframes: [{ translateX: 2000 }, { translateX: 0 }],
    duration: 1000,
    easing: "easeInOutCubic",
  });
  setTimeout(() => {
    slider_groups.style.visibility = "visible";
    slider_groups2.style.visibility = "hidden";
  }, 200);

  return;
}
// da accorpare
function showSliderGroupLeft() {
  if (slider_groups.style.visibility === "visible") {
    slide_groupsLeft1();
  } else if (slider_groups2.style.visibility === "visible") {
    slide_groupsLeft2();
  }
}

function showSliderGroupRight() {
  if (slider_groups.style.visibility === "visible") {
    slide_groupsLeft1();
  } else if (slider_groups2.style.visibility === "visible") {
    slide_groupsLeft2();
  }
}

prevButtonSlideNames.addEventListener("click", showSliderGroupLeft);
nextButtonSlideNames.addEventListener("click", showSliderGroupRight);

anime({
  targets: "#proof",
  keyframes: [
    { translateX: 300 },
    { background: "#F633FF" },

    { translateX: 0 },
    { translateY: 300 },
    { background: "rgb(156, 163, 175)" },
    { translateY: 0 },
  ],
});
