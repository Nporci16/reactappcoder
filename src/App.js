import logo from './logo.svg';
import './App.css';
import Header from './contenido/Header';
import Main from './contenido/Main';
import Footer from './contenido/Footer';

function App() {
  return (
    <div className='fondo_header'>
      <Header />
      <hr />
      <Main />
      <hr/>
      <Footer redesSociales="Seguinos en nuestras Redes" />
    </div>
  );
}

export default App;
