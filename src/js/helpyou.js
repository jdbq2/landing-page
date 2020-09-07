import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const helpYouTitle = document.getElementById("helpyoutitle");
const helpYou1 = document.getElementById("helpyou1");
const helpYou2 = document.getElementById("helpyou2");
const helpYou3 = document.getElementById("helpyou3");
const helpYouSvg = document.getElementById("helpyousvg");

gsap.registerPlugin(ScrollTrigger);

gsap.from(helpYouTitle, {
  duration: 1,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: helpYouTitle,
    start: "top 80%",
  },
});
gsap.from(helpYou1, {
  duration: 1,
  opacity: 0,
  x: 100,
  scrollTrigger: {
    trigger: helpYou1,
    start: "top 80%",
  },
});
gsap.from(helpYou2, {
  duration: 1,
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: helpYou2,
    start: "top 80%",
  },
});
gsap.from(helpYou3, {
  duration: 1,
  opacity: 0,
  x: 100,
  scrollTrigger: {
    trigger: helpYou3,
    start: "top 80%",
  },
});
gsap.from(helpYouSvg, {
  duration: 1,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: helpYouSvg,
    start: "top 80%",
  },
});
