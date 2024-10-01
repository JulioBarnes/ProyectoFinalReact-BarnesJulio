import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css'

export default function CountComponent({price, stock, item}){
  const [count, setCount] = useState(0);

  //const [,,addItem,]=useContext(CartContext)

  //const agregarAlCarrito=()=>{
  //  addItem(item)
  //}

  const increment = () => {
    if(count < stock){
        setCount(count + 1);
    }
  };

  const decrement = () => {
    if(count > 0){
        setCount(count - 1);
    }
  };

  return (
    <>
        <div className="counter-container">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-display">{count}</span>
            <button className="counter-button" onClick={increment}>+</button>
            {count !== 0 && <p>Total: ${price*count}</p>}
        </div>
        {count!== 0 && <button className='button-Agregar-ItemDetail' onClick={()=> agregarAlCarrito(count)}>Agregar al carrito</button>}
    </>
    
  );
}






/*import {useState} from 'react';
export default function CountComponent(){

    const [count, setCount] = useState(0)

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={()=> setCount((count)=> count <10 && count+1 )}>Agregar</button>
            <button onClick={()=> setCount((count)=> count >0 && count-1 )}>Quitar</button>
        </>
    )

}

ItemQuantitySelector
Description
AddItemButton*/