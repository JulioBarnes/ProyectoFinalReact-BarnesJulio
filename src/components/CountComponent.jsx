import {useState} from 'react';
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