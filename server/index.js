const express = require("express");
require("./conn/conn");
const cors = require("cors");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors());
// home route
app.get("/", (req, res) => {
  res.send("Home");
});
// register
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  let result = await user.save();
  //to remove password from showing
  result = result.toObject();
  delete result.password;
  res.send(result);
});
//login
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
//add-product
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
//products
app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.json(products);
  } else {
    res.json({
      msg: "not found",
    });
  }
});
//delete product
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});
//list product
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "not found" });
  }
});
//update
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});
//search
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});
app.listen(5000, () => {
  console.log("Server connected");
});
