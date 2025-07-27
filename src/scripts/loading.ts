const loadingContainer = document.getElementById("lottie-container") as HTMLElement;
const firstSection = document.querySelector(".section") as HTMLElement;

let windowLoaded = false;
let firstSectionCompleted = false;

function checkCompletion() {
  if (windowLoaded && firstSectionCompleted) {
    loadingContainer.classList.add("hidden");
  }
}

window.onload = function () {
  windowLoaded = true;
  checkCompletion();
};

function firstSectionCompletion() {
  // firstSection.classList.contains("show");
  setTimeout(() => {
    firstSectionCompleted = true;
    checkCompletion();
  }, 1000);
}

firstSectionCompletion();
