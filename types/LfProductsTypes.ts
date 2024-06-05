interface ProductSize {
  name: string;
  id: number;
  type: number[];
  img: string;
}

interface Additionaly {
  img: string;
  title: string;
  price: string;
}

interface ProductType {
  name: string;
  id: number;
  img: string;
  additionaly: Additionaly[];
}

interface Ingredient {
  name: string;
  id: number;
}

interface Note {
  label: string;
  value: string;
}

export interface Product {
  productType: string;
  title: string;
  img: string;
  description: string;
  price: string;
  id: number;
  gram: number;
  count: number;
  size?: ProductSize[];
  type?: ProductType[];
  ingridients?: Ingredient[];
  notes: Note[];
}