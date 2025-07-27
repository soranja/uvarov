document.addEventListener("DOMContentLoaded", () => {
  const chapterIntro = document.getElementById("chapter-intro") as HTMLElement;
  const header = document.getElementById("header") as HTMLElement;
  const scrollArrow = document.getElementById("scroll-arrow") as HTMLElement;

  if (chapterIntro && header && scrollArrow) {
    // HEADER FADE OBSERVER
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            header.classList.add("opacity-100");
            scrollArrow.classList.remove("opacity-100");
          } else {
            header.classList.remove("opacity-100");
            scrollArrow.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 },
    );

    headerObserver.observe(chapterIntro);
  }
});
