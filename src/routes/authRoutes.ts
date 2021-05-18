import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { IDB } from "../database";
import { ICredentials } from "../interfaces/ICredentials";

export class AuthRoutes {
  secretJWT = process.env.JWT_SECRET!;

  constructor(app: any, db: IDB) {
    app.post("/auth", async (req: Request, res: Response) => {
      const credentials: ICredentials = req.body;

      try {
        const user = await db.user.getUserByEmail(credentials.email);

        if (!user) {
          res.status(403).json({ error: "Invalid credentials" });
        }

        const isPasswordCorrect = await this.comparePassword(
          credentials.password,
          user.password
        );

        if (isPasswordCorrect) {
          const expireIn = 24 * 60 * 60;

          const result = { email: user.email, isAdmin: user.isAdmin };

          const token = jwt.sign({ result }, this.secretJWT, {
            expiresIn: expireIn,
          });

          res
            .header("Authorization", "Bearer " + token)
            .json({ message: "Valid credentials" });
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
    const isPasswordOk = await bcrypt.compare(password, hash);

    return isPasswordOk;
  }
}
