import { Request, Response } from "express";
import { IDB } from "../database";
import { IOrder } from "../interfaces/IOrder";
import { orderValidationSchema } from "../validationSchemas";

export class OrderRoutes {
  constructor(app: any, db: IDB) {
    app.route("/orders").get(async (req: Request, res: Response) => {
      try {
        const ordersFromDB = await db.order.getOrders();
        const orders = ordersFromDB.forEach((order) => {
          const parsedItems = JSON.parse(order.items);
          order.items = parsedItems;
          return order;
        });
        orders;
        res.json(ordersFromDB);
      } catch (e) {
        res.status(500).json({ error: e.toString() });
      }
    });

    app.route("/orders").post(async (req: Request, res: Response) => {
      const validation = orderValidationSchema.validate(req.body);
      if (!validation.error) {
        const order = req.body;
        order.items = JSON.stringify(order.items);
        try {
          const orderAdded = await db.order.addOrder(order);

          res.json(orderAdded);
        } catch (e) {
          res.status(500).json({ error: e.toString() });
        }
      } else {
        res.status(500).json({ error: validation.error.message });
      }
    });
  }
}
