gsap.registerPlugin(ScrollTrigger);

/*animation på infografik i midten*/

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero__content-text",
    scrub: 1,
    start: "center bottom",
    end: "+=80",
  },
});

tl.from(".hero__content-text", {
  y: 50,
  opacity: 0,
});

/*animation på produkter i bunden*/
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".produkt",
    scrub: 1,
    start: "center bottom",
    end: "+=80",
  },
});

tl.from(".produkt", {
  y: 50,
  opacity: 0,
});

/*animation på opskrifter tekst i toppen*/
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".opskrift-titel",
    scrub: 1,
    start: "center bottom",
    end: "+=30",
  },
});

tl.from(".opskrift-titel", {
  y: 50,
  opacity: 0,
});

/*animation på produktbeskrivelsen*/

const sections = gsap.utils.toArray(".cols-2");

sections.forEach((element, index) => {
  let items = element.querySelector(".item");
  let distance = index % 2 == 0 ? 100 : -100;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "restart none none reverse",
      //   markers: true,
    },
  });

  tl.from(items, {
    duration: 0.5,
    xPercent: gsap.utils.wrap([-distance, distance]),
  });
  tl.from(items, { opacity: 0, duration: 0.3 }, 0);
});
