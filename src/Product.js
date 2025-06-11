import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small></small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <div className="product__id">
            <small>Product ID: {id}</small>
          </div>
        </div>
        <img src={image} />

        <button>Add to basket</button>
      </div>
    </div>
  );
}
export default Product;
