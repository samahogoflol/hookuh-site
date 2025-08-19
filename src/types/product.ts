export interface Product {
  id: string;
  brand: string;
  name: string;
  imgURL?: string;
  price?: number;
  having?: boolean;
}

export interface HookahProduct extends Product {
  saucer?: {
    firstType: string;
    secondType: string;
    thirdType: string;
    fourthType: string;
  };
  about: {
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
  description?:
    | string
    | {
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
      };
}

export interface Product {
  line?: string;
  levelOfNicotine1?: string;
  levelOfNicotine2?: string;
  description?:
    | string
    | {
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
      };
  about?: {
    country?: string;
    sweet?: number;
    sour?: number;
    spice?: number;
    fresh?: number;
    taste?: string;
    tough?: string;
    smokiness?: string;
    fireResistance?: string;
    weigh?: number;
    recomendedCup?: string;
    cartridgeCapacity?: string;
    cartridgeResistance?: string;
    typeOfCoil?: string;
    cartridgeFixed?: string;
    cartridgeRefuilingType?: string;
    color?: string;
    volume?: number;
    VGPG?: string;
    toughOfNicotine?: string;
    typeOfNicotine?: string;
  };
}
