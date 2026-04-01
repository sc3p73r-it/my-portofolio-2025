var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document
    .getElementById("visualmodetogglebuttoncontainer")
    .classList.toggle("visualmodeshow");

  var soundToggle = document.getElementById("soundtogglebuttoncontainer");
  if (soundToggle) {
    soundToggle.classList.toggle("soundmodeshow");
  }
}

function playpause() {
  var switchForSound = document.getElementById("switchforsound");
  if (!audio || !switchForSound) return;
  if (switchForSound.checked === false) {
    audio.pause();
    return;
  }
  audio.play();
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(function (item) {
    item.classList.toggle("invertapplied");
  });
}

window.addEventListener("load", function () {
  if (loader) {
    loader.style.display = "none";
  }
  var helloBadge = document.querySelector(".hey");
  if (helloBadge) {
    helloBadge.classList.add("popup");
  }
});

let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});

console.log(
  "%c Vital Tech Myanmar ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
  if (!mybutton) return;
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);

let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (e) => {
  fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
  fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
  let transformX = pupilStartPoint + fracXValue * pupilRangeX,
    transformY = pupilStartPoint + fracYValue * pupilRangeY;
  pupilsArr.forEach((pupil) => {
    pupil.style.transform = `translate(${transformX}px, ${transformY}px)`;
  });
};

const windowResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);