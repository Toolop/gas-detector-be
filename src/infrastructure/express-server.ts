import express from "express";

function expressServer() {
  const app = express();
  const port = 8080;

  // endpoint sederhana untuk menampilkan teks 'Hello Express Node.js'
  app.get("/", (req, res) => res.send("Hello Express Node.js"));

  // mulai server express
  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port} ⚡`);
  });
}

export default expressServer;
