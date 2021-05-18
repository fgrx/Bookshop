import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export class Security {
  checkJWT(req: Request, res: Response, next: NextFunction) {
    const secretJWT = process.env.JWT_SECRET!;

    let token: string = req.headers["authorization"] || "";
    if (!!token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, secretJWT, (err, decoded: any) => {
        decoded; //?
        if (err) {
          return res.status(401).json("token_not_valid");
        } else {
          const expiresIn = 24 * 60 * 60;

          const newToken = jwt.sign({ result: decoded.result }, secretJWT, {
            expiresIn: expiresIn,
          });

          newToken; //?

          res.header("Authorization", "Bearer " + newToken);
          next();
        }
      });
    } else {
      return res.status(401).json("token_required");
    }
  }
}
