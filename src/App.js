import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './contenido/Header';
import Main from './contenido/Main';
import Footer from './contenido/Footer';
import ItemListContainer from './contenido/ItemListContainer';
import ItemDetailContainer from './contenido/ItemDetailContainer';
import Cart from './contenido/Cart';
import React from 'react';
import CartProvider from './context/CartContext';



const App = () => {


  return (
  
  <BrowserRouter>
    <CartProvider>
      <div className='fondo_header'>
        <>
            
              <Header />
              <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/tienda' element={<ItemListContainer/>} />
                <Route path='/tienda/:categoriaId' element={<ItemListContainer/>} />
                <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}></Route>
              </Routes>
              <Footer redesSociales="Seguinos en nuestras Redes" />
        </>
      </div>
    </CartProvider>
  </BrowserRouter>

  )
}

export default App;