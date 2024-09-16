let scrollDuration;
let scrollDelay;
let scrollDistance;
let isScrolling = false;

// List of section IDs to observe
const sectionIds = [
  "intro-cover",
  "intro-hand",
  "intro-text",
  "chapter-intro",
  "was-born",
  "father",
  "mother",
  "graf",
  "library",
];

// SLOW SCROLL OBSERVER (JUNOST 4-5 SLIDES)
const slowScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;

      if (entry.isIntersecting) {
        scrollDelay = 2000;
        scrollDuration = 500;
        scrollDistance = window.innerHeight;
        console.log(`${id} is in view`);
        console.log("delay:", scrollDelay);
      } else {
        scrollDelay = 0;
        scrollDuration = 10;
        scrollDistance = window.innerHeight * 0.175;
        console.log(`${id} is not in view`);
        console.log("delay:", scrollDelay);
      }
    });
  },
  { threshold: [0.1] }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    slowScrollObserver.observe(section);
  } else {
    console.warn(`Element with id ${id} not found`);
  }
});

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function slowScroll(targetScrollY) {
  let startScrollY = window.scrollY;
  let distance = targetScrollY - startScrollY;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;

    // Use the easeInOutQuad function for smooth scrolling
    let scrollProgress = Math.min(timeElapsed / scrollDuration, 1); // Normalize to a value between 0 and 1
    let easing = easeInOutQuad(scrollProgress); // Apply easing function

    window.scrollTo(0, startScrollY + distance * easing);

    if (scrollProgress < 1) {
      requestAnimationFrame(animationScroll);
    } else {
      // Wait for the specified delay before allowing the next scroll
      setTimeout(() => {
        isScrolling = false;
      }, scrollDelay);
    }
  }

  requestAnimationFrame(animationScroll);
}

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    // LOGIC FOR SCROLLABLE
    const scrollableElements = document.querySelectorAll(".scrollable");
    let isInsideScrollable = false;
    scrollableElements.forEach((scrollable) => {
      if (scrollable.contains(event.target)) {
        isInsideScrollable = true;
      }
    });

    if (!isInsideScrollable) {
      if (!isScrolling) {
        isScrolling = true;
        let targetScrollY =
          window.scrollY +
          (event.deltaY > 0 ? scrollDistance : -scrollDistance);
        slowScroll(targetScrollY);
      }
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    // LOGIC FOR SCROLLABLE
    const scrollableElements = document.querySelectorAll(".scrollable");
    let isInsideScrollable = false;
    scrollableElements.forEach((scrollable) => {
      if (scrollable.contains(document.activeElement)) {
        isInsideScrollable = true;
      }
    });

    if (!isInsideScrollable && !isScrolling) {
      isScrolling = true;
      let targetScrollY =
        window.scrollY +
        (event.key === "ArrowDown" ? scrollDistance : -scrollDistance);
      slowScroll(targetScrollY);
    }
  }
});
