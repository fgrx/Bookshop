import { Book } from "../entities/Book";
import { Comment } from "../entities/Comment";
import { IComment } from "../interfaces/IComment";

interface ICommentDB {
  getComments(bookID: string): Promise<IComment[]>;
  addComment(commentToAdd: any): Promise<IComment>;
}

class CommentDB implements ICommentDB {
  async getComments(bookID: string): Promise<IComment[]> {
    const book = await Book.findOne({
      where: { id: bookID },
      relations: ["comments"],
    });

    return book!.comments;
  }

  async addComment(commentToAdd: any): Promise<IComment | any> {
    const book = await Book.findOne(commentToAdd.bookID);
    const comment = new Comment();
    comment.title = commentToAdd.title;
    comment.content = commentToAdd.content;
    comment.book = book!;
    const res = await comment.save();
    return res;
  }
}

export { ICommentDB, CommentDB };
