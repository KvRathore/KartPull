import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  const { title, image, quantity, price } = props;

  let heading = '';

  if (title.length > 15) {
    heading = title.substring(0, 15) + '...';
  } else {
    heading = title;
  }

  return (
    <div className="cart">
      <div className="item-image">
        <img src={image} alt="" />
      </div>

      <div className="item-info">
        <p className="item-title">{heading}</p>
        <p className="item-price">Price for 1: {price}$</p>
        <p className="item-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
