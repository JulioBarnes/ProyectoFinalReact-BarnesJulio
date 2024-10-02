import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import UserInfo from './UserInfo';
export default function CartWidget() {
  const [cart] = useContext(CartContext);

  return (
    <>
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <h5>No hay productos en el carrito</h5>
      ) : (
        <>
          <div className="div-CartWidget">
            <ul className="ul-CartWidget">
              {cart.map((item) => (
                <div className="item-div-CartWidget" key={item.id}>
                  <img className="item-image-CartWidget" src={item.image} alt={item.name}/>
                  <li className="item-name-CartWidget">{item.name}</li>
                  <li className="item-price-CartWidget">${item.price}</li>
                  <li className="item-quantiy-CartWidget"> x {item.quantity}</li>
                </div>
              ))}
            </ul>
            <p className="total-CartWidget">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
          <UserInfo carrito={cart}/>
        </>
      )}
    </>
  );
}