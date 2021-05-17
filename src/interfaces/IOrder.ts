import { IBook } from "./IBook";

export interface IOrder {
  id?: string;
  total: number;
  items: IBook[] | any;
}
