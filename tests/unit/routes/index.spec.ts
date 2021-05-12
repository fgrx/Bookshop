const request = require("supertest");
import Server from "../../../src/app";
import { DB } from "../../mocks/src/database";

const db = new DB();

const server = new Server(db);

describe("index routes", () => {
  it("should initialize db", () => {
    expect(db.connectDB).toHaveBeenCalled();
  });

  it("should return welcome message", async () => {
    await request(server.app)
      .get("/")
      .expect(200)
      .expect("content-type", /json/);
  });
});
