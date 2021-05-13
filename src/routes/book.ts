import { Request, Response } from "express";
import { IDB } from "../database";
import Joi from "joi";
import { bookValidationSchema } from "../validationSchemas";
import { Book } from "../entities/Book";

export class BookRoutes {
  constructor(app: any, db: IDB) {
    app.route("/books").get(async (req: Request, res: Response) => {
      const bookList = await db.getAllBooks();
      res.json(bookList);
    });

    app.route("/books/:id").get(async (req: Request, res: Response) => {
      const book = await db.getBookById(req.params.id);

      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: "No book found" });
      }
    });

    app.route("/books").post(async (req: Request, res: Response) => {
      try {
        this.validateRequest(req.body);
        const result = await db.addBook(req.body);
        res.json(result);
      } catch (e) {
        res.status(422).json({ error: e.toString() });
      }
    });

    app.route("/books/:id").put(async (req: Request, res: Response) => {
      try {
        this.validateRequest(req.body);
        const result = await db.updateBook(req.body);
        res.json(result);
      } catch (e) {
        res.status(422).json({ error: e.toString() });
      }
    });
  }

  private validateRequest(body: any) {
    const validation = bookValidationSchema.validate(body);

    if (validation.error) {
      throw validation.error;
    }
    return true;
  }
}
