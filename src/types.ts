// Define the shape of a product object
export interface Product {
  _id: string;
  title: string;
  src: string[];
  description: string;
  content: string;
  price: number;
  colors: string[];
  count: number;
}

// Define the shape of the app state
export interface AppState {
  products: Product[];
  index: number;
}