import React from "react";
const AddProduct = () => {
  return (
    <div className="prodcut">
      <h1>AddProduct</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product name"
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product price"
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product category"
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter product company name"
      />
      <button className="submit">Add Product</button>
    </div>
  );
};
export default AddProduct;
