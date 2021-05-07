import { Request, Response } from "express";

export class BookController {
  public getAllBooks(req: Request, res: Response) {
    res.json({
      message: "Hello World 2",
    });
  }
}
