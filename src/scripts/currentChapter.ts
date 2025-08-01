import { chapters } from "../data";

export function getCurrentChapter(Astro: any) {
  const pathname = Astro.url.pathname.split("/").filter(Boolean);
  const slug = pathname.length > 1 ? pathname[pathname.length - 1] : "";
  return chapters.find((chapter) => chapter.id === slug);
}
