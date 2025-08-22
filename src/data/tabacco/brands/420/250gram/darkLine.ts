import type { TabaccoProduct } from "../../../../../types/product";

import cherry_lemonade_dark_250gr from "../../../../../imgs/tabaks/420/250gr_darkLine/420_darkLine_250gr_cherry_lemonade.webp";
import malibu_vibe_dark_250gr from "../../../../../imgs/tabaks/420/250gr_darkLine/420_darkLine_250gr_malibu_vibe.webp";
import peach_gelatto_dark_250gr from "../../../../../imgs/tabaks/420/250gr_darkLine/420_darkLine_250gr_peach_gelatto-.webp";
import toxic_candy_dark_250gr from "../../../../../imgs/tabaks/420/250gr_darkLine/420_darkLine_250gr_toxic_candy.webp";
import scotch_whisky_dark_250gr from "../../../../../imgs/tabaks/420/250gr_darkLine/420_darkLine_250gr_scotch_whisky.webp";

export const darkLine250grProducts: TabaccoProduct[] = [
  {
    id: "420_darkLine_250gr_cherryLemonade",
    name: "Тютюн 420(Чотири Двадцять) Dark Line Cherry Lemonade (Вишня Лимонад) 250гр",
    price: 580,
    imgUrl: cherry_lemonade_dark_250gr,
    having: true,
    about: {
      sweet: 4,
      sour: 1,
      spicy: 0,
      fresh: 3,
      taste: "Вишня, Грейпфрут, Кола, Лід",
      tough: "Середня",
      smokiness: "Висока",
      fireResistance: "Висока",
      recomendedCup: "Глина",
      country: "Україна",
    },
    description:
      "420 - це ароматна тютюнова суміш, яка здатна перевернути ваші смакові рецептори з ніг на голову. Продукт вирізняється середньою міцністю. Для її посилення набивка має бути щільнішою, для більшої легкості - розпушена перед курінням. Під час використання тютюн дає густий, ароматний дим. Тютюн 420(Чотири Двадцять) Dark Line Cherry Lemonade (Вишня Лимонад) 250гр має безпечний склад. Начинку виготовляють із листя добірних сортів тютюну, яке перед приготуванням ретельно очищають, а потім заправляють великою кількістю солодкого сиропу.",
  },
  {
    id: "420_darkLine_250gr_malibuVibe",
    name: "Тютюн 420(Чотири Двадцять) Dark Line Malibu Vibe (Малібу Вайб) 250гр",
    price: 580,
    imgUrl: malibu_vibe_dark_250gr,
    having: true,
    about: {
      sweet: 4,
      sour: 1,
      spicy: 0,
      fresh: 3,
      taste: "Ананас, Манго, Диня, Лід",
      tough: "Середня",
      smokiness: "Висока",
      fireResistance: "Висока",
      recomendedCup: "Глина",
      country: "Україна",
    },
  },
  {
    id: "420_darkLine_250gr_peachGelatto",
    name: "Тютюн 420(Чотири Двадцять) Dark Line Peach Gelatto (Персик Джелатто) 250гр",
    price: 580,
    imgUrl: peach_gelatto_dark_250gr,
    having: true,
    about: {
      sweet: 4,
      sour: 0,
      spicy: 0,
      fresh: 0,
      taste: "Персик, Морозиво",
      tough: "Середня",
      smokiness: "Висока",
      fireResistance: "Висока",
      recomendedCup: "Глина",
      country: "Україна",
    },
  },
  {
    id: "420_darkLine_250gr_toxicCandy",
    name: "Тютюн 420(Чотири Двадцять) Dark Line Toxic Candy (Токсик Цукерка) 250гр",
    price: 580,
    imgUrl: toxic_candy_dark_250gr,
    having: true,
    about: {
      sweet: 2,
      sour: 3,
      spicy: 0,
      fresh: 1,
      taste: "Лимон, Зелене Яблуко, Льодяник",
      tough: "Середня",
      smokiness: "Висока",
      fireResistance: "Висока",
      recomendedCup: "Глина",
      country: "Україна",
    },
  },
  {
    id: "420_darkLine_250gr_scotchWhisky",
    name: "Тютюн 420(Чотири Двадцять) Dark Line Scotch Whisky (Віскі) 250гр",
    price: 580,
    imgUrl: scotch_whisky_dark_250gr,
    having: false,
    about: {
      sweet: 3,
      sour: 0,
      spicy: 2,
      fresh: 0,
      taste: "Віскі",
      tough: "Середня",
      smokiness: "Висока",
      fireResistance: "Висока",
      recomendedCup: "Глина",
      country: "Україна",
    },
  },
];
