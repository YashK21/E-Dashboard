const mongoose = require("mongoose");
const config = require("../config.json");
const connectDB = async () => {
  mongoose.connect(config.db);
  // const productSchema = new mongoose.Schema({});
  // const product = mongoose.model("product", productSchema);
  // const data = await product.find();
  //   console.warn(data);
  console.log("DB Connected");
};
connectDB();
