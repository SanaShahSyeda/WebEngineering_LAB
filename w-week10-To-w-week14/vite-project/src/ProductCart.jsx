import React from "react";
import { useState } from "react";
import "./ProductCart.css";

export default function ProductCart() {
  const [price, setPrice] = useState(100);

  const displayCartItem = () => {};

  return (
    <div className="main_div">
      <h1>Product Cart</h1>
      <div className="product">
        <label className="product_name">Apples</label>
      </div>
      <div className="price">
        <label>Rs.100 per Kg</label>
      </div>
      <div>
        <button className="add" onClick={() => {}}>
          Add to Cart
        </button>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
