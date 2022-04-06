import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const addProduct = async (e) => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    e.preventDefault();
    console.warn(name, price, category, company);
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userID._id);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userID }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result.userID);
    alert("added");
    navigate("/");
  };

  return (
    <div className="prodcut">
      <h1>AddProduct</h1>
      <input
        type="text"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter product name"
      />
      {error && !name && (
        <span className="inavlid-input">Enter valid name </span>
      )}
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="inputBox"
        placeholder="Enter product price"
      />
      {error && !price && (
        <span className="inavlid-input">Enter valid price </span>
      )}
      <input
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        className="inputBox"
        placeholder="Enter product category"
      />
      {error && !category && (
        <span className="inavlid-input">Enter valid category</span>
      )}
      <input
        type="text"
        value={company}
        className="inputBox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter product company name"
      />
      {error && !company && (
        <span className="inavlid-input">Enter valid company name</span>
      )}
      <button onClick={addProduct} className="submit">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
