export interface Product {
  id: string;
  name: string;
  price?: number;
  imgUrl?: string;
  having?: boolean;
}

export interface DescriptionContent {
  header1?: string;
  textUnderHeader1?: string;
  header2?: string;
  textUnderHeader2?: string;
  secondTextUnderHeader2?: string;
  header3?: string;
  textUnderHeader3?: string;
  secondTextUnderHeader3?: string;
  liItem1?: string;
  liItem2?: string;
  liItem3?: string;
  liItem4?: string;
  liItem5?: string;
  liItem6?: string;
  liItem7?: string;
  conclusion1?: string;
  conclusion2?: string;
  contactWithUs: string;
}

export type ProductDescription = string | DescriptionContent;

export interface TabaccoProduct extends Product {
  about?: {
    sweet?: number;
    sour?: number;
    spicy?: number;
    fresh?: number;
    taste?: string;
    tough?: string;
    smokiness?: string;
    fireResistance?: string;
    recomendedCup?: string;
    country?: string;
  };
  description?: ProductDescription;
}

export interface HookahProduct extends Product {
  saucer?: {
    firstType: string;
    secondType: string;
    thirdType: string;
    fourthType: string;
  };
  about?: {
    brand?: string;
    heighWithoutBowl?: number;
    typeOfConnection?: string;
    meterial?: string;
    diameterOfMine?: number;
    numberOfPortsUnderTheHose?: number;
    colorOfColb?: string;
    colorOfMine?: string;
    hookahMineDiffuser?: string;
    oilCollector?: string;
    typeOfSaucer?: string;
    volumeColb?: number;
    bowlIsAvailable?: string;
    country?: string;
  };
  description?: ProductDescription;
}
