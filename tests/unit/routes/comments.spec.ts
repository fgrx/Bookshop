import { doesNotMatch } from "assert/strict";
import request from "supertest";
import Server from "../../../src/app";

import mockBooks from "../../mocks/books";
import mockComments from "../../mocks/comments";

import { DB } from "../../mocks/src/database";

const db = new DB();
const server = new Server(db);

describe(">>>> Comments", () => {
  const numberOfMockComments = mockComments.length;

  it("should return comments of a book", () => {
    return request(server.app)
      .get(`/comments?bookID=${mockBooks[0].id}`)
      .expect("content-type", /json/)
      .expect(200)
      .expect((result) => {
        expect(result.body.length).toBe(numberOfMockComments);
      });
  });

  it("should add a new comment", () => {
    const comment = {
      title: "commentaire de test",
      content: "Commentaire de test",
      bookID: mockBooks[0].id,
    };

    return request(server.app)
      .post("/comments")
      .send(comment)
      .expect("content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual(comment.title);
      });
  });

  it("should not add a comment", () => {
    const comment = {
      title: "commentaire de test",
      bookID: mockBooks[0].id,
    };

    return request(server.app)
      .post("/comments")
      .send(comment)
      .expect("content-type", /json/)
      .expect(422);
  });
});
