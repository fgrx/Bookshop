import { Request, Response } from "express";
import { IDB } from "../database";

export class CommentRoutes {
  constructor(app: any, db: IDB) {
    app.get("/comments", async (req: Request, res: Response) => {
      const bookID = (req.query as any).bookID;
      const comments = await db.comment.getComments(bookID);
      res.json(comments);
    });

    app.post("/comments", async (req: Request, res: Response) => {
      const result = await db.comment.addComment(req.body);
      res.json(result);
    });
  }
}
