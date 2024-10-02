import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function UserInfo({ carrito }) {
  const [, , , , , , createNewOrder] = useContext(CartContext);
  const [resumeOrder, setResumeOrder] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const order = {
    buyer: {
      nombre,
      apellido,
      telefono,
      email,
    },
    items: carrito,
    RealizadaEl: new Date(),
  };

  const handleSubmit = () => {
    createNewOrder(order)
      .then((pedido) => {
        setOrderId(pedido.id);
        setResumeOrder(pedido);
      })
      .catch((error) => {
        console.error('Error al crear la orden:', error);
      });
  };

  return (
    <>
      <h2 className="h1-UserInfo">Completa la orden</h2>
      <div className="div-UserInfo">
        <form className="form-UserInfo" action="">
          <input className="input-UserInfo" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required minLength="3"/>

          <input className="input-UserInfo" type="text" placeholder="Apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)} required minLength="3"/>

          <input className="input-UserInfo" type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required pattern="^[0-9]+$" title="El teléfono debe contener números"/>

          <input className="input-UserInfo" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          
        </form>
        <button onClick={handleSubmit} className="button-UserInfo" type="submit">Finalizar Compra</button>
        {orderId && ( 
          <h6 className="resume-UserInfo">Nueva orden generada id: {orderId}</h6>
        )}
      </div>
    </>
  );
}