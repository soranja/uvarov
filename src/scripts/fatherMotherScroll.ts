import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function animateSection(
  sectionId: string,
  imageSelector: string,
  bottomTextSelector: string,
  delay = 0,
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `#${sectionId}`,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onLeave: () => {
        tl.reverse();
      },
      onLeaveBack: () => {
        tl.reverse();
      },
      onEnter: () => {
        tl.play();
      },
      onEnterBack: () => {
        tl.play();
      },
    },
  });

  tl.fromTo(
    imageSelector,
    { autoAlpha: 0, x: -600 },
    { autoAlpha: 1, x: 0, duration: 1.2, ease: "power2.out", delay: delay },
  ).fromTo(
    bottomTextSelector,
    { autoAlpha: 0, x: 600 },
    { autoAlpha: 1, x: 0, duration: 1.2, ease: "power2.out", delay: delay },
    0,
  );
}

animateSection("father-area", "#father-img", ".bottom-text #father-text");
animateSection("mother-area", "#mother-img", ".bottom-text #mother-text", 1);

// VIDEO PLAY ON HOVER
const dogAnimation = document.getElementById("dog-anim") as HTMLVideoElement;
let reverseInterval: any;

dogAnimation.addEventListener("mouseenter", () => {
  clearInterval(reverseInterval); // Clear reverse interval if already running
  dogAnimation.play(); // Play the video when mouse enters
});

dogAnimation.addEventListener("mouseleave", () => {
  dogAnimation.pause(); // Pause the video on mouse leave
  reverseVideo(); // Start reverse playback
});

function reverseVideo() {
  reverseInterval = setInterval(() => {
    if (dogAnimation.currentTime <= 0) {
      clearInterval(reverseInterval); // Stop when the video reaches the start
    } else {
      dogAnimation.currentTime -= 0.05; // Move the video time backwards
    }
  }, 50); // Adjust the speed of reverse playback
}
