import { Request, Response } from "express";
import { IDB } from "../database";
import { BookRoutes } from "./bookRoutes";
import { AuthRoutes } from "./authRoutes";
import { OrderRoutes } from "./orderRoutes";
import { CommentRoutes } from "./commentRoutes";

export class Routes {
  public routes(app: any, db: IDB): void {
    app.get("/", (req: Request, res: Response) => {
      res.json({ message: "welcome to my book app ! " });
    });

    new BookRoutes(app, db);
    new AuthRoutes(app, db);
    new OrderRoutes(app, db);
    new CommentRoutes(app, db);
  }
}
