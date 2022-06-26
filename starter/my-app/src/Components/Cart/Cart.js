import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = () => {
  const ctx = useContext(CartContext);

  const itemsInCart = ctx.cartItems;

  const itemTotalArray = itemsInCart.map((c) => {
    return c.quantity * c.price;
  });

  let total = 0;
  if (itemTotalArray.length > 0) {
    itemTotalArray.forEach((c) => {
      total += c;
    });
  }

  return (
    <div className="cart-container">
      <h4 className="cart-heading">Your cart</h4>

      <Link to="/">
        <button className="back-btn">Go back to products page.</button>
      </Link>
      {itemsInCart.length < 0 && (
        <p className="add-items">Add Items to your cart!</p>
      )}

      {itemsInCart.length > 0 && (
        <div className="cart-items">
          {itemsInCart.map((item) => (
            <CartItem
              key={item.id}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </div>
      )}
      {total > 0 && <p className="add-items">Total bill: {total}</p>}
    </div>
  );
};

export default Cart;
