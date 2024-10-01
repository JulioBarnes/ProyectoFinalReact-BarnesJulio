import '../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export default function NavBar() {
  const [, , countCart] = useContext(CartContext);

  return (
    <>
      <nav className="div-navClass">
        <div>
          <a href="">
            <Link className="link-General" to={'/'}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.6'%3E%3Cpath d='M10 6v3m4-3v3m-9 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z'/%3E%3Cpath d='M10 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 3h6v3H9z'/%3E%3C/g%3E%3C/svg%3E"
                alt="logo de la tienda"
              />
            </Link>
          </a>
        </div>
        <div className="div-button-NavBar">
          <button className="button-NavBar">
            <Link className="link-General" to={'/category/masculino'}>
              Masculino
            </Link>
          </button>
          <button className="button-NavBar">
            <Link className="link-General" to={'/category/femenino'}>
              Femenino
            </Link>
          </button>
          <button className="button-NavBar">
            <Link className="link-General" to={'/category/unisex'}>
              Unisex
            </Link>
          </button>
        </div>
        <div>
          <a>
            <Link className="link-General" to={'/checkout'}>
              <img src="/CartIcon.png" alt="carrito de compras" />
              <span className="span-Cart-NavBar">{countCart.length}</span>
            </Link>
          </a>
        </div>
      </nav>
    </>
  );
}