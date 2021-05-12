import { Request, Response } from "express";
import { IDB } from "../database";
import { BookRoutes } from "./book";

export class Routes {
  public routes(app: any, db: IDB): void {
    app.route("/").get((req: Request, res: Response) => {
      res.json({ message: "welcome to my book app ! " });
    });

    new BookRoutes(app, db);
  }
}
