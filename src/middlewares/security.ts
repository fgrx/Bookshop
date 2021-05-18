import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class Security {
  secretJWT = process.env.JWT_SECRET!;

  checkJWT(req: Request, res: Response, next: Function) {
    let token: string = req.headers["authorization"] || "";
    if (!!token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, this.secretJWT, (err, decoded) => {
        if (err) {
          return res.status(401).json("token_not_valid");
        } else {
          //req.decoded = decoded;

          const expiresIn = 24 * 60 * 60;
          const newToken = jwt.sign(decoded!, this.secretJWT, {
            expiresIn: expiresIn,
          });

          res.header("Authorization", "Bearer " + newToken);
          next();
        }
      });
    } else {
      return res.status(401).json("token_required");
    }
  }
}
