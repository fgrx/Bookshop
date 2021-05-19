export interface IBook {
  id?: string;
  title: string;
  description: string;
  content: string;
  author: string;
  image: string;
  price: number;
  quantity: number;
  lang: string;
  rating: number;
  top?: boolean;
  discount?: number;
}
