const dotenv = require("dotenv");
dotenv.config();

import App from "./src/app";
const PORT = process.env.PORT || 3000;

const server = new App();

server.app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
