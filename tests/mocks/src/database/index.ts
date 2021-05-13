import { IDB } from "../../../../src/database";
import { IBook } from "../../../../src/interfaces/IBook";
import mockBooks from "../../books";

export class DB implements IDB {
  connectDB = jest.fn();
  getAllBooks = async () => mockBooks;
  getBookById = async (id: string) =>
    mockBooks.filter((book) => book.id === id)[0];
  addBook = async (book: IBook) => book;
  updateBook = async (book: IBook) => book;
}
