const { resolve } = require("path");
const { config } = require("dotenv");

config({ path: resolve(__dirname, "../.env") });

const PORT = process.env.PORT;

module.exports = {
  PORT,
};
