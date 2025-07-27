const sections = document.querySelectorAll(".section") as NodeListOf<HTMLElement>;
const crossfadeSections: { [sectionId: string]: number | null } = {
  "intro-cover": null,
  "intro-hand": null,
  "intro-text": null,
  "intro-transition": null,
  "chapter-intro": null,
  "hersones-wall": 0.1,
  "hersones-slider": 0.1,
};

const overlays = document.querySelectorAll("info-overlay") as NodeListOf<HTMLElement>;
overlays.forEach((overlay: HTMLElement) => {
  const overlayId = overlay.dataset.overlayId;
  if (overlayId) {
    crossfadeSections[overlayId] = null;
  }
});

function getSectionThreshold(section: HTMLElement): number | number[] {
  const sectionId = section.id;
  return crossfadeSections[sectionId] ?? [0.5, 0.7];
}

sections.forEach((section: HTMLElement) => {
  const sectionId = section.id;
  const hasCrossfade = crossfadeSections.hasOwnProperty(sectionId);

  if (hasCrossfade) {
    const threshold = getSectionThreshold(section);

    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wrapper = entry.target.querySelector(".fixed-wrapper") as HTMLElement;
          if (wrapper) {
            if (entry.isIntersecting) {
              wrapper.classList.add("show");
            } else {
              wrapper.classList.remove("show");
            }
          }
        });
      },
      { threshold },
    );

    sectionsObserver.observe(section);
  } else {
    const wrapper = section.querySelector(".fixed-wrapper") as HTMLElement;
    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.zIndex = "5";
    }
  }
});
