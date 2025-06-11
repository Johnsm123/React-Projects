import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="Checkoutproduct">
      <img src="" alt="test1.webp" className="checkoutProduct__image" />

      <div className="product__info">
        <p className="checkoutProduct__title">The dresses</p>
        <p className="checkoutProduct__Price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
