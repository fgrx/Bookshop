import { Request, Response } from "express";
import { IDB } from "../database";
import { commentValidationSchema } from "../validationSchemas";

export class CommentRoutes {
  constructor(app: any, db: IDB) {
    app.get("/comments", async (req: Request, res: Response) => {
      const bookID = (req.query as any).bookID;
      const comments = await db.comment.getComments(bookID);
      res.json(comments);
    });

    app.post("/comments", async (req: Request, res: Response) => {
      const newComment = req.body;

      try {
        const validation = commentValidationSchema.validate(newComment);

        if (validation.error) {
          throw validation.error;
        }

        const result = await db.comment.addComment(newComment);
        res.json(result);
      } catch (e) {
        res.status(422).json({ error: e.toString() });
      }
    });
  }
}
