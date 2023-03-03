gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 2 });

var timeline = gsap.timeline({});

timeline.to(".wrapper", {
  duration: 60,
  transform: "scale(3.5)",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top ",
    end: "bottom",
    scrub: 3,
    duration: 4,
    ease: "slow",
    toggleActions: "restart none none none",
    pin: true,
  },
});
