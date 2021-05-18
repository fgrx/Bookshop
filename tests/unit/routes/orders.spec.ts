import request from "supertest";
import Server from "../../../src/app";

import { DB } from "../../mocks/src/database";
import mockOrders from "../../mocks/orders";
import mockBooks from "../../mocks/books";
import { IOrder } from "../../../src/interfaces/IOrder";
import { ICredentials } from "../../../src/interfaces/ICredentials";

const db = new DB();
const server = new Server(db);

describe(">>>Orders", () => {
  const credentials: ICredentials = {
    email: "admin@admin.com",
    password: "123456",
  };

  let token = "";

  // const getToken = async (): Promise<string> => {
  //   const result = await request(server.app).post("/auth").send(credentials);
  //   return result.header.authorization;
  // };

  // const token = getToken();
  // token; //?

  beforeAll((done) => {
    request(server.app)
      .post("/auth")
      .send(credentials)
      .end((err, response) => {
        token = response.header.authorization; //?
        done();
      });
  });

  it("should list all orders", () => {
    return request(server.app)
      .get("/orders")
      .set("Authorization", `${token}`)
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
});
