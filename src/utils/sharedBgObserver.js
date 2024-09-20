document.addEventListener("DOMContentLoaded", function () {
  // Unified Background Observer
  function createBgObserver(bgSectionMap) {
    bgSectionMap.forEach(({ bgElement, sectionIds, threshold = 0.5 }) => {
      const visibleSections = new Set();

      // Create an observer for this specific background element with a custom threshold
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
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
        { threshold } // Use custom or default threshold
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
      sectionIds: ["mother", "father"],
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
  ];

  // Initialize the observer with customizable thresholds
  createBgObserver(bgSectionMap);
});