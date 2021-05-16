import request from "supertest";
import Server from "../../../src/app";
import { DB } from "../../mocks/src/database";
import { ICredentials } from "../../../src/interfaces/ICredentials";

const db = new DB();
const server = new Server(db);

const credentials: ICredentials = {
  email: "admin@admin.com",
  password: "123456",
};

describe(">>> users route", () => {
  it("should return a user", () => {
    return request(server.app)
      .post("/auth")
      .send(credentials)
      .expect("content-type", /json/)
      .expect(200);
  });

  it("should not return a user", () => {
    const wrongCredentials = {
      email: "admin@admin.com",
      password: "124",
    };

    return request(server.app)
      .post("/auth")
      .send(wrongCredentials)
      .expect("content-type", /json/)
      .expect(403);
  });
});