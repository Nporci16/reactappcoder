import logo from './logo.svg';
import './App.css';
import Header from './contenido/Header';
import Main from './contenido/Main';
import Pie from './contenido/Pie';

function App() {
  return (
    <div className='fondo_header'>
      <Header />
      <hr />
      <Main />
      <hr />
      <Pie />
    </div>
  );
}

export default App;
