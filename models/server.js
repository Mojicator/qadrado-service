const express = require("express");
const path = require("path");
const { PORT } = require("../config/env");

class Server {
  constructor() {
    this.port = PORT;
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware = () => {
    const publicPath = path.resolve(__dirname, "../public");
    this.app.use(express.static(publicPath));
  };

  routes = () => {
    this.app.use("/api", (req, res) => {
      res.send("Buenas buenas!");
    });
  };

  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Server running at the port ${this.port}`);
    });
  };
}

module.exports = Server;
