import { useState, useContext, useEffect} from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

export default function CountComponent({item}) {


  const [count, setCount] = useState(0);
  const [, , , , addItem, addCart] = useContext(CartContext);

  const alCarrito=()=>{
    const compra = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: count
    }  
    addItem(count);
    addCart(compra); 
  }

  const increment = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="counter-display">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
        {count !== 0 && <p>Total: ${item.price * count}</p>}
      </div>
      {count !== 0 && (
        <button
          className="button-Agregar-ItemDetail"
          onClick={() => alCarrito(item, count)}
        >
          Agregar al carrito
        </button>
      )}
    </>
  );
}