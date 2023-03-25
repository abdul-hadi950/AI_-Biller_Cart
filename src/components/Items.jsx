import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  const totalItemAmount = price * quantity;
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h2>{title}</h2>
        </div>
        
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <div className="price">
          <h3>{totalItemAmount}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;