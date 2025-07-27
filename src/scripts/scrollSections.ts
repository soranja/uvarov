import { sectionIds } from "../consts";
import { getCurrentChapter } from "./currentChapter";

let isScrolling = false;
const desktopMinWidth = 768;

// Get current chapter using Astro request object (in browser, use URL directly)
const chapter = getCurrentChapter({ url: new URL(window.location.href) });
const chapterKey = chapter?.id as keyof typeof sectionIds;
const sectionList = sectionIds[chapterKey] ?? [];

function easeLinearish(t: number): number {
  return t * (2 - t);
}

function slowScroll(targetY: number, duration = 300): void {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function animateScroll(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeLinearish(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
  }

  requestAnimationFrame(animateScroll);
}

function getNextSectionId(): string | null {
  const currentY = window.scrollY;

  return (
    sectionList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .find((el) => el.offsetTop > currentY + 10)?.id || null
  );
}

function handleSpacebarScroll(event: KeyboardEvent): void {
  if (event.key === " " && !isScrolling && window.innerWidth >= desktopMinWidth) {
    event.preventDefault();
    const nextId = getNextSectionId();
    if (nextId) {
      const targetEl = document.getElementById(nextId);
      if (targetEl) {
        const sectionMiddleY =
          targetEl.offsetTop + targetEl.offsetHeight / 2 - window.innerHeight / 2;

        isScrolling = true;
        slowScroll(sectionMiddleY);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!sectionList.length) {
    console.warn(`No section list found for chapter: "${chapterKey}"`);
    return;
  }
  window.addEventListener("keydown", handleSpacebarScroll);
});
