import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function animateSection(sectionId: string, textSelector: string, delay = 0) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `#${sectionId}`,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => {
        tl.play();
      },
      onEnterBack: () => {
        tl.play();
      },
    },
  });

  tl.fromTo(
    textSelector,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1.2, ease: "power2.out", delay: delay },
  );
}

animateSection("sources-area", "#sources");
animateSection("initiative-area", "#initiative");

animateSection("uvarov-1881-area", "#uvarov-1881");
animateSection("uvarov-self-area", "#uvarov-self");

animateSection("responsibilities-area", "#responsibilities");
animateSection("concept-area", "#concept");

// animateSection("museum-grid-left-area", "#museum-grid-left");
// animateSection("museum-grid-right-area", "#museum-grid-right");
