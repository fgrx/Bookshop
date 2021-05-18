import { Request, Response } from "express";
import { IDB } from "../database";
import { bookValidationSchema } from "../validationSchemas";
import { Security } from "../middlewares/security";

export class BookRoutes {
  constructor(app: any, db: IDB) {
    const security = new Security();

    app.get("/books", async (req: Request, res: Response) => {
      const bookList = await db.book.getAllBooks();
      res.json(bookList);
    });

    app.get("/books/:id", async (req: Request, res: Response) => {
      const book = await db.book.getBookById(req.params.id);

      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: "No book found" });
      }
    });

    app.post(
      "/books",
      security.checkJWT,
      async (req: Request, res: Response) => {
        try {
          this.validateRequest(req.body);
          const result = await db.book.addBook(req.body);
          res.json(result);
        } catch (e) {
          res.status(422).json({ error: e.toString() });
        }
      }
    );

    app.put(
      "/books/:id",
      security.checkJWT,
      async (req: Request, res: Response) => {
        try {
          this.validateRequest(req.body);
          const result = await db.book.updateBook(req.body);
          res.json(result);
        } catch (e) {
          res.status(422).json({ error: e.toString() });
        }
      }
    );

    app.delete(
      "/books/:id",
      security.checkJWT,
      async (req: Request, res: Response) => {
        try {
          const result = await db.book.deleteBook(req.params.id);
          res.json(result);
        } catch (e) {
          res.status(400).json({ error: e.toString() });
        }
      }
    );
  }

  private validateRequest(body: any) {
    const validation = bookValidationSchema.validate(body);

    if (validation.error) {
      throw validation.error;
    }
    return true;
  }
}
