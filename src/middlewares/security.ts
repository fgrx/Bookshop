import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export class Security {
  jwtSecret: string = process.env.JWT_SECRET!;
  jwtExpiresIn = Number(process.env.JWT_EXPIREIN) | 86400;

  checkJWT = (req: Request, res: Response, next: NextFunction) => {
    let token: string = req.headers["authorization"] || "";
    if (!!token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, this.jwtSecret, (err, decoded: any) => {
        if (err) {
          return res.status(401).json("token_not_valid");
        } else {
          const newToken = jwt.sign(
            { result: decoded.result },
            this.jwtSecret,
            {
              expiresIn: this.jwtExpiresIn,
            }
          );

          res.header("Authorization", "Bearer " + newToken);
          next();
        }
      });
    } else {
      return res.status(401).json("token_required");
    }
  };
}
