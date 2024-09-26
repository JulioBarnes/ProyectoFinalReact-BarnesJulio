import '../App.css'
export default function CardComponent() {
    
    return (
      <>
        <div className='cardComponent'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_700409-MLA52223384556_102022-O.webp' alt='' className='image-CarComponent'/>
          <h4>ID Perfume</h4>
          <p>Género: </p>
          <p>Precio: </p>
          <p>Disponibles: </p>
          <div className='d-flex justify-content-evenly'>
            <button className='button-CardComponent'> +
            </button>
            <p className='flex-column align-self-end'>1</p>
            <button className='button-CardComponent'> -
            </button>
          </div>
          
        </div>
      </> 
    )
  }