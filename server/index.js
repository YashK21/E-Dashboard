const express = require("express");
require("./conn/conn");
require("./db/User");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home");
});
app.post("/register", (req, res) => {
  res.send("progress");
});
app.listen(5000, () => {
  console.log("Server connected");
});
