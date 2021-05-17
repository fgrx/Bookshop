import { IDB } from "../../../../src/database";
import { ICredentials } from "../../../../src/interfaces/ICredentials";
import { IBookDB } from "../../../../src/database/bookDB";
import { IBook } from "../../../../src/interfaces/IBook";
import mockBooks from "../../books";
import mockUsers from "../../users";
import mockOrders from "../../orders";
import { IUserDB } from "../../../../src/database/userDB";
import { IOrderDB } from "../../../../src/database/orderDB";
import { IOrder } from "../../../../src/interfaces/IOrder";

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

class OrderDB implements IOrderDB {
  getOrders = async () => mockOrders;
  addOrder = async (order: IOrder) => {
    mockOrders.push(order);
    return order;
  };
}

export class DB implements IDB {
  constructor(
    public book = new BookDB(),
    public user = new UserDB(),
    public order = new OrderDB()
  ) {}

  connectDB = jest.fn();
}
