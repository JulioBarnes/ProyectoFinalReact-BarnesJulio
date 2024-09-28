import '../App.css'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
export default function ItemList() {
  
    const [items, setItems] = useState([])

    useEffect(() =>{
      const db = getFirestore()

      const itemsCollection = collection(db, 'productos')

      getDocs(itemsCollection).then((snapshot) =>{
        if(snapshot.size === 0){
          console.log('No hay items')
          return 0  // para evitar el error de retorno indefinido en el map
        }
        setItems(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
      })
    },[])
    
    return (
      <>
        <div className='div-ItemDetail'>
          {items.length > 0 ? (
            items.map((item)=>(
              <div className='ItemDetail' key={item.id}> 
                  <img src={item.image} alt='' className='image-ItemDetail'/>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <button className='button-ItemDetail'> 
                    <Link to={`/item/${item.id}`}>Ver Detalle</Link>
                  </button>
              </div>
              ))
            ):(<h2>Cargando...</h2>) 
          }  
        </div>
      </> 
    )
  }