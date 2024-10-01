import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import UserInfo from './UserInfo';
export default function CartWidget() {
  const [cart,,countCart] = useContext(CartContext);

  return (
    <>
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <h5>No hay productos en el carrito</h5>
      ) : (
        <>
          <div className="cart-container">
            <ul className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <li className="cart-item-name">{item.name}</li>
                  <li className="cart-item-price">${item.price}</li>
                  <li className="cart-item-quantity"> x {item.quantity}</li>
                </div>
              ))}
            </ul>
            <p className="cart-total">
              Total: ${cart.reduce((acc, item) => acc + (item.price*item.quantity), 0)}
            </p>
          </div>
          {/* <UserInfo carrito={cart} createNewOrder={createNewOrder} /> */}
        </>
      )}
    </>
  );
}