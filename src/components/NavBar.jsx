import ButtonComponent from './ButtonComponent.jsx'
import '../App.css'
export default function NavBar(){
    return(
        <>
            <nav className='navClass'>
                <ButtonComponent genero="Todos"></ButtonComponent>
                <ButtonComponent genero="Masculino"></ButtonComponent>
                <ButtonComponent genero="Femenino"></ButtonComponent>
                <ButtonComponent genero="Unisex"></ButtonComponent>
                <a>
                    <img src="../public/CartIcon.png" alt="carrito de compras" />
                    <span>1</span>
                </a>
            </nav>
        </>
    )
}