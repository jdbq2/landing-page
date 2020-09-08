import gsap from "gsap";

const MENU = document.getElementById("header");
const MENU_BUTTON = document.getElementById("mobileMenu");
const WINDOW = window;
const LINE1 = document.getElementById("item1");
const LINE3 = document.getElementById("item3");
const LINK1 = document.getElementById("link1");
const LINK2 = document.getElementById("link2");
const LINK3 = document.getElementById("link3");
let itsOpen = false;

WINDOW.addEventListener("resize", handleResize);

if (window.innerWidth <= 1000) {
  MENU.style.left = "-1000px";
  MENU_BUTTON.addEventListener("click", handleMenuClick);
  LINK1.addEventListener("click", handleMenuClick);
  LINK2.addEventListener("click", handleMenuClick);
  LINK3.addEventListener("click", handleMenuClick);
} else {
  MENU_BUTTON.removeEventListener("click", handleMenuClick);
  LINK1.removeEventListener("click", handleMenuClick);
  LINK2.removeEventListener("click", handleMenuClick);
  LINK3.removeEventListener("click", handleMenuClick);
}

function handleResize(e) {
  if (e.target.outerWidth <= 1000) {
    itsOpen ? (MENU.style.left = "0px") : (MENU.style.left = "-1000px");
    MENU_BUTTON.addEventListener("click", handleMenuClick);
    LINK1.addEventListener("click", handleMenuClick);
    LINK2.addEventListener("click", handleMenuClick);
    LINK3.addEventListener("click", handleMenuClick);
  } else {
    MENU_BUTTON.removeEventListener("click", handleMenuClick);
    LINK1.removeEventListener("click", handleMenuClick);
    LINK2.removeEventListener("click", handleMenuClick);
    LINK3.removeEventListener("click", handleMenuClick);
  }
}

function handleMenuClick() {
  itsOpen = !itsOpen;
  if (itsOpen) {
    gsap.to(MENU, {
      duration: 1,
      ease: "back",
      css: {
        left: 0,
      },
    });
    gsap.to(LINE1, {
      duration: 1,
      css: {
        y: 200,
      },
    });
    gsap.to(LINE3, {
      duration: 1,
      css: {
        css: {
          y: -200,
        },
      },
    });
  } else {
    gsap.to(MENU, {
      duration: 1,
      ease: "power3.Out",
      css: {
        left: -1000,
      },
    });
    gsap.to(LINE1, {
      duration: 1,
      css: {
        y: 0,
      },
    });
    gsap.to(LINE3, {
      duration: 1,
      css: {
        y: 0,
      },
    });
  }
}
