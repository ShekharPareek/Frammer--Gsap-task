gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 2 });

var timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top ",
    // end: "200%",
    end: "bottom",
    scrub: 1,
    duration: 4,
    ease: "slow",
    // toggleActions: "restart none none none",
    pin: ".container",
  },
});
timeline.to(".wrapper", {
  duration: 90,
  transform: "scale(3.5)",
});
