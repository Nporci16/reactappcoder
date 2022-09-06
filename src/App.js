import logo from './logo.svg';
import './App.css';
import Header from './contenido/Header';
import Ranking from './contenido/Ranking';
import Main from './contenido/Main';
import ItemCount from './contenido/ItemCount';
import Footer from './contenido/Footer';
import ItemListContainer from './contenido/ItemListContainer';

function App() {

  const listaRankingFifa = ["1° Brasil","2° Belgica","3° Argentina","4° Francia","5° Inglaterra","6° España","7° Italia","8° Paises Bajos","9° Portugal", "10° Dinamarca"]
  const objetos = {};

  return (
    <div className='fondo_header'>
      <Header />
      <hr />
      <Ranking items={listaRankingFifa}/>
      <hr/>
      <Main />
      <hr />
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <hr/>
      <Footer redesSociales="Seguinos en nuestras Redes" />
    </div>
  );
}

export default App;
