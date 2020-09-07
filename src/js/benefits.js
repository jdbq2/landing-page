const benefit1 = document.getElementById("benefit1");
const benefit2 = document.getElementById("benefit2");
const benefit3 = document.getElementById("benefit3");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth >= 770) {
  gsap.from(benefit1, {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: benefit1,
      start: "top 80%",
    },
  });
  gsap.from(benefit2, {
    duration: 1,
    opacity: 0,
    delay: 0.3,
    y: 100,
    scrollTrigger: {
      trigger: benefit2,
      start: "top 80%",
    },
  });
  gsap.from(benefit3, {
    duration: 1,
    opacity: 0,
    delay: 0.6,
    y: 100,
    scrollTrigger: {
      trigger: benefit3,
      start: "top 80%",
    },
  });
} else {
  gsap.from(benefit1, {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: benefit1,
      start: "top 80%",
    },
  });
  gsap.from(benefit2, {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: benefit2,
      start: "top 80%",
    },
  });
  gsap.from(benefit3, {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: benefit3,
      start: "top 80%",
    },
  });
}
