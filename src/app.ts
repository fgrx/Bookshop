import express from "express";
//import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";

class App {
  public app: express.Application;
  public router: Routes = new Routes();

  constructor() {
    this.app = express();
    this.router.routes(this.app);
  }
}

export default App;
