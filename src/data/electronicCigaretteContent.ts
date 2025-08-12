import type { Brand, Product } from "../types/product";

import electronca from "../imgs/veipImg/odnorazki.webp";
import PODSystem from "../imgs/veipImg/pod-system.webp";
import other from "../imgs/veipImg/kartridze.webp";

import lostVapeUrsa from "../imgs/vapeGoodsList/kartridge_lost_vape_ursa_nano_v2_2.5ml_1.0om.webp";
import vooPooPnP_m2 from "../imgs/vapeGoodsList/isparitel_voopoo_pnp_m2_0.6_om.webp";
import smok_lp1 from "../imgs/vapeGoodsList/isparitel_smok_lp1_dc_0.8_om.webp";

export const typeOfProductStatic: Brand[] = [
  {
    id: "0",
    name: "Одноразові Електронні Сигарети",
    imgURL: electronca,
  },
  {
    id: "1",
    name: "Багаторазові POD Системи",
    imgURL: PODSystem,
  },
  {
    id: "2",
    name: "Комплектуючі",
    imgURL: other,
  },
];

export const electroCygaretteStaticProduct: Product[] = [
  {
    id: "0",
    brand: "Lost Vape",
    name: "Змінний Картридж Lost Vape Ursa Nano 2.5мл, 0.8 OM",
    description:
      "Електронні сигарети працюють на основі резервуарів, заповнених ароматизованою рідиною, тобто картриджів. Змінний Картридж Lost Vape Ursa Nano 2.5мл, 0.8 OM для електронних сигарет відомої марки. Кожен картридж POD-системи пропонує неперевершену якість, вироблену з використанням найсучасніших технологій. Змінний Картридж Lost Vape Ursa Nano 2.5мл, 0.8 OM формула забезпечує ідеальне поєднання інтенсивного смаку і гладкості, щоб кожна затяжка приносила максимальне задоволення. Зручні та легкі у використанні, ці картриджі ідеально підходять для повсякденного використання. Такий картридж для підсистеми виготовлений з високоякісного прозорого матеріалу, що дозволяє зручно контролювати рівень рідини. Завдяки зручній системі заправки ви можете швидко та без зайвих зусиль доливати рідину. Він ефективно контактує з електронною рідиною на сольовому нікотині та виробляє ідеальну пару. Пропонуємо тільки оригінальні моделі. Ідеальне рішення для шанувальників незабутнього вейпінгу.",
    imgURL: lostVapeUrsa,
    price: 115,
    having: true,
    about: {
      country: "Китай",
      cartridgeCapacity: "2.5 мл",
      cartridgeResistance: "0.8 Om",
      typeOfCoil: "Спіраль",
      cartridgeFixed: "Магнітне",
      cartridgeRefuilingType: "Бічна",
      color: "Чорний",
    },
  },
  {
    id: "1",
    brand: "VooPoo",
    name: "Змінний Випарювач VooPoo PnP-TM2 Mesh Coil 0.8 OM",
    description:
      "Змінний Випарник VooPoo PnP-TM2 Mesh Coil 0.8 OM - це високоякісний випаровувач, спеціально розроблений для використання з різними вейп-пристроями популярного бренду. POD-випарник створений із застосуванням передових технологій для забезпечення максимальної продуктивності. Наша унікальна конструкція гарантує надійність і довговічність, а спеціально розроблена формула матеріалів забезпечує чистий та інтенсивний смак під час кожного затягування. Він забезпечує гідну паропродуктивність, що дає змогу насолоджуватися приємним парінням та насиченим смаком вашої улюбленої рідини. Якісні комплектуючі упаковуються в герметичний пакет, щоб уникнути потрапляння пилу і сторонніх запахів. Змінний випаровувач VooPoo PnP-TM2 Mesh Coil 0.8 OM - ідеальне рішення для вейперів, які прагнуть найкращого смаку і щільних хмар пари.",
    imgURL: vooPooPnP_m2,
    price: 105,
    having: true,
    about: {
      country: "Китай",
      cartridgeCapacity: "2.5 мл",
      cartridgeResistance: "0.8 Om",
      typeOfCoil: "Спіраль",
    },
  },
  {
    id: "2",
    brand: "VooPoo",
    name: "Змінний Картридж VooPoo Argus 3мл, 1.0 ОМ",
    imgURL: smok_lp1,
    price: 135,
    having: true,
    about: {
      country: "Китай",
      cartridgeCapacity: "3 мл",
      cartridgeResistance: "1.0 Om",
      typeOfCoil: "Сітка",
      cartridgeFixed: "Магнітне",
      cartridgeRefuilingType: "Бічна",
      color: "Чорний",
    },
  },
];
