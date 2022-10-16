import React, { useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(initial);
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	return (
		<div className="container col-md-6">
            <div className="row">
            <div className="input-group">
                <input type="button" className="btn btn-secondary" value="-" disabled={count <= 1} onClick={decrease}/>
                <span className="form-control">{count}</span>
                <input type="button" className="btn btn-danger" value="+" disabled={count >= stock} onClick={increase}/>
            </div>
            </div>
			<div className="d-grid gap-2 py-3">
            <button className="btn btn-primary" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
			</div>
		</div>
	);
};

export default ItemCount;