
import '../App.css'
import {useParams} from 'react-router-dom'
import { useState , useEffect} from 'react'
import {getFirestore, getDoc,doc} from 'firebase/firestore'
import CountComponent from './CountComponent'
export default function ItemDetail() {
  const [item, setItem] = useState(null)

  const {itemId} = useParams()

  useEffect(()=>{
    const db = getFirestore()

    const getItem = doc(db,'productos',(itemId))

    getDoc(getItem).then((snapshot)=>{
        if(snapshot.exists()){
          setItem({id:snapshot.id, ...snapshot.data()})
        }
      }
    )
  },[])
    
    return (
      <>
        <div className='div-ItemDetail'>
          {
            item ? (
              <div className='ItemDetail' key={item.id}> 
                  <img src={item.image} alt='' className='image-ItemDetail'/>
                  <h5>{item.name}</h5>
                  <h6>${item.price}</h6>
                  <h6>Género: {item.gender.toUpperCase()}</h6>
                  <h6>{item.description}</h6>
                  <h6>Disponibles: {item.stock}</h6>
                  <CountComponent item={item}/>
              </div>
            ) : (
              <h2>Cargando...</h2>
            )
          }
        </div>
      </> 
    )
  }