import { createConnection } from "typeorm";
import { Book } from "../entities/Book";
import { User } from "../entities/User";
import { Order } from "../entities/Order";
import { Comment } from "../entities/Comment";

import { BookDB, IBookDB } from "./bookDB";
import { IOrderDB, OrderDB } from "./orderDB";
import { UserDB, IUserDB } from "./userDB";
import { CommentDB, ICommentDB } from "./commentDB";

interface IDB {
  connectDB(): void;
  book: IBookDB;
  user: IUserDB;
  order: IOrderDB;
  comment: ICommentDB;
}

class DB implements IDB {
  constructor(
    public book = new BookDB(),
    public user = new UserDB(),
    public order = new OrderDB(),
    public comment = new CommentDB()
  ) {}

  connectDB() {
    createConnection({
      type: "sqlite",
      database: "bookshop.sqlite",
      //logging: true,
      synchronize: true,
      entities: [Book, User, Order, Comment],
    });
  }
}

export { IDB, DB };
