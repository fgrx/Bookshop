import { Request, Response } from "express";
import { IDB } from "../database";

export class BookRoutes {
  constructor(app: any, db: IDB) {
    app.route("/books").get(async (req: Request, res: Response) => {
      const bookList = await db.getAllBooks();
      res.json(bookList);
    });

    app.route("/books/:id").get(async (req: Request, res: Response) => {
      const book = await db.getBookById(req.params.id);
      res.json(book);
    });

    app.route("/books").post(async (req: Request, res: Response) => {
      try {
        const result = await db.addBook(req.body);
        res.json(result);
      } catch (e) {
        res.status(400).json({ error: e.toString() });
      }
    });
  }
}
