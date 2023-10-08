import express from "express";
import routes from "./routes/routes";
const bodyParser = require("body-parser");
const cors = require("cors");

function expressServer() {
  const app = express();
  const port = 8080;

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  routes(app);

  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port} ⚡`);
  });
}

export default expressServer;
