import { createConnection } from "typeorm";
import { Book } from "../entities/Book";
import { User } from "../entities/User";

import { BookDB, IBookDB } from "./bookDB";
import { AuthDB, IAuthDB } from "./authDB";

interface IDB {
  connectDB(): void;
  book: IBookDB;
  auth: IAuthDB;
}

class DB implements IDB {
  constructor(public book = new BookDB(), public auth = new AuthDB()) {}

  connectDB() {
    createConnection({
      type: "sqlite",
      database: "bookshop.sqlite",
      //logging: true,
      synchronize: true,
      entities: [Book, User],
    });
  }
}

export { IDB, DB };
