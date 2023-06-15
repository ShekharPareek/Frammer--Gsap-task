gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 5 });

var timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top ",
    end: "bottom",
    scrub: 2,
    duration: 20,
    ease: "slow",
    pin: ".container",
  },
});
timeline.to(".wrapper", {
  duration: 120,
  transform: "scale(3.5)",
});
