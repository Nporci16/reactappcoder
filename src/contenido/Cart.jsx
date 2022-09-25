import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";

const Cart = () => {
    const { cart, deleteOne, deleteAll, cartTotal } = useContext(CartContext);
    console.log(cart)
    return (
        <div className="container-fluid fondo_azul">
            <section>
                <h2 className="letra_titulo" >Carrito de compras</h2>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h2 className='letra_titulo'>{item.nombre}</h2>
                        <img src={item.imagen} width="150" alt={item.nombre} />
                        <h3 className='letra_titulo'>{item.cantidad}</h3>
                        <h3 className='letra_titulo'>{item.precio}</h3>
                        <button className="btn btn-secondary" onClick={() => deleteOne(item.id)}>
                        Borrar Producto
                        </button>
                    </div>
            ))}
            <div>
            <button className="btn btn-danger" onClick={deleteAll}>Borrar todos los productos</button>
            </div>
            </section>
            {cart.length && (
            <section className='letra_titulo'>
                <header>
                    <h3>Detalle total</h3>
                </header>
                <main>
                {
                    cart.map(item => (
                        <div key={item.id} className='d-flex flex-column mt-2'>
                            <span>{item.nombre}</span>
                            <span className='ml-2'>cantidad: {item.cantidad} precio {item.precio}</span>
                            <span className='ml-2'>subtotal {item.cantidad * item.precio}</span>
                        </div>
                    ))
                }
                    <div>
                        <h1>TOTAL: ${cartTotal()}</h1>
                    </div>
                </main>
            </section>)
        }
    </div>
    );
};
export default Cart;