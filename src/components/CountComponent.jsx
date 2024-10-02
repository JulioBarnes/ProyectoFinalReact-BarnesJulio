import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';
import Swal from 'sweetalert2';

export default function CountComponent({ item }) {
  const [count, setCount] = useState(0);
  const [, , , , addItem, addCart] = useContext(CartContext);

  const alCarrito = () => {
    const compra = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: count,
    };
    addItem(count);
    addCart(compra);

    Swal.fire({
      title:'Agregado',
      icon: 'success',
      toast: true,
      position: 'top-end',
      iconColor: 'white',
      background: '#3fc3ee',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

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
      <div className="div-CountComponent">
        <button className="button-CountComponent" onClick={decrement}>
          -
        </button>
        <span className="span-CountComponent">{count}</span>
        <button className="button-CountComponent" onClick={increment}>
          +
        </button>
        {count !== 0 && <p>Total: ${item.price * count}</p>}
      </div>
      {count !== 0 && (
        <button className="button-Agregar-ItemDetail" onClick={() => alCarrito(item, count)}>
          Agregar al carrito
        </button>
      )}
    </>
  );
}