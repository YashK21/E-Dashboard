const express = require("express");
require("./conn/conn");
const cors = require("cors");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
const jwt = require("jsonwebtoken");
const config = require("./config.json");
const key = config.jwtkey;
app.use(express.json());
app.use(cors());
// home route
app.get("/", verifytoken, (req, res) => {
  res.send("Home");
});
// register
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  let result = await user.save();
  //to remove password from showing
  result = await result.toObject();
  delete result.password;
  // res.send(result);
  jwt.sign({ result }, key, { expiresIn: "4h" }, (err, token) => {
    if (err) {
      res.json({
        success: false,
        err: "not found",
      });
    }
    res.json({
      success: true,
      result,
      auth: token,
    });
  });
});
//login
app.post("/login", async (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, key, { expiresIn: "4h" }, (err, token) => {
        if (err) {
          res.status(403).json({
            success: false,
            error: "not found",
          });
        }
        res.status(200).json({
          success: true,
          data: user,
          auth: token,
        });
      });
    } else {
      res.send("Not Found");
      res.status(403).json({
        success: false,
        error: "not found",
      });
      console.warn("not found");
    }
  } else {
    res.send("All fields are required");
  }
});
//add-product
app.post("/add-product", verifytoken, async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
//products
app.get("/products", verifytoken, async (req, res) => {
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
app.delete("/product/:id", verifytoken, async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});
//list product
app.get("/product/:id", verifytoken, async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "not found" });
  }
});
//update
app.put("/product/:id", verifytoken, async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});
//search
app.get("/search/:key", verifytoken, async (req, res) => {
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
//verify token
function verifytoken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, key, (error, valid) => {
      if (error) {
        res.status(401).json({
          success: false,
          msg: "wrong token",
        });
      } else {
        next();
      }
    });

    // console.log("middleware called", token);
  } else {
    res.status(403).json({
      success: false,
      msg: "token not found",
    });
  }
}
app.listen(5000, () => {
  console.log("Server connected");
});
