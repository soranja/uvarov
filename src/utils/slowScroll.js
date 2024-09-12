const SCROLL_DURATION = 500; // 0.5 sec transition
const SCROLL_DELAY = 2000;   // 2 sec delay

let isScrolling = false;

function slowScroll(targetScrollY) {
  let startScrollY = window.scrollY;
  let distance = targetScrollY - startScrollY;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let scrollProgress = Math.min(timeElapsed / SCROLL_DURATION, 1); // Normalize to a value between 0 and 1

    window.scrollTo(0, startScrollY + distance * scrollProgress);

    if (scrollProgress < 1) {
      requestAnimationFrame(animationScroll);
    } else {
      // Wait for 2 seconds before allowing the next scroll
      setTimeout(() => {
        isScrolling = false;
      }, SCROLL_DELAY);
    }
  }

  requestAnimationFrame(animationScroll);
}

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    // Select all elements with the class 'scrollable'
    const scrollableElements = document.querySelectorAll(".scrollable");
    
    let isInsideScrollable = false;

    // Check if the event target is inside any scrollable element
    scrollableElements.forEach((scrollable) => {
      if (scrollable.contains(event.target)) {
        isInsideScrollable = true;
      }
    });

    // If the event is not inside a scrollable section, apply global scroll
    if (!isInsideScrollable) {
      if (!isScrolling) {
        isScrolling = true;
        let targetScrollY =
          window.scrollY +
          (event.deltaY > 0 ? window.innerHeight : -window.innerHeight);
        slowScroll(targetScrollY);
      }
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    // Select all elements with the class 'scrollable'
    const scrollableElements = document.querySelectorAll(".scrollable");

    let isInsideScrollable = false;

    // Check if the active element is inside any scrollable element
    scrollableElements.forEach((scrollable) => {
      if (scrollable.contains(document.activeElement)) {
        isInsideScrollable = true;
      }
    });

    // If the event is not inside a scrollable section, apply global scroll
    if (!isInsideScrollable && !isScrolling) {
      isScrolling = true;
      let targetScrollY =
        window.scrollY +
        (event.key === "ArrowDown" ? window.innerHeight : -window.innerHeight);
      slowScroll(targetScrollY);
    }
  }
});