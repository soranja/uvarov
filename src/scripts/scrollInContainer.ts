// SCROLL IMAGE IN CONTAINER
const scrollableElements = document.querySelectorAll(".scrollable") as NodeListOf<HTMLElement>;

scrollableElements.forEach((scrollable) => {
  const imageElement = scrollable.querySelector("img") as HTMLImageElement;

  let scrollPosition = 0;
  let targetScrollPosition = 0;
  let isScrolling = false;

  scrollable.addEventListener("wheel", (event) => {
    event.preventDefault();

    const scrollAmount = event.deltaY > 0 ? 100 : -100;
    targetScrollPosition = Math.min(
      Math.max(targetScrollPosition + scrollAmount, 0),
      imageElement.clientHeight - scrollable.clientHeight,
    );

    if (!isScrolling) {
      isScrolling = true;
      smoothScroll();
    }
  });

  function smoothScroll() {
    const SCROLL_SPEED = 20;

    if (Math.abs(targetScrollPosition - scrollPosition) > 0.5) {
      scrollPosition += (targetScrollPosition - scrollPosition) / SCROLL_SPEED;
      imageElement.style.transform = `translateY(${-scrollPosition}px)`;
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling = false;
    }
  }
});
