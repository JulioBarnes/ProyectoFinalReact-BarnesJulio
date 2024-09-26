
import '../App.css'
export default function ItemDetail() {
    
    return (
      <>
        <div className='ItemDetail'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_700409-MLA52223384556_102022-O.webp' alt='' className='image-ItemDetail'/>
          <h4>ID Perfume</h4>
          <p>Género: </p>
          <p>Precio: </p>
          <p>Descripcion: </p>
          <p>Disponibles: </p>
          <div className='d-flex justify-content-evenly'>
            <button className='button-ItemDetail'> +
            </button>
            <p className='flex-column align-self-end'>1</p>
            <button className='button-ItemDetail'> -
            </button>
          </div>
          <button className='button-ItemDetail'> Agregar
          </button>
        </div>
      </> 
    )
  }