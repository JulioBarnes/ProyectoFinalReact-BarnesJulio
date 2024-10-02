import { createContext, useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const addItem = (count) => {
    setCountCart([...countCart, count]);
  };

  const createNewOrder = (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    return addDoc(orderCollection, order).then((pedido) => {
      return pedido;
    });
  };

  return (
    <CartContext.Provider value={[cart, setCart, countCart, setCountCart, addItem, addCart, createNewOrder,]}>
      {children}
    </CartContext.Provider>
  );
}