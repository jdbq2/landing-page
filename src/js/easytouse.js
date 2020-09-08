import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const easyToUseTitle = document.getElementById("easytousetitle");
const easyToUseText = document.getElementById("easytousetext");
const easyToUseButton = document.getElementById("easytousebutton");
const easyToUseSvg = document.getElementById("easytousesvg");

gsap.registerPlugin(ScrollTrigger);

gsap.from(easyToUseTitle, {
  duration: 1,
  opacity: 0,
  ease: "power3.Out",
  y: -100,
  scrollTrigger: {
    trigger: easyToUseTitle,
    start: "top 80%",
  },
});
gsap.from(easyToUseText, {
  duration: 1,
  opacity: 0,
  ease: "power3.Out",
  y: 100,
  scrollTrigger: {
    trigger: easyToUseText,
    start: "top 80%",
  },
});
gsap.from(easyToUseButton, {
  duration: 1,
  opacity: 0,
  delay: 1,
  ease: "power3.Out",
  scrollTrigger: {
    trigger: easyToUseButton,
    start: "top 80%",
  },
});
gsap.from(easyToUseSvg, {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "power3.Out",
  scrollTrigger: {
    trigger: easyToUseSvg,
    start: "top 80%",
  },
});
