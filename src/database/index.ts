import { createConnection } from "typeorm";
import { Book } from "../entities/Book";
import { User } from "../entities/User";

import { BookDB, IBookDB } from "./bookDB";
import { UserDB, IUserDB } from "./userDB";

interface IDB {
  connectDB(): void;
  book: IBookDB;
  user: IUserDB;
}

class DB implements IDB {
  constructor(public book = new BookDB(), public user = new UserDB()) {}

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
