import { Request, Response } from "express";
import { BookController } from "../controllers/bookController";

export class Routes {
  public bookController = new BookController();

  public routes(app: any): void {
    //app.route("/books").get(this.bookController.getAllBooks);

    app.route("/books").get((req: Request, res: Response) => {
      this.bookController.getAllBooks(req, res);
    });
  }
}
