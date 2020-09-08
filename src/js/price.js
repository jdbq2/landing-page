import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const priceTitle = document.getElementById("pricetitle");
const priceSubtitle = document.getElementById("pricesubtitle");
const priceCard = document.getElementById("pricecard");

gsap.registerPlugin(ScrollTrigger);

gsap.from(priceCard, {
  duration: 1,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: priceCard,
    start: "top 80%",
  },
});

gsap.from(priceTitle, {
  duration: 1,
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: priceTitle,
    start: "top 80%",
  },
});
gsap.from(priceSubtitle, {
  duration: 1,
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: priceSubtitle,
    start: "top 70%",
  },
});
