import { useState } from "react";

export default function UserInfo({carrito,createNewOrder}){
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit=()=>{
        const order = [
            buyer= {
                nombre,
                apellido,
                telefono,
                email
            },
            items=carrito,
            RealizadaEl = new Date()
        ]
        
        createNewOrder(order)
    }

    return (
        <>
        <h1>Información Personal</h1>
        <div className="div-UserInfo">
            <form className="form-UserInfo" action="">
                <input className="input-UserInfo" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />  
                <input className="input-UserInfo" type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input className="input-UserInfo" type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <input className="input-UserInfo" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </form>
            <button onClick={handleSubmit} className="button-UserInfo" type="submit">Finalizar Compra</button>
        </div>
        
        </>
    )
}