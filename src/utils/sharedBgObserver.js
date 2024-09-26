document.addEventListener("DOMContentLoaded", function () {
  function createBgObserver(bgSectionMap) {
    bgSectionMap.forEach(({ bgElement, sectionIds, threshold = 0.5 }) => {
      const visibleSections = new Set();


      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.target.id, entry.isIntersecting);
            if (entry.isIntersecting) {
              visibleSections.add(entry.target.id);
            } else {
              visibleSections.delete(entry.target.id);
            }

            const isVisible = sectionIds.some((id) =>
              visibleSections.has(id)
            );
            if (isVisible) {
              bgElement.classList.add("opacity-100");
              bgElement.classList.remove("opacity-0");
            } else {
              bgElement.classList.remove("opacity-100");
              bgElement.classList.add("opacity-0");
            }
          });
        },
        { threshold }
      );

      // Attach observer to all target sections for this background
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        }
      });
    });
  }

  // Example Usage:
  const bgSectionMap = [
    {
      bgElement: document.getElementById("room-bg"),
      sectionIds: ["father-mother"],
      threshold: 0.4
    },
    {
      bgElement: document.getElementById("library-bg"),
      sectionIds: ["library"],
    },
    {
      bgElement: document.getElementById("uvarov-bg"),
      sectionIds: ["u-young"],
    },
    {
      bgElement: document.getElementById("uvarov-bg"),
      sectionIds: ["uvarov-young"],
      threshold: 0.1
    },
    {
      bgElement: document.getElementById("hersones-bg"),
      sectionIds: ["hersones-text", "hersones-image"],
    },
    {
      bgElement: document.getElementById("hersones-wall-bg"),
      sectionIds: ["hersones-wall"],
      threshold: 0.2
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
      threshold: 0.3
    },
    {
      bgElement: document.getElementById("porechye-bg"),
      sectionIds: ["porechye"],
      threshold: 0.2
    },
    {
      bgElement: document.getElementById("venice-bg"),
      sectionIds: ["venice"],
      threshold: 0.1
    },
    {
      bgElement: document.getElementById("mao-image-1-bg"),
      sectionIds: ["mao-image-1"],
      threshold: 0.2
    },
    {
      bgElement: document.getElementById("mao-image-2-bg"),
      sectionIds: ["mao-image-2"],
      threshold: 0.2
    },
    {
      bgElement: document.getElementById("uvarov-medal-bg"),
      sectionIds: ["uvarov-medal"],
      threshold: 0.2
    },
    {
      bgElement: document.getElementById("princes-bg"),
      sectionIds: ["princes"],
      threshold: 0.2
    },
    {
      bgElement: document.getElementById("museum-grid-bg"),
      sectionIds: ["museum-grid"],
      threshold: 0.1
    },
    {
      bgElement: document.getElementById("museum-photo-bg"),
      sectionIds: ["museum-photo"],
      threshold: 0.2
    },
  ];

  // Initialize the observer with customizable thresholds
  createBgObserver(bgSectionMap);
});