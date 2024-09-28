import React, { useState } from 'react';
import '../App.css'

export default function CountComponent(){
  const [count, setCount] = useState(0);

  const increment = () => {
    if(count < 10){
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
        </div>
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