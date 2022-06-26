import { useContext } from 'react';
import './Product.css';
import CartContext from '../../store/cart-context';

import React from 'react';

const Product = (props) => {
  const ctx = useContext(CartContext);

  const { id, title, image, rating, price } = props;

  let content = title;

  if (title.length > 12) {
    content = title.substring(0, 12) + '...';
  }

  const addToCart = () => {
    ctx.updateItems({
      id,
      title,
      image,
      price,
    });
  };

  return (
    <div className="product">
      <figure className="product-image-container">
        <img src={image} alt="" className="product-image" />
      </figure>
      <div className="product-info">
        <p className="product-title">{content}</p>
        <p className="product-cost">Price: {price}$</p>
        <p className="product-rating">Rating: {rating}/5</p>
        <button className="add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
