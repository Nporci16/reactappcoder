import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './contenido/Header';
import Main from './contenido/Main';
import Footer from './contenido/Footer';
import ItemListContainer from './contenido/ItemListContainer';
import ItemDetailContainer from './contenido/ItemDetailContainer';

const App = () => {


  return (
  <BrowserRouter>
    <div className='fondo_header'>
      <>
        
          <Header />
          <Routes>
            <Route path='/inicio' element={<Main/>} />
            <Route path='/tienda' element={<ItemListContainer/>} />
            <Route path='/detalle:id' element={<ItemDetailContainer/>} />
          </Routes>
          <Footer redesSociales="Seguinos en nuestras Redes" />
        
      </>
        
    </div>
  </BrowserRouter>

  )
}

export default App;
