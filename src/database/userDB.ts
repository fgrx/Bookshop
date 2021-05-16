import { IUser } from "../interfaces/IUser";
import { User } from "../entities/User";

export interface IUserDB {
  getUserByEmail(email: string): Promise<IUser>;
}

export class UserDB implements IUserDB {
  async getUserByEmail(email: string): Promise<IUser> {
    const result = await User.find({ email: email });
    return result[0];
  }
}
