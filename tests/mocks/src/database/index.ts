import { IDB } from "../../../../src/database";
import { ICredentials } from "../../../../src/interfaces/ICredentials";
import { IBookDB } from "../../../../src/database/bookDB";
import { IBook } from "../../../../src/interfaces/IBook";
import mockBooks from "../../books";
import mockUsers from "../../users";
import { IUserDB } from "../../../../src/database/userDB";

class BookDB implements IBookDB {
  getAllBooks = async () => mockBooks;
  getBookById = async (id: string) =>
    mockBooks.filter((book) => book.id === id)[0];
  addBook = async (book: IBook) => book;
  updateBook = async (book: IBook) => book;
  deleteBook = async (id: string) => mockBooks.filter((book) => book.id !== id);
}

class UserDB implements IUserDB {
  getUserByEmail = async (email: string) =>
    mockUsers.filter((user) => user.email === email)[0];
}

export class DB implements IDB {
  constructor(public book = new BookDB(), public user = new UserDB()) {}

  connectDB = jest.fn();
}
