const mongoose = require("mongoose");
const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://admin:yash210709@dashboard.ylbdy.mongodb.net/e-comm?retryWrites=true&w=majority"
  );
  // const productSchema = new mongoose.Schema({});
  // const product = mongoose.model("product", productSchema);
  // const data = await product.find();
  //   console.warn(data);
  console.log("DB Connected");
};
connectDB();
