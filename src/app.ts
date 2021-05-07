import express from "express";
//import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }
}

export default App;
