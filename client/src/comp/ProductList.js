import React, { useEffect, useState } from "react";
const ProductList = () => {
  const [products, setProducts] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product");
    result = await result.json();
    setProducts(result);
  };
  console.log("products", products);
  return (
    <div className="product-list">
      <h3>ProductList</h3>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Cateogry</li>
        <li>Comapny</li>
      </ul>
      {/* {products.map((item, index) => (
        <ul>
          <li>{index}</li>
          <li>{item.name}</li>
        </ul>
      ))} */}
    </div>
  );
};
export default ProductList;
