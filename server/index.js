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
  let result = await user.save();
  //to remove password from showing
  result = result.toObject();
  delete result.password;
  res.send(result);
});
app.post("/login", async (req, res) => {
  // res.send(req.body);
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("Not Found");
    }
  } else {
    res.send("All are required");
  }
});
app.listen(5000, () => {
  console.log("Server connected");
});
