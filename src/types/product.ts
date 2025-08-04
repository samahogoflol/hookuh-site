export interface Product {
  id: string;
  brand: string;
  name: string;
  line: string;
  description?: string; // Це поле може бути опціональним
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
