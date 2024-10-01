import { createContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";

export const CartContext = createContext ([])

export function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState('')

    const addItem = (item)=>{
        setCart([...cart, item])
    }

    const createNewOrder = ()=>{

        const db = getFirestore()
        
        const order = collection(db,'orders')

        addDoc(orders, order).then((snapshot)=>{
            setOrderId(snapshot.id)
            
        })
    }

    return(
        <CartContext.Provider value={{cart, setCart, addItem, createNewOrder }}>
            {children}
        </CartContext.Provider>
    )
}