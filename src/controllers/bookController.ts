import { IBook } from "../interfaces/IBook";
import mockBooks from "../../tests/mocks/books";

export class BookController {
  public getAllBooks(): IBook[] {
    return mockBooks;
  }

  public getBookById(bookID: string): IBook {
    const res = mockBooks.filter((book) => book.id === bookID);
    return res[0];
  }
}
