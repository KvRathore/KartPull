import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
  cartNumber: 0,
  cartItems: [],
  updateItems: (item) => {},
  error: false,
  isLoading: true,
  storeItem: [],
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [storeItem, setStoreItem] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  //   Function to load up items in inventory.

  const updateInventory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api');
      const data = response.data;
      setIsLoading(false);
      return data;
    } catch (err) {
      throw err;
    }
  };

  //   useEffect -> to call the inventory function once.
  useEffect(() => {
    updateInventory()
      .then((data) => {
        setError(false);
        setStoreItem(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  const updateItems = (item) => {
    const index = items.findIndex((el) => el.id === item.id);

    console.log(index);

    if (index >= 0) {
      const oldItem = items[index];
      oldItem.quantity += 1;
      setItems(items);
    } else {
      const obj = {
        quantity: 1,
        ...item,
      };

      setItems((prev) => [...prev, obj]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartNumber: items.length,
        cartItems: items,
        updateItems,
        storeItem,
        isLoading,
        error,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
