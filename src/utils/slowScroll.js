const SCROLL_DURATION = 1000;

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
      isScrolling = false;
    }
  }

  requestAnimationFrame(animationScroll);
}

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;
      let targetScrollY =
        window.scrollY +
        (event.deltaY > 0 ? window.innerHeight : -window.innerHeight);
      slowScroll(targetScrollY);
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;
      let targetScrollY =
        window.scrollY +
        (event.key === "ArrowDown" ? window.innerHeight : -window.innerHeight);
      slowScroll(targetScrollY);
    }
  }
});
