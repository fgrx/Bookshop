import request from "supertest";
import Server from "../../../src/app";
import { IBook } from "../../../src/interfaces/IBook";
import mockBooks from "../../mocks/books";

import { DB } from "../../mocks/src/database";

const db = new DB();
const server = new Server(db);

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

  it("should return 404", () => {
    const nonExistingID = "abcdefg";
    return request(server.app)
      .get(`/books/${nonExistingID}`)
      .expect("content-type", /json/)
      .expect(404);
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

  it("should fail adding a book with not enough parameter", () => {
    const book = {
      title: "Mon livre de test",
      content: "Ceci est un livre de test",
      rating: 4,
      lang: "fr",
      image: "hello.jpg",
    };

    return request(server.app)
      .post("/books")
      .send(book)
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(422);
  });

  it("should update a book", () => {
    const book = mockBooks[1];
    const updatedBook = book;

    updatedBook.title = "My book is updated :)";

    return request(server.app)
      .put(`/books/${updatedBook.id}`)
      .send(updatedBook)
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual(updatedBook.title);
      });
  });

  it("should fail updating a book", () => {
    const book = {
      title: "Mon livre de test",
      content: "Ceci est un livre de test",
      rating: 4,
      lang: "fr",
      image: "hello.jpg",
    };

    return request(server.app)
      .put(`/books/${book.title}`)
      .send(book)
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(422);
  });

  it("should delete a book", () => {
    const book = mockBooks[1];

    return request(server.app)
      .delete(`/books/${book.id}`)
      .expect("content-type", /json/)
      .expect(200);
  });
});
