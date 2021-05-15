import { IUser } from "../interfaces/IUser";
import { User } from "../entities/User";

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthDB {
  getUserByEmail(email: string): Promise<IUser>;
}

class AuthDB implements IAuthDB {
  async getUserByEmail(email: string): Promise<IUser> {
    const result = await User.find({ email: email });
    return result[0];
  }
}

export { ICredentials, IAuthDB, AuthDB };
