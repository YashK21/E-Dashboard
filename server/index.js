const express = require("express");
require("./conn/conn");
const cors = require("cors");
const User = require("./db/User");
const Product = require("./db/Product");
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
  // console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.status(200).json({
        success: true,
        data: user,
      });
    } else {
      // res.send("Not Found");
      res.status(403).json({
        success: false,
        error: "not found",
      });
      // console.warn("not found");
    }
  } else {
    res.send("All fields are required");
  }
});
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
app.listen(5000, () => {
  console.log("Server connected");
});
