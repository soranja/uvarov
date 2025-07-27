type BgSectionEntry = {
  bgElement: HTMLElement | null;
  sectionIds: string[];
  threshold?: number;
};

document.addEventListener("DOMContentLoaded", function () {
  function createBgObserver(bgSectionMap: BgSectionEntry[]) {
    bgSectionMap.forEach(({ bgElement, sectionIds, threshold = 0.5 }) => {
      if (!bgElement) return;

      const visibleSections = new Set<string>();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            const id = target.id;
            if (entry.isIntersecting) {
              visibleSections.add(id);
            } else {
              visibleSections.delete(id);
            }

            const isVisible = sectionIds.some((id) => visibleSections.has(id));
            bgElement.classList.toggle("opacity-100", isVisible);
            bgElement.classList.toggle("opacity-0", !isVisible);
          });
        },
        { threshold },
      );

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        }
      });
    });
  }

  const bgSectionMap = [
    {
      bgElement: document.getElementById("room-bg"),
      sectionIds: ["father-mother"],
      threshold: 0.4,
    },
    {
      bgElement: document.getElementById("library-bg"),
      sectionIds: ["library", "porechye-history"],
    },
    {
      bgElement: document.getElementById("uvarov-bg"),
      sectionIds: ["u-young"],
    },
    {
      bgElement: document.getElementById("uvarov-bg"),
      sectionIds: ["uvarov-young"],
      threshold: 0.1,
    },
    {
      bgElement: document.getElementById("hersones-bg"),
      sectionIds: ["hersones-text", "hersones-image"],
    },
    {
      bgElement: document.getElementById("hersones-wall-bg"),
      sectionIds: ["hersones-wall"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("nord-map-bg"),
      sectionIds: ["nord-text", "nord-image"],
    },
    {
      bgElement: document.getElementById("princes-bg"),
      sectionIds: ["princes"],
    },
    {
      bgElement: document.getElementById("olvia-bg"),
      sectionIds: ["olvia"],
      threshold: 0.3,
    },
    {
      bgElement: document.getElementById("porechye-bg"),
      sectionIds: ["porechye"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("venice-bg"),
      sectionIds: ["venice"],
      threshold: 0.3,
    },
    {
      bgElement: document.getElementById("mao-image-1-bg"),
      sectionIds: ["mao-image-1"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("mao-image-2-bg"),
      sectionIds: ["mao-image-2"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("uvarov-medal-bg"),
      sectionIds: ["uvarov-medal"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("princes-bg"),
      sectionIds: ["princes"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("museum-grid-bg"),
      sectionIds: ["museum-grid"],
      threshold: 0.3,
    },
    {
      bgElement: document.getElementById("museum-photo-bg"),
      sectionIds: ["museum-photo"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("porechye-2"),
      sectionIds: ["porechye-view"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("porechye-people-1-image"),
      sectionIds: ["porechye-people-1"],
      threshold: 0.4,
    },
    {
      bgElement: document.getElementById("porechye-people-2-image"),
      sectionIds: ["porechye-people-2"],
      threshold: 0.3,
    },
    {
      bgElement: document.getElementById("porechye-3"),
      sectionIds: ["porechye-view-2"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("porechye-4"),
      sectionIds: ["porechye-view-3"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("uvarova-bio-7"),
      sectionIds: ["uvarova-bio-7-image"],
      threshold: 0.2,
    },
    {
      bgElement: document.getElementById("praskovya-scientists-1"),
      sectionIds: ["praskovya-scientists-1-image"],
      threshold: 0.4,
    },
    {
      bgElement: document.getElementById("praskovya-scientists-2"),
      sectionIds: ["praskovya-scientists-2-image"],
      threshold: 0.2,
    },
  ];

  createBgObserver(bgSectionMap);
});
