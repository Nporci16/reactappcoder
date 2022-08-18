import logo from './logo.svg';
import './App.css';

function App() {
let image = "kqXt7Sq2.png";
let titulo = "Doble Cuarto de Libra con Queso";
let calorias = "771 kcal";
let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.";
const producto = {id:1, image:image, title:titulo, calorias:calorias, descripcion:descripcion}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={producto.image} alt={producto.titulo} className= "img-fluid"/>
        </div>
        <div className="col-md-4">
          <h1>{producto.title}</h1>
          <p>{producto.calorias}</p>
          <p>{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
