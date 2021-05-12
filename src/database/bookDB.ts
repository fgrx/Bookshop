import { IBook } from "../interfaces/IBook";
import { Book } from "../entities/Book";

interface IBookDB {
  getAllBooks(): Promise<IBook[]>;
  getBookById(bookID: string): Promise<IBook | any>;
  addBook(book: IBook): Promise<void>;
}

class BookDB implements IBookDB {
  public async getAllBooks(): Promise<IBook[]> {
    const res = await Book.find();
    return res;
  }

  public async getBookById(bookID: string): Promise<IBook | any> {
    const res = await Book.findOne(bookID);
    return res;
  }

  public async addBook(book: IBook): Promise<IBook | any> {
    try {
      await Book.insert(book);
      return book;
    } catch (e: any) {
      console.log(">>> error", e);

      throw new Error(e);
    }
  }
}

export { IBookDB, BookDB };
