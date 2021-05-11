const dotenv = require("dotenv");
dotenv.config();

import Server from "./src/server";
const PORT = process.env.PORT || 3000;

const app = new Server();

app.app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
