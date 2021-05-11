import { assert } from "console";
import request from "supertest";
import Server from "../../../src/server";
import mockBooks from "../../mocks/books";

const server = new Server();

describe(">>> books routes", () => {
  it("should return a list of books", () => {
    return request(server.app)
      .get("/books")
      .expect("content-type", /json/)
      .expect(200, mockBooks);
  });

  it("should return one book", () => {
    const bookToFind = mockBooks[1];
    return request(server.app)
      .get(`/books/${bookToFind.id}`)
      .expect("content-type", /json/)
      .expect(200, bookToFind);
  });
});
