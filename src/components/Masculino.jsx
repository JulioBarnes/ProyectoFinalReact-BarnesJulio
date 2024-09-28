import '../App.css'
import { useState , useEffect} from 'react'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
export default function Masculino() {
  
    const [items, setItems] = useState([])

    useEffect(() =>{
      const db = getFirestore()

      const itemsCategory = query(collection(db, 'productos'), where('gender','==','masculino'))

      getDocs(itemsCategory).then((snapshot) =>{
        if(snapshot.size === 0){
          console.log('No hay items')
          return 0  // para evitar el error de retorno indefinido en el map
        }
        setItems(snapshot.docs.map((doc) => ({gender:doc.gender, ...doc.data()})))
      })
    },[])
    
    return (
      <>
        <div className='style-ItemListContainer'>
          <div className='div-ItemDetail'>
            {items.length > 0 ? (
              items.map((item)=>(
                <div className='ItemDetail' key={item.id}> 
                    <img src={item.image} alt='' className='image-ItemDetail'/>
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                    <button className='button-ItemDetail'> Ver Detalle
                    </button>
                </div>
                ))
              ):(<h2>Cargando...</h2>) 
            }        
          </div>
        </div>
        
      </> 
    )
  }