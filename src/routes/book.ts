import { Request, Response } from "express";
import { BookController } from "../controllers/bookController";

export class BookRoutes {
  bookController = new BookController();

  constructor(app: any) {
    app.route("/books").get((req: Request, res: Response) => {
      const bookList = this.bookController.getAllBooks();
      res.json(bookList);
    });

    app.route("/books/:id").get((req: Request, res: Response) => {
      const book = this.bookController.getBookById(req.params.id);
      res.json(book);
    });
  }
}
