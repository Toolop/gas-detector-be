import express from "express";
import routes from "./routes/routes";
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("../../config/config");

function expressServer() {
  const app = express();
  //express js
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  routes(app);
  app.listen(config.port, () => {
    console.log(
      `[server] server dimulai di http://localhost:${config.port} ⚡`
    );
  });
}

export default expressServer;
