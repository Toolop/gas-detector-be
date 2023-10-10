import express from "express";
import routes from "./routes/routes";
const bodyParser = require("body-parser");
const cors = require("cors");
import config from "../../config/config";

function expressServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  routes(app);

  app.listen(config.port, () => {
    console.log(`[server] server dimulai di http://localhost:${config.port} ⚡`);
  });
}

export default expressServer;
