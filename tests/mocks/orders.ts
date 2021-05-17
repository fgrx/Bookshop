import { IOrder } from "../../src/interfaces/IOrder";
import mockBooks from "./books";

const orders: IOrder[] = [
  {
    total: 40,
    items:
      '[{"id":"ERVD","title":"book title","description":"book description"}]',
  },
];

export default orders;
