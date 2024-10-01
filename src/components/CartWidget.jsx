import { useContext } from "react"
import {CartContext} from "../context/CartContext"
import UserInfo from "./UserInfo"
export default function CartWidget(){

    const {cart, createNewOrder} = useContext(CartContext)


    return (
        <>
            <h3>Carrito</h3>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <><ul>
                        {cart.map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt={item.name}/>
                                <li>{item.name.toUpperCase()}</li>
                                <li>${item.price}</li>
                                <li>${item.cantidad}</li>
                            </div>
                        ))}
                    </ul>
                    <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
                    <UserInfo carrito={cart} createNewOrder={createNewOrder}/>
                </>
                
            )}
        </>
    )
}