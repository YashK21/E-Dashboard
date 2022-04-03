import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setCategory(result.category);
    setCompany(result.company);
    setPrice(result.price);
  };
  const updateProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div className="prodcut">
      <h1>Update Product</h1>
      <input
        type="text"
        className="inputBox"
        value={name}
        placeholder="Update product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="inavlid-input">Enter valid name </span>
      )}
      <input
        type="text"
        value={price}
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Update product price"
      />
      {error && !price && (
        <span className="inavlid-input">Enter valid price </span>
      )}
      <input
        type="text"
        value={category}
        className="inputBox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
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
        placeholder="Update product company name"
      />
      {error && !company && (
        <span className="inavlid-input">Enter valid company name</span>
      )}
      <button onClick={updateProduct} className="submit">
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
