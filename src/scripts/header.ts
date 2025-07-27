import { BIO_NAV_LINKS } from "../consts";
import gim from "../data/common/_images/gim-logo.svg";

const burgerIcon = document.getElementById("burger-icon") as HTMLElement;
const crossIcon = document.getElementById("cross-icon") as HTMLElement;
const nav = document.getElementById("nav") as HTMLElement;
const gimLogo = document.getElementById("gim") as HTMLElement;

const isDesktop = window.innerWidth >= 768;

const isLinkActive = (href: string) => {
  const pathname = window.location.pathname;
  const subpath = pathname.match(/[^\/]+/g);
  return href === pathname || href === "/" + subpath?.[0];
};

const getActiveChapter = (links: { href: string; label: string }[]) => {
  const activeLink = links.find((link) => isLinkActive(link.href));
  return activeLink ? activeLink.label : null;
};

const renderLinks = (links: any[]) => {
  const navLinks = document.getElementById("nav");

  navLinks!.innerHTML = "";

  const linksWrapper = document.createElement("div");
  linksWrapper.className = `
		flex 
		flex-col
		flex-grow 
		w-full
		text-center 
		gap-x-0 

		md:text-left 
		md:justify-center
		md:flex-row 
		

		lg:gap-x-2 
		xl:gap-x-6
		`;

  links.forEach((link) => {
    const isActive = isLinkActive(link.href);
    const activeClass = isActive ? "bg-white bg-opacity-20  md:bg-opacity-0 md:underline" : "";
    const linkElement = `<a href="${link.href}" class="px-2 py-[1vh] md:py-0 ${activeClass} h-full hover:bg-white hover:bg-opacity-20 md:hover:bg-opacity-0 md:hover:underline">${link.label}</a>`;
    linksWrapper.insertAdjacentHTML("beforeend", linkElement);
  });

  navLinks!.appendChild(linksWrapper);
};

const toggleMenu = (isOpen: boolean, chapterName?: string | null) => {
  if (isOpen || isDesktop) {
    burgerIcon.classList.add("hidden");
    crossIcon.classList.remove("hidden");
    nav.classList.remove("hidden");
    gimLogo.innerHTML = `<div class="chapter-name uppercase">${chapterName || "ГИМ"}</div>`;
  } else {
    burgerIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
    nav.classList.add("hidden");
    gimLogo.innerHTML = `<img src=${gim.src}>`;
  }
};

window.addEventListener("resize", () => {
  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    nav.classList.remove("hidden");
  } else {
    const isMenuOpen = crossIcon.classList.contains("hidden");
    if (isMenuOpen) {
      nav.classList.add("hidden");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const activeChapterName = getActiveChapter(BIO_NAV_LINKS);

  burgerIcon.addEventListener("click", () => toggleMenu(true, activeChapterName));
  crossIcon.addEventListener("click", () => toggleMenu(false));

  // Render links and ensure the menu is initially closed
  renderLinks(BIO_NAV_LINKS);
  toggleMenu(false);
  window.addEventListener("popstate", () => toggleMenu(false));
});
