import { DB } from "./src/database";
const dotenv = require("dotenv");

dotenv.config();

import Server from "./src/app";
const PORT = process.env.PORT || 3000;

const app = new Server(new DB());

app.app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
