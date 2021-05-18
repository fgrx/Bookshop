import request from "supertest";
import Server from "../../../src/app";
import { DB } from "../../mocks/src/database";
import { goodCredentials, wrongCredentials } from "../../mocks/credentials";

const db = new DB();
const server = new Server(db);

describe(">>> users route", () => {
  let token;

  it("should return a token", async () => {
    const result = await request(server.app)
      .post("/auth")
      .send(goodCredentials)
      .expect(200);

    token = result.header.authorization;
  });

  it("should not return a token", () => {
    return request(server.app)
      .post("/auth")
      .send(wrongCredentials)
      .expect("content-type", /json/)
      .expect(403);
  });
});
