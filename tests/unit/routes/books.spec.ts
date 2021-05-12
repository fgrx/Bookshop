import request from "supertest";
import Server from "../../../src/app";
import { IBook } from "../../../src/interfaces/IBook";
import books from "../../mocks/books";
import mockBooks from "../../mocks/books";

import { DB } from "../../mocks/src/database";

const db = new DB();
const server = new Server(db);

describe(">>> books routes", () => {
  it("should return a list of books", () => {
    return request(server.app)
      .get("/books")
      .expect("content-type", /json/)
      .expect(200, books);
  });

  it("should return one book", () => {
    const bookToFind = mockBooks[1];
    return request(server.app)
      .get(`/books/${bookToFind.id}`)
      .expect("content-type", /json/)
      .expect(200, bookToFind);
  });

  it("should add a new book", () => {
    const book: IBook = {
      title: "Mon livre de test",
      content: "Ceci est un livre de test",
      description: "Contenu complet",
      author: "Fabien",
      price: 20,
      quantity: 4,
      rating: 4,
      lang: "fr",
      image: "hello.jpg",
    };

    return request(server.app)
      .post("/books")
      .send(book)
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200, book);
  });
});
