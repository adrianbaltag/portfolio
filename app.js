let tl = gsap.timeline({ duration: 1 });

tl.from(".nav-link", {
  opacity: 0,
  ease: "back",
  stagger: 0.3,
  x: 20,
});
tl.from(".iconss", { opacity: 0, ease: "back", stagger: 0.3, y: 10 }, "-=.7")
  .to(".iconss", {
    duration: 2,
    autoAlpha: 0.7,
    yoyo: true,
    repeat: -1,
    ease: "rough",
    stagger: 0.3,
  })
  .from("h1", { opacity: 0, y: 20 }, "-=2.4")
  .to(".box", {
    duration: 1,
    width: "17vw",
    delay: 0.3,
    ease: "power4.inOut",
  })
  .from("hi", {
    duration: 1,
    y: "7vw",
    ease: "power3.out",
    onComplete: () => masterTL.play(),
  })
  .to(".box", { duration: 1, height: "7vw", ease: "elastic.out" })
  .to(".box", {
    duration: 2,
    autoAlpha: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "rough",
  });

// .from(".inner-content", {opacity: 0, x: 10, stagger: .3}, "-=1.8")

const words = ["Adrian.", "A Developer.", "A Designer."];
let cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});

let masterTL = gsap.timeline({ repeat: -1 }).pause();
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word });
  masterTL.add(tl);
});

// gsap scroll trigger cards
gsap.registerPlugin(ScrollTrigger);
gsap.from(".card", {
    x: -100, duration: 3, opacity: 0, stagger: 1, ease: "back",
    scrollTrigger: {
        trigger: ".card",
        start: "top 30%",
        end: "center 15%",
        toggleActions: "restart none none none"
       
    }
})
