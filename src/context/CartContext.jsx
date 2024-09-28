import { createContext, useState } from "react";

export const CartContext = createContext ([])

export function CardProvider({children}){
    const [cart, setCart] = useState([])

    addItem = (item)=>{
        setCart([...cart, item])
    }

    return(
        <CartContext.Provider value={{cart, setCart, addItem }}>
            {children}
        </CartContext.Provider>
    )
}