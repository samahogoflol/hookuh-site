export interface Product {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
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
  liItems?: string[];
  conclusion1?: string;
  conclusion2?: string;
  contactWithUs: string;
}

export type ProductDescription = string | DescriptionContent;

export interface TabaccoProduct extends Product {
  strength?: "light" | "medium" | "strong";
  weight?: "40g" | "100g" | "250g" | "1000g";
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
