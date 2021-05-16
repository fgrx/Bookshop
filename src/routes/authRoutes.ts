import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { IDB } from "../database";
import { ICredentials } from "../interfaces/ICredentials";

export class AuthRoutes {
  constructor(app: any, db: IDB) {
    app.route("/auth").post(async (req: Request, res: Response) => {
      try {
        const credentials: ICredentials = req.body;

        const result = await db.user.getUserByEmail(credentials.email);

        if (!result) {
          res.status(403).json({ error: "Invalid credentials" });
        }

        const isPasswordCorrect = await this.comparePassword(
          credentials.password,
          result.password
        );

        if (isPasswordCorrect) {
          res.json({ message: "Valid credentials" });
        } else {
          res.status(403).json({ error: "Invalid credentials" });
        }
      } catch (e: any) {
        res.status(403).json({ error: e.toString() });
      }
    });
  }

  private async encodePassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  private async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
