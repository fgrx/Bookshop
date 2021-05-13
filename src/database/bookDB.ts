import { IBook } from "../interfaces/IBook";
import { Book } from "../entities/Book";

interface IBookDB {
  getAllBooks(): Promise<IBook[]>;
  getBookById(bookID: string): Promise<IBook | any>;
  addBook(book: IBook): Promise<IBook>;
  updateBook(book: IBook): Promise<IBook>;
  deleteBook(bookID: string): Promise<any>;
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

  public async addBook(book: IBook): Promise<IBook> {
    try {
      await Book.insert(book);
      return book;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async updateBook(bookToUpdate: IBook): Promise<IBook> {
    try {
      const bookEntity = await Book.findOne(bookToUpdate.id);
      if (bookEntity) {
        Book.merge(bookEntity, bookToUpdate);
        await Book.save(bookEntity);
      }
      return bookToUpdate;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async deleteBook(bookID: string): Promise<any> {
    try {
      const bookEntity = await Book.findOne(bookID);
      if (bookEntity) {
        await Book.delete(bookID);
        return `Book ${bookID} deleted`;
      } else {
        throw new Error("Book not found");
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export { IBookDB, BookDB };
