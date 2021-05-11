const request = require("supertest");
import Server from "../../../src/server";
const server = new Server();

describe("index routes", () => {
  it("should return welcome message", async () => {
    await request(server.app)
      .get("/")
      .expect(200)
      .expect("content-type", /json/);
  });
});
