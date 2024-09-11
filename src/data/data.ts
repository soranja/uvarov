// INTRO
import cover from "./intro/_images/intro-cover.png";
import hand1440 from "./intro/_videos/hand-1440.mp4";
import hand1920 from "./intro/_videos/hand-1920.mp4";

// CHAPTERS INTROS
import junost from "./biography/_images/chapters/junost.svg";
import expeditions from "./biography/_images/chapters/expeditions.svg";
import family from "./biography/_images/chapters/family.svg";
import activities from "./biography/_images/chapters/activities.svg";
import museum from "./biography/_images/chapters/museum.svg";
import epilogue from "./biography/_images/chapters/epilogue.svg";

// COMMON
import scrollArrow from "./common/_images/down-arrow.png";
import prevArrow from "./common/_images/prev-arrow.svg";
import nextArrow from "./common/_images/next-arrow.svg";

/* ==========

    JUNOST

  ========== */

// BUILDINGS / BGs / DOCUMENTS
import spb from "./biography/_images/junost/spb.png";
import spbgu from "./biography/_images/junost/spbgu.png";
import roomBg from "./biography/_images/junost/room.png";
import libraryBg from "./biography/_images/junost/library.png";
import graf from "./biography/_images/junost/graf.png";
import diploma from "./biography/_images/junost/diploma.png";

// MOTHER / FATHER PORTRAITS
import father from "./biography/_images/junost/father.png";
import mother from "./biography/_images/junost/mother.png";

// UVAROV YOUNG: DOG / LETTER 1 / PORTRAIT / LETTER 2
import dogAnim from "./biography/_videos/junost/dog_start.mp4";
import handwrite_1 from "./biography/_images/junost/handwrite_1.png";
import handwrite1Full from "./biography/_images/junost/handwrite_1_full.png";
import handwrite_2 from "./biography/_images/junost/handwrite_2.png";
import uvarovYoung1 from "./biography/_images/junost/uvarov_young_1.png";
import uvarovYoung2 from "./biography/_images/junost/uvarov_young_2.png";
import uvarovYoung2Full from "./biography/_images/junost/uvarov_young_2_portrait.png";

// LIBRARY PORTRAITS
import portrait_1 from "./biography/_images/junost/portraits/shevyrev.png";
import portrait_2 from "./biography/_images/junost/portraits/granovsky.png";
import portrait_3 from "./biography/_images/junost/portraits/pletnev.png";
import portrait_4 from "./biography/_images/junost/portraits/jukovsky.png";
import portrait_5 from "./biography/_images/junost/portraits/pogodin.png";

/* ============================================================

    EXPORTS EXPORTS EXPORTS EXPORTS EXPORTS EXPORTS EXPORTS 

  ============================================================ */

export const intro = {
  cover: { src: cover.src, alt: "Уварову - 200 лет!" },
  hand1440: { src: hand1440, alt: "Видео с рукой - 1440" },
  hand1920: { src: hand1920, alt: "Видео с рукой - 1920" },
};

export const common = {
  scrollArrow: { src: scrollArrow.src, alt: "Стрелка скролла" },
  prevArrow: { src: prevArrow.src, alt: "Стрелка назад" },
  nextArrow: { src: nextArrow.src, alt: "Стрелка вперед" },
};

export const chapters = [
  { id: "junost", src: junost.src, alt: "Юность" },
  { id: "expeditions", src: expeditions.src, alt: "Экспедиции" },
  { id: "family", src: family.src, alt: "Семья" },
  { id: "activities", src: activities.src, alt: "Деятельность" },
  { id: "museum", src: museum.src, alt: "Музей" },
  { id: "epilogue", src: epilogue.src, alt: "Эпилог" },
];

export const junostAssets = {
  father: { src: father.src, alt: "Портрет отца" },
  mother: { src: mother.src, alt: "Портрет матери" },
  dogAnim: { src: dogAnim, alt: "Анимация с собакой" },
  handwrite_1: { src: handwrite_1.src, alt: "Письмо 1" },
  handwrite1Full: { src: handwrite1Full.src, alt: "Письмо 1 полное" },
  uvarovYoung1: { src: uvarovYoung1.src, alt: "Уваров молодой - Рисунок" },
  uvarovYoung2: { src: uvarovYoung2.src, alt: "Уваров молодой - Фон" },
  uvarovYoung2Full: {
    src: uvarovYoung2Full.src,
    alt: "Уваров молодой - Портрет",
  },
  handwrite_2: { src: handwrite_2.src, alt: "Письмо 2" },
  spb: { src: spb.src, alt: "Санкт-Петербург" },
  spbgu: { src: spbgu.src, alt: "СПБГУ" },
  roomBg: { src: roomBg.src, alt: "Комната" },
  libraryBg: { src: libraryBg.src, alt: "Библиотека" },
  graf: {
    src: graf.src,
    alt: "Графская грамота",
    description:
      "Патент императора Николая I действительному статскому советнику С. С. Уварову на чин тайного советника",
  },
  diploma: { src: diploma.src, alt: "Диплом" },
  libraryPortraits: [
    {
      id: 1,
      src: portrait_1.src,
      alt: "Шевырёв",
      fullName: "Степан Петрович Шевырёв",
      description:
        "русский литературный критик, историк литературы, поэт, общественный деятель",
    },
    {
      id: 2,
      src: portrait_2.src,
      alt: "Грановский",
      fullName: "Тимофей Николаевич Грановский",
      description: "русский историк-медиевист",
    },
    {
      id: 3,
      src: portrait_3.src,
      alt: "Плетнёв",
      fullName: "Петр Александрович Плетнёв",
      description: "русский литературный критик, поэт и журналист",
    },
    {
      id: 4,
      src: portrait_4.src,
      alt: "Юрковский",
      fullName: "...",
      description: "...",
    },
    {
      id: 5,
      src: portrait_5.src,
      alt: "Погодин",
      fullName: "...",
      description: "...",
    },
  ],
};
