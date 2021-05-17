import request from "supertest";
import Server from "../../../src/app";

import { DB } from "../../mocks/src/database";
import mockOrders from "../../mocks/orders";
import mockBooks from "../../mocks/books";
import { IOrder } from "../../../src/interfaces/IOrder";

const db = new DB();
const server = new Server(db);

describe(">>>Orders", () => {
  it("should add an order", () => {});

  it("should list all orders", () => {
    return request(server.app)
      .get("/orders")
      .expect("content-type", /json/)
      .expect(200, mockOrders);
  });

  it("should add a new order", () => {
    const order: IOrder = { total: 124, items: [mockBooks[0], mockBooks[1]] };
    return request(server.app)
      .post("/orders")
      .send(order)
      .expect("content-type", /json/)
      .expect(200);
  });

  it("should not add an incomplete order", () => {
    const order: IOrder = { total: 0, items: [] };
    return request(server.app)
      .post("/orders")
      .send(order)
      .expect("content-type", /json/)
      .expect(500);
  });

  it("should not authorize to display orders", () => {});
});
