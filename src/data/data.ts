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
import scrollArrow from "./common/_images/down-arrow.svg";
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
import handwrite2Full from "./biography/_images/junost/handwrite_2_full.png";
import uvarovYoung1 from "./biography/_images/junost/uvarov_young_1.png";
import uvarovYoung2 from "./biography/_images/junost/uvarov_young_2.png";
import uvarovYoung2Full from "./biography/_images/junost/uvarov_young_2_portrait.png";

// LIBRARY PORTRAITS
import portrait_1 from "./biography/_images/junost/portraits/shevyrev.png";
import portrait_2 from "./biography/_images/junost/portraits/granovsky.png";
import portrait_3 from "./biography/_images/junost/portraits/pletnev.png";
import portrait_4 from "./biography/_images/junost/portraits/jukovsky.png";
import portrait_5 from "./biography/_images/junost/portraits/pogodin.png";

/* ==========

    EXPEDITIONS

  ========== */

// BGs, MAPS, ETC.
import archaeologists from "./biography/_images/expeditions/archaeologists.png";
import expeditionsImg from "./biography/_images/expeditions/expeditions-img.jpg";
import nordMapBg from "./biography/_images/expeditions/nord-map-bg.png";
import olviaBg from "./biography/_images/expeditions/olvia-bg.png";
import porechyeBg from "./biography/_images/expeditions/porechye-bg.png";
import pozharskySketch from "./biography/_images/expeditions/pozharsky-sketch.png";
import researchCover from "./biography/_images/expeditions/research-cover.png";
import suzdal from "./biography/_images/expeditions/suzdal.png";
import zabelin from "./biography/_images/expeditions/zabelin.png";

// KHERSONES
import hersones from "./biography/_images/expeditions/hersones.png";
import hersonesBg from "./biography/_images/expeditions/hersones-bg.png";
import hersonesWallBg from "./biography/_images/expeditions/hersones-wall-bg.png";

// KHERSON
import kherson1 from "./biography/_images/expeditions/kherson-1.png";
import kherson2 from "./biography/_images/expeditions/kherson-2.png";
import kherson3 from "./biography/_images/expeditions/kherson-3.png";
import khersonBg from "./biography/_images/expeditions/kherson-bg.png";

// GALLERY FROM THE TRIP TO THE SOUTH
import research1 from "./biography/_images/expeditions/research/1.jpg";
import research2 from "./biography/_images/expeditions/research/2.jpg";
import research3 from "./biography/_images/expeditions/research/3.jpg";
import research4 from "./biography/_images/expeditions/research/4.jpg";
import research5 from "./biography/_images/expeditions/research/5.jpg";
import research6 from "./biography/_images/expeditions/research/6.jpg";
import research7 from "./biography/_images/expeditions/research/7.jpg";

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
  handwrite2Full: { src: handwrite2Full.src, alt: "Письмо 2 полное" },
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
      alt: "Жуковский",
      fullName: "Василий Андреевич Жуковский",
      description:
        "русский поэт, один из основоположников романтизма в русской поэзии",
    },
    {
      id: 5,
      src: portrait_5.src,
      alt: "Погодин",
      fullName: "Михаил Петрович Погодин",
      description:
        "русский историк, коллекционер, журналист и публицист, писатель-беллетрист, издатель",
    },
  ],
};

export const expeditionsAssets = {
  archaeologists: { src: archaeologists.src, alt: "Группа археологов" },
  expeditionsImg: { src: expeditionsImg.src, alt: "Изображение экспедиции" },

  khersones: [
    {
      id: 1,
      src: hersones.src,
      alt: "Развалины Херсонеса",
    },
    {
      id: "bg",
      src: hersonesBg.src,
      alt: "Фон Херсонеса",
    },
    {
      id: "wall",
      src: hersonesWallBg.src,
      alt: "Стена Херсонеса",
    },
  ],

  kherson: [
    {
      id: 1,
      src: kherson1.src,
      alt: "Херсон - изображение 1",
    },
    {
      id: 1,
      src: kherson2.src,
      alt: "Херсон - изображение 2",
    },
    {
      id: 1,
      src: kherson3.src,
      alt: "Херсон - изображение 3",
    },
    {
      id: "bg",
      src: khersonBg.src,
      alt: "Небо Херсона",
    },
  ],

  nordMapBg: { src: nordMapBg.src, alt: "Карта Севера" },
  olviaBg: { src: olviaBg.src, alt: "Ольвия" },
  porechyeBg: { src: porechyeBg.src, alt: "Поречье" },
  pozharskySketch: { src: pozharskySketch.src, alt: "Пожарский - Рисунок" },
  researchCover: { src: researchCover.src, alt: "Путешествие на юг - Обложка" },
  suzdal: { src: suzdal.src, alt: "Суздаль" },
  zabelin: { src: zabelin.src, alt: "Портрет Забелина" },

  research: [
    {
      id: 1,
      src: research1.src,
      alt: "Ольвия. Внутренняя часть кургана",
      author: "М.Б. Вебель",
      location: "Ольвия. Внутренняя часть кургана",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 2,
      src: research2.src,
      alt: "Мангуп. Развалины греческой церкви и гробницы",
      author: "М.Б. Вебель",
      location: "Мангуп. Развалины греческой церкви и гробницы",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 3,
      src: research3.src,
      alt: "Бакла-Кая. Внутренняя часть большой пещеры",
      author: "М.Б. Вебель",
      location: "Бакла-Кая. Внутренняя часть большой пещеры",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 4,
      src: research4.src,
      alt: "Фресковая роспись храма «Трех всадников»",
      author: "М.Б. Вебель",
      location: "Фресковая роспись храма «Трех всадников»",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 5,
      src: research5.src,
      alt: "Фрагменты фресковой росписи пещерного храма",
      author: "М.Б. Вебель",
      location: "Фрагменты фресковой росписи пещерного храма",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 6,
      src: research6.src,
      alt: "Гурзуф. Развалины крепости Юстиниана",
      author: "М.Б. Вебель",
      location: "Гурзуф. Развалины крепости Юстиниана",
      published:
        "Уваров А.С. Собрание карт и рисунков к Исследованиям о древностях Южной России и берегов Черного Моря. СПб., 1851.",
    },
    {
      id: 7,
      src: research7.src,
      alt: "Археологические разыскания в 1853 году",
      description:
        "Всеподданнейший отчет министра уделов и управляющего Кабинетом Е.И.В. графа Л.А. Перовского императору Николаю I об археологических разысканиях в 1853 году. ",
      location: "Санкт-Петербург, 15 апреля 1854 г.",
      shownInfo:
        "На развороте: изображение серебряной наградной пайцзы монгольской династии Юань (1279–1368) (найдена в Суздале, хранится в Государственном Эрмитаже)",
    },
  ],
};
