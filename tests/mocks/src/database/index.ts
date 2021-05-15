import { IDB } from "../../../../src/database";
import { IAuthDB, ICredentials } from "../../../../src/database/authDB";
import { IBookDB } from "../../../../src/database/bookDB";
import { IBook } from "../../../../src/interfaces/IBook";
import mockBooks from "../../books";
import mockUsers from "../../users";

class BookDB implements IBookDB {
  getAllBooks = async () => mockBooks;
  getBookById = async (id: string) =>
    mockBooks.filter((book) => book.id === id)[0];
  addBook = async (book: IBook) => book;
  updateBook = async (book: IBook) => book;
  deleteBook = async (id: string) => mockBooks.filter((book) => book.id !== id);
}

class AuthDB implements IAuthDB {
  getUserByEmail = async (email: string) =>
    mockUsers.filter((user) => user.email === email)[0];
}

export class DB implements IDB {
  constructor(public book = new BookDB(), public auth = new AuthDB()) {}

  connectDB = jest.fn();
}
