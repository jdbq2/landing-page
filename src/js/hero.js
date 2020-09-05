import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const heroForm = document.getElementById("heroForm");
const heroConditions = document.getElementById("heroConditions");
const heroSvg = document.getElementById("heroSvg");

gsap.from([heroTitle, heroText], {
  duration: 1.5,
  ease: "power3.Out",
  opacity: 0,
  y: -100,
  stagger: {
    ammount: 1,
  },
});
gsap.from([heroForm, heroConditions], {
  duration: 1,
  ease: "power3.Out",
  x: -100,
  opacity: 0,
  stagger: {
    ammount: 1,
  },
  scrollTrigger: {
    trigger: heroForm,
    start: "top 80%",
  },
});
gsap.from(heroSvg, {
  duration: 1,
  ease: "power3.Out",
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: heroSvg,
    start: "top 80%",
  },
});
