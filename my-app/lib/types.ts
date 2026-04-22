export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients?: string[];
  weight?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}
