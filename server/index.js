const express = require("express");
require("./conn/conn");
const cors = require("cors");
const User = require("./db/User");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home");
});
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});
app.listen(5000, () => {
  console.log("Server connected");
});
