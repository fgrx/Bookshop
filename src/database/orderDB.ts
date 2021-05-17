import { IOrder } from "../interfaces/IOrder";
import { Order } from "../entities/Order";

export interface IOrderDB {
  addOrder(order: IOrder): Promise<IOrder>;
  getOrders(): Promise<IOrder[]>;
}

export class OrderDB implements IOrderDB {
  async addOrder(order: IOrder): Promise<IOrder | any> {
    try {
      const result = await Order.insert(order);
      return result;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async getOrders(): Promise<IOrder[]> {
    return await Order.find();
  }
}
