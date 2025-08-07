export interface Brand {
  id: string;
  name: string;
  imgURL?: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  line: string;
  description?: string;
  imgURL?: string;
  price: number;
  having: boolean;
  about: {
    country: string;
    sweet: number;
    sour: number;
    spice: number;
    fresh: number;
    taste: string;
    tough: string;
    smokiness: string;
    fireResistance: string;
    weigh: number;
    recomendedCup: string;
  };
}
