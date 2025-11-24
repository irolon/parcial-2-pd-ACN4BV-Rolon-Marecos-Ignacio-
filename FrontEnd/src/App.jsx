import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../src/css/style.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Inicio/ItemListContainer';
import HomeListContainer from './components/Inicio/HomeItemListContainer';
import CheckOut from './components/Checkout/CheckOut';
import CardDetailContainer from './components/Cards/CardDetailContainer';
import CartContainer from './components/Cards/CartContainer';
import SeccionRelojes from './components/Navegacion/SeccionRelojes';
import Error404 from './components/not-found/Error404';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">   
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={
              <>
                <ItemListContainer titulo="Relojes diseñados para quienes valoran el tiempo" subtitulo="Combiná elegancia y precisión en un solo accesorio."/>
                <HomeListContainer />   
              </>
          } />
          <Route path='/categoria/:type'  element={<SeccionRelojes />} />
          <Route path="/productos/:id" element={<CardDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='*' element={<Error404 />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
