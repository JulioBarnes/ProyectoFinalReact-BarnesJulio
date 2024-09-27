import '../App.css'
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <>
            <nav className='navClass'>
                <button>
                    <Link className='link-NavBar' to={'/'}>Todos</Link>
                </button>
                <button>
                    <Link className='link-NavBar' to={'/masculino'}>Masculino</Link>
                </button>
                <button>
                    <Link className='link-NavBar' to={'/femenino'}>Femenino</Link>
                </button>
                <button>
                    <Link className='link-NavBar' to={'/unisex'}>Unisex</Link>
                </button>
                <a> 
                    <Link className='link-NavBar' to={'/checkout'}>
                        <img src="/CartIcon.png" alt="carrito de compras" />
                        <span>1</span>
                    </Link>
                </a>
            </nav>
        </>
    )
}