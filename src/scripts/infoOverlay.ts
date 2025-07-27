class InfoOverlay extends HTMLElement {
  connectedCallback() {
    const overlayId = this.dataset.overlayId;
    const contentType = this.dataset.contentType;
    const images: Array<{
      src: string;
      srcOrig?: string;
      alt: string;
      title?: string;
      description?: string;
    }> = JSON.parse(this.dataset.images ?? "[]");
    const overlayWrapper = this.querySelector(".info-overlay") as HTMLElement;
    const overlayContent = this.querySelector(".overlay-content") as HTMLElement;
    const closeButton = this.querySelector(".close-button") as HTMLElement;
    const infoButton = document.querySelector(`.info-icon-${overlayId}`) as HTMLElement;
    let isVisible: boolean = this.dataset.visible === "false";

    const header = document.getElementById("header") as HTMLElement;

    const updateHeaderZIndex = (visible: boolean) => {
      header.style.zIndex = visible ? "10" : "50";
    };

    closeButton.addEventListener("click", () => {
      isVisible = false;
      overlayWrapper.classList.remove("visible");
      overlayWrapper.classList.add("hidden");
      overlayContent.innerHTML = "";
      updateHeaderZIndex(false);
    });

    infoButton.addEventListener("click", () => {
      isVisible = true;
      overlayWrapper.classList.add("visible");
      overlayWrapper.classList.remove("hidden");
      updateHeaderZIndex(true);

      if (contentType === "slider") {
        overlayContent.innerHTML = `
            <div 
              class="w-full"
              x-data="{ init() {
              new Splide(this.$refs.splideOverlay, {
                perPage: 1,
                pagination: false
              }).mount();
            }}">

              <section class="splide" aria-label="Overlay Image Slider" x-ref="splideOverlay">
                <div class="splide__track">
                  <ul class="splide__list">
                    ${images
                      .map(
                        (image) => `
                      <li class="splide__slide flex flex-col justify-center items-center px-20">
                        <img src="${image.srcOrig ?? image.src}" alt="${image.alt}" class="max-h-[80vh] object-contain" />
                        <div class="text-center mt-6 text-white">
                          <h4 class="font-semibold text-sm 2xl:text-lg leading-snug">${image.title ?? ""}</h4>
                          <p class="text-sm">${image.description ?? ""}</p>
                        </div>
                      </li>
                    `,
                      )
                      .join("")}
                  </ul>
                </div>
              </section>
            </div>
          `;
      } else if (contentType === "image") {
        overlayContent.innerHTML = `
          <div class="flex flex-col justify-center items-center px-20 text-white text-center gap-y-4">
              <img src="${images[0].srcOrig ?? images[0].src}" alt="${images[0].alt}" class="object-cover max-w-[90%] max-h-[85vh]" />
              <p class="text-xs">${images[0].description ?? ""}</p>
            </div>
          `;
      }
    });
  }
}

customElements.define("info-overlay", InfoOverlay);
