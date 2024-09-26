import '../App.css'
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <>
            <nav className='navClass'>
                <button>
                    <Link to={'/'}>Todos</Link>
                </button>
                <button>
                    <Link to={'/masculino'}>Masculino</Link>
                </button>
                <button>
                    <Link to={'/femenino'}>Femenino</Link>
                </button>
                <button>
                    <Link to={'/unisex'}>Unisex</Link>
                </button>
                <a> 
                    <Link to={'/checkout'}>
                        <img src="/CartIcon.png" alt="carrito de compras" />
                        <span>1</span>
                    </Link>
                </a>
            </nav>
        </>
    )
}