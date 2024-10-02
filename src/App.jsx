import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <h1 className="h1-Titulo">Perfumes TOP</h1>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route exact path="/checkout" element={<CartWidget />}/>            
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
export default App;