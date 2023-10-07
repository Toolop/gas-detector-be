import express from "express";
import routes from "./routes/routes"

function expressServer() {
  const app = express();
  const port = 8080;

  routes(app)

  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port} ⚡`);
  });
}

export default expressServer;

