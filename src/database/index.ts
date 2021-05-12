import { createConnection } from "typeorm";
import { Book } from "../entities/Book";
import { IBook } from "../interfaces/IBook";

import { BookDB, IBookDB } from "./bookDB";

interface IDB extends IBookDB {
  connectDB(): void;
}

class DB extends BookDB implements IDB {
  connectDB() {
    createConnection({
      type: "sqlite",
      database: "bookshop.sqlite",
      //logging: true,
      synchronize: true,
      entities: [Book],
    });
  }
}

export { IDB, DB };
