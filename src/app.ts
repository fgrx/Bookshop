import express from "express";
import { IDB } from "./database";
import { Routes } from "./routes/index";
import cors from "cors";

class Server {
  public app: express.Application;
  public router: Routes = new Routes();

  constructor(db: IDB) {
    db.connectDB();
    this.app = express();

    const allowedOrigins = [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ];

    const options: cors.CorsOptions = {
      origin: allowedOrigins,
    };

    this.app.use(cors(options));
    this.app.use(express.json());

    this.router.routes(this.app, db);
  }
}

export default Server;
