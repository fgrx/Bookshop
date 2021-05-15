import { IUser } from "../interfaces/IUser";
import { User } from "../entities/User";

interface IUserDB {
  getUser(id: string): IUser | null;
}
